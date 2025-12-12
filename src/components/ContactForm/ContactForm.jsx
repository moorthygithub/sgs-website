import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import LazyMap from "./LazyMap";
import { showErrorToast, showSuccessToast } from "../../utils/toast";
import { useApiMutation } from "../../hooks/useApiMutation";

const { TextArea } = Input;

const ContactForm = () => {
  const { trigger: submitTrigger, loading: loader } = useApiMutation();

  const onFinish = async (values) => {
    try {
      const res = await submitTrigger({
        url: "/createContact",
        method: "post",
        data: values,
      });
      if (res.code == 201) {
        showSuccessToast("Request submitted successfully!");
        form.resetFields();
      } else if (res.code == 422) {
        showErrorToast(res.message || "Failed to save registration.");
      }
    } catch (err) {
      console.error(err);
      showErrorToast(err?.response?.data?.message || "Something went wrong!");
    }
  };

  const [form] = Form.useForm();
  const styledata =
    "!rounded-lg !border-orange-300 focus:!border-orange-500 focus:!ring-2 focus:!ring-orange-300";

  return (
    <section className="pb-24 !pt-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          <div className="col-span-6 relative">
            <div className="relative w-full max-w-3xl mx-auto p-6 rounded-xl overflow-hidden bg-gradient-to-br from-orange-400/20 via-orange-300/10 to-orange-500/20 shadow-lg">
              <AnimateOnScroll type="zoom-in" delay={0.1}>
                <div className="max-w-xl mx-auto text-center mb-6">
                  <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Contact{" "}
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Form
                    </span>
                  </h1>
                  <p className="leading-relaxed text-gray-500">
                    We’d love to hear from you! Whether you have a question,
                    suggestion, or want to collaborate, feel free to reach out
                    to us.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll type="fade-right" delay={0.1}>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                  className="flex flex-col gap-4"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Form.Item
                      className="!mb-0"
                      label={
                        <span className="!font-medium !text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </span>
                      }
                      name="userName"
                      rules={[
                        { required: true, message: "User Name is required" },
                      ]}
                    >
                      <Input
                        placeholder="Enter your full name"
                        className={styledata}
                        size="large"
                      />
                    </Form.Item>

                    <Form.Item
                      className="!mb-0"
                      label={
                        <span className="!font-medium !text-gray-700">
                          Mobile <span className="text-red-500">*</span>
                        </span>
                      }
                      name="userMobile"
                      rules={[
                        { required: true, message: "Mobile No is required" },
                        {
                          pattern: /^[0-9]{10}$/,
                          message: "Mobile must be 10 digits",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your mobile number"
                        maxLength={10}
                        className={styledata}
                        size="large"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    className="!mb-0"
                    label={
                      <span className="!font-medium !text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </span>
                    }
                    name="userEmail"
                    rules={[
                      { required: true, message: "Email is required" },
                      { type: "email", message: "Enter a valid email" },
                    ]}
                  >
                    <Input
                      placeholder="Enter your email"
                      className={styledata}
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    className="!mb-0"
                    label={
                      <span className="!font-medium !text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </span>
                    }
                    name="userMessage"
                    rules={[{ required: true, message: "Message is required" }]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Enter your message"
                      className={styledata}
                    />
                  </Form.Item>

                  <Form.Item className="flex justify-center">
                    <Button
                      htmlType="submit"
                      type="primary"
                      size="large"
                      loading={loader}
                      className="h-12 rounded-xl !bg-orange-600 hover:!bg-orange-700 text-white  font-semibold  border-0 hover:shadow-lg transition-all shadow-md"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </AnimateOnScroll>
            </div>
          </div>

          <div className="col-span-6">
            <AnimateOnScroll type="fade-up" delay={0.1}>
              <LazyMap />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

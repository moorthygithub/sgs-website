import { useEffect, useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import InputField from "../common/InputField";
import LazyMap from "./LazyMap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    projectname: "",
    userEmail: "",
    userMobile: "",
    userMessage: "",
  });
  const [errors, setErrors] = useState({});
  const [showThanks, setShowThanks] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.userName.trim()) newErrors.userName = "User Name is required";
    if (!formData.userMobile.trim())
      newErrors.userMobile = "Mobile Name is required";
    if (!formData.userEmail.trim())
      newErrors.userEmail = "User Email is required";

    if (!formData.userMessage.trim())
      newErrors.userMessage = "userMessage is required";
    return newErrors;
  };

  const reset = () => {
    setFormData({
      name: "",
      projectname: "",
      email: "",
      Project: "",
      userMessage: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoader(true);
    try {
      const data = true;
      if (data) {
        setShowThanks(true);
        reset();
        setTimeout(() => setShowThanks(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className=" pb-24 !pt-0">
      <div className="container mx-auto  px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          <div className="col-span-6 md:pt-12 pt-0 relative">
            <AnimateOnScroll type="zoom-in" delay={0.1}>
              <div className="max-w-xl mx-auto text-center my-6">
                <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Contact{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Form
                  </span>
                </h1>
                <p className="leading-relaxed text-gray-500">
                  We’d love to hear from you! Whether you have a question,
                  suggestion, or want to collaborate, feel free to reach out to
                  us.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll type="fade-right" delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="flex flex-wrap  w-full m-auto justify-between"
              >
                <div className="sm:flex gap-3 w-full">
                  <InputField
                    label="Full Name"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    error={errors.userName}
                  />
                  <InputField
                    label="Mobile"
                    name="userEmail"
                    value={formData.userEmail}
                    onChange={handleChange}
                    error={errors.userEmail}
                    maxLength={10}
                  />
                </div>
                <div className="sm:flex gap-3 w-full">
                  <InputField
                    label="Email Address"
                    type="email"
                    name="userMobile"
                    value={formData.userMobile}
                    onChange={handleChange}
                    error={errors.userMobile}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    label="Message"
                    name="userMessage"
                    value={formData.userMessage}
                    onChange={handleChange}
                    type="textarea"
                    error={errors.userMessage}
                  />
                </div>
                <div className="mx-0 my-2.5 w-full flex justify-center">
                  <button
                    type="submit"
                    disabled={loader}
                    className={`leading-none cursor-pointer px-6 text-lg font-medium py-4 rounded-lg transition-all duration-300 border
    ${
      loader
        ? "bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-orange-600 to-red-600 text-white border-transparent shadow-md hover:shadow-lg hover:opacity-95"
    }
  `}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </AnimateOnScroll>
            {showThanks && (
              <div className="text-white bg-green-400 rounded-full px-4 text-lg mb-4.5 mt-2 absolute flex items-center gap-2">
                Request submitted successfully. Thank you.
                <div className="w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
              </div>
            )}
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

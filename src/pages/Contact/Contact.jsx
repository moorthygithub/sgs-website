import PageMeta from "../../components/common/PageMeta";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <div className="mt-30">
      <PageMeta title="Contact | Samyutk Gujarati Samaj" />

      <ContactForm />
    </div>
  );
};

export default Contact;

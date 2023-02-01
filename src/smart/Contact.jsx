import ContactSection from "components/home/ContactSection";
import { contactDetails } from "data/common";

const Contact = () => {
  return <ContactSection contactDetails={contactDetails} />;
};

export default Contact;

import { Element } from "react-scroll";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <Element name="contact" className="relative min-h-screen py-32">
      <h1>Kontakt</h1>
      <ContactForm />
    </Element>
  );
}

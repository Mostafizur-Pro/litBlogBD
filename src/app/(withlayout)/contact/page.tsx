import ContactForm from "./ContactForm";
import ContactIntro from "./ContactIntro";
import ContactLatestPost from "./ContactLatestPost";
import Header from "./header";
import Maps from "./maps";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <Header />
      <section className="md:grid md:grid-cols-3">
        <div className="md:col-span-2">
          <ContactIntro></ContactIntro>
          <ContactForm></ContactForm>
        </div>
        <div className="md:col-span-1 w-full px-4 ">
          <ContactLatestPost></ContactLatestPost>
        </div>
      </section>
    </div>
  );
};

export default Contact;

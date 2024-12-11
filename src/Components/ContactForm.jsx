function ContactForm() {
    return (
      <section className="p-12 bg-gray-200">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border"/>
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border"></textarea>
          <button type="submit" className="w-full bg-blue-600 p-3 text-white">Send Message</button>
        </form>
      </section>
    );
  }
  
  export default ContactForm;
  
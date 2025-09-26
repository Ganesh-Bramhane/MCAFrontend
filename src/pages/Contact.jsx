function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
        Contact Us
      </h1>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-900">📍 Address</h3>
          <p className="text-gray-600 mt-2">
            MCA Department, XYZ College <br /> Pune, Maharashtra
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-900">📧 Email</h3>
          <p className="text-gray-600 mt-2">mca@college.edu</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-900">📞 Phone</h3>
          <p className="text-gray-600 mt-2">+91 98765 43210</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-900">💬 WhatsApp</h3>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium mt-2 block"
          >
            Chat with Us
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Send us a Message
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg shadow hover:bg-blue-800 transition"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;


import { useState } from "react";

export function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (req.ok) {
        console.log("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
        return;
      } else {
        console.error("Failed to send the message");
        return;
      }
    } catch (err) {
      console.log("Unexpected error occurred:", err);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-20 lg:px-40 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
        Get In Touch
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-6">
            Contact me if you think we can do better.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <a
                href="mailto:krishnaasinghbisht@gmail.com"
                className="text-blue-600 hover:underline"
              >
                krishnaasinghbisht@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <a
                href="https://linkedin.com/in/krishnaasinghbisht"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/krishnaasinghbisht
              </a>
            </div> */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <a
                href="https://github.com/git-krishnabisht"
                className="text-blue-600 hover:underline"
              >
                github.com/git-krishnabisht
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full p-2 border-2 border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full p-2 border-2 border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleFormChange}
                className="w-full p-2 border-2 border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
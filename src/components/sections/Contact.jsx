import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // This is just a demo - no backend submission
    alert('Thank you for your message! This is a demo form. In production, this would be submitted to the server.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Connect With Us
            </span>
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out to learn more about our programs, volunteer opportunities, 
            or partnership possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Contact <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Information</span>
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mr-4">📍</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Address</h4>
                  <p className="text-gray-600 leading-relaxed">123 Charity Street<br />City, State 12345<br />Country</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mr-4">📧</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Email</h4>
                  <a href="mailto:info@ngofoundation.org" className="text-pink-600 hover:text-purple-600 transition-colors font-semibold">
                    info@ngofoundation.org
                  </a>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mr-4">📞</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Phone</h4>
                  <a href="tel:+15551234567" className="text-pink-600 hover:text-purple-600 transition-colors font-semibold">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-4">Office Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
              >
                💬 Send Message
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                🔒 Your information is safe with us. Firebase integration ready for form submissions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


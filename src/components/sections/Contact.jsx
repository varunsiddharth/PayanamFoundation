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
            Reach PAYANAM FOUNDATION for partnerships, program support, donations, and volunteer queries.
            We’re ready to walk with you on this eternal journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Contact <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">PAYANAM FOUNDATION</span>
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mr-4">📍</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Office & Admin Addresses</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Office Address:<br />
                    GG1/204a , Vikaspuri , New Delhi , India- 110018
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Admin Address:<br />
                    No: 17A, Sakthi Vellammal Street, Avenue Road, Bypass Rd, Madurai, Tamil Nadu, India – 625016
                  </p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mr-4">📧</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Email</h4>
                  <a href="mailto:Payanamfoundationindia@gmail.com" className="text-pink-600 hover:text-purple-600 transition-colors font-semibold">
                    Payanamfoundationindia@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mr-4">📞</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Phone</h4>
                  <div className="space-y-1">
                    <a href="tel:+919843892572" className="text-pink-600 hover:text-purple-600 transition-colors font-semibold block">
                      9843892572
                    </a>
                    <a href="tel:+917094049148" className="text-pink-600 hover:text-purple-600 transition-colors font-semibold block">
                      7094049148
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-4">Stay Connected</h4>
              <p className="text-gray-600">Instagram: <a href="https://www.instagram.com/payanam_foundation_india?igsh=MXZmejdsMjRjNW03cw==" className="text-pink-600 hover:text-purple-600 transition-colors">payanam_foundation_india</a></p>
              <p className="text-gray-600">YouTube: <a href="https://youtube.com/@payanamfoundation4906?si=fdjzN53zZ2J9hZCx" className="text-pink-600 hover:text-purple-600 transition-colors">@payanamfoundation4906</a></p>
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


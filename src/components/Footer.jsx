const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ❤️ NGO Foundation
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Making a positive impact in communities around the world through education, healthcare, 
              and empowerment. Join us in creating lasting change.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:scale-110 transition-all duration-300 transform"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-pink-400 transition-colors duration-200">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programs')} className="hover:text-pink-400 transition-colors duration-200">
                  Our Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('impact')} className="hover:text-pink-400 transition-colors duration-200">
                  Our Impact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-pink-400 transition-colors duration-200">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-pink-400 transition-colors duration-200">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('donate')} className="hover:text-pink-400 transition-colors duration-200 font-semibold">
                  💝 Donate
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-pink-400">📧</span>
                <a href="mailto:info@ngofoundation.org" className="hover:text-pink-400 transition-colors">
                  info@ngofoundation.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400">📞</span>
                <a href="tel:+15551234567" className="hover:text-pink-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400">📍</span>
                <span>123 Charity Street<br />City, State 12345<br />Country</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} NGO Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


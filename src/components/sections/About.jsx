const About = () => {
  const values = [
    { icon: '🎯', title: 'Impact Driven', desc: 'Measurable results in every program' },
    { icon: '🤝', title: 'Community First', desc: 'Working with, not for communities' },
    { icon: '✨', title: 'Transparency', desc: '100% accountability in all operations' },
    { icon: '💪', title: 'Sustainability', desc: 'Long-term solutions for lasting change' }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Who We Are
            </span>
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            About Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Foundation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a non-profit organization dedicated to transforming lives and communities through sustainable, 
            impactful programs that create lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
              alt="Team working together"
              className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to empower communities through sustainable programs that address 
              education, healthcare, and economic development. We believe in creating lasting 
              change by working directly with local communities and understanding their unique needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our founding, we have reached thousands of individuals across multiple regions, 
              providing them with the tools and resources they need to build better futures for 
              themselves and their families.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">10+</div>
                <div className="text-gray-600 mt-2 font-medium">Years of Service</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">50+</div>
                <div className="text-gray-600 mt-2 font-medium">Active Programs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


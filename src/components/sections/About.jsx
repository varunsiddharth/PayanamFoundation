const About = () => {
  const values = [
    { icon: '🌾', title: 'Sustainable Agriculture', desc: 'Guiding farmers on natural farming, soil revival, and resilient water use.' },
    { icon: '🎓', title: 'Education & Scholarships', desc: 'Opening doors for underprivileged children, youth, and adults through quality learning support.' },
    { icon: '🤝', title: 'Women & Youth Empowerment', desc: 'Building skills, leadership, and livelihoods that place communities in charge of their future.' },
    { icon: '🌍', title: 'Environmental Stewardship', desc: 'Promoting eco-friendly practices, beekeeping, and community-based conservation.' }
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
            About <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">PAYANAM FOUNDATION</span>
          </h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>
              Since 2013, the Payanam Foundation has been on a journey a "PAYANAM" to build a future where every community in Tamil Nadu can thrive.
              Our mission is simple but profound : We walk hand-in-hand with the people we serve, provide quality education to support underprivileged children, youth, and adults with resources and scholarships, opening doors that might otherwise remain closed.
            </p>
          </div>
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
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                We champion women’s and youth empowerment by building skills and leadership from the ground up, helping people become agents of change in their own communities.
                But our work doesn’t stop there. We believe in holistic well-being, so we bring health awareness, traditional Siddha medicine, yoga, and stress management programs right to people’s well-being, and sustainable livelihoods.
              </p>
              <p>
                We’re also passionate about the environment, guiding communities on eco-friendly farming, soil improvement, beekeeping, and sustainable water use and ensuring that families can stand on their own feet.
                And because we know that true empowerment means economic stability, we help families create sustainable livelihoods through vocational training and small-scale industries, especially in agriculture; we’re not just offering help we’re walking together on this eternal journey toward a brighter, more sustainable future.
              </p>
              <p>
                In everything we do, from education to agriculture, we want everyone who reads about us to feel the heart behind our work.
                So let's walk together on this "PAYANAM"—the journey to a sustainable future is one we all share, for generations to come.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 space-y-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-2">Mission & Vision Statement</h4>
                <p className="text-gray-600">
                  To build a just and peaceful society where every individual thrives in a sustainable environment, with equitable access to education, healthcare, and socio-economic opportunities,
                  fostering a poverty-free lifestyle supported by essential personal qualities and collective infrastructure for lasting social justice.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-2">Areas We Work In</h4>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
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
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Areas We Champion</h3>
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

        <div className="mt-24 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-8">Founder’s Message</h3>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              At Payanam Foundation, our journey began with a simple observation: the deepest challenges of our society today are rooted in the quiet shifts that have unfolded over the past several decades.
              Tamil Nadu and India as a whole once flourished through strong traditional family systems. These values, relationships, and shared practices sustained not only families but entire communities for generations.
            </p>
            <p>
              But over time, especially in the post-independence era, this foundation began to weaken. The wisdom once passed naturally from parents to children, the sense of belonging within families, and the value-based upbringing that shaped our society have gradually faded.
              This decline has echoed across every aspect of life—fueling poverty, widening social injustice, weakening education, and contributing to political and economic imbalance.
            </p>
            <p>
              At Payanam Foundation, we believe that the way forward is by reconnecting with these timeless roots—reviving the strength of the family system while adapting it to today’s realities.
              Families that nurture emotional resilience, responsibility, and values can rebuild the very fabric of society from the ground up.
            </p>
            <p>
              Agriculture forms another core pillar of our mission. For centuries, Tamil Nadu’s identity has been deeply intertwined with its lands. Farming was not just an occupation; it was culture, celebration, and community.
              Today, this sacred bond has weakened—corporatized in some places and abandoned in others—leaving farmers struggling and communities disconnected.
            </p>
            <p>
              We aim to restore this lost relationship between people and the land through sustainable agricultural practices, traditional knowledge, and community-driven initiatives.
              When agriculture thrives, families thrive and societies thrive. We also recognize the rapidly changing economic landscape. Digital money and shifting financial systems have transformed how people understand wealth, often widening the gap between generations and between the rich and the poor.
              This disconnect has further contributed to social and emotional instability.
            </p>
            <p>
              Through our work, Payanam Foundation addresses these interconnected challenges—poverty, education, social justice, women’s empowerment, livelihood creation, and cultural preservation.
              We are committed not only to solving today’s problems but to preparing for those of tomorrow.
              Our mission is rooted in a simple belief: true progress happens when we walk together. Let us walk together on this eternal journey—Payanam—toward a sustainable, just, and compassionate future for generations to come.
            </p>
            <span className="font-semibold text-gray-900 block">— Founder, Payanam Foundation</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


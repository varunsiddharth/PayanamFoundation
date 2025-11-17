const Programs = () => {
  const programs = [
    {
      title: "Education for All",
      description: "Providing quality education and learning resources to underprivileged children, ensuring they have access to opportunities for a brighter future.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      icon: "📚",
      color: "from-pink-500 to-rose-500",
      stats: "15,000+ Students"
    },
    {
      title: "Healthcare Access",
      description: "Improving healthcare accessibility in remote areas through mobile clinics, health camps, and awareness programs.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      icon: "🏥",
      color: "from-blue-500 to-cyan-500",
      stats: "25,000+ Patients"
    },
    {
      title: "Women Empowerment",
      description: "Supporting women through skill development, microfinance, and leadership programs to help them achieve economic independence.",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&h=400&fit=crop",
     
      color: "from-purple-500 to-pink-500",
      stats: "10,000+ Women"
    },
    {
      title: "Environmental Conservation",
      description: "Protecting our planet through tree planting initiatives, waste management programs, and environmental education campaigns.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
      stats: "50,000+ Trees"
    },
    {
      title: "Child Welfare",
      description: "Ensuring every child has access to nutrition, shelter, and protection through comprehensive child welfare programs.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      icon: "👶",
      color: "from-yellow-500 to-orange-500",
      stats: "8,000+ Children"
    },
    {
      title: "Disaster Relief",
      description: "Providing immediate aid and long-term recovery support to communities affected by natural disasters and emergencies.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
      icon: "🆘",
      color: "from-red-500 to-pink-500",
      stats: "100+ Communities"
    }
  ]

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-gray-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              What We Do
            </span>
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We run various programs focused on education, healthcare, community development, and more. 
            Each program is designed to create lasting, positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                <div className="absolute top-4 right-4 text-5xl bg-white rounded-full p-3 shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  {program.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-sm font-bold text-gray-900">{program.stats}</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
                <button className="mt-6 text-pink-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs


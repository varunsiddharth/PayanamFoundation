const Programs = () => {
  const programs = [
    {
      title: "Sustainable Agriculture Awareness",
      description: "Werun programs to promote natural farming techniques free of chemical pesticides and fertilizers. By focusing on eco-friendly methods, we help underprivileged farmers improve their livelihoods and create more sustainable communities in Tamil Nadu.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      icon: "🌾",
      color: "from-green-500 to-emerald-500",
      stats: "Eco-friendly farming"
    },
    {
      title: "Microcredit for Farmer Groups",
      description: "Wefacilitate microcredit interventions for Farmer Producer Groups (FPGs) and Farmer Producer Organizations (FPOs). Through partnerships with banks, we provide small loans and financial support that empower local farmers to grow their businesses and improve their economic stability.",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop",
      icon: "🏦",
      color: "from-purple-500 to-pink-500",
      stats: "Community finance"
    },
    {
      title: "Community Health and Medical Camps",
      description: "Weorganize regular medical camps for roadside and underserved communities in Tamil Nadu, offering free health check-ups and essential care. During pandemics or crises, we also provide food and basic necessities to those in need.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
      icon: "🏥",
      color: "from-blue-500 to-cyan-500",
      stats: "Health outreach"
    },
    {
      title: "Women and Youth Empowerment Initiatives",
      description: "Weconduct empowerment programs specifically for women and youth, including skill development workshops, MSMEawareness sessions, and recreational activities that build confidence and leadership. Our goal is to foster self-reliance and new opportunities for the next generation.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&h=400&fit=crop",
      icon: "💪",
      color: "from-pink-500 to-rose-500",
      stats: "Confidence building"
    },
    {
      title: "Credit Access for Local Entrepreneurs",
      description: "In collaboration with local and national banks, we help small entrepreneurs and MSMEs access credit and financial support. This initiative is designed to boost local businesses and create sustainable livelihoods in rural areas.",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop",
      icon: "💼",
      color: "from-yellow-500 to-orange-500",
      stats: "Entrepreneur support"
    },
    {
      title: "Skill-Building for Sustainable Livelihoods",
      description: "In addition to agriculture training, we run skill-building programs tailored to local needs—teaching everything from small-scale crafts to entrepreneurship. These initiatives help individuals, especially women and youth, create additional income sources and build confidence.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop",
      icon: "🛠️",
      color: "from-teal-500 to-cyan-500",
      stats: "Livelihood skills"
    },
    {
      title: "Leadership and Mentorship for Youth",
      description: "Webelieve in nurturing the next generation of leaders. Our mentorship programs connect experienced community members with young people, offering guidance, career advice, and a sense of direction that empowers youth to make positive changes in their communities.",
      image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=600&h=400&fit=crop",
      icon: "🌟",
      color: "from-indigo-500 to-blue-500",
      stats: "Mentorship circles"
    },
    {
      title: "Women’s Self-Help Groups (SHGs)",
      description: "Weactively support the formation of women’s self-help groups, where women can learn financial literacy, share skills, and support each other’s small enterprises. These groups are a cornerstone of our women empowerment efforts.",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&h=400&fit=crop",
      icon: "👭",
      color: "from-red-500 to-pink-500",
      stats: "Collective strength"
    },
    {
      title: "Community-Based Environmental Education",
      description: "Alongside agriculture, we emphasize the importance of environmental stewardship. We teach farmers and youth about eco-friendly practices like rainwater harvesting and soil conservation, helping them become guardians of their own environment.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      icon: "🌱",
      color: "from-lime-500 to-green-500",
      stats: "Environmental guardians"
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
            From natural farming and microcredit to youth mentorship and environmental stewardship, these initiatives carry the full vision of PAYANAM FOUNDATION across Tamil Nadu communities.
            Each card below features the exact program descriptions shared by our team.
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


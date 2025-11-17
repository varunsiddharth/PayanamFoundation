import { useState, useEffect, useRef } from 'react'

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const stats = [
    { number: 50000, label: "Lives Impacted", icon: "👥", suffix: "+", color: "from-pink-500 to-rose-500" },
    { number: 500, label: "Communities Served", icon: "🏘️", suffix: "+", color: "from-purple-500 to-pink-500" },
    { number: 10000, label: "Children Educated", icon: "📖", suffix: "+", color: "from-blue-500 to-cyan-500" },
    { number: 25000, label: "Healthcare Beneficiaries", icon: "❤️", suffix: "+", color: "from-green-500 to-emerald-500" }
  ]

  const AnimatedCounter = ({ end, suffix = "", delay = 0 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const timer = setTimeout(() => {
        const duration = 2000
        const increment = end / (duration / 16)
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= end) {
            setCount(end)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, 16)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }, [isVisible, end, delay])

    return <>{count.toLocaleString()}{suffix}</>
  }

  return (
    <section ref={sectionRef} id="impact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Achievements
            </span>
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to making a real difference in people's lives. 
            Every statistic represents a life changed, a community empowered, and hope restored.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative">
                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                  {isVisible ? (
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} delay={index * 200} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-gray-600 font-semibold text-sm md:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative group mt-16">
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop"
              alt="Community impact"
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">Real Stories, Real Impact</h3>
                <p className="text-lg opacity-90">See how our programs are transforming communities and changing lives every day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact


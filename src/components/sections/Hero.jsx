import { useState, useEffect } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{
            left: mousePosition.x > 0 ? `${(mousePosition.x / window.innerWidth) * 100}%` : '50%',
            top: mousePosition.y > 0 ? `${(mousePosition.y / window.innerHeight) * 100}%` : '50%',
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div className="absolute w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                PAYANAM FOUNDATION • An Eternal Journey…
              </span>
            </div>
            
            {/* UPDATED HEADLINE ONLY */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 max-w-3xl">
              “Let us walk together on this eternal journey — 
              <span className="block font-black">'PAYANAM'</span> —
              <span className="block">toward a sustainable future for generations to come.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Since 2013, we have stood beside communities across Tamil Nadu, nurturing traditional knowledge,
              creating meaningful livelihoods, and ensuring that every child, youth, farmer, and family can thrive with dignity.
              Join us as we protect the environment, revive local economies, and carry forward the hope of a just, compassionate future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('donate')}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  💝 Donate
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('volunteer')}
                className="px-8 py-4 bg-white text-pink-600 rounded-full font-bold text-lg border-2 border-pink-600 hover:bg-pink-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Volunteer
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg border-2 border-gray-200 hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            {/* Stats preview */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="text-3xl">👥</div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50,000+</div>
                  <div className="text-sm text-gray-600">People Impacted</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">🏡</div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">220+</div>
                  <div className="text-sm text-gray-600">Villages Reached</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">⏳</div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">12+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-25 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop"
                alt="Community helping hands"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

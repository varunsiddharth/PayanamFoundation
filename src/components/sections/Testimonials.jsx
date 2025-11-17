import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Scholarship Recipient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      quote: "Thanks to the foundation's scholarship program, I'm now the first in my family to attend university. This opportunity changed my entire future.",
      rating: 5,
      program: "Education for All"
    },
    {
      name: "Maria Rodriguez",
      role: "Microfinance Beneficiary",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The microfinance program helped me start my own business. I now employ 5 other women in my community and we're all financially independent.",
      rating: 5,
      program: "Women Empowerment"
    },
    {
      name: "David Chen",
      role: "Healthcare Volunteer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Volunteering with the healthcare program has been life-changing. Seeing the direct impact on communities motivates me every day.",
      rating: 5,
      program: "Healthcare Access"
    },
    {
      name: "Amina Hassan",
      role: "Community Leader",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      quote: "Our village received clean water and sanitation facilities. The health of our children has improved dramatically. We're forever grateful.",
      rating: 5,
      program: "Community Development"
    },
    {
      name: "James Thompson",
      role: "Regular Donor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "I've been donating monthly for 3 years. The transparency reports show exactly where my money goes, and the impact is incredible.",
      rating: 5,
      program: "All Programs"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              What People Say
            </span>
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the people whose lives have been transformed through our programs.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-2xl opacity-25 animate-pulse"></div>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-pink-200 shadow-lg"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="border-l-4 border-pink-600 pl-4">
                  <div className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 mb-2">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-sm text-pink-600 font-semibold">
                    {testimonials[currentIndex].program}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-4 shadow-lg hover:bg-pink-50 hover:scale-110 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-4 shadow-lg hover:bg-pink-50 hover:scale-110 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-pink-600 to-purple-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid (Desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-pink-200"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 line-clamp-3">"{testimonial.quote}"</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


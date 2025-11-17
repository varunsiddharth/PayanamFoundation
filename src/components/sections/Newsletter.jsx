import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      alert('Please enter your email address')
      return
    }
    // This is a demo - Firebase integration ready
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
      alert('Thank you for subscribing! This is a demo. Firebase ready for email collection.')
    }, 3000)
  }

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl top-0 left-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl bottom-0 right-0 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-6">🤝</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Volunteer With <span className="text-yellow-300">PAYANAM FOUNDATION</span>
        </h2>
        <div className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto space-y-4">
          <p>
            Want to make a real difference? At Payanam Foundation, our volunteers are the heart of our mission.
            Whether you're passionate about sustainable farming, empowering women and youth, or bringing education to rural communities, there’s a place for you here.
          </p>
          <div className="text-left text-base md:text-lg space-y-2 bg-white/10 rounded-2xl p-6 border border-white/20">
            <p className="font-semibold text-white">How You Can Help:</p>
            <p className="text-white/90">Agricultural Volunteers: Assist local farmers with eco-friendly practices and sustainable agriculture projects.</p>
            <p className="text-white/90">Education & Mentorship: Help teach or mentor students and youth, or support our educational workshops.</p>
            <p className="text-white/90">Women’s Empowerment Facilitators: Engage with women's self-help groups and skill-building sessions to foster empowerment.</p>
            <p className="text-white/90">Community Outreach: Join our health camps, awareness drives, or help with organizing events.</p>
          </div>
          <p>
            Ready to join us? Just fill out a simple form on our website and become part of the Payanam family. Together, we can make a lasting impact!
          </p>
        </div>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Share your email address"
              className="flex-1 px-6 py-4 rounded-2xl text-lg font-semibold focus:ring-4 focus:ring-white/50 outline-none transition-all transform hover:scale-105"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-pink-600 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform whitespace-nowrap"
            >
              Submit Volunteer Interest
            </button>
          </form>
        ) : (
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto animate-scale-in">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">We’ll reach out with the next volunteer opportunity.</p>
          </div>
        )}

        <p className="mt-12 text-white/90 text-base md:text-lg">
          To join us, please contact us or submit the volunteer form.
        </p>
      </div>
    </section>
  )
}

export default Newsletter


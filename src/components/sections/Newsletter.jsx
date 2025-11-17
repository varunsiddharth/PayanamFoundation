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
    <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl top-0 left-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl bottom-0 right-0 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-6">📧</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Stay <span className="text-yellow-300">Connected</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about our programs, 
          success stories, and ways to get involved.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-2xl text-lg font-semibold focus:ring-4 focus:ring-white/50 outline-none transition-all transform hover:scale-105"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-pink-600 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto animate-scale-in">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">You've successfully subscribed to our newsletter.</p>
          </div>
        )}

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎁</span>
            <span className="text-sm font-semibold">Monthly Updates</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔒</span>
            <span className="text-sm font-semibold">Privacy Protected</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚫</span>
            <span className="text-sm font-semibold">Unsubscribe Anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter


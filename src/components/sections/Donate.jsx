import { useState } from 'react'

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')

  const amounts = [25, 50, 100, 250, 500, 1000]
  const donationTypes = [
    { id: 'one-time', label: 'One-Time', icon: '💝', desc: 'Make a single donation' },
    { id: 'monthly', label: 'Monthly', icon: '🔄', desc: 'Give monthly automatically' },
    { id: 'annual', label: 'Annual', icon: '📅', desc: 'Make a yearly contribution' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const amount = selectedAmount || customAmount
    if (!amount) {
      alert('Please select or enter an amount')
      return
    }
    alert(`Thank you! This is a demo. In production, you would donate $${amount} as a ${donationType} donation. Firebase integration ready for this!`)
  }

  return (
    <section id="donate" className="py-24 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl top-0 left-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl bottom-0 right-0 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 text-white">
          <div className="text-6xl mb-6">❤️</div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Make a <span className="text-yellow-300">Difference</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your contribution helps us continue our mission to transform lives and communities. 
            Every dollar makes an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {donationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setDonationType(type.id)}
              className={`p-6 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 ${
                donationType === type.id
                  ? 'bg-white text-gray-900 shadow-2xl scale-105'
                  : 'bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-3">{type.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{type.label}</h3>
              <p className="text-sm opacity-80">{type.desc}</p>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-2xl font-bold text-gray-900 mb-6">
                Choose Your Amount
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount('')
                    }}
                    className={`px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      selectedAmount === amount
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl font-bold">$</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="w-full pl-10 pr-4 py-4 border-2 border-gray-300 rounded-2xl text-xl font-semibold focus:border-pink-600 focus:ring-4 focus:ring-pink-100 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-600 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-600 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Payment Method</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="p-4 border-2 border-gray-300 rounded-xl hover:border-pink-600 hover:bg-pink-50 transition-all text-left"
                >
                  <div className="font-bold mb-1">💳 Credit Card</div>
                  <div className="text-sm text-gray-600">Visa, Mastercard, Amex</div>
                </button>
                <button
                  type="button"
                  className="p-4 border-2 border-gray-300 rounded-xl hover:border-pink-600 hover:bg-pink-50 transition-all text-left"
                >
                  <div className="font-bold mb-1">📱 Mobile Payment</div>
                  <div className="text-sm text-gray-600">PayPal, Stripe</div>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-semibold">Donation Amount:</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  ${selectedAmount || customAmount || '0'}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Processing Fee:</span>
                <span>$0.00</span>
              </div>
              <div className="border-t border-gray-300 mt-4 pt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">Total:</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  ${selectedAmount || customAmount || '0'}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
            >
              💝 Donate Now
            </button>

            <p className="text-center text-sm text-gray-600">
              🔒 Secure payment processing. Your donation is tax-deductible. 
              <br />
              Firebase integration ready for payment processing.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Donate


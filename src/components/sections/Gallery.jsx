import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const stories = [
    {
      id: 1,
      title: "Education Success Story",
      description: "15-year-old Maria from a remote village received a scholarship and is now pursuing engineering at university.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
      category: "Education",
      impact: "1,500+ Scholarships"
    },
    {
      id: 2,
      title: "Healthcare Transformation",
      description: "Mobile health clinics reach 500 remote communities, providing essential healthcare services.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
      category: "Healthcare",
      impact: "25,000+ Patients"
    },
    {
      id: 3,
      title: "Women Empowerment",
      description: "Local women started their own businesses through our microfinance program, creating jobs in their communities.",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&h=400&fit=crop",
      category: "Empowerment",
      impact: "500+ Businesses"
    },
    {
      id: 4,
      title: "Environmental Impact",
      description: "Community-led tree planting initiative has resulted in 50,000 new trees across 20 regions.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      category: "Environment",
      impact: "50,000+ Trees"
    },
    {
      id: 5,
      title: "Child Welfare Success",
      description: "After-school programs provide safe spaces and educational support for 8,000+ children.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      category: "Child Welfare",
      impact: "8,000+ Children"
    },
    {
      id: 6,
      title: "Disaster Relief",
      description: "Quick response team provided immediate aid to 100+ communities affected by natural disasters.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
      category: "Relief",
      impact: "100+ Communities"
    }
  ]

  const categories = ['All', 'Education', 'Healthcare', 'Empowerment', 'Environment', 'Child Welfare', 'Relief']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredStories = activeCategory === 'All' 
    ? stories 
    : stories.filter(story => story.category === activeCategory)

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people whose lives have been transformed through our programs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
              onClick={() => setSelectedImage(story)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-pink-600 rounded-full text-xs font-bold mb-2">
                      {story.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                    <p className="text-sm text-white/90 line-clamp-2">{story.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{story.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-pink-600">{story.impact}</span>
                  <button className="text-pink-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="p-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
                <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {selectedImage.category}
                </span>
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedImage.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{selectedImage.description}</p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Impact: {selectedImage.impact}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery


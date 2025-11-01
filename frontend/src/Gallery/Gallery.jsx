import React, { useState } from 'react'
import { ArrowLeft, Calendar, MapPin, Users, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Gallery() {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const galleryItems = [
    {
      id: 1,
      title: "Tech Conference 2024",
      category: "Conferences",
      date: "March 15, 2024",
      location: "Convention Center",
      attendees: 500,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      description: "Annual technology conference featuring industry leaders and innovative solutions."
    },
    {
      id: 2,
      title: "React Workshop",
      category: "Workshops",
      date: "February 28, 2024",
      location: "Tech Hub",
      attendees: 25,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description: "Hands-on React development workshop for intermediate developers."
    },
    {
      id: 3,
      title: "Startup Networking Event",
      category: "Networking",
      date: "April 10, 2024",
      location: "Business Center",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      description: "Networking event connecting startups with investors and mentors."
    },
    {
      id: 4,
      title: "Design Thinking Seminar",
      category: "Seminars",
      date: "January 20, 2024",
      location: "Creative Studio",
      attendees: 75,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      description: "Interactive seminar on design thinking methodologies and practices."
    },
    {
      id: 5,
      title: "AI & Machine Learning Summit",
      category: "Conferences",
      date: "May 5, 2024",
      location: "Tech Campus",
      attendees: 300,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      description: "Summit exploring the latest trends in artificial intelligence and machine learning."
    },
    {
      id: 6,
      title: "Digital Marketing Workshop",
      category: "Workshops",
      date: "March 8, 2024",
      location: "Marketing Hub",
      attendees: 40,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Comprehensive workshop on modern digital marketing strategies."
    },
    {
      id: 7,
      title: "Innovation Awards Ceremony",
      category: "Awards",
      date: "December 15, 2023",
      location: "Grand Hall",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      description: "Annual ceremony recognizing outstanding innovation in technology."
    },
    {
      id: 8,
      title: "Women in Tech Panel",
      category: "Panels",
      date: "March 25, 2024",
      location: "Conference Room",
      attendees: 80,
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
      description: "Panel discussion featuring successful women leaders in technology."
    },
    {
      id: 9,
      title: "Blockchain Meetup",
      category: "Meetups",
      date: "April 18, 2024",
      location: "Tech Lounge",
      attendees: 60,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      description: "Monthly meetup discussing blockchain technology and cryptocurrency trends."
    }
  ]

  const categories = ['All', 'Conferences', 'Workshops', 'Networking', 'Seminars', 'Awards', 'Panels', 'Meetups']

  const getCategoryColor = (category) => {
    switch (category) {
      case "Conferences": return "text-blue-600 border-blue-600 bg-blue-50"
      case "Workshops": return "text-green-600 border-green-600 bg-green-50"
      case "Networking": return "text-purple-600 border-purple-600 bg-purple-50"
      case "Seminars": return "text-orange-600 border-orange-600 bg-orange-50"
      case "Awards": return "text-red-600 border-red-600 bg-red-50"
      case "Panels": return "text-pink-600 border-pink-600 bg-pink-50"
      case "Meetups": return "text-indigo-600 border-indigo-600 bg-indigo-50"
      default: return "text-gray-600 border-gray-600 bg-gray-50"
    }
  }

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const handleBack = () => {
    navigate(-1)
  }

  const openModal = (item) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    }
    
    setSelectedImage(filteredItems[newIndex])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 text-white font-medium"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          
          <h1 className="text-5xl font-bold text-center mb-4">Event Gallery</h1>
          <p className="text-xl text-center text-blue-100">
            Explore memorable moments from our past events and celebrations
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(item)}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border mb-3 ${getCategoryColor(item.category)}`}>
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{item.attendees} attendees</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="h-96 lg:h-auto">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border mb-4 ${getCategoryColor(selectedImage.category)}`}>
                  {selectedImage.category}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedImage.title}
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>{selectedImage.attendees} attendees</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default Gallery
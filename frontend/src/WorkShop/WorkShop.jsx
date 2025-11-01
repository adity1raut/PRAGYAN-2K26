import React from 'react'
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

function WorkShop() {
  const navigate = useNavigate()

  const workshops = [
    {
      id: 1,
      title: "Advanced React Development",
      category: "Development",
      instructor: "Sarah Johnson",
      rating: 4.9,
      duration: "3 hours",
      date: "December 15, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Tech Hub, Room 201",
      participants: 25,
      price: "$99",
      description: "Master advanced React concepts including hooks, context API, performance optimization, and modern development patterns.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      skills: ["React Hooks", "Context API", "Performance Optimization", "Testing"]
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      instructor: "Michael Chen",
      rating: 4.8,
      duration: "4 hours",
      date: "December 18, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Design Studio, Floor 3",
      participants: 20,
      price: "$129",
      description: "Learn the core principles of user interface and user experience design, including wireframing, prototyping, and user research.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      skills: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      category: "Marketing",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      duration: "2.5 hours",
      date: "December 20, 2025",
      time: "9:00 AM - 11:30 AM",
      location: "Conference Room A",
      participants: 30,
      price: "$79",
      description: "Comprehensive guide to digital marketing including SEO, social media marketing, content strategy, and analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      skills: ["SEO", "Social Media", "Content Strategy", "Analytics"]
    },
    {
      id: 4,
      title: "Data Science with Python",
      category: "Data Science",
      instructor: "David Kim",
      rating: 4.9,
      duration: "5 hours",
      date: "December 22, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Lab 105",
      participants: 15,
      price: "$149",
      description: "Hands-on workshop covering data analysis, visualization, and machine learning basics using Python and popular libraries.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      skills: ["Python", "Pandas", "Data Visualization", "Machine Learning"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      category: "Development",
      instructor: "Lisa Park",
      rating: 4.6,
      duration: "6 hours",
      date: "December 25, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Mobile Dev Lab",
      participants: 18,
      price: "$179",
      description: "Build your first mobile app using React Native. Learn navigation, state management, and app deployment.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      skills: ["React Native", "Mobile UI", "State Management", "App Store"]
    },
    {
      id: 6,
      title: "Entrepreneurship Essentials",
      category: "Business",
      instructor: "James Wilson",
      rating: 4.8,
      duration: "3.5 hours",
      date: "December 28, 2025",
      time: "1:00 PM - 4:30 PM",
      location: "Business Center",
      participants: 40,
      price: "$89",
      description: "Learn the fundamentals of starting and running a successful business, from idea validation to funding strategies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      skills: ["Business Planning", "Funding", "Market Research", "Networking"]
    }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case "Development": return "text-blue-600 border-blue-600 bg-blue-50"
      case "Design": return "text-purple-600 border-purple-600 bg-purple-50"
      case "Marketing": return "text-green-600 border-green-600 bg-green-50"
      case "Data Science": return "text-orange-600 border-orange-600 bg-orange-50"
      case "Business": return "text-red-600 border-red-600 bg-red-50"
      default: return "text-gray-600 border-gray-600 bg-gray-50"
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleRegister = (workshopId) => {
    // Handle workshop registration
    console.log('Registering for workshop:', workshopId)
    alert('Registration successful! You will receive a confirmation email shortly.')
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
          
          <h1 className="text-5xl font-bold text-center mb-4">Workshops</h1>
          <p className="text-xl text-center text-blue-100">
            Enhance your skills with our expert-led workshops and hands-on learning experiences
          </p>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Workshop Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-gray-900">
                  {workshop.price}
                </div>
              </div>

              {/* Workshop Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border mb-3 ${getCategoryColor(workshop.category)}`}>
                  {workshop.category}
                </div>

                {/* Workshop Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {workshop.title}
                </h3>

                {/* Instructor & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-600 font-medium">
                    by {workshop.instructor}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-600 text-sm">{workshop.rating}</span>
                  </div>
                </div>

                {/* Workshop Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{workshop.time} ({workshop.duration})</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{workshop.participants} participants</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {workshop.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">What you'll learn:</p>
                  <div className="flex flex-wrap gap-1">
                    {workshop.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Register Button */}
                <button
                  onClick={() => handleRegister(workshop.id)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
                >
                  Register Now
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default WorkShop

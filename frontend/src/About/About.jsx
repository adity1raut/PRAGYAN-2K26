import React from 'react'
import { ArrowLeft, Users, Target, Award, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

function About() {
  const navigate = useNavigate()

  const stats = [
    {
      id: 1,
      number: "500+",
      label: "Events Organized",
      icon: <Award className="w-8 h-8 text-blue-600" />
    },
    {
      id: 2,
      number: "10K+",
      label: "Happy Participants",
      icon: <Users className="w-8 h-8 text-green-600" />
    },
    {
      id: 3,
      number: "50+",
      label: "Partner Organizations",
      icon: <Heart className="w-8 h-8 text-red-600" />
    },
    {
      id: 4,
      number: "5+",
      label: "Years of Excellence",
      icon: <Target className="w-8 h-8 text-purple-600" />
    }
  ]
  const handleBack = () => {
    navigate(-1)
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
          
          <h1 className="text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-center text-blue-100">
            Discover our story, mission, and the passionate team behind our success
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to creating exceptional experiences that bring people together, 
            foster meaningful connections, and inspire positive change in our community. 
            Through innovative events and thoughtful engagement, we strive to make every 
            moment memorable and impactful.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Vision</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We envision a world where every event serves as a catalyst for connection, 
                learning, and growth. Our goal is to become the leading platform that 
                transforms ordinary gatherings into extraordinary experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through cutting-edge technology, creative innovation, and unwavering 
                commitment to excellence, we aim to set new standards in event management 
                and community engagement.
              </p>
            </div>
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">
                We put our heart into everything we do, ensuring every event is crafted with care and enthusiasm.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                Building strong connections and fostering inclusive environments where everyone feels welcome.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Continuously striving for the highest standards in service delivery and event execution.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default About
import React from 'react'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Sponsors() {
  const navigate = useNavigate()

  const sponsors = [
    {
      id: 1,
      name: "TechCorp Industries",
      tier: "Platinum Sponsor",
      description: "Leading technology solutions provider specializing in innovative software development and digital transformation services.",
      website: "https://techcorp.com",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Global Finance Group",
      tier: "Gold Sponsor",
      description: "Premier financial services company offering comprehensive banking, investment, and wealth management solutions worldwide.",
      website: "https://globalfinance.com",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Green Energy Solutions",
      tier: "Gold Sponsor",
      description: "Pioneering renewable energy company committed to sustainable power solutions and environmental conservation initiatives.",
      website: "https://greenenergy.com",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "MediCare Plus",
      tier: "Silver Sponsor",
      description: "Trusted healthcare provider delivering quality medical services and advanced patient care across multiple specialties.",
      website: "https://medicareplus.com",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Education First",
      tier: "Silver Sponsor",
      description: "Educational technology platform revolutionizing learning experiences through innovative digital tools and resources.",
      website: "https://educationfirst.com",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "AutoDrive Motors",
      tier: "Bronze Sponsor",
      description: "Automotive excellence with cutting-edge vehicle manufacturing and next-generation mobility solutions.",
      website: "https://autodrive.com",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop"
    }
  ]

  const getTierColor = (tier) => {
    if (tier.includes("Platinum")) return "text-cyan-600 border-cyan-600"
    if (tier.includes("Gold")) return "text-yellow-600 border-yellow-600"
    if (tier.includes("Silver")) return "text-gray-500 border-gray-500"
    return "text-orange-600 border-orange-600"
  }

  const handleBack = () => {
    navigate(-1) // Navigate to previous page
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
          
          <h1 className="text-5xl font-bold text-center mb-4">Our Sponsors</h1>
          <p className="text-xl text-center text-blue-100">
            Thank you to our amazing partners who make everything possible
          </p>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Sponsor Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Sponsor Content */}
              <div className="p-6">
                {/* Tier Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border-2 mb-3 ${getTierColor(sponsor.tier)}`}>
                  {sponsor.tier}
                </div>

                {/* Sponsor Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {sponsor.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {sponsor.description}
                </p>

                {/* Website Button */}
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Visit Website
                  <ExternalLink size={18} />
                </a>
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

export default Sponsors
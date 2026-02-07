import React, { useState } from "react";
import { ArrowLeft, ChevronDown, HelpCircle, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function FAQ() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What are the accommodation arrangements?",
      answer:
        "For boys accommodation facilities are available at the Gurdwara for free. For girls accommodation facilities are available at SGGS girls hostel.",
    },
    {
      question: "What is the exact location of the event?",
      answer:
        "The event will be held at SGGSIE&T Vishnupuri, Nanded, Maharashtra. The campus is easily accessible from the Nanded railway station and bus stand.",
    },
    {
      question: "Is registration fee refundable?",
      answer:
        "No, the registration fee is non-refundable. However, it can be transferred to another participant from the same institution with prior approval.",
    },
    {
      question: "Is there any on the spot registration available?",
      answer:
        "Yes, on-the-spot registration is available for select events, subject to availability. However, pre-registration is highly recommended to ensure your participation.",
    },
    {
      question: "What is arrangement of food?",
      answer:
        "Food arrangements will be available on campus throughout the event. Multiple food stalls and canteens will be operational serving breakfast, lunch, dinner, and snacks at reasonable prices.",
    },
    {
      question: "How can I register for events?",
      answer:
        "You can register for events through our official website. Visit the Events page, select your desired event, and complete the registration form. You will receive a confirmation email with further details.",
    },
    {
      question: "What are the event dates?",
      answer:
        "PRAGYAA 2K26 will be held from February 27-28 and March 1, 2026. Different events will be scheduled across these three days. Check the Schedule page for detailed timings.",
    },
    {
      question: "Are there any prizes for winners?",
      answer:
        "Yes! We have exciting prizes and certificates for winners and runners-up in all events. Prize details vary by event category and are mentioned in the individual event descriptions.",
    },
    {
      question: "Can students from other colleges participate?",
      answer:
        "Absolutely! PRAGYAA is a national-level technical fest open to students from all colleges and universities across India. We encourage participation from diverse institutions.",
    },
    {
      question: "What documents do I need to bring?",
      answer:
        "Participants must bring a valid college ID card and a government-issued photo ID (Aadhar card, PAN card, or Passport). If you registered online, please carry a printed or digital copy of your registration confirmation.",
    },
  ];

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-20">
          <button
            onClick={handleBack}
            className="group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-2 border-red-500/30 rounded-xl sm:rounded-2xl hover:border-red-500/50 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 group-hover:text-red-300 transition-colors duration-200 group-hover:-translate-x-1" />
            <span className="text-red-400 group-hover:text-red-300 font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-200">
              Home
            </span>
          </button>
        </div>

        {/* Header Section */}
        <section className="pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
     
            {/* Main Image */}
            <div className="my-3 sm:my-4 md:my-5">
              <img
                src="/Pragyaa_main_image.png"
                alt="PRAGYAA 2026"
                className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* FAQ Title Section */}
        <section className="py-6 sm:py-8 md:py-10 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center gap-3 mb-4 sm:mb-6">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-400" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase animate-gradient">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Find answers to the most commonly asked questions about PRAGYAA 2K26
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-red-500/20 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:border-red-500/40"
                >
                  {/* Glow effect on hover - reduced opacity */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-red-600/30 to-red-700/30 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 -z-10"></div>

                  {/* Question */}
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between gap-4 transition-all duration-200"
                  >
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white group-hover:text-red-300 transition-colors duration-200 pr-2">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-red-400 transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-0">
                      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-4"></div>
                      <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-red-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden hover:border-red-500/40 transition-all duration-300">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                  Feel free to reach out to us for any additional queries
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:pragyaa@sggs.ac.in"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Email Us</span>
                  </a>
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/80 hover:bg-gray-700/80 border-2 border-red-500/40 hover:border-red-500/80 text-white rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default FAQ;

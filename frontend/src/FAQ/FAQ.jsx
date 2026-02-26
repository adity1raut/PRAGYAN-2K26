import { useState } from "react";
import { ArrowLeft, ChevronDown, HelpCircle, Mail, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

const faqs = [
  {
    category: "Logistics",
    question: "What are the accommodation arrangements?",
    answer:
      "For boys, accommodation facilities are available at the Gurdwara for free. For girls, accommodation is available at the SGGS Girls Hostel.",
  },
  {
    category: "Logistics",
    question: "What is the exact location of the event?",
    answer:
      "The event will be held at SGGSIE&T Vishnupuri, Nanded, Maharashtra. The campus is easily accessible from the Nanded railway station and bus stand.",
  },
  {
    category: "Registration",
    question: "Is the registration fee refundable?",
    answer:
      "No, the registration fee is non-refundable. However, it can be transferred to another participant from the same institution with prior approval.",
  },
  {
    category: "Registration",
    question: "Is there any on-the-spot registration available?",
    answer:
      "Yes, on-the-spot registration is available for select events, subject to availability. However, pre-registration is highly recommended to ensure your participation.",
  },
  {
    category: "Logistics",
    question: "What are the food arrangements?",
    answer:
      "Food arrangements will be available on campus throughout the event. Multiple food stalls and canteens will be operational serving breakfast, lunch, dinner, and snacks at reasonable prices.",
  },
  {
    category: "Registration",
    question: "How can I register for events?",
    answer:
      "Visit the Events page on our website, select your desired event, and complete the registration form. You will receive a confirmation email with further details.",
  },
  {
    category: "Event",
    question: "What are the event dates?",
    answer:
      "PRAGYAA 2K26 will be held from February 27–28 and March 1, 2026. Different events will be scheduled across these three days. Check the Schedule page for detailed timings.",
  },
  {
    category: "Event",
    question: "Are there any prizes for winners?",
    answer:
      "Yes! We have exciting prizes and certificates for winners and runners-up in all events. Total prize pool is worth ₹5,00,000+. Prize details vary by event and are mentioned in individual event descriptions.",
  },
  {
    category: "Eligibility",
    question: "Can students from other colleges participate?",
    answer:
      "Absolutely! PRAGYAA is a national-level technical fest open to students from all colleges and universities across India. We encourage participation from diverse institutions.",
  },
  {
    category: "Event",
    question: "What documents do I need to bring?",
    answer:
      "Participants must bring a valid college ID card and a government-issued photo ID (Aadhar card, PAN card, or Passport). If you registered online, please carry a printed or digital copy of your registration confirmation.",
  },
];

const categoryColors = {
  Logistics: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  Registration: "text-green-400 bg-green-500/10 border-green-500/30",
  Event: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
  Eligibility: "text-purple-400 bg-purple-500/10 border-purple-500/30",
};

function FAQ() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative overflow-x-hidden">
      <BackgroundLayer />

      <main className="flex-grow relative z-10">
        {/* Back Button */}
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-30">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/90 backdrop-blur border-2 border-red-500/40 rounded-xl hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-semibold text-sm">Home</span>
          </button>
        </div>

        {/* Hero */}
        <section className="pt-20 sm:pt-24 pb-10 px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-500/10 border-2 border-red-500/30 mb-5">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent uppercase mb-4">
            FAQ
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about PRAGYAA 2K26. Can't find the answer? Reach out to us directly.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full mt-6 animate-pulse" />

          {/* Accommodation Box */}
          <div className="mt-8 inline-block">
            <div className="relative px-8 py-5 bg-gradient-to-br from-gray-900/90 via-black/80 to-red-950/30 border-2 border-red-500/50 rounded-2xl shadow-[0_0_24px_rgba(255,87,87,0.2)] hover:shadow-[0_0_36px_rgba(255,87,87,0.35)] transition-all duration-300 group max-w-sm mx-auto text-center">
              {/* Corner accents */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-500 rounded-tl" />
              <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-500 rounded-tr" />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red-500 rounded-bl" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red-500 rounded-br" />

              <div className="text-2xl mb-2">🏨</div>
              <h3 className="text-red-400 font-black text-base sm:text-lg uppercase tracking-widest mb-1">Accommodation</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
                Need a place to stay? Register for accommodation before spots run out.
              </p>
              <a
                href="https://forms.gle/mmZ8L4KkBBF6F8DJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 hover:scale-105 shadow-md shadow-red-700/40"
              >
                Register Now →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="pb-12 px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-red-500/60 bg-gray-900/90 shadow-lg shadow-red-500/10"
                      : "border-gray-800/80 bg-gray-900/50 hover:border-red-500/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-4"
                  >
                    {/* Number */}
                    <span
                      className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                        isOpen
                          ? "bg-red-600 text-white"
                          : "bg-gray-800 text-gray-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border mb-1.5 ${
                          categoryColors[faq.category] ?? "text-gray-400 bg-gray-800 border-gray-700"
                        }`}
                      >
                        {faq.category}
                      </span>
                      <p
                        className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
                          isOpen ? "text-red-300" : "text-white"
                        }`}
                      >
                        {faq.question}
                      </p>
                    </div>

                    {/* Chevron */}
                    <ChevronDown
                      className={`shrink-0 w-5 h-5 text-red-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-0">
                      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-4" />
                      <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-red-900/30 via-gray-900/80 to-red-900/20 border-2 border-red-500/30 rounded-2xl p-6 sm:p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 mb-4">
                <MessageCircle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Still have questions?</h2>
              <p className="text-sm text-gray-400 mb-6">
                Our team is happy to help — reach out any time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:pragyaa@sggs.ac.in"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/20"
                >
                  <Mail className="w-4 h-4" />
                  pragyaa@sggs.ac.in
                </a>
                <a
                  href="tel:+912462 228342"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 border-2 border-red-500/30 hover:border-red-500/60 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  +91 2462 228342
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FAQ;

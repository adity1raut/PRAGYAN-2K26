
const eventData = {
  Flagship: {
    name: "Flagship Events",
    events: [
      {
        id: "Inno Verse",
        title: "Inno Verse",
        tagline: "Project Exhibition & Competition.",
        description:
          "InnoVerse in PRAGYAA-Multiverse of Innovation, is a dynamic showcase of engineering talent where students present projects that blend technology, innovation, and multidisciplinary thinking. The expo serves as a platform for emerging technologists to demonstrate working models, research projects, design solutions, and technical creativity that contribute to societal and industrial progress.",
        icon: "Trophy",
        venue: "PMC-EMC Road",
        prizePool: 30000,
        entryFee: 199,
        members: 4,
        coordinators: [
          { name: "Mohit Kumre", phone: "8080720803" },
          { name: "Shreyash Sable", phone: "9664881642" }
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Eligibility & Team",
            items: [
              "Individual or team participation (max 4 members per team)",
              "Valid college ID is mandatory for all participants",
              "Entry fee: ₹199 per team (non-refundable) — includes participation certificate and exhibition space",
              "Open to engineering, diploma, and science students"
            ]
          },
         
          {
            section: "Presentation Format",
            items: [
              "Setup time as per event schedule",
              "5–7 minute project presentation followed by 2–3 minute Q&A",
              "Must explain: problem statement, working principle, innovation/application, and feasibility/future scope",
              "Working prototype or simulation must be presented"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Innovation and originality of the idea",
              "Technical implementation and correctness",
              "Practicality and real-world relevance",
              "Quality of demonstration",
              "Presentation and communication skills"
            ]
          },
          {
            section: "Disqualification",
            items: [
              "Cheating or plagiarism will result in immediate disqualification",
              "Use of unsafe wiring or hazardous materials is not permitted",
              "Misbehaviour or failure to follow instructions leads to disqualification"
            ]
          }
        ]
      },
      {
        id: "Vision Edge",
        title: "Vision Edge",
        tagline: "National Level Poster Presentation",
        description:
          "A national-level poster presentation competition at PRAGYAA, where students from across the country showcase their innovative ideas and projects. This platform focuses on technology for a sustainable and intelligent future, encouraging creativity, research, and impactful solutions that can shape tomorrow.",
        icon: "Trophy",
        prizePool: 10000,
        entryFee: 99,
        members: 2,
        coordinators: [
          { name: "Mohit Kumare", phone: "8080720803" },
          { name: "Shreyansh Rajput", phone: "8308032884" }
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Theme & Eligibility",
            items: [
              "Theme: \"Technology for a Sustainable and Intelligent Future\"",
              "Open to Diploma, UG, and PG students",
              "Individual or team (max 4 members); interdisciplinary teams are allowed",
              "Entry fee: ₹99 per team/individual (non-refundable)",
              "One poster per team/individual only"
            ]
          },
          {
            section: "Poster Specifications",
            items: [
              "Size: A1 or A2, portrait orientation",
              "Printed or hand-drawn posters are accepted",
              "Poster must be self-supporting (no wall attachment needed)",
              "Required sections: Title, Participant Name(s), Institution, Problem Statement/Objective, Methodology/Concept, Results/Expected Outcomes, Conclusion, References",
              "Participants must bring their own posters."
            ]
          },
          {
            section: "Presentation",
            items: [
              "3–5 minutes per team/individual",
              "Cover: research motivation, technical approach, innovation/relevance, key outcomes",
              "Late submissions will not be accepted",
              "Participants should submit their abstract."
            ]
          },
          {
            section: "Ethics & Rules",
            items: [
              "No plagiarism; AI tools limited to assistance only — core ideas must be participant's own work",
              "Judges' decisions are final and binding",
              "All participants receive participation certificates; best posters receive merit certificates and prizes"
            ]
          },
          
        ]
      },
      {
        id: "AI Bootcamp",
        title: "AI Bootcamp",
        tagline: "Hands-on Artificial Intelligence Workshop",
        description:
          "A flagship hands-on AI Bootcamp at PRAGYAA where participants explore the fundamentals of Artificial Intelligence and Machine Learning through practical sessions, guided workshops, and real-world problem solving. Ideal for enthusiasts looking to kickstart their journey into the world of AI.",
        icon: "Trophy",
        venue: "Seminar Hall",
        members: 1,
        coordinators: [{ name: "Mohit Kumare", phone: "8080720803" },
          {name : "Ritesh Yevatkar", phone : "9699715813"}
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Participation",
            items: [
              "Individual participation; open to all students",
              "Valid college ID required",
              "Prior AI/ML knowledge is not mandatory"
            ]
          },
          {
            section: "Workshop Format",
            items: [
              "Hands-on practical sessions on AI/ML fundamentals",
              "Guided workshops with real-world problem-solving exercises",
              "Participants must bring their own laptops (preferred)",
              "All necessary software and datasets will be provided"
            ]
          },
          {
            section: "General Rules",
            items: [
              "Participants must be present for the entire duration",
              "No disruptive behaviour during sessions",
              "Coordinators' instructions must be followed at all times"
            ]
          }
        ]
      }
    ]
  },

  Departmental: {
    name: "Departmental Events",
    events: [
      {
        id: "ChemTrek (IDP)",
        title: "ChemTrek (IDP)",
        tagline: "Industry Defined Problem (IDP)",
        description:
          "Industry Defined Problem (IDP): A real-life challenge where students apply chemical engineering knowledge to solve industry-sourced problems and present practical solutions.",
        venue: "Chemical Engineering Department",
        icon: "Users",
        prizePool: 10000,
        entryFee: 199,
        members: 4,
        coordinators: [
          { name: "Mr. Harshit Mengre", phone: "7720950041" },
          { name: "Atharva Bhosale", phone: "7499478708" }
        ],
        faculty: "Dr. A. P. Chauhan",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        problemStatements: [
          { label: "IDP Powered by ChemGate Academy", url: "/IDP-Powered-by-ChemGate-Academy-Problem-Statement.pdf" }
        ],
        rules: [
          {
            section: "Theme & Eligibility",
            items: [
              "Theme: Green & Sustainable Chemical Engineering",
              "Open to Diploma, UG, and PG students of Chemical Engineering and allied disciplines",
              "Inter-college teams are allowed",
              "Teams of max 4 members; each member can be in only one team"
            ]
          },
          {
            section: "Event Format",
            items: [
              "Teams receive 2–3 industry-defined problem statements related to green engineering, sustainable processes, energy efficiency, waste minimization, and environmental compliance",
              "Teams must select one problem and present their solution before an expert panel",
              "Time limit for presentation as per event schedule"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Problem understanding and clarity",
              "Innovation and originality of the proposed solution",
              "Technical accuracy and scientific validity",
              "Sustainability impact",
              "Feasibility of implementation",
              "Presentation and communication skills"
            ]
          },
          {
            section: "Rules",
            items: [
              "Plagiarism leads to immediate disqualification",
              "Valid college ID mandatory for all participants",
              "Judges' and coordinators' decisions are final"
            ]
          }
        ]
      },
      {
        id: "ChemTrek (Quiztillation)",
        title: "ChemTrek (Quiztillation)",
        tagline: "The Ultimate Chemical Quiz",
        description:
          "Quiztillation: A fast-paced quiz focused on core chemical engineering topics tested through multiple rounds.",
        icon: "Users",
        venue: "Chemical Engineering Department",
        prizePool: 3000,
        entryFee: 49,
        members: 1,
        coordinators: [
          { name: "Mr. Harshit Mengre", phone: "7720950041" },
          { name: "Atharva Bhosale", phone: "7499478708" }
        ],
        faculty: "Dr. A. P. Chauhan",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Eligibility",
            items: [
              "Open to undergraduate Chemical Engineering and allied discipline students (all years and colleges)",
              "Individual participation only",
              "National level competition — inter-college participation encouraged"
            ]
          },
          {
            section: "Quiz Format",
            items: [
              "30 objective questions, 2 marks each",
              "Total duration: 60 minutes",
              "3 different question sets distributed to prevent copying",
              "No negative marking"
            ]
          },
          {
            section: "Topics Covered",
            items: [
              "Fluid Mechanics",
              "Mass Transfer",
              "Heat Transfer",
              "Thermodynamics",
              "Chemical Reaction Engineering",
              "Environmental Engineering",
              "Membrane Technology"
            ]
          },
          {
            section: "Rules",
            items: [
              "No electronic gadgets (mobiles, smartwatches, calculators) allowed",
              "Participants must report 10 minutes before the start",
              "Tie-breaker round at organizer's discretion",
              "Judges' decisions are final"
            ]
          }
        ]
      },
      {
        id: "Mechaverse (Contraption Cascade)",
        title: "Mechaverse (Contraption Cascade)",
        tagline: "Battle of the Bots",
        description:
          "Contraption: A creativity-driven event where participants design and construct an elaborate mechanical setup to solve industry ready challenges.",
        icon: "Users",
        venue: "Mechanical Engineering Department",
        prizePool: 10000,
        entryFee: 199,
        members: 4,
        coordinators: [
          { name: "Mr. Balaji Kasture", phone: "7249438491" },
          { name: "Balaji Kalyankar", phone: "9699536593" }
        ],
        faculty: "Prof. M. D. Sukre",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Team & Setup",
            items: [
              "Teams of 4–5 members",
              "Entry fee: ₹199 per team",
              "Objective: move a ball from one end of the contraption to the other through a series of conversions",
              "Build area: 1.5m × 1.5m (no height limit)",
              "Minimum 7 conversions required to qualify"
            ]
          },
          {
            section: "Event Rules",
            items: [
              "2 hours to assemble and test the contraption on-site",
              "Maximum 2 attempts allowed; best attempt counts",
              "Allowed paths: loops, slopes, air routes, water routes",
              "All materials must be brought by participants"
            ]
          },
          {
            section: "Scoring",
            items: [
              "Completeness: 40 points",
              "Creativity: 30 points",
              "10 points per conversion",
              "Bonus: +5 pts per loop, +5 pts for a jump, +10 pts for climbing 50 cm height",
              "Penalty: -5 pts per hand touch; ball crossing boundary = restart"
            ]
          },
          {
            section: "Awards",
            items: [
              "Best in Show",
              "Most Creative",
              "Most Functional"
            ]
          }
        ]
      },
      {
        id: "Mechaverse (CAD-WAR)",
        title: "Mechaverse (CAD-WAR)",
        tagline: "Design. Innovate. Dominate.",
        description:
          "Mechaverse – CAD War 2026 is an individual design competition organized by MESA to test participants' skills in 3D modeling, drafting, assembly design, accuracy, and speed using AutoCAD. Held on 1 March 2026 (11:00 AM – 05:00 PM) at PLM Lab, Mechanical Engineering Department.",
        icon: "Users",
        venue: "PLM Lab, Mechanical Engineering Department",
        prizePool: 5000,
        entryFee: 99,
        members: 1,
        coordinators: [
          { name: "Mr. Balaji Kasture", phone: "7249438491" },
          { name: "Balaji Kalyankar", phone: "9699536593" }
        ],
        faculty: "Prof. M. D. Sukre",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Eligibility",
            items: [
              "Open to Diploma / B.E. / B.Tech Engineering students",
              "Individual participation (one vs one) — no teams",
              "Valid college ID card mandatory",
              "Basic knowledge of CAD software is expected"
            ]
          },
          {
            section: "Event Format",
            items: [
              "Round 1 – Preliminary (45–60 min): 3D modeling task; evaluated on dimensional accuracy, constraints, feature usage, and completion time",
              "Round 2 – Advanced Modeling (60–90 min): Complex 3D part modeling from 2D drawing, isometric view, or physical component; evaluated on accuracy, feature optimization, clean modeling, and time management",
              "Round 3 – Final (90–120 min): Assembly modeling / reverse engineering / creative design challenge; judged on assembly constraints, motion feasibility, innovation, and presentation"
            ]
          },
          {
            section: "General Rules",
            items: [
              "Participants must report 30 minutes before the event",
              "Late entry beyond 15 minutes will not be allowed",
              "Mobile phones are not allowed during the competition",
              "Use of pen drives or external storage devices is not permitted",
              "Files must be saved in the format: TeamName_RoundNumber",
              "Any malpractice will lead to immediate disqualification",
              "Judge's decision will be final and binding"
            ]
          },
          {
            section: "Evaluation Criteria",
            items: [
              "Dimensional Accuracy: 30–40%",
              "Proper Use of Features: 20%",
              "Design Intent & Constraints: 10%",
              "Neat Sketching & Modeling Practice: 10%",
              "File Organization: 10%",
              "Completion Time: 10%"
            ]
          },
          {
            section: "Disqualification Criteria",
            items: [
              "Copying from other participants",
              "Using external devices or internet",
              "Creating disturbance during the event",
              "Ignoring instructions from judges"
            ]
          },
         
        ]
      },
      {
        id: "Mechaverse (Marketing Mania)",
        title: "Mechaverse (Marketing Mania)",
        tagline: "Solve. Innovate. Dominate.",
        description:
          "A mechanical puzzle event focused on gear assemblies, where participants analyze, identify, and solve gear-based challenges testing mechanical intuition and problem-solving.",
        icon: "Users",
        venue: "Mechanical Engineering Department",
        prizePool: 5000,
        entryFee: 99,
        members: 2,
        coordinators: [
          { name: "Mr. Balaji Kasture", phone: "7249438491" },
          { name: "Balaji Kalyankar", phone: "9699536593" }
        ],
        faculty: "Prof. M. D. Sukre",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Eligibility",
            items: [
              "Open to all students",
              "Individual or group (max 4 members per team)",
              "Valid college ID required",
              "Date: 28 Feb 2026, 12:15 PM – 5:00 PM",
              "Venue: PLM Lab, Mechanical Engineering Department",
              "Format: Shark Tank-inspired"
            ]
          },
          {
            section: "Rounds",
            items: [
              "Round 1 — Product Review & Advertising Challenge: Given a product, participants must review and advertise/sell it convincingly",
              "Round 2 — Innovation & Improvement Presentation: Propose improvements to a product or concept (PPT presentation recommended)",
              "Round 3 (Optional) — Problem Solving & Q&A: Critical thinking and decision-making under pressure"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Creativity & Originality",
              "Communication Skills",
              "Innovation & Practical Thinking",
              "Confidence & Stage Presence",
              "Team Coordination"
            ]
          },
          
        ]
      },
      {
        id: "PESA (Design-A-Thon)",
        title: "PESA (Design-A-Thon)",
        tagline: "Design for a Sustainable Future",
        description:
          "PESA Design-A-Thon: A design competition where participants create innovative solutions addressing real-world mechanical and sustainability challenges, blending engineering creativity with practical problem solving.",
        icon: "Users",
        venue: "Mechanical Engineering Department",
        prizePool: 5000,
        entryFee: 199,
        members: 4,
        coordinators: [
          { name: "Mr. Balaji Kasture", phone: "7249438491" },
          { name: "Balaji Kalyankar", phone: "9699536593" }
        ],
        faculty: "Prof. M. D. Sukre",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Eligibility & Team",
            items: [
              "Open to all engineering students",
              "Teams of 2–4 members; interdisciplinary teams encouraged",
              "Valid college ID mandatory",
              "Entry fee: ₹199 per team"
            ]
          },
          {
            section: "Event Format",
            items: [
              "Participants receive a real-world mechanical or sustainability challenge",
              "Teams must design an innovative solution within the allotted time",
              "Presentation of design concept, feasibility, and impact before judges",
              "CAD drawings, sketches, or prototypes may be used to present the design"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Design innovation and creativity",
              "Technical feasibility and accuracy",
              "Sustainability and environmental consideration",
              "Presentation quality and clarity",
              "Practicality of the proposed solution"
            ]
          },
          {
            section: "Rules",
            items: [
              "All design work must be original; plagiarism leads to disqualification",
              "Judges' decisions are final",
              "Participants must follow all venue and event guidelines"
            ]
          }
        ]
      },
      {
        id: "TESA-Texplorer (Style Your Partner)",
        title: "TESA-Texplorer (Style Your Partner)",
        tagline: "Style your partner",
        description:
          "Style Your Partner: A fun and creative event where participants design and style their partners using textile materials, showcasing innovation in fabric draping, color coordination, and trendsetting looks.",
        icon: "Users",
        venue: "Textile Engineering Department",
        prizePool: 12000,
        entryFee: 199,
        members: 2,
        coordinators: [
          { name: "Mr. Hanuman Kadam", phone: "9067277491" },
          { name: "Jaydeep Kadam", phone: "8637763753" }
        ],
        faculty: "Prof. Devashish Patil",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Team Structure",
            items: [
              "Designer + Model pairs only — no solo entries",
              "Designer stitches the outfit; model performs the ramp walk",
              "Each team must consist of exactly 2 members: one designer, one model"
            ]
          },
          {
            section: "Design Preparation",
            items: [
              "Designer must prepare: Mood Board, Colour Board, Cost Sheet, and Inspiration Board",
              "Submission of these boards is mandatory for judging",
              "Instrumental music only (MP3/WAV format) — must be submitted 48 hours before the event"
            ]
          },
          {
            section: "Themes",
            items: [
              "Colour Psychology",
              "Indian Tradition to Modern",
              "Indian Mythology",
              "Five Elements of Nature",
              "Cultural Fusion"
            ]
          },
          {
            section: "Event Segments",
            items: [
              "Solo Ramp Walk: 1–2 minutes",
              "Group Ramp Walk: 3–5 minutes",
              "Poster Presentation: 4–5 minutes",
              "Q&A Round: 2 minutes"
            ]
          },
          {
            section: "Judging Criteria (100 pts)",
            items: [
              "Creativity & Theme Fit: 30 points",
              "Stitching / Design Quality: 25 points",
              "Ramp Walk Performance: 20 points",
              "Poster Visuals: 15 points",
              "Overall Impact & Q&A: 10 points"
            ]
          }
        ]
      },
      {
        id: "TESA-Texplorer (T-Shirt Painting)",
        title: "TESA-Texplorer (T-Shirt Painting)",
        tagline: "Draw your design",
        description:
          "Draw Your Design: A creative contest where participants sketch original textile or garment designs, emphasizing artistic skills, fabric texture representation, color schemes, and contemporary styling.",
        icon: "Users",
        venue: "Textile Engineering Department",
        prizePool: 5000,
        entryFee: 99,
        members: 2,
        coordinators: [
          { name: "Mr. Hanuman Kadam", phone: "9067277491" },
          { name: "Jaydeep Kadam", phone: "8637763753" }
        ],
        faculty: "Prof. Devashish Patil",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Participation",
            items: [
              "Individual or pairs (1–2 members)",
              "Entry fee: ₹99",
              "Theme will be announced on the spot or communicated prior to the event"
            ]
          },
          {
            section: "Materials",
            items: [
              "T-shirts will be provided by the organizers",
              "Participants must bring their own fabric markers, colors, or paints",
              "No pre-painted or pre-designed t-shirts allowed"
            ]
          },
          {
            section: "Event Rules",
            items: [
              "Time limit: 1–2 hours",
              "Designs must be entirely original",
              "No tracing or copying reference designs directly",
              "Participants may use stencils but must create them themselves"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Creativity & Originality: 40%",
              "Theme Relevance: 30%",
              "Aesthetic Appeal: 20%",
              "Overall Presentation: 10%"
            ]
          }
        ]
      },
      {
        id: "TESA-Texplorer (TexQuiz)",
        title: "TESA-Texplorer (TexQuiz)",
        tagline: "TexQuiz",
        description:
          "TexQuiz: A competitive quiz focusing on textile science, technology, and industry trends that tests participants' knowledge of fibers, fabrics, manufacturing processes, and fashion history.",
        icon: "Users",
        venue: "Textile Engineering Department",
        prizePool: 3000,
        entryFee: 49,
        members: 1,
        coordinators: [
          { name: "Mr. Hanuman Kadam", phone: "9067277491" },
          { name: "Jaydeep Kadam", phone: "8637763753" }
        ],
        faculty: "Prof. Devashish Patil",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Format",
            items: [
              "Individual participation only",
              "3 progressive rounds"
            ]
          },
          {
            section: "Rounds",
            items: [
              "Round 1 — MCQ Test: Objective questions on textile science and technology; all participants",
              "Round 2 — Textile Puzzle Solving: Top 20 participants qualify; analytical and conceptual puzzles",
              "Round 3 — Rapid Fire: Top 10 participants qualify; fast-paced questions under time pressure"
            ]
          },
          {
            section: "Rules",
            items: [
              "No mobiles, notes, books, calculators, or smart devices allowed",
              "Judges' decisions are final and binding",
              "Misconduct or use of unfair means leads to disqualification"
            ]
          },
          {
            section: "Awards",
            items: [
              "1st Place: Trophy + Certificate",
              "2nd & 3rd Place: Certificates (with optional reward)",
              "Participation certificates for all"
            ]
          }
        ]
      },
      {
        id: "CESA-Cenfest (Bridge Building)",
        title: "CESA-Cenfest (Bridge Building)",
        tagline: "Bridge Building",
        description:
          "Bridge Building: Classic engineering challenge — design & construct a strong bridge using ice-cream sticks. Show your structural skills and compete for maximum load capacity.",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
        entryFee: 199,
        members: 4,
        coordinators: [
          { name: "Mr. Omkar Dalvi", phone: "7823058329" },
          { name: "Suhani Malviya", phone: "8975160888" }
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Team & Materials",
            items: [
              "Team: 2–4 members",
              "Time limit: 2 hours for construction",
              "Bridge dimensions: 40 cm (L) × 10 cm (B) × 10 cm (H)",
              "Materials provided: 200 ice-cream sticks and glue",
              "Deck slab thickness: max 0.5 cm",
              "No pre-assembled parts; basic tools only (no power tools)"
            ]
          },
          {
            section: "Testing",
            items: [
              "Bridge tested with incremental weight placed at the center",
              "Loading continues until collapse",
              "Last weight successfully held = performance score",
              "Any bridge that fails before testing starts will be disqualified"
            ]
          },
          {
            section: "Rules",
            items: [
              "College ID cards mandatory",
              "No electronic devices allowed during construction",
              "No pre-built or store-bought components",
              "Coordinators' and judges' decisions are final",
              "Misconduct or cheating leads to disqualification"
            ]
          }
        ]
      },
      {
        id: "CESA-Cenfest (CAD-WAR)",
        title: "CESA-Cenfest (CAD-WAR)",
        tagline: "CAD - WAR",
        description:
          "Convert a single-line plan into a professional double-line plan using CAD tools. Speed, accuracy, and drafting skills will decide the winner.",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
        entryFee: 49,
        members: 1,
        coordinators: [
          { name: "Mr. Omkar Dalvi", phone: "7823058329" },
          { name: "Suhani Malviya", phone: "8975160888"  }
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Format",
            items: [
              "Solo participation (1 participant per entry)",
              "Software: AutoCAD 2024",
              "Time limit: 1 hour",
              "If more than 50 participants, an elimination round will be added"
            ]
          },
          {
            section: "Task",
            items: [
              "Participants will be given a residential single-line floor plan",
              "Must convert it into a professional detailed double-line plan",
              "Drafting, detailing, labelling, colouring, and schedule of openings required"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Completeness of the plan",
              "Accuracy of dimensions and drafting standards",
              "Proper labelling and colouring",
              "Time utilization"
            ]
          },
          {
            section: "Rules",
            items: [
              "College ID cards mandatory",
              "No electronic devices other than the assigned computer allowed",
              "Coordinators' and judges' decisions are final"
            ]
          }
        ]
      },
      {
        id: "CESA-Cenfest (Build Blind)",
        title: "CESA-Cenfest (Build Blind)",
        tagline: "Build Blind",
        description:
          "Build Blind: A fun twist on bridge building! Two members per team — one blindfolded builder, the other guiding. Bridges made with ice-cream sticks & Fevicol. Test your coordination and trust!",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
        entryFee: 99,
        members: 2,
        coordinators: [
          { name: "Mr. Omkar Dalvi", phone: "7823058329" },
          { name: "Suhani Malviya", phone: "8975160888"  }
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Team Structure",
            items: [
              "Strictly 2 members per team: one blindfolded Builder + one Guide",
              "Roles cannot be swapped during the event",
              "Materials: ice-cream sticks and Fevicol (provided by organizers)"
            ]
          },
          {
            section: "Rules",
            items: [
              "Guide may only give verbal instructions — no touching of materials or the builder",
              "Builder must remain blindfolded throughout the construction phase",
              "Blindfold is removed only at the end for final evaluation",
              "Time limit: 15 minutes"
            ]
          },
          {
            section: "Evaluation",
            items: [
              "Structural integrity of the built item",
              "Quality of communication between the team",
              "Completion level within the time limit",
              "Judges' decisions are final"
            ]
          }
        ]
      },
      {
        id: "CESA-Cenfest (Float-a-BO(a)T)",
        title: "CESA-Cenfest (Float-a-BO(a)T)",
        tagline: "Float a BO(a)T",
        description:
          "Build a boat with provided materials, then test it by applying weights. How much load can your boat carry before sinking? Put your design to the ultimate test!",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
        entryFee: 199,
        members: 4,
        coordinators: [
          { name: "Mr. Omkar Dalvi", phone: "7823058329" },
          { name: "Suhani Malviya", phone: "8975160888" }
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Team & Design Specs",
            items: [
              "Team: 2–4 members",
              "Maximum boat dimensions: 30 cm × 30 cm × 30 cm",
              "Flat center surface must be at least 14 cm × 14 cm",
              "All materials provided by organizers"
            ]
          },
          {
            section: "Testing",
            items: [
              "Boats are tested in a water tank",
              "Failure conditions: boat sinks 6 cm or more, or tilts beyond 30 degrees",
              "Scoring: ratio of boat weight to (total weight held + boat weight); lower ratio wins"
            ]
          },
          {
            section: "Rules",
            items: [
              "No pre-built or store-bought boat components",
              "All construction must happen at the venue within the allotted time",
              "College ID cards mandatory",
              "Coordinators' and judges' decisions are final",
              "Misconduct or cheating leads to disqualification"
            ]
          }
        ]
      },
      {
        id: "CESA-Cenfest (Town Planning)",
        title: "CESA-Cenfest (Town Planning)",
        tagline: "Town Planning",
        description:
          "Design a sustainable, well-structured miniature town layout based on given constraints. Participants must plan roads, utilities, zoning, public spaces, and infrastructure using smart urban-planning principles.",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
        entryFee: 199,
        members: 4,
        coordinators: [
          { name: "Mr. Omkar Dalvi", phone: "7823058329" },
          { name: "Suhani Malviya", phone: "8975160888" }
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        problemStatements: [
          { label: "Town Planning Problem Statement", url: "/Town_Planning_Problem_Statement.pdf" }
        ],
        rules: [
          {
            section: "Team & Format",
            items: [
              "Team: max 4 members",
              "Teams receive a problem statement / scenario on which the town plan must be based",
              "Must prepare and present a detailed tender report / planning proposal",
              "No copying from the internet or AI-generated content; false rates or unrealistic estimates attract penalty marks"
            ]
          },
          {
            section: "Plan Requirements",
            items: [
              "Design a miniature town layout based on given constraints",
              "Must cover: roads, utilities, zoning, public spaces, and infrastructure",
              "Apply smart urban-planning and sustainable development principles",
              "Presentation of the plan before a jury panel"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Comprehensiveness of the town plan",
              "Sustainability and environmental planning",
              "Feasibility and practicality of the proposal",
              "Clarity and quality of presentation"
            ]
          },
          {
            section: "Rules",
            items: [
              "College ID cards mandatory",
              "No electronic devices (other than permitted tools) allowed",
              "Coordinators' and judges' decisions are final"
            ]
          }
        ]
      },
      {
        id: "EESA-Electrospark (Voltage Voyage)",
        title: "EESA-Electrospark (Voltage Voyage)",
        tagline: "Voltage Voyage",
        description:
          "Voltage Voyage is a competitive quiz event based on core Electrical Engineering subjects, covering concepts from fundamentals to advanced topics. The event is designed to test participants' conceptual clarity, analytical thinking, and quick decision-making skills while promoting technical knowledge, teamwork, and time management through engaging quiz rounds.",
        icon: "Users",
        venue: "Electrical Engineering Department",
        prizePool: 5000,
        entryFee: 49,
        members: 4,
        coordinators: [{ name: "Mr. Shubham Tayde", phone: "9075066926" }],
        faculty: "Mrs. Seema Pachpute",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Rounds",
            items: [
              "Round 1 – Basic Level (Rapid Fire): Fundamental electrical concepts; 20 seconds to answer",
              "Round 2 – Medium Level: Conceptual and application-based questions; 30 seconds to answer",
              "Round 3 – Advanced Level: Analytical and higher-difficulty questions; 30 seconds to answer"
            ]
          },
          {
            section: "Participation & Format",
            items: [
              "Participation is allowed individually or in teams of maximum 4 members",
              "Each team/individual will be assigned a unique Group Code before the commencement of the quiz",
              "Questions prepared by the Main Event Coordinator will be placed in a box in folded slip form and picked randomly in sequence according to the assigned Group Code",
              "If a team fails to answer within the stipulated time, the same question will be passed to the next team",
              "Points will be awarded only for correct and satisfactory answers as determined by the Quiz Coordinator",
              "In case of a tie, a tie-breaker round will be conducted to determine the winner"
            ]
          },
          {
            section: "Rules",
            items: [
              "Use of mobile phones, smart watches, calculators (unless explicitly permitted), or any reference material is strictly prohibited",
              "Any form of discussion, signaling, or communication between teams during the quiz is strictly prohibited",
              "Participants must report to the venue at least 10 minutes before the scheduled start time",
              "All participants must maintain discipline, professionalism, and fair play throughout the event",
              "Any indisciplinary behavior, misconduct, or disruption during the event will lead to immediate disqualification",
              "The decisions of the Quiz Coordinator and Judges shall be final"
            ]
          }
        ]
      },
      {
        id: "EESA-Electrospark (Step Into Strange)",
        title: "EESA-Electrospark (Step Into Strange)",
        tagline: "Step Into Strange",
        description:
          "Step into the Strange is an individual-based interactive challenge designed to evaluate participants' quick decision-making and General Knowledge. The game progresses through a sequence of steps where participants encounter color-coded signals. Only red signals trigger questions, making strategy and alertness essential for successfully completing the activity.",
        icon: "Users",
        venue: "Electrical Engineering Department",
        prizePool: 5000,
        entryFee: 49,
        members: 1,
        coordinators: [{ name: "Mr. Shubham Tayde", phone: "9075066926" }],
        faculty: "Dr. Paramjeet Singh Jamwal",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Format",
            items: [
              "Individual participation only; team entries are not permitted",
              "The game consists of 10–12 sequential steps, which must be completed in the prescribed order; skipping or repeating steps is strictly prohibited",
              "A time limit will be applicable for the overall game, as announced by the event coordinators"
            ]
          },
          {
            section: "Signals & Lifeline",
            items: [
              "Participants will encounter green or red signals while moving through the steps",
              "Questions on general knowledge will be asked only when a participant gets a red signal; no question will be asked on a green signal",
              "If a participant achieves three consecutive green signals, they will be awarded one lifeline (only one lifeline per participant; usable only once)",
              "The lifeline may be used to skip one red-signal question or to get one reattempt, subject to the discretion of the event coordinator",
              "A maximum of 30 seconds will be provided to answer each question; failure to respond within the given time will be considered an incorrect answer",
              "If a participant gives a wrong answer to a red-signal question and does not use the lifeline, the participant will be immediately eliminated",
              "In case more than one participant successfully completes all steps, the participant completing in the least time will be declared the winner"
            ]
          },
          {
            section: "Rules",
            items: [
              "Use of mobile phones, electronic devices, written notes, or any external assistance is strictly prohibited during the game",
              "Any form of misconduct, rule violation, or unfair practice will result in immediate disqualification",
              "The difficulty level and selection of questions will be at the discretion of the event coordinators",
              "The decision of the judges and event coordinators shall be final and binding in all matters"
            ]
          }
        ]
      },
      {
        id: "EESA-Electrospark (Breadboard Buildoff)",
        title: "EESA-Electrospark (Breadboard Buildoff)",
        tagline: "Breadboard Circuit Building",
        description:
          "Circuit Craze (Breadboard Build-Off) is a hands-on technical event that challenges participants to design and implement electrical or electronic circuits on a breadboard within a limited time. The circuit diagram will be provided at the start of the round and all necessary components will be supplied by the organizing team.",
        icon: "Users",
        venue: "Electrical Engineering Department",
        prizePool: 5000,
        entryFee: 49,
        members: 1,
        coordinators: [{ name: "Mr. Shubham Tayde", phone: "9075066926" }],
        faculty: "Mr. Satish Jamraj",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Format",
            items: [
              "Individual participation only",
              "The circuit diagram will be provided at the start of the round; participants must assemble the given circuit on a breadboard within the stipulated time",
              "All necessary components required for the circuit will be provided by the organizing team",
              "The circuit must be completed within the given time limit; no extra time will be provided under any circumstances",
              "No functional testing of the circuit will be conducted"
            ]
          },
          {
            section: "Evaluation Criteria",
            items: [
              "Accuracy of connections",
              "Correct placement of components",
              "Time taken to complete the circuit",
              "Any incorrect connection, improper component placement, or messy wiring may lead to deduction of marks",
              "In case of a tie, preference will be given to the participant who completed the circuit in lesser time with higher accuracy"
            ]
          },
          {
            section: "Rules",
            items: [
              "Participants are not allowed to use any personal components, pre-assembled circuits, mobile phones, or reference materials during the event",
              "Any damage to components or breadboard due to negligence may result in penalty or disqualification",
              "Participants must maintain discipline and proper handling of equipment throughout the event",
              "The decision of the judges and event coordinators shall be final"
            ]
          }
        ]
      },
      {
        id: "ITSA (DSA Knockout)",
        title: "ITSA (DSA Knockout)",
        tagline: "DSA Knockout",
        description:
          "CodeQuest 2.0: DSA coding competition, is a competitive programming contest focused on Data Structures and Algorithms. Its aim is to improve logic building, time bound coding skills, and prepare students for coding interviews.",
        icon: "Users",
        venue: "Language Lab",
        prizePool: 7000,
        entryFee: 99,
        members: 1,
        coordinators: [
          { name: "Mr. Om Rakhade", phone: "7057676048" },
          { name: "Krushna Ingle", phone: "7972484842" }
        ],
        faculty: "Dr. A. D. Sawarkar",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Participation",
            items: [
              "Individual participation only",
              "Entry fee: ₹99",
              "Valid college ID required",
              "Venue: CCF / Language Lab"
            ]
          },
          {
            section: "Topics Covered",
            items: [
              "Arrays, Strings, Linked Lists",
              "Stacks, Queues, Trees, Graphs",
              "Sorting and Searching Algorithms",
              "Dynamic Programming",
              "Recursion and Backtracking",
              "Time and Space Complexity Analysis"
            ]
          },
          {
            section: "Competition Rules",
            items: [
              "Problems are time-bound; faster correct solutions earn more points",
              "No internet browsing, AI tools, or external help allowed",
              "No communication between participants during the contest",
              "Any language supported by the judge platform may be used",
              "Plagiarism leads to immediate disqualification"
            ]
          },
          {
            section: "Judging",
            items: [
              "Solutions judged on correctness, efficiency, and time taken",
              "Partial marks may be awarded for partial solutions (based on test cases)",
              "Organizers' decisions are final"
            ]
          }
        ]
      },
      {
        id: "HACKIT (Code Clash 2.0)",
        title: "HACKIT (Code Clash 2.0)",
        tagline: "Code Clash 2.0",
        description:
          "Code Clash 2.0 is a 3-stage technical challenge designed to test participants' logic, coding ability, and real-time problem solving. The event includes: A) Tech Quiz — A fast test of cybersecurity, programming, and technical fundamentals. B) Scenario-Based Coding — Participants write code to solve given problem statements. C) Surprise Round — Guess-the-output and rapid-fire questions.",
        icon: "Users",
        venue: "Language Lab",
        prizePool: 7000,
        entryFee: 99,
        members: 2,
        coordinators: [
          { name: "Mr. Aditya Ghuge", phone: "9356606201" },
          { name: "Sainikesh Kokle", phone: "8390199418" }
        ],
        faculty: "Dr. Rupsingh P. Matwale",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Team",
            items: [
              "Strictly team-based: exactly 2 members per team — no solo participation allowed",
              "Valid college ID required",
              "Late entry may lead to disqualification",
              "Organized by: HackIT Club"
            ]
          },
          {
            section: "Rounds (Total: 100 marks)",
            items: [
              "Round 1 — Tech Quiz (30 marks): General cybersecurity, programming, and IT fundamentals; no negative marking",
              "Round 2 — Scenario-Based Coding (40 marks): Write code to solve given problem statements; judged on correctness, logic, and efficiency",
              "Round 3 — Surprise Round (30 marks): Guess-the-output questions + rapid-fire round"
            ]
          },
          {
            section: "Tie-Breaking",
            items: [
              "Ties resolved based on coding round (Round 2) score",
              "Further ties resolved at the organizing team's discretion"
            ]
          },
          {
            section: "Rules",
            items: [
              "No mobiles, smartwatches, or internet access during the event",
              "No plagiarism or use of AI tools for solving problems",
              "HackIT Organizing Team's decisions are final and binding"
            ]
          }
        ]
      }
    ]
  },

  creative: {
    name: "Creative Events",
    events: [
      {
        id: "Math-E-Magic",
        title: "Math-E-Magic",
        tagline: "(By Bhaskaracharya Maths Club)",
        description:
          "Math-E-Magic: A competition with different rounds to check how good you are at math and logic. Includes both standard quiz questions and hard problems that make you think. You have to use math to find the right answers before the time runs out.",
        icon: "Users",
        venue: "Admin Building",
        prizePool: 5000,
        entryFee: 99,
        members: 2,
        coordinators: [
          { name: "Mr. Shailesh Dhoke", phone: "8999101169" },
          { name: "Mr. krushna Gavandi", phone: "8669421351" }
        ],
        faculty: "Dr. Nilesh Khandekar",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Eligibility & Team",
            items: [
              "Teams of max 3 members (solo participation also allowed)",
              "Open to all years (1st–4th year students)",
              "Date: 27 Feb 2026, 10:00 AM – 3:00 PM",
              "Venue: AB 6 Hall, Admin Building",
              "Entry fee: ₹100 per team",
              "Estimated 25–30 teams"
            ]
          },
          {
            section: "Rounds",
            items: [
              "Round 1 — The Screen (Elimination): Objective aptitude + logical reasoning test; low scorers eliminated",
              "Round 2 — The Grind (Problem Solving): Subjective high-difficulty math problems; steps and logical approach evaluated",
              "Round 3 — Surprise Round: Structure revealed on the spot during the event"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Correctness of final answer",
              "Approach: use of correct formula and logical steps (partial marks awarded)",
              "Steps shown — direct answers without working will not be accepted"
            ]
          },
          {
            section: "Rules",
            items: [
              "No mobile phones, smartwatches, cheat sheets, or rough notebooks allowed",
              "Zero tolerance for malpractice — immediate disqualification",
              "Late entries will not be allowed",
              "Calculators permitted only if specifically stated by the organizers",
              "Participants must bring their own pens"
            ]
          },
        
        ]
      },
      {
        id: "FarOath6.0",
        title: "FarOath 6.0",
        tagline: "Treasure Hunt",
        description:
          "A thrilling treasure hunt where participants solve clues, crack codes, and race against time to find hidden treasures. A test of wit, teamwork, and adventure.",
        icon: "Star",
        venue: "Entire Campus",
        prizePool: 5000,
        entryFee: 199,
        members: 4,
        coordinators: [
          { name: "Mohit Kumare", phone: "8080720803" },
          { name: "Aditya Tangade", phone: "8956721443" }
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Team & Format",
            items: [
              "Teams of 4 members",
              "Entry fee: ₹199 per team",
              "Venue: Entire campus — clue locations spread across the college",
              "Teams race to follow a chain of clues and reach the final treasure"
            ]
          },
          {
            section: "Rules",
            items: [
              "All team members must stay together throughout the hunt",
              "Clues must be solved in order — skipping ahead is not allowed",
              "No tampering with or removing clues meant for other teams",
              "Mobile phones may be used only if explicitly permitted for a clue",
              "Cheating or copying from other teams leads to disqualification"
            ]
          },
          {
            section: "Winning Criteria",
            items: [
              "First team to correctly complete all clues and reach the final destination wins",
              "In case of disputes, coordinators' decisions are final"
            ]
          }
        ]
      },
      {
        id: "PRAGYAA Movie Night",
        title: "PRAGYAA Movie Night",
        tagline: "A Journey Through Time & Shadows",
        description:
          "Movies: Interstellar — Embark on a mind-bending journey across space and time. The Dark Knight — Witness the rise of a legend in the battle between justice and chaos.",
        icon: "Star",
        venue: "Auditorium",
        coordinators: [
          { name: "Momin Mohammad Talha", phone: "8999140169" },
          { name: "Alankrut Meshram", phone: "8087859932" }
        ],
        faculty: "Dr Atul Shinde",
        registerLink: "https://forms.gle/k8CNq64WazHzRyv2A",
        rules: [
          {
            section: "Event Details",
            items: [
              "Movie 1: Interstellar — A mind-bending journey across space and time",
              "Movie 2: The Dark Knight — The legendary battle between justice and chaos",
              "Venue: College Auditorium"
            ]
          },
          {
            section: "Conduct",
            items: [
              "Maintain silence and respect during the screenings",
              "No flash photography or video recording of the screen",
              "Mobile phones must be on silent mode",
              "Food and beverages as per event organizer's allowance only",
              "Seating will be on a first-come, first-served basis unless assigned"
            ]
          }
        ]
      }
    ]
  },

  eVenture: {
    name: "Pragyaa × E-CELL: E-Venture",
    events: [
      {
        id: "E-Venture (Startup Expo)",
        title: "E-Venture (Startup Expo)",
        tagline: "Startup Expo for innovative ventures",
        description:
          "E-Venture — A dynamic entrepreneurship track in PRAGYAA that celebrates innovation, strategy, and business thinking. Startup Expo: Showcase your startup ideas and connect with investors and mentors.",
        icon: "Trophy",
        venue: "PMC-CAD Road",
        entryFee: 199,
        members: 4,
        coordinators: [
          { name: "Mr. Darshan Singh", phone: "9322199877" }
        ],
        faculty: "Dr. Milind Bhalerao",
        registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSecTvhCGS_LQi6Ve6UbWtW7vktkchXH2ON4sh3jomdswLTNew/viewform?usp=dialog",
        rules: [
          {
            section: "Eligibility & Team",
            items: [
              "Open to all students; no prior startup experience required",
              "Individual or team (max 4 members)",
              "Valid college ID mandatory",
              "Entry fee: ₹199 per team (non-refundable) — includes exhibition space and participation certificate"
            ]
          },
          {
            section: "Startup Expo Format",
            items: [
              "Teams showcase their startup ideas or working prototypes at allocated stall/booth",
              "Must present: working prototype or simulation, poster, and a 3–5 minute pitch",
              "Investors, mentors, and judges will visit and evaluate each stall",
              "Participants must be at their stall throughout the exhibition period"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Innovation and originality of the startup idea",
              "Market relevance and feasibility",
              "Prototype / demonstration quality",
              "Business model clarity",
              "Team presentation and communication"
            ]
          },
          {
            section: "Rules",
            items: [
              "All content must be original; plagiarism leads to disqualification",
              "Professional conduct is expected throughout the event",
              "Judges' decisions are final and binding"
            ]
          }
        ]
      },
      {
        id: "E-Venture (Lightning Pitch)",
        title: "E-Venture (Lightning Pitch)",
        tagline: "Lightning pitch competition for startups",
        description:
          "E-Venture — A dynamic entrepreneurship track in PRAGYAA that celebrates innovation, strategy, and business thinking. Lightning Pitch: Quick, impactful startup idea presentations testing creativity and persuasion.",
        icon: "Trophy",
        venue: "Auditorium",
        prizePool: 30000,
        entryFee: 199,
        coordinators: [
          { name: "Mr. Darshan Singh", phone: "9322199877" }
        ],
        faculty: "Dr. Milind Bhalerao",
        registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdQZTh6BkTzeKKF5ZiH9bpUafWRgDeAYq9pPB3FsVetnk4SyA/viewform?usp=dialog",
        rules: [
          {
            section: "Eligibility & Team",
            items: [
              "Open to all; individual or team (1–5 members)",
              "One registration per idea; multiple ideas require separate registrations",
              "Entry fee: ₹199 per team/individual"
            ]
          },
          {
            section: "Pitch Format",
            items: [
              "10-minute pitch + 5-minute Q&A per team",
              "11-slide deck structure required:",
              "1. Title Slide  2. Problem Statement  3. Solution  4. Target Market  5. Product Overview",
              "6. Revenue Model  7. Competitive Landscape  8. Go-to-Market Strategy",
              "9. Financial Overview (optional)  10. Team Introduction  11. Future Roadmap"
            ]
          },
          {
            section: "Judging Criteria",
            items: [
              "Innovation and uniqueness of the idea",
              "Problem-solution fit",
              "Market feasibility and potential",
              "Viability of the business model",
              "Execution strategy",
              "Team strength and credibility",
              "Presentation and communication skills"
            ]
          },
          {
            section: "Rules",
            items: [
              "Plagiarism or misrepresentation of ideas leads to immediate disqualification",
              "Presentations must stay within the allotted time",
              "Judges' decisions are final and binding"
            ]
          }
        ]
      },
      {
        id: "E-Venture (IPL Auction)",
        title: "E-Venture (IPL Auction)",
        tagline: "Business strategy competition modeled on IPL auction",
        description:
          "E-Venture — A dynamic entrepreneurship track in PRAGYAA that celebrates innovation, strategy, and business thinking. IPL Auction: A fun and strategic simulation of the Indian Premier League auction, where participants bid on players and form teams testing negotiation and planning skills.",
        icon: "Trophy",
        venue: "A4 Hall",
        prizePool: 10000,
        entryFee: 199,
        coordinators: [
          { name: "Mr. Darshan Singh", phone: "9322199877" }
        ],
        faculty: "Dr. Milind Bhalerao",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdwDsIvzLbtEAF1omUdj9abG15dOlCc4e5pltUWCD6T3MzAQA/viewform",
        rules: [
          {
            section: "Team & Budget",
            items: [
              "Open to all — no prior cricket knowledge required",
              "Teams of 3–5 members; each team acts as one IPL franchise",
              "Entry fee: ₹199 per team",
              "Fixed budget: ₹80 Crore per team — cannot be exceeded at any point"
            ]
          },
          {
            section: "Player Categories",
            items: [
              "Category A+ — Base price: ₹2 Crore",
              "Category A — Base price: ₹1 Crore",
              "Category B — Base price: ₹50 Lakh",
              "Minimum 15 players must be purchased per team"
            ]
          },
          {
            section: "Mandatory Squad Composition",
            items: [
              "At least 1 Batsman, 1 Bowler, 1 Wicketkeeper, 1 Allrounder",
              "At least 1 Uncapped Batsman, 1 Uncapped Bowler, 1 Uncapped Wicketkeeper, 1 Uncapped Allrounder",
              "Maximum 6 overseas players per squad"
            ]
          },
          {
            section: "Auction Rules",
            items: [
              "Fixed time limit per player during bidding",
              "Once sold, players cannot be re-auctioned",
              "Auctioneer's time decisions are final",
              "No team may exceed the ₹80 Crore budget at any point",
              "Penalties for rule violations: budget deduction, warnings, or disqualification"
            ]
          },
          {
            section: "Winning Criteria",
            items: [
              "Effective budget utilization",
              "Team balance and squad composition",
              "Completion of mandatory squad requirements",
              "Decision-making quality during the auction"
            ]
          }
        ]
      }
    ]
  }
};

export default eventData;
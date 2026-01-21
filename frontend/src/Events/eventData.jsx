
const eventData = {
  Departmental: {
    name: "Departmental Events",
    events: [
      {
        id: "ChemTrek (IDP)",
        title: "ChemTrek (IDP)",
        tagline: "Industry Defined Problem (IDP)",
        description:
          "A real-life challenge where students apply chemical engineering knowledge to solve industry-sourced problems and present practical solutions.",
          venue: "Chemical Engineering Department",
          icon: "Users",
          prizePool: 10000,
          entryFee: 199,

        
      },
      {
        id: "ChemTrek (Quiztillation)",
        title: "ChemTrek (Quiztillation)",
        tagline: "The Ultimate Chemical Quiz",
        description:
          "Quiztillation: A fast-paced quiz focused on core chemical engineering topics tested through multiple rounds.       ",
        icon: "Users",
        venue: "Chemical Engineering Department",
        prizePool: 3000,
          entryFee: 199,

      },
      {
        id: "Mecha Verse (Contraption Cascade)",
        title: "Mecha Verse (Contraption Cascade)",
        tagline: "Battle of the Bots",
        description:
          "Contraption: A creativity-driven event where participants design and construct an elaborate mechanical setup to solve industry ready challenges.",
        icon: "Users",
        venue: "Mechanical Engineering Department",
        prizePool: 10000,
          entryFee: 199,

      },
      {
        id: "Mecha Verse (CAD-WAR)",
        title: "Mecha Verse (CAD-WAR)",
        tagline: "Design. Innovate. Dominate.",
        description:
          "A design-oriented challenge where participants use CAD software to solve mechanical design problems under time constraints, testing accuracy, speed, and conceptual understanding.",
        icon: "Users",
        venue: "Mechanical Engineering Department",
        prizePool: 5000,
          entryFee: 99,
      },
      {
        id: "Mecha Verse (GEAR WAR)",
        title: "Mecha Verse (GEAR WAR)",
        tagline: "Gear. Solve. Dominate.",
        description:
          "A mechanical puzzle event focused on gear assemblies, where participants analyze, identify, and solve gear-based challenges testing mechanical intuition and problem-solving.",
        icon: "Users",
        venue: "Mechanical Engineering Department",
      },
      {
        id: "PESA-Pronergy (Lathe -X)",
        title: "PESA-Pronergy (Lathe -X)",
        tagline: "LatheX-The Turning Arena",
        description:
          "LatheX-The Turning Arena: LatheX provide a platform for students to show their lathe machine skills like turning, facing, knuring, etc and compete among each other.",
        icon: "Users",
        venue: "Production Engineering Department",
      },
      {
        id: "PESA-Pronergy (Designation)",
        title: "PESA-Pronergy (Designation)",
        tagline: "Product design hackathon",
        description:
          "Designathon - Product Design Hackathon: Designathon is basically product design competition where students design new or innovative design and also present their manufacturability and cost analysis.",
        icon: "Users",
        venue: "Production Engineering Department",
        prizePool: 10000,
          entryFee: 199,
      },
      {
        id: "ELITE (Technical Paper Presentation)",
        title: "ELITE (Technical Paper Presentation)",
        tagline: "Technical Paper Presentation",
        description:
          "An event where students present research papers or innovative ideas before experts to enhance research, technical, and presentation skills. Abstracts will be shortlisted for final presentation.",
        icon: "Users",
      },
      {
        id: "ELITE (Tech Quest)",
        title: "ELITE (Tech Quest)",
        tagline: "logical thinking, problem-solving skills",
        description:
          "A competitive technology-based challenge event conducted in multiple rounds to test participants' technical knowledge, logical thinking, problem-solving skills, and awareness of recent innovations",
        icon: "Users",
      },
      {
        id: "TESA-Texplorer2 ",
        title: "TESA-Texplorer ",
        tagline: "Style your partner",
        description:
          "Style Your Partner: A fun and creative event where participants design and style their partners using textile materials, showcasing innovation in fabric draping, color coordination, and trendsetting looks",
        icon: "Users",
        venue: "Textile Engineering Department",
        prizePool: 15000,
          entryFee: 199,
      },
      {
        id: "TESA-Texplorer ",
        title: "TESA-Texplorer ",
        tagline: "Draw your design",
        description:
          "Draw Your Design: A creative contest where participants sketch original textile or garment designs, emphasizing artistic skills, fabric texture representation, color schemes, and contemporary styling.",
        icon: "Users",
        venue: "Textile Engineering Department",
        prizePool: 5000,
          entryFee: 99,
      },
      {
        id: "TESA-Texplorer1 ",
        title: "TESA-Texplorer ",
        tagline: "TexQuiz",
        description:
          "TexQuiz: A competitive quiz focusing on textile science, technology, and industry trends that tests participants' knowledge of fibers, fabrics, manufacturing processes, and fashion history.",
        icon: "Users",
        venue: "Textile Engineering Department",
        prizePool: 5000,
          entryFee: 99,
      },
      {
        id: "CESA-Cenfest",
        title: "CESA-Cenfest",
        tagline: "Bridge Building",
        description:
          "Bridge Building: Classic engineering challenge-design & construct a strong bridge using ice-cream sticks. Show your structural skills and compete for maximum load capacity.",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
          entryFee: 49,
      },
      {
        id: "CESA-Cenfest1",
        title: "CESA-Cenfest",
        tagline: "CAD - WAR",
        description:
          " Convert a single-line plan into a professional double-line plan using CAD tools. Speed, accuracy, and drafting skills will decide the winner.",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
          entryFee: 49,
      },
      {
        id: "CESA-Cenfest3",
        title: "CESA-Cenfest",
        tagline: "Build Blind",
        description:
          "Build Blind: A fun twist on bridge building! Two members per team - one blindfolded builder, the other guiding. Bridges made with ice-cream sticks & Fevicol. Test your coordination and trust!.",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
          entryFee: 49,
      },
      {
        id: "CESA-Cenfest4",
        title: "CESA-Cenfest",
        tagline: "Tender X",
        description:
          "Tender X: Prepare a detailed tender/report as per given requirements. A real-world test of documentation, estimation, and presentation skills.",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
          entryFee: 49,
      },
      {
        id: "CESA-Cenfest5",
        title: "CESA-Cenfest",
        tagline: "Float a BO(a)T",
        description:
          "Build a boat with provided materials, then test it by applying weights. How much load can your boat carry before sinking? Put your design to the ultimate test!",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
          entryFee: 49,
      },
      {
        id: "CESA-Cenfest6",
        title: "CESA-Cenfest",
        tagline: "Town Planning",
        description:
          "Design a sustainable, well-structured miniature town layout based on given constraints. Participants must plan roads, utilities, zoning, public spaces, and infrastructure using smart urban-planning principles. Show your creativity, problem-solving, and ability to balance aesthetics with functionality just like a real city planner.",
        icon: "Users",
        venue: "Civil Engineering Department",
        prizePool: 5000,
          entryFee: 49,
      },
      {
        id: "EESA - Electrospark",
        title: "EESA - Electrospark",
        tagline: "Guess the component",
        description:
          "Guess the component: This is one type of game where one participant out of the team of two will get the component name he have to express to his team mate about behaviour of components and he needs to recognise component name.",
        icon: "Users",
        venue: "Electrical Engineering Department",
        prizePool: 5000,
          entryFee: 99,
      },
      {
        id: "EESA - Electrospark1",
        title: "EESA - Electrospark",
        tagline: "Voltage Voyage",
        description:
          "It is technical quize competition on all the core electrical concepts as well as the fundamentals.",
        icon: "Users",
        venue: "Electrical Engineering Department",
        prizePool: 5000,
          entryFee: 99,
      },
      {
        id: "EESA - Electrospark2",
        title: "EESA - Electrospark",
        tagline: "Breadboard Circuit Building",
        description:
          " Breadboard Circuit Building Competition: The competition is based on core electrical/electronics circuits to test your project circuit/any circuit implementation on breadboards .",
        icon: "Users",
        venue: "Electrical Engineering Department",
        prizePool: 5000,
          entryFee: 99,
      },
      {
        id: "ITSA",
        title: "ITSA",
        tagline: "DSA Knockout",
        description:
          " CodeQuest 2.0: DSA coding competition, is a competitive programming contest focused on Data Structures and Algorithms. Its aim is to improve logic building, time bound coding skills, and prepare students for coding interviews.",
        icon: "Users",
        venue: "CCF/Language Lab",
        prizePool: 7000,
          entryFee: 99,
      },
      {
        id: "ITSA1",
        title: "ITSA",
        tagline: "AI INNOVATORS(Gen AI workshop",
        description:
          " Workshop-Generative AI & Prompt Engineering, A hands on workshop introducing students to Generative Al, Large Language Models, Prompt Engineering techniques, and real world usage of Al tools",
        icon: "Users",
        venue: "CCF/Language Lab",
      },
      {
        id: "Oratex",
        title: "Oratex",
        tagline: "(By Oratory Language Club)",
        description:
          "Brief Description:  The event includes: Oratex is a 3-stage oratory competition designed to test participants' communication skills, spontaneity, and critical. [1] Speech Relay - A coordinated team-speaking round. [2] Debate - A structured argumentative round between teams.  [3] Extempore-An individual impromptu speaking round.",
        icon: "Users",
      },
      {
        id: "Math-E-Magic ",
        title: "Math-E-Magic",
        tagline: "(By Bhaskaracharya Maths  Club)",
        description:
          "Math-E-Magic: A competition with different rounds to check how good you are at math and logic.Includes both standard quiz questions and hard problems that make you think.You have to use math to find the right answers before the time runs out",
        icon: "Users",
        venue: "Admin Building",
        prizePool: 5000,
          entryFee: 49,
      },
      {
        id: "HACKIT",
        title: "HACKIT",
        tagline: "Code Clash 2.0",
        description:
          " Code Clash 2.0 is a 3-stage technical challenge designed to test participants' logic, coding ability, and real-time problem solving. The event includes:    A)Tech Quiz-A fast test of cybersecurity, programming, and technical fundamentals.  B)Scenario-Based Coding - Participants write code to solve given problem statements.   C)Surprise Round-Guess-the-output and rapid-fire questions.",
        icon: "Users",
        venue: "CCF/Language Lab",
        prizePool: 10000,
          entryFee: 99,
      },
    ],
  },

  creative: {
    name: "Creative Events",
    events: [
      {
        id: "E-Venture- IPL Auction",
        title: "E-Venture (IPL Auction)",
        tagline: "Business strategy competition modeled on IPL auction",
        description:
          "E Venture - A dynamic entrepreneurship track in PRAGYAA that celebrates innovation, strategy, and business thinking.IPL Auction: A fun and strategic simulation of the Indian Premier League auction, where participants bid on players and form teams testing negotiation and planning skills.",
        icon: "Trophy",
        venue: "A4 Hall",
        prizePool: 10000,
        entryFee: 199,

      },
      {
        id: "E-Venture- Startup Expo ",
        title: "E-Venture (Startup Expo)",
        tagline: "Startup Expo for innovative ventures",
        description:
          "E Venture - A dynamic entrepreneurship track in PRAGYAA that celebrates innovation, strategy, and business thinking.Startup Expo: Showcase your startup ideas and connect with investors and mentors. ",
        icon: "Trophy",
        venue: "PMC-CAD Road",
        prizePool: 15000,
          entryFee: 0.00,
      },
      {
        id: "E-Venture ",
        title: "E-Venture (Lightning Pitch)",
        tagline: "Lightning pitch competition for startups",
        description:
          "E Venture - A dynamic entrepreneurship track in PRAGYAA that celebrates innovation, strategy, and business thinking.Lightning Pitch: Quick, impactful startup idea presentations testing creativity and persuasion. ",
        icon: "Trophy",
        venue: "Auditorium",
        prizePool: 30000,
          entryFee: 49,
      },
      {
        id: "GameVerse",
        title: "GameVerse",
        tagline: "BGMI",
        description:
          "Enter the universe of ultimate gaming battles, where players compete in BGMI, Free Fire, and Valorant, showcasing skill, strategy, and teamwork to become the ultimate champion.",
        icon: "Star",
        venue: "CCF/Language Lab,EXTC Dept",
        prizePool: 5000,
          entryFee: 199,
      },
      {
        id: "GameVerse1",
        title: "GameVerse",
        tagline: "FreeFire Max",
        description:
          "Enter the universe of ultimate gaming battles, where players compete in BGMI, Free Fire, and Valorant, showcasing skill, strategy, and teamwork to become the ultimate champion.",
        icon: "Star",
        venue: "CCF/Language Lab,EXTC Dept",
        prizePool: 5000,
          entryFee: 199,
      },
      {
        id: "GameVerse2",
        title: "GameVerse",
        tagline: "Valorant",
        description:
          "Enter the universe of ultimate gaming battles, where players compete in BGMI, Free Fire, and Valorant, showcasing skill, strategy, and teamwork to become the ultimate champion.",
        icon: "Star",
        venue: "CCF/Language Lab,EXTC Dept",
        prizePool: 5000,
          entryFee: 199,
      },
      {
        id: "Galactic Glide",
        title: "Galactic Glide",
        tagline:
          "Soar beyond the skies with creativity, precision, and innovation",
        description:
          "An exciting aeromodelling competition where participants design, build, and fly model aircraft inspired by the spirit of exploration and innovation. Test your creativity, precision, and understanding of aerodynamics as you compete to make your aircraft soar the farthest and fastest-taking your ideas beyond the skies, into the galaxy.",
        icon: "Trophy",
        venue: "Green Campus",
        prizePool: 10000,
          entryFee: 199,
      },
      {
        id: "PRAGYAA Yuva Sansad",
        title: "PRAGYAA Yuva Sansad",
        tagline: "A platform for voice that will lead tomorrow",
        description:
          "PRAGYAA Yuva Sansad is a youth-driven parliamentary simulation designed to foster leadership, critical thinking, and policy-making skills. Participants engage in structured debates on national and societal issues, propose meaningful solutions, and experience the workings of a real legislative assembly. The event aims to empower young voices to think analytically, communicate effectively, and contribute to a progressive and informed future.",
        icon: "Trophy",
        venue: "A4 Hall",
        prizePool: 10000,
          entryFee: 99,
      },
      {
        id: "Gyan PRAGYAA ",
        title: "Gyan PRAGYAA ",
        tagline: "National Level Poster Presentation",
        description:
          "A national-level poster presentation competition at PRAGYAA, where students from across the country showcase their innovative ideas and projects. This platform focuses on technology for a sustainable and intelligent future, encouraging creativity, research, and impactful solutions that can shape tomorrow.",
        icon: "Trophy",

      },
      {
        id: "Inno Verse",
        title: "Inno Verse",
        tagline: "Project Exhibition & Competition.",
        description:
          "InnoVerse in PRAGYAA-Multiverse of Innovation, is a dynamic showcase of engineering talent where students present projects that blend technology, innovation, and multidisciplinary thinking. The expo serves as a platform for emerging technologists to demonstrate working models, research projects, design solutions, and technical creativity that contribute to societal and industrial progress.",
        icon: "Trophy",
        venue: "PMC-EMC Road",
        prizePool: 50000,
          entryFee: 199,
      },
      {
        id: "PRAGYAA Movie Night",
        title: "PRAGYAA Movie Night",
        tagline: "A Journey Through Time & Shadows",
        description:
          "Movies:Interstellar - Embark on a mind-bending journey across space and time.The Dark Knight-Witness the rise of a legend in the battle between justice and chaos.",
        icon: "Star",
        venue: "Auditorium",
      },
      {
        id: "FarOff",
        title: "FarOff",
        tagline: "Treasure Hunt",
        description:
          " A thrilling treasure hunt where participants solve clues, crack codes, and race against time to find hidden treasures. A test of wit, teamwork, and adventure.",
        icon: "Star",
        venue: "Entire Campus",
        prizePool: 5000,
          entryFee: 99,
      },
      {
        id: "CheckMate",
        title: "CheckMate",
        tagline: "Chess Tournament",
        description:
          " A chess competition challenging players' strategy, foresight, and critical thinking in a battle of minds.",
        icon: "Star",
        venue: "Admin GF/Gymnasium",
        prizePool: 5000,
          entryFee: 99,
      },
      {
        id: "Reelify",
        title: "Reelify",
        tagline: "Reel Making Competition",
        description:
          " Reelify is PRAGYAA's ultimate Reel Making Competition where creativity, storytelling, and innovation collide.Participants are challenged to craft captivating short videos that showcase their imagination, skills, and unique perspective.",
        icon: "Star",
        prizePool: 5000,
          entryFee: 99,
      },
    ],
  },
};

export default eventData;

export type WorkItem = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags: string[];
  type: "project" | "experience";
  media?: string[];
};

export const workItems: WorkItem[] = [
  // ── Projects ──────────────────────────────────────────────
  {
    slug: "brewstige",
    title: "Brewstige",
    subtitle: "Hackathon · Runner-Up",
    date: "2026",
    type: "project",
    description:
      "24-hour hackathon at Hack Belfast 2026 and we created Brewstiege, an app for discovering new coffee shops with a Strava-inspired UI and design. I was responsible for leading the front end for our team. Team became runner-up, won a £500 prize, and landed four paying customers..",
    tags: ["UI Design", "Product Development", "Frontend Devlopment"],
    media: ["/images/brewstige-1782323589314.jfif",
    "/images/brewstige-1782323601267.jfif",
    "/images/brewstige-1782323610400.jfif"
  ],
  },
  {
    slug: "world-cup-predictor",
    title: "World Cup Predictor",
    subtitle: "Data Science",
    date: "2026",
    type: "project",
    description:
      "Fed 49,000+ international football matches into a Python model to predict the 2026 World Cup. Used Elo ratings, host advantage, and recent form.",
    tags: ["Python", "Data Analysis", "Sports Science"],
    media: ["/images/world-cup-predictor-1782386018679.png",
    "/images/world-cup-predictor-1782386023099.png"
  ,
    "/images/world-cup-predictor-1782386027291.png"
  ],
  },
  {
    slug: "networth",
    title: "NetWorth",
    subtitle: "Personal Finance App",
    date: "2026",
    type: "project",
    description:
      "Personal finance app built to solve own problem of tracking money across my investing accounts, a current account, credit cards and bills. Pulled everything into one place for a clear view of my finances.",
    tags: ["App Development", "Finance", "Data"],
    media: ["/images/networth-1782325974025.png",
    "/images/networth-1782329796574.png"
  ],
  },
  {
    slug: "lumideck",
    title: "Lumideck",
    subtitle: "AI EdTech Startup · Co-Founder",
    date: "2026",
    type: "project",
    description:
      " I co-founded LumiDeck with a friend before exam season to solve the problem of flashcards taking too long to make. We built a flashcard app to free up study time. I handled social media and front end while my friend built back end and logistics.",
    tags: ["AI", "EdTech", "Product"],
    media: ["/images/lumideck-1782398753194.png",
    "/images/lumideck-1782398753220.png"
  ],
  },
  {
    slug: "life-quest",
    title: "Life Quest",
    subtitle: "Educational Technology",
    date: "2026",
    type: "project",
    description:
      "I worked with a group of four to solve a problem in education for an event. We created LifeQuest, a gamified life skills platform for 16 to 25 year olds. We built it to cover subjects that aren't taught in school, like personal finance, career planning, how to be an adult, cooking, and fitness.",
    tags: ["EdTech", "UX Design", "Gamification"],
    media: ["/images/life-quest-1782324434817.jpg", "/images/life-quest-1782324434839.jpg", "/images/life-quest-1782324434971.jpg"],
  },
  {
    slug: "biomechanics-project",
    title: "Biomechanics Project",
    subtitle: "Sports Science",
    date: "2025",
    type: "project",
    description:
      "Independent biomechanics study quantifying limb dominance in football kicking technique. Designed and ran a controlled motion capture protocol, filming dominant vs non-dominant instep kicks at 60Hz, then used Kinovea motion analysis software to extract and compare joint kinematics across hip flexion, knee flexion-extension, and shank angle at ball contact. Identified measurable kinematic markers — including a 22° gap in knee flexion and a 7° gap in backswing range between limbs — that explain why one side produces a more efficient, higher-velocity kick, and benchmarked findings against peer-reviewed kicking biomechanics research.",
    tags: ["Biomechanics", "Performance Analysis", "Research"],
    media: ["/images/biomechanics-project-1782323700667.pdf"],
  },
  {
    slug: "performance-analysis",
    title: "Performance Analysis",
    subtitle: "Sports Science",
    date: "2025",
    type: "project",
    description:
      "Analysed match footage and athlete performance data. Tactical decision-making accuracy went up 15% across the simulated scenarios we ran.",
    tags: ["Performance Analysis", "Data", "Sports Science"],
    media: ["/images/performance-analysis-1782324973811.png",
    "/images/performance-analysis-1782324983256.png"
  ],
  },

  {
    slug: "exercise-physiology",
    title: "Applied Exercise Physiology Testing",
    subtitle: "Sports Science",
    date: "2025",
    type: "project",
    description:
      "Designed and ran a full aerobic capacity assessment on a live participant — incremental treadmill protocol from 10–15 km/h, collecting VO₂ and blood lactate data in real time. Used it to classify training zones, calculate running economy at each speed, and analyse the VO₂–RQ relationship to pinpoint the shift from fat to carb metabolism. Benchmarked against Seiler & Kjerland's polarised training research to turn raw physiology data into practical zone recommendations for endurance athletes.",
    tags: ["Exercise Physiology", "Sports Science", "Data Analysis"],
    media: ["/images/exercise-physiology-1782325160071.pdf"],
  },

  // ── Experience ────────────────────────────────────────────
  {
    slug: "performance-analyst-intern",
    title: "Performance Analyst Intern",
    subtitle: "Performa Sports, Belfast",
    date: "Jan 2026 – Feb 2026",
    type: "experience",
    description:
      "Analysed 20+ hours of match footage to identify performance trends, translating findings into structured feedback for coaches and participants. Compiled clear, organised reports combining data and video analysis, strengthening reporting and record-keeping skills while building the ability to interpret data and communicate insights effectively in a live sporting environment.",
    tags: ["Performance Analysis", "Video Analysis", "Reporting"],
    media: ["/images/performance-analyst-intern-1782327349310.jpg",
    "/images/performance-analyst-intern-1782327373660.jpg"
  ,
    "/images/performance-analyst-intern-1782327381057.jpg"
  ],
  },
  {
    slug: "sports-coach",
    title: "Sports Coach",
    subtitle: "Basketball & Badminton",
    date: "2025-2026",
    type: "experience",
    description:
      "Planned and delivered structured coaching sessions for groups of 15–20 participants, driving engagement, skill development, teamwork, and confidence in young people through inclusive, adaptive session design. Tailored delivery to suit varying abilities, increasing participation in physical activity and fostering a safe, positive environment that promoted long-term health and active lifestyles.",
    tags: ["Coaching", "Session Delivery", "Youth Development"],
    media: ["/images/sports-coach-1782327406395.pdf"],
  },
  {
    slug: "student-ambassador",
    title: "Student Ambassador",
    subtitle: "Ulster University",
    date: "2025-2026",
    type: "experience",
    description:
      "Delivered campus tours and presentations to 200+ prospective students and families, shaping a positive applicant experience and supporting increased engagement with the university. Provided a high standard of customer service, building rapport with visitors and creating a welcoming first impression of the institution.",
    tags: ["Presenting", "Customer Service", "Engagement"],
    media: ["/images/student-ambassador-1782327425350.jpg"],
  },
  {
    slug: "social-media-manager",
    title: "Social Media Manager",
    subtitle: "South Asian Society",
    date: "2025-2026",
    type: "experience",
    description:
      "Managed content strategy and creation for the society, driving a 30%+ increase in event engagement and improved social media reach through targeted, audience-focused content.",
    tags: ["Social Media", "Content Creation", "Marketing"],
    media: ["/images/social-media-manager-1782327455314.pdf"],
  },
  {
    slug: "freelance-designer",
    title: "Freelance Graphic Designer & Video Editor",
    subtitle: "Self-employed",
    date: "Ongoing",
    type: "experience",
    description:
      "Delivered 20+ client projects on time, producing high-quality digital content that boosted client engagement while building strong commercial skills in client communication, negotiation, sales, branding, and marketing strategy.",
    tags: ["Graphic Design", "Video Editing", "Client Work"],
    media: ["/images/freelance-designer-1782327475056.png",
    "/images/freelance-designer-1782327481905.png"
  ,
    "/images/freelance-designer-1782327488506.png"
  ],
  },
  {
    slug: "ugc-creator",
    title: "UGC Content Creator",
    subtitle: "Multiple brands",
    date: "Ongoing",
    type: "experience",
    description:
      "Produced branded content for 5+ companies, generating 100K+ total views and lifting audience engagement rates by 20%+, while developing expertise in digital marketing, sales communication, audience targeting, and brand-led content strategy.",
    tags: ["UGC", "Digital Marketing", "Content Strategy"],
    media: ["/images/ugc-creator-1782327513939.png",
    "/images/ugc-creator-1782327522044.png"
  ,
    "/images/ugc-creator-1782327528699.png"
  ],
  },
  {
    slug: "adobe-ambassador",
    title: "Adobe Student Ambassador",
    subtitle: "Adobe",
    date: "Ongoing",
    type: "experience",
    description:
      "Selected as one of a global network of student representatives for Adobe, promoting creativity and digital skills through events, content creation, and peer learning initiatives that strengthened student engagement with the Adobe Creative Cloud ecosystem.",
    tags: ["Adobe", "Community", "Creative Skills"],
    media: ["/images/adobe-ambassador-1782327570463.jpg"],
  },
  {
    slug: "anthropic-courses",
    title: "Anthropic Courses",
    subtitle: "Anthropic",
    date: "2025",
    type: "experience",
    description:
      "Completed Anthropic's AI Fluency for Students and Introduction to Claude Cowork courses, covering responsible AI collaboration through the 4D Framework (Delegation, Description, Discernment, Diligence).",
    tags: ["AI", "Anthropic", "Professional Development"],
    media: ["/images/anthropic-courses-1782329771630.png",
    "/images/anthropic-courses-1782329776134.png"
  ],
  },
  {
    slug: "bright-network",
    title: "Technology & Engineering Virtual Internship",
    subtitle: "Bright Network",
    date: "2026",
    type: "experience",
    description:
      "Completed a 4-day virtual internship connecting with 30+ leading employers including Google and Lloyds Banking Group, engaging in industry workshops, networking sessions, and a sector skills project designed to mirror graduate-level work, earning a completion certificate.",
    tags: ["Networking", "Industry Skills", "Tech"],
    media: ["/images/bright-network-1782385844025.png"],
  },
];

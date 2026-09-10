import {
  Cpu,
  Wrench,
  Microscope,
  Megaphone,
  Camera,
  Sparkles,
  Calendar,
  Users,
  Trophy,
  Handshake,
  Network,
  TrendingUp,
  BookOpen,
  Hammer,
  Radar,
  Zap,
  GraduationCap,
  Boxes,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Gauge,
  Thermometer,
  Move3d,
  Waves,
  CircuitBoard,
} from "lucide-react";

/* All copy and lists below are intentionally easy for BBB to update. */

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Wings", href: "#wings" },
  { label: "Team", href: "#team" },
  { label: "Hardware", href: "#hardware" },
  { label: "Membership", href: "#membership" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "3000+", label: "Community Reach" },
  { value: "4", label: "Specialized Wings" },
  { value: "Hands-On", label: "Learning" },
  { value: "Real-World", label: "Projects" },
];

export const ABOUT_FEATURES = [
  { icon: BookOpen, title: "Learn", text: "Practical technical knowledge." },
  {
    icon: Hammer,
    title: "Build",
    text: "Access hardware and build real projects.",
  },
  {
    icon: Trophy,
    title: "Compete",
    text: "Prepare for robotics competitions and challenges.",
  },
];

export const WINGS = [
  {
    code: "TRL",
    name: "Technical Research & Logistics",
    line: "Where engineering meets experimentation.",
    icons: [Cpu, Wrench, Microscope],
    accent: "green",
  },
  {
    code: "MM",
    name: "Media & Marketing",
    line: "Turning ideas into a recognizable digital presence.",
    icons: [Megaphone, Camera, Sparkles],
    accent: "red",
  },
  {
    code: "CEM",
    name: "Community & Event Management",
    line: "Creating experiences that bring innovators together.",
    icons: [Calendar, Users, Trophy],
    accent: "green",
  },
  {
    code: "PRF",
    name: "Public Relations & Finance",
    line: "Building partnerships that move BBB forward.",
    icons: [Handshake, Network, TrendingUp],
    accent: "red",
  },
];

export const BENEFITS = [
  {
    icon: Boxes,
    title: "Hardware Access",
    text: "Access a growing Hardware Library containing development boards, sensors, motors, displays, and other robotics components.",
  },
  {
    icon: Zap,
    title: "Weekly Practical Sessions",
    text: "Learn by actually building instead of only watching tutorials.",
  },
  {
    icon: GraduationCap,
    title: "Expert Mentorship",
    text: "Get guidance while working on projects and solving technical problems.",
  },
  {
    icon: Trophy,
    title: "Competition Preparation",
    text: "Develop the practical skills needed for robotics competitions.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Meet other students and innovators interested in robotics and technology.",
  },
];

export const HARDWARE_CATEGORIES = [
  {
    title: "Development Boards",
    icon: Cpu,
    items: ["Arduino Uno R3", "ESP32 NodeMCU", "Arduino Nano"],
  },
  {
    title: "Sensors",
    icon: Radar,
    items: [
      "HC-SR04",
      "IR Line Tracking",
      "VL53L0X",
      "Sharp IR Distance Sensor",
      "Pulse & Heart Rate",
      "BH1750",
      "TCS3200 Color Sensor",
      "Load Cell + HX711",
      "Piezo Sensor",
      "Vibration Sensor",
      "Flame Sensor",
    ],
  },
  {
    title: "Environment",
    icon: Thermometer,
    items: [
      "LDR",
      "Turbidity Sensor",
      "DHT22",
      "BMP280",
      "Soil Moisture Sensor",
    ],
  },
  {
    title: "Motion & Connectivity",
    icon: Move3d,
    items: [
      "PIR",
      "ESP32-CAM",
      "NEO-6M GPS",
      "Hall Effect Sensor",
      '0.96" OLED',
    ],
  },
  {
    title: "Motor & Drive",
    icon: Gauge,
    items: ["NEMA 17 Stepper", "L298N", "BO Motors", "Wheels"],
  },
  {
    title: "Power & Prototyping",
    icon: Wrench,
    items: [
      "18650 Batteries",
      "LiPo Batteries",
      "Breadboards",
      "Jumper Wires",
      "Switches",
      "UPVC Boards",
      "OTG Adapters",
    ],
  },
];

export const PLANS = [
  {
    id: "6m",
    duration: "6 Months",
    price: "৳899",
    tag: null,
    features: [
      "6 Months Access",
      "Hardware Library",
      "Free Weekly Workshops",
      "10% Course Discount",
    ],
    cta: "Choose 6 Months",
  },
  {
    id: "1y",
    duration: "1 Year",
    price: "৳1,499",
    tag: "MOST POPULAR",
    features: [
      "12 Months Access",
      "Custom BBB Jersey",
      "Hardware Library",
      "Free Weekly Workshops",
      "5–10% Course Discounts",
    ],
    cta: "Choose 1 Year",
  },
  {
    id: "30m",
    duration: "30 Months",
    price: "৳2,499",
    tag: "BEST VALUE",
    note: "24 Months + 6 Months FREE",
    features: [
      "30 Months Total Access",
      "Custom BBB Jersey",
      "Hardware Library",
      "Free Weekly Workshops",
      "10–15% Course Discounts",
    ],
    cta: "Choose 30 Months",
  },
];

export const EVENTS = [
  {
    category: "Workshop",
    title: "Arduino Fundamentals",
    text: "Hands-on introduction to microcontrollers and sensors.",
    date: "Date to be announced",
  },
  {
    category: "Workshop",
    title: "Build Your First Line Follower",
    text: "A practical robotics workshop focused on sensors, motors, and control.",
    date: "Date to be announced",
  },
  {
    category: "Bootcamp",
    title: "Robotics Competition Bootcamp",
    text: "Project development and competition-focused preparation.",
    date: "Date to be announced",
  },
];

export const PROJECTS = [
  { title: "Line Followers", icon: Waves },
  { title: "Obstacle Avoiding Robots", icon: Radar },
  { title: "IoT Projects", icon: Network },
  { title: "ESP32 Projects", icon: Cpu },
  { title: "Sensor-Based Systems", icon: Gauge },
  { title: "Autonomous Robotics", icon: CircuitBoard },
];

export const HOW_IT_WORKS = [
  { number: "01", title: "Join", text: "Become part of the community." },
  {
    number: "02",
    title: "Learn",
    text: "Attend workshops and practical sessions.",
  },
  {
    number: "03",
    title: "Build",
    text: "Use hardware and mentorship to create projects.",
  },
  {
    number: "04",
    title: "Compete",
    text: "Take your skills into challenges and real-world work.",
  },
];

export const SOCIALS = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61576089172777",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/bot_buddies_bd/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@botbuddies.official",
    label: "YouTube",
  },
];

/* ------------------------------------------------------------------ */
/*  Team data — edit this section to update BBB's team.                */
/*  Replace the `image` paths with real photos and fill in real        */
/*  names, bios, and social links when ready.                          */
/* ------------------------------------------------------------------ */

export const WING_LABELS = {
  TRL: "Technical Research & Logistics",
  MM: "Media & Marketing",
  CEM: "Community & Event Management",
  PRF: "Public Relations & Finance",
};

export const founder = {
  name: "Fahmid Al Sazid",
  role: "Founder",
  email: "alsazid899@gmail.com",
  image: "/sazid.jpeg",
  bio: "Short founder biography goes here. Keep this editable.",
  linkedin: "#",
  facebook: "#",
  github: "",
  website: "",
};

export const coFounders = [
  // {
  //   name: "Md. Tofazzal Ahmed Sany",
  //   role: "Co-Founder & Director, TRL",
  //   email: "tofazzalahmedsany@gmail.com",
  //   image: "/sani.png",
  //   bio: "Short bio goes here. Keep this editable.",
  //   linkedin: "#",
  //   facebook: "#",
  //   github: "",
  //   website: "",
  // },
];

export const directors = [
  {
    name: "Md. Tofazzal Ahmed Sany",
    role: "Director",
    email: "tofazzalahmedsany@gmail.com",
    wing: "TRL",
    wingName: WING_LABELS.TRL,
    image: "/sani.png",
    bio: "",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Mohammad Tanjim Rahman Talha",
    role: "Director",
    email: "rahmantanjim0008@gmail.com",
    wing: "MM",
    wingName: WING_LABELS.MM,
    image: "/talha2.png",
    bio: "",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Aditya Chanda",
    role: "Director",
    email: "aadityaa3555@gmail.com",
    wing: "CEM",
    wingName: WING_LABELS.CEM,
    image: "/aditya.jpeg",
    bio: "",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Ayman Awosaf Islam",
    role: "Director",
    email: "iamayman2019@gmail.com",
    wing: "PRF",
    wingName: WING_LABELS.PRF,
    image: "/ayman.png",
    bio: "",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Ahnaf Faiaz",
    role: "Director",
    email: "ahnaffaiaz2727@gmail.com",
    wing: "",
    wingName: "",
    image: "/ahnaf.jpeg",
    bio: "",
    linkedin: "#",
    facebook: "#",
  },
];

export const executiveMembers = [
  {
    name: "Md Yeamin Chowdhury",
    role: "Executive Member",
    email: "chowdhuryyeamin07@gmail.com",
    wing: "TRL",
    image: "/yeamin.png",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Bushra Rahman Khan",
    role: "Executive Member",
    email: "areeyanakhan653@gmail.com",
    wing: "MM",
    image: "/bushra.png",
    linkedin: "#",
    facebook: "#",
  },

  {
    name: "MD:Muntajer Rahman Jayedi",
    role: "Executive Member",
    email: "jayedirahman@gmail.com",
    wing: "CEM",
    image: "/jayedi.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Chowdhury Muhtadi Al Mumith",
    role: "Executive Member",
    email: "almumith1@gmail.com",
    wing: "PRF",
    image: "/mumit.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Ayush Sarker",
    role: "Executive Member",
    email: "biplab.mitaz@gmail.com",
    wing: "TRL",
    image: "/ayush.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Arefin Aryan",
    role: "Executive Member",
    email: "arefinaryan55@gmail.com",
    wing: "MM",
    image: "/Aryan.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Ishfaque J. Sultan",
    role: "Executive Member",
    email: "ishfaqsultan19@gmail.com",
    wing: "CEM",
    image: "/sultan.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Abdullah All Seyam",
    role: "Executive Member",
    email: "siamhossain6217@gmail.com",
    wing: "PRF",
    image: "/seyam.PNG",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Mikhdad Balayet Chowdhury",
    role: "Executive Member",
    email: "mikhdadchowdhury@gmail.com",
    wing: "TRL",
    image: "/mikdad.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Mahi afja mashfi",
    role: "Executive Member",
    email: "mashfiafja@gmail.com",
    wing: "MM",
    image: "/mashfi.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Himel Das",
    role: "Executive Member",
    email: "himeldas16lkd@gmail.com",
    wing: "TRL",
    image: "/himel.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Mahnaj Gazi Mahima",
    role: "Executive Member",
    email: "nvmmahima16@gmail.com",
    wing: "MM",
    image: "/mahima.png",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Tasnima Maria Chowdhury",
    role: "Executive Member",
    email: "maria.chowdhury771@gmail.com",
    wing: "MM",
    image: "/demo-girl.png",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Fuzayel Ahmed Rahul",
    role: "Executive Member",
    email: "adeerakter17@gmail.com",
    wing: "MM",
    image: "/rahul.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Myth Samanta Sarker",
    role: "Executive Member",
    email: "hellomythsamanta@gmail.com",
    wing: "TRL",
    image: "/sarkar.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Mahiya Jannat Sunna",
    role: "Executive Member",
    email: "Jannatmahiya2399@gmail.com",
    wing: "PRF",
    image: "/jannat.png",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Imran Ahmed Evan",
    role: "Executive Member",
    email: "imramsamin24@gmail.com",
    wing: "PRF",
    image: "/imran.jpeg",
    linkedin: "#",
    facebook: "#",
  },
];

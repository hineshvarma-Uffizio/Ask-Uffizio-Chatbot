/**
 * Uffizio Knowledge Base & Intelligent Response Engine
 * Contains all official product details, features, specifications, and contextual response generators
 * for Uffizio (Telematics, Commute, IOTech, Hardware, and Enterprise Solutions).
 */

const UFFIZIO_DATA = {
  company: {
    name: "Uffizio",
    tagline: "Telematics & IoT Solutions for Business Optimization",
    description: "Uffizio is a leading global B2B telematics and IoT software provider with over 25 years of industry excellence, serving clients across 100+ countries with 500,000+ connected assets.",
    experience: "25+ Years",
    globalReach: "100+ Countries",
    trackedAssets: "500,000+ Assets",
    devicesIntegrated: "1,500+ GPS & IoT Hardware Models",
    headquarters: "India & European Operations",
    support: "24/7 Global Technical Support & Helpdesk",
    website: "https://uffizio.com",
    contactUrl: "https://uffizio.com/contact-us",
    demoUrl: "https://uffizio.com/contact-us#demo",
    helpdeskUrl: "https://helpdesk.uffizio.com/tickets",
    blogUrl: "https://uffizio.com/category/blog",
    whatsappUrl: "https://wa.me/919876543210?text=Hi%20Uffizio,%20I%20would%20like%20to%20connect%20with%20your%20team"
  },

  categories: [
    {
      id: "telematics",
      name: "Telematics & Fleet",
      badge: "Flagship Software Suite",
      description: "Advanced vehicle tracking, fuel theft prevention, eco-driving, and complete fleet management solutions."
    },
    {
      id: "commute",
      name: "Commute & Transit",
      badge: "Mobility & Safety",
      description: "Student safety, corporate employee transport, and smart public transit routing systems."
    },
    {
      id: "iotech",
      name: "IOTech & Workforce",
      badge: "Industry 4.0 & Operations",
      description: "Field team tracking, task automation, and industrial energy consumption monitoring."
    },
    {
      id: "hardware",
      name: "Hardware & Sensors",
      badge: "1500+ Integrated Devices",
      description: "Seamless compatibility with Teltonika, Concox, Queclink, Suntech, Ruptela, and BLE sensors."
    }
  ],

  products: {
    trakzee: {
      name: "Trakzee",
      category: "Telematics",
      tagline: "Advanced Fleet Management Software",
      overview: "Comprehensive telematics software designed for enterprise fleet owners, logistics operators, and transport companies to minimize fuel expenditure, stop vehicle misuse, and optimize fleet performance.",
      features: [
        "Real-time GPS vehicle tracking with sub-second latency",
        "Digital fuel monitoring & instant fuel theft alerts (drain/fill)",
        "Driver behavior analysis (harsh braking, rapid acceleration, idling)",
        "Dynamic geofencing, route planning & POI deviation alerts",
        "Predictive maintenance schedules & tire pressure monitoring (TPMS)",
        "Remote engine immobilization & temperature tracking for cold chain",
        "White-label branding for telematics service providers"
      ],
      industries: ["Logistics & Cargo", "Heavy Construction", "Cold Chain Logistics", "Rental & Leasing", "Mining"],
      url: "https://uffizio-telematics.com/fleet-management-software/",
      icon: "truck"
    },

    smartWaste: {
      name: "Smart Waste",
      category: "Telematics",
      tagline: "Intelligent Waste Collection Software",
      overview: "Smart municipal and private waste management software providing ultrasonic bin fill monitoring, dynamic collection route planning, and dump tracking.",
      features: [
        "Ultrasonic bin fill-level monitoring via IoT sensors",
        "Dynamic route generation prioritizing only full bins",
        "Automated collection verification via RFID & geo-tagging",
        "Citizen grievance portal and driver mobile app",
        "Weight sensor integration & landfill trip verification"
      ],
      industries: ["Municipal Corporations", "Private Waste Contractors", "Industrial Campuses"],
      url: "https://uffizio-telematics.com/waste-management-system/",
      icon: "trash"
    },

    gridzee: {
      name: "Gridzee",
      category: "Telematics",
      tagline: "Indoor Tracking & Asset Monitoring",
      overview: "High-precision indoor positioning software utilizing BLE beacons, Wi-Fi tags, and UWB to locate equipment, personnel, and inventory inside buildings where GPS fails.",
      features: [
        "Sub-meter indoor positioning using BLE Beacons & UWB",
        "Zone-based alerts & automated indoor geofences",
        "Hospital equipment & patient wander tracking",
        "Warehouse pallet & forklift movement tracking",
        "Emergency SOS beaconing with floor-level detection"
      ],
      industries: ["Warehouses & 3PL", "Hospitals & Healthcare", "Manufacturing Plants", "Airports"],
      url: "https://uffizio-telematics.com/indoor-tracking-software/",
      icon: "building"
    },

    petzee: {
      name: "Petzee",
      category: "Telematics",
      tagline: "Smart Pet Tracking & Wellness Software",
      overview: "Dedicated pet GPS tracking platform enabling pet owners and shelters to set safe zones, view health activity, and receive instant breakout alerts.",
      features: [
        "Real-time live GPS collar tracking with light & sound buzzer",
        "Virtual safe zone (geofence) breakout alerts",
        "Activity, sleep, and fitness calorie tracking",
        "Multi-pet management dashboard with veterinary records"
      ],
      industries: ["Pet Owners", "Veterinary Clinics", "Pet Care Centers", "Animal Shelters"],
      url: "https://uffizio-telematics.com/pet-tracking-software/",
      icon: "heart"
    },

    elexee: {
      name: "Elexee",
      category: "Telematics",
      tagline: "Electric Vehicle (EV) Fleet Management",
      overview: "Specialized telematics platform crafted for EV fleets, tracking battery State of Charge (SoC), charging cycles, thermal behavior, and driving range.",
      features: [
        "Real-time Battery State of Charge (SoC) & Health (SoH) monitoring",
        "Smart charging station routing & empty battery prevention",
        "Regenerative braking efficiency & energy consumption metrics",
        "Battery temperature & thermal anomaly warnings",
        "Total Cost of Ownership (TCO) calculator vs ICE vehicles"
      ],
      industries: ["EV Fleet Operators", "Last-Mile Delivery EVs", "Electric Bus Operators", "EV Rental Services"],
      url: "https://uffizio-telematics.com/electric-fleet-management-software/",
      icon: "battery-charging"
    },

    trakzeeMini: {
      name: "Trakzee Mini",
      category: "Telematics",
      tagline: "Personal Vehicle Tracking & Security",
      overview: "Lightweight, user-friendly mobile application and software tailored for personal car and motorcycle owners seeking theft defense and loved-one safety.",
      features: [
        "Instant ignition ON/OFF alerts on smartphone",
        "Remote engine cut-off from anywhere",
        "Parking fence alarm against towing or tampering",
        "Speed limit alerts and daily driving history replay"
      ],
      industries: ["Personal Car Owners", "Motorcycle Riders", "Small Family Fleets"],
      url: "https://uffizio-telematics.com/personal-vehicle-tracking/",
      icon: "shield"
    },

    trakzeeGsm: {
      name: "Trakzee GSM",
      category: "Telematics",
      tagline: "SIM-Based GPS-Free Tracking Software",
      overview: "Zero-hardware tracking solution that leverages cellular GSM cell-tower triangulation to track third-party market trucks and leased drivers without installing hardware.",
      features: [
        "No GPS device or upfront hardware purchase needed",
        "Works with driver consent via standard SMS / WhatsApp",
        "Tracks basic location and transit milestones across states",
        "Cost-effective for spot-hired or ad-hoc logistics trucks"
      ],
      industries: ["Spot Freight Brokers", "Third-Party Logistics (3PL)", "Ad-hoc Transporters"],
      url: "https://uffizio-telematics.com/sim-based-tracking-software/",
      icon: "smartphone"
    },

    smartbus: {
      name: "Smartbus",
      category: "Commute",
      tagline: "School Bus Tracking & Student Safety Suite",
      overview: "Complete school transport ecosystem with dedicated apps for School Admins, Transport Managers, Drivers, and Parents ensuring students reach safely every day.",
      features: [
        "Parent Mobile App with live bus ETA and boarding/drop push alerts",
        "RFID / NFC student card scanning during bus boarding and exit",
        "Driver navigation app with turn-by-turn route adherence",
        "Over-speeding, unscheduled stop, and rash driving safety alarms",
        "Emergency SOS button for drivers and automatic emergency alerts"
      ],
      industries: ["K-12 Schools", "Colleges & Universities", "Private Student Transporters"],
      url: "https://uffizio-commute.com/school-bus-monitoring-software",
      icon: "bus"
    },

    rosterz: {
      name: "Rosterz",
      category: "Commute",
      tagline: "Corporate Employee Transportation Software",
      overview: "Automated corporate employee commute platform handling dynamic shift scheduling, route clustering, female employee night-travel safety, and escort management.",
      features: [
        "Automated rostering and intelligent route clustering algorithms",
        "Digital boarding verification with OTP / QR Code",
        "Safe Reach verification for night shifts with panic button / SOS",
        "Vendor billing automation based on GPS distance vs planned distance",
        "Dedicated Employee, Driver, and Transport Desk applications"
      ],
      industries: ["BPOs & Call Centers", "IT & Tech Hubs", "Financial Institutions", "24/7 Manufacturing Facilities"],
      url: "https://uffizio-commute.com/employee-transport-software",
      icon: "users"
    },

    smartTranzit: {
      name: "SmartTranzit",
      category: "Commute",
      tagline: "Public Transit & City Bus Management",
      overview: "Comprehensive transit management system for public buses, shuttles, and light rail, providing schedule adherence, passenger information systems (PIS), and ridership analytics.",
      features: [
        "Passenger Information Display (PIS) integration with dynamic ETA",
        "Schedule adherence monitoring & automated headway control",
        "Fleet health and on-route dispatch adjustment",
        "Ticketing & passenger footfall counter integration"
      ],
      industries: ["City Municipal Transport", "Inter-City Coach Lines", "Airport & University Shuttles"],
      url: "https://uffizio-commute.com/public-transportation-software",
      icon: "navigation"
    },

    taskeye: {
      name: "Taskeye",
      category: "IOTech",
      tagline: "Field Employee Tracking & Task Management",
      overview: "Mobile-first workforce management platform that tracks field staff attendance, live movement, client visits, task completion, and travel reimbursements.",
      features: [
        "Geo-fenced attendance marking (Selfie + GPS verification)",
        "Live location tracking of sales and service technicians",
        "Task assignment, milestone checklist, and signature capture",
        "Automated travel allowance (TA/DA) distance calculation",
        "Offline mode with automated data sync once network resumes"
      ],
      industries: ["Field Sales & Marketing", "HVAC & Appliance Service", "Pharma Representatives", "Telecom Maintenance"],
      url: "https://uffizio-iotech.com/field-employee-tracking-software",
      icon: "clipboard"
    },

    enarzee: {
      name: "Enarzee",
      category: "IOTech",
      tagline: "IoT-Powered Energy Monitoring System",
      overview: "Industrial IoT energy analytics system connecting smart electricity meters, generators, and solar panels to uncover power wastage, voltage fluctuations, and optimize tariffs.",
      features: [
        "Real-time power parameter tracking (kWh, kVAh, Power Factor, THD)",
        "Peak load alerts & maximum demand penalty protection",
        "Generator fuel consumption vs energy output audit",
        "Carbon footprint calculation & ESG compliance reports"
      ],
      industries: ["Manufacturing Facilities", "Commercial Complexes & Malls", "Data Centers", "Cold Storage Plants"],
      url: "https://uffizio-iotech.com/energy-monitoring-system",
      icon: "zap"
    }
  },

  hardwareCompatibility: {
    totalDevices: "1500+ Devices",
    topManufacturers: [
      "Teltonika (FMB920, FMB120, FMC130, TFT100, etc.)",
      "Concox / Jimi IoT (JC400 Dashcam, VL03, GT06N, WeTrack)",
      "Queclink (GV300, GV50, GL300)",
      "Suntech (ST310, ST4300)",
      "Ruptela (Trace5, Pro5, HCV5)",
      "Meitrack (T366G, T399G)",
      "Coban, Atrack, CalAmp, Sinocastel, Starcom, and more"
    ],
    sensorTypes: [
      "Capacitive Fuel Level Sensors (Wireless BLE & Wired RS485)",
      "Digital Temperature & Humidity Probes for Cold Chain",
      "Wireless Door & Cargo Tamper Sensors",
      "Tilt / Angle Sensors for Dump Trucks & Cement Mixers",
      "Tire Pressure Monitoring Systems (TPMS)",
      "Seatbelt & SOS Panic Buttons",
      "RFID & iButton Driver Identification Readers",
      "CAN Bus / OBD-II Readers (RPM, Engine Faults, Fuel Rate)"
    ]
  },

  faqs: [
    {
      q: "Can I get a white-label version of Uffizio's software?",
      a: "Yes! Uffizio offers complete white-label branding for telematics service providers. You can host the platform on your own custom domain with your company logo, brand colors, custom mobile apps on Google Play & App Store, and personalized reports."
    },
    {
      q: "How many GPS devices are integrated with Uffizio?",
      a: "Over 1,500+ GPS hardware devices and sensors from worldwide top manufacturers like Teltonika, Concox, Queclink, Suntech, Ruptela, and Meitrack are already integrated and ready to use plug-and-play."
    },
    {
      q: "How does fuel monitoring work in Trakzee?",
      a: "Trakzee connects to digital capacitive fuel sensors, ultrasonic sensors, or CAN bus. It provides real-time fuel graphs, consumption audits, and instant SMS/Email/Push alerts if fuel drops suddenly (indicating fuel theft) or when refueling occurs."
    },
    {
      q: "Does Uffizio offer a free trial or demo?",
      a: "Yes, you can schedule a personalized 1-on-1 live demo with our solution architects. We also offer trial accounts so you can test your hardware devices on our platform."
    },
    {
      q: "What languages does Uffizio support?",
      a: "Uffizio is a multi-lingual platform supporting English, Spanish, Portuguese, Turkish, French, Arabic, German, Indonesian, Thai, and Italian."
    }
  ]
};

/**
 * Intelligent Heuristic Query Matcher
 * Parses visitor questions and crafts accurate, professional responses
 * formatted with ClickUp-style markdown, links, and CTAs.
 */
function generateUffizioAIResponse(query) {
  const q = query.toLowerCase().trim();

  // 1. GREETING / CASUAL
  if (/^(hi|hello|hey|namaste|kem cho|hola|bonjour|greetings)/i.test(q)) {
    return {
      text: `Hello! 👋 Welcome to **Uffizio**. I am **UffiSanse**, your AI Telematics & IoT Solutions Assistant.\n\nWhether you need help selecting fleet management software, tracking field employees, monitoring fuel, or checking GPS hardware compatibility, I'm here to assist you.\n\nWhat type of solution are you looking for today?`,
      suggestions: [
        "Tell me about Trakzee Fleet Management",
        "How does fuel theft monitoring work?",
        "Do you have software for School Buses?",
        "Check 1500+ supported GPS devices",
        "Book a free product demo"
      ],
      productCards: []
    };
  }

  // 2. FLEET MANAGEMENT / TRAKZEE / VEHICLE TRACKING
  if (q.includes("trakzee") || q.includes("fleet") || q.includes("vehicle track") || q.includes("car track") || q.includes("truck")) {
    const p = UFFIZIO_DATA.products.trakzee;
    return {
      text: `### 🚛 **Trakzee — Advanced Fleet Management Software**\n\n**${p.tagline}**\n\n${p.overview}\n\n**Key Capabilities:**\n- 📍 **Real-time Live Tracking**: Sub-second GPS updates with playback history.\n- ⛽ **Fuel Monitoring**: Detect fuel drainage & theft instantly via digital sensors.\n- 🚦 **Driver Behavior**: Speeding, harsh braking, sharp turns, and excessive idling audits.\n- 🛠️ **Predictive Maintenance**: Automated servicing & tire pressure (TPMS) schedules.\n- 🔒 **Remote Immobilization**: Cut off engine remotely in case of theft.\n\nWould you like to test Trakzee with your fleet devices or see a live demo?`,
      suggestions: [
        "How does fuel theft detection work?",
        "Which GPS devices work with Trakzee?",
        "Can I white-label Trakzee for my brand?",
        "Book a live demo of Trakzee"
      ],
      productCards: [p]
    };
  }

  // 3. FUEL THEFT / SENSORS / DRAINAGE
  if (q.includes("fuel") || q.includes("diesel") || q.includes("petrol") || q.includes("theft") || q.includes("tank")) {
    return {
      text: `### ⛽ **Smart Fuel Monitoring & Theft Detection**\n\nFuel is often 30-40% of fleet operating costs. Uffizio's **Trakzee** integrates with wireless BLE and wired digital fuel level sensors (RS485) as well as vehicle CAN Bus to deliver:\n\n1. **Real-time Fuel Graph**: Accurate measurement of current fuel in litres/gallons.\n2. **Instant Theft Alerts**: Immediate Push, SMS, and Email notification if fuel level drops rapidly while stationary.\n3. **Refuel Verification**: Automatically logs exact time, location, and liters added to prevent invoice fraud.\n4. **Mileage & Consumption Analytics**: Compares expected mileage vs actual consumption per driver/trip.\n\nCompatible with single and dual fuel tanks on trucks, heavy machinery, and diesel generators.`,
      suggestions: [
        "What fuel sensors are supported?",
        "Tell me about Trakzee Fleet Management",
        "How do I book a demo?",
        "Talk to a sales specialist"
      ],
      productCards: [UFFIZIO_DATA.products.trakzee]
    };
  }

  // 4. SCHOOL BUS / STUDENT SAFETY / SMARTBUS
  if (q.includes("school") || q.includes("bus") || q.includes("smartbus") || q.includes("student") || q.includes("child")) {
    const p = UFFIZIO_DATA.products.smartbus;
    return {
      text: `### 🚌 **Smartbus — School Bus Tracking & Student Safety**\n\n**${p.tagline}**\n\n${p.overview}\n\n**Highlights:**\n- 📱 **Parent Mobile App**: Real-time bus tracking and arrival notification 10 minutes before the bus reaches the stop.\n- 🪪 **RFID / NFC Attendance**: Parents get an instant alert when their child boards or deboards the school bus.\n- 🚦 **Speed & Safety Alerts**: Instant notifications if the driver speeds or takes unauthorized detours.\n- 🚨 **Emergency Panic Button**: Allows drivers and attendants to trigger instant SOS alerts to school control rooms.`,
      suggestions: [
        "Does Smartbus have a Parent Mobile App?",
        "How does RFID attendance work?",
        "Tell me about Employee Transport (Rosterz)",
        "Schedule a demo for our school"
      ],
      productCards: [p]
    };
  }

  // 5. EMPLOYEE TRANSPORT / ROSTERZ / CORPORATE COMMUTE
  if (q.includes("employee") || q.includes("roster") || q.includes("corporate") || q.includes("bpo") || q.includes("cab")) {
    const p = UFFIZIO_DATA.products.rosterz;
    return {
      text: `### 👥 **Rosterz — Corporate Employee Transportation Software**\n\n**${p.tagline}**\n\n${p.overview}\n\n**Key Highlights:**\n- 🔄 **Automated Route Optimization**: Groups employees dynamically by shift and address to minimize travel time.\n- 🛡️ **Women Employee Safety**: Safe Drop confirmation, security escort tracking, and live SOS monitoring during night shifts.\n- 📲 **Driver & Employee Apps**: Turn-by-turn navigation, digital OTP/QR boarding, and live cab tracking.\n- 💵 **Billing & Invoicing**: Automated billing based on actual GPS distance vs planned distance to avoid overcharges.`,
      suggestions: [
        "How does Safe Drop verification work?",
        "Tell me about Field Employee Tracking (Taskeye)",
        "Book a Rosterz corporate demo"
      ],
      productCards: [p]
    };
  }

  // 6. WASTE MANAGEMENT / SMART WASTE
  if (q.includes("waste") || q.includes("garbage") || q.includes("bin") || q.includes("recycle") || q.includes("municipal")) {
    const p = UFFIZIO_DATA.products.smartWaste;
    return {
      text: `### 🗑️ **Smart Waste — Waste Collection & Route Optimization**\n\n**${p.tagline}**\n\n${p.overview}\n\n**Key Features:**\n- 📡 **Ultrasonic Bin Sensors**: Measures bin fill-levels in real-time.\n- 🗺️ **Dynamic Routing**: Collection trucks are dispatched only to bins that are actually full, cutting fuel and time by up to 35%.\n- 🏷️ **RFID Dump Verification**: Verifies bin lifts and dumps at designated landfill points.\n- 📊 **Municipal Dashboard**: Transparency, SLA compliance, and citizen complaint tracking.`,
      suggestions: [
        "What sensors work with Smart Waste?",
        "Can municipal bodies use Smart Waste?",
        "Book a Smart Waste demo"
      ],
      productCards: [p]
    };
  }

  // 7. FIELD EMPLOYEE TRACKING / TASKEYE
  if (q.includes("taskeye") || q.includes("field") || q.includes("sales force") || q.includes("technician") || q.includes("attendance")) {
    const p = UFFIZIO_DATA.products.taskeye;
    return {
      text: `### 📋 **Taskeye — Field Employee Tracking & Task Management**\n\n**${p.tagline}**\n\n${p.overview}\n\n**Core Features:**\n- 📍 **Live Location & Route Travelled**: See where your sales team or technicians are throughout the workday.\n- 🤳 **Geo-Fenced Selfie Attendance**: Eliminates proxy attendance by verifying face photo and exact GPS coordinates.\n- 📝 **Task & Order Management**: Assign client visits, capture digital signatures, and collect feedback on the go.\n- 💰 **Automated Expense & TA/DA**: Computes actual kilometers travelled for transparent fuel reimbursement.`,
      suggestions: [
        "Does Taskeye work offline when network is weak?",
        "Can I assign tasks directly to field agents?",
        "Request a Taskeye trial"
      ],
      productCards: [p]
    };
  }

  // 8. ELECTRIC VEHICLES / ELEXEE / EV
  if (q.includes("ev") || q.includes("electric") || q.includes("elexee") || q.includes("battery") || q.includes("charge")) {
    const p = UFFIZIO_DATA.products.elexee;
    return {
      text: `### ⚡ **Elexee — Electric Vehicle (EV) Fleet Management**\n\n**${p.tagline}**\n\n${p.overview}\n\n**EV Specialized Capabilities:**\n- 🔋 **Battery SoC & SoH Tracking**: Real-time State of Charge, degradation metrics, and temperature health.\n- ⚡ **Charging Station Navigation**: Directs low-battery vehicles to the nearest compatible charging point.\n- 📉 **Regen Braking Analytics**: Tracks regenerative braking efficiency and eco-driving score.\n- 🌡️ **Thermal Protection**: Instant emergency alerts on battery overheating.`,
      suggestions: [
        "Which EV models and protocols are supported?",
        "Compare Elexee with Trakzee",
        "Book an EV Fleet demo"
      ],
      productCards: [p]
    };
  }

  // 9. INDOOR TRACKING / GRIDZEE
  if (q.includes("indoor") || q.includes("gridzee") || q.includes("warehouse") || q.includes("beacon") || q.includes("ble") || q.includes("uwb")) {
    const p = UFFIZIO_DATA.products.gridzee;
    return {
      text: `### 🏢 **Gridzee — Indoor Tracking & Asset Monitoring**\n\n**${p.tagline}**\n\n${p.overview}\n\n**How It Works:**\nTraditional GPS satellite signals cannot penetrate indoor walls and roofs. Gridzee uses Bluetooth Low Energy (BLE) Beacons, Wi-Fi fingerprinting, and Ultra-Wideband (UWB) to provide sub-meter asset positioning across warehouse racks, hospital wards, and factory floors.`,
      suggestions: [
        "What is the positioning accuracy of Gridzee?",
        "Can it track hospital medical equipment?",
        "Schedule a technical consultation"
      ],
      productCards: [p]
    };
  }

  // 10. ENERGY MONITORING / ENARZEE
  if (q.includes("energy") || q.includes("enarzee") || q.includes("power") || q.includes("electricity") || q.includes("meter")) {
    const p = UFFIZIO_DATA.products.enarzee;
    return {
      text: `### ⚡ **Enarzee — IoT Energy Monitoring System**\n\n**${p.tagline}**\n\n${p.overview}\n\n**Key Highlights:**\n- 📊 **Sub-Metering Analytics**: Tracks consumption by line, department, machine, and floor.\n- ⚠️ **Peak Demand Alerts**: Helps factories avoid heavy utility maximum demand penalties.\n- 🛢️ **Generator Audit**: Evaluates Diesel Generator (DG) fuel consumption per unit of electricity produced.\n- 🌿 **ESG & Carbon Footprint**: Automated reporting for corporate sustainability audits.`,
      suggestions: [
        "Which energy meters are compatible?",
        "Schedule an Energy Audit demo"
      ],
      productCards: [p]
    };
  }

  // 11. HARDWARE / GPS DEVICES / SENSORS
  if (q.includes("hardware") || q.includes("device") || q.includes("teltonika") || q.includes("concox") || q.includes("queclink") || q.includes("sensor") || q.includes("gps tracker") || q.includes("compatible")) {
    return {
      text: `### 🛰️ **Hardware & Sensor Ecosystem (1,500+ Devices)**\n\nUffizio is 100% **hardware-agnostic**. We have integrated more than **1,500+ GPS hardware devices and IoT sensors** from the world's premier manufacturers:\n\n**Top Supported Brands:**\n- 🔹 **Teltonika**: FMB920, FMB120, FMC130, TFT100, FMB640, EYE Sensor & Beacon\n- 🔹 **Concox / Jimi IoT**: JC400 Dashcam, VL03, GT06N, WeTrack2, X3\n- 🔹 **Queclink**: GV300, GV50, GL300, GV350\n- 🔹 **Suntech**: ST310, ST4300, ST8300\n- 🔹 **Ruptela**: Trace5, Pro5, HCV5, Plug4\n- 🔹 **Meitrack**: T366G, T399G, MD511H\n\n**Sensor Integrations:**\n- Fuel level sensors (Capacitive & Ultrasonic), BLE temperature & humidity probes, RFID/iButton, door magnets, tilt sensors, TPMS, and CAN-bus decoders.`,
      suggestions: [
        "Can I integrate a custom or new GPS device?",
        "Tell me about fuel level sensors",
        "How do I connect my devices to Uffizio?",
        "Talk to our Hardware Integration team"
      ],
      productCards: []
    };
  }

  // 12. WHITE-LABEL / PRICING / PARTNERSHIP / RESELLER
  if (q.includes("white label") || q.includes("whitelabel") || q.includes("partner") || q.includes("reseller") || q.includes("price") || q.includes("pricing") || q.includes("cost")) {
    return {
      text: `### 🏷️ **White-Label Partner Program for Telematics Businesses**\n\nAre you looking to launch or scale your own telematics brand? Uffizio empowers service providers worldwide with complete white-label solutions:\n\n- 🌐 **Custom Domain & Branding**: Host the software under your own URL (e.g., \`gps.yourcompany.com\`).\n- 📱 **Branded Mobile Apps**: Published to Google Play and Apple App Store under your developer account.\n- 🎨 **Theme & Logo Customization**: Matches your corporate identity and colors.\n- ⚙️ **Multi-Tier Admin Hierarchy**: Sub-accounts for resellers, dealers, and end-clients.\n- ☁️ **Scalable Cloud or On-Premise Hosting**: High availability 99.9% uptime SLA.\n\nFor tailored volume pricing and commercial licensing plans, our partnership team will prepare a custom proposal.`,
      suggestions: [
        "What is the cost of white-label telematics?",
        "How fast can my white-label apps be launched?",
        "Book a partner consultation meeting"
      ],
      productCards: []
    };
  }

  // 13. WHATSAPP INQUIRY
  if (q.includes("whatsapp") || q.includes("whats app") || q.includes("wp") || q.includes("chat on whatsapp")) {
    return {
      text: `### 💬 **Connect with Uffizio on WhatsApp**\n\nOur sales and telematics consultants are available on WhatsApp to answer your questions, demonstrate live tracking features, and discuss enterprise partnerships.\n\n👉 **[Click here to open WhatsApp Chat](${UFFIZIO_DATA.company.whatsappUrl})**\n\nOr click the green **WhatsApp icon** in the top-right bar of this chat window anytime!`,
      suggestions: [
        "Tell me about Trakzee Fleet Management",
        "Book a live 1-on-1 demo",
        "Check 1500+ supported GPS devices"
      ],
      productCards: [UFFIZIO_DATA.products.trakzee]
    };
  }

  // 14. DEMO / CONTACT / SUPPORT
  if (q.includes("demo") || q.includes("contact") || q.includes("call") || q.includes("sales") || q.includes("support") || q.includes("ticket") || q.includes("meeting")) {
    return {
      text: `### 📅 **Let's Connect & Schedule Your Live Demo**\n\nWe'd be delighted to give you a personalized walkthrough of our software suite or assist you with any questions!\n\n**Next Steps:**\n- 💬 **Chat on WhatsApp**: [Connect directly on WhatsApp](${UFFIZIO_DATA.company.whatsappUrl})\n- 🗓️ **Book Live 1-on-1 Demo**: [Click here to schedule a live demo](${UFFIZIO_DATA.company.demoUrl})\n- ✉️ **Contact Sales Team**: [Submit an inquiry form](${UFFIZIO_DATA.company.contactUrl})\n- 🎫 **Helpdesk & Technical Support**: [Open a ticket on Helpdesk](${UFFIZIO_DATA.company.helpdeskUrl})\n\nOr feel free to share your email or phone number right here, and our enterprise team will reach out directly.`,
      suggestions: [
        "Chat with us on WhatsApp",
        "Schedule a demo for Trakzee",
        "Schedule a demo for Smartbus",
        "I want to ask about pricing"
      ],
      productCards: []
    };
  }

  // 15. DEFAULT SMART RESPONSE
  return {
    text: `Thank you for asking about **${query}**!\n\nUffizio specializes in cutting-edge **Telematics & IoT Software** across four primary pillars:\n\n1. 🚛 **Telematics Suite**: [Trakzee](${UFFIZIO_DATA.products.trakzee.url}) (Fleet Management), Smart Waste, Gridzee (Indoor Tracking), Petzee, Elexee (EV), and Trakzee Mini.\n2. 🚌 **Commute Suite**: [Smartbus](${UFFIZIO_DATA.products.smartbus.url}) (School Bus Safety), Rosterz (Corporate Commute), and SmartTranzit (Public Transit).\n3. 📱 **IOTech Suite**: [Taskeye](${UFFIZIO_DATA.products.taskeye.url}) (Field Workforce Management) and Enarzee (Industrial Energy Monitoring).\n4. 🛰️ **Hardware Ecosystem**: 1500+ pre-integrated GPS devices & sensors.\n\nCould you specify which product or feature you'd like to explore in detail?`,
    suggestions: [
      "Tell me about Trakzee Fleet Management",
      "How does fuel theft monitoring work?",
      "Explore School Bus tracking (Smartbus)",
      "Check 1500+ supported GPS devices",
      "Schedule a 1-on-1 live demo"
    ],
    productCards: [UFFIZIO_DATA.products.trakzee, UFFIZIO_DATA.products.smartbus]
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { UFFIZIO_DATA, generateUffizioAIResponse };
}

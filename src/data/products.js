export const categoriesData = [
  {
    id: "mobile",
    name: "Mobile Accessories",
    icon: "Smartphone",
    count: "12+ Types",
    description: "Cables, Chargers, Power Banks, Earbuds, Covers & Protectors",
    items: [
      "Data Cables", "Fast Chargers", "Adapter Chargers", "Wireless Chargers", 
      "Car Chargers", "Power Banks", "Handsfree", "Earbuds", 
      "Neckbands", "Bluetooth Headphones", "Mobile Covers", "Screen Protectors"
    ]
  },
  {
    id: "laptop",
    name: "Laptop Accessories",
    icon: "Laptop",
    count: "7+ Types",
    description: "Chargers, Cooling Pads, Docking Stations & USB Hubs",
    items: [
      "Laptop Chargers", "Cooling Pads", "Laptop Bags", "Docking Stations", 
      "USB Hubs", "Adapters", "Type-C Hubs"
    ]
  },
  {
    id: "computer",
    name: "Computer Accessories",
    icon: "Monitor",
    count: "8+ Types",
    description: "Keyboards, Mice, Webcams, SSDs, HDDs & RAM Accessories",
    items: [
      "Keyboards", "Mouse", "Gaming Mouse", "Webcams", 
      "SSD Accessories", "Hard Drive Accessories", "RAM Accessories", "Desktops"
    ]
  },
  {
    id: "audio",
    name: "Audio & Sound",
    icon: "Headphones",
    count: "5+ Types",
    description: "Bluetooth Speakers, Computer Soundbars & Gaming Headsets",
    items: [
      "Bluetooth Speakers", "Computer Speakers", "Gaming Headsets", "Soundbars", "Earbuds"
    ]
  },
  {
    id: "networking",
    name: "Networking & Internet",
    icon: "Wifi",
    count: "6+ Types",
    description: "Routers, WiFi Extenders, Access Points & LAN Cables",
    items: [
      "Routers", "WiFi Extenders", "Access Points", "Network Switches", 
      "LAN Cables", "USB WiFi Adapters", "4G Internet Devices"
    ]
  }
];

export const brandsData = [
  { name: "Ronin", logoText: "RONIN", color: "from-red-500 to-rose-700", category: "Mobile Accessories & Audio" },
  { name: "Joyroom", logoText: "JOYROOM", color: "from-blue-500 to-indigo-700", category: "Fast Chargers & Earbuds" },
  { name: "Arimo", logoText: "ARIMO", color: "from-orange-500 to-amber-700", category: "Mobile Accessories" },
  { name: "Faster", logoText: "FASTER", color: "from-emerald-500 to-teal-700", category: "Power Banks & Audio" },
  { name: "Speed-X", logoText: "SPEED-X", color: "from-purple-500 to-violet-700", category: "Cables & Adapters" },
  { name: "A4Tech", logoText: "A4TECH", color: "from-cyan-500 to-blue-700", category: "Keyboards & Gaming Mice" },
  { name: "Logitech", logoText: "logitech", color: "from-teal-400 to-emerald-600", category: "Peripherals & Webcams" },
  { name: "HP", logoText: "hp", color: "from-sky-500 to-blue-800", category: "Laptop Accessories & Mice" },
  { name: "Dell", logoText: "DELL", color: "from-blue-600 to-slate-800", category: "Laptop Chargers & Adapters" },
  { name: "Maxell", logoText: "maxell", color: "from-amber-500 to-orange-700", category: "Storage & Audio" },
  { name: "Amaz", logoText: "AMAZ", color: "from-pink-500 to-rose-700", category: "Smart Gadgets" },
  { name: "Tenda", logoText: "Tenda", color: "from-orange-400 to-red-600", category: "Routers & WiFi Extenders" },
  { name: "TP-Link", logoText: "tp-link", color: "from-teal-500 to-cyan-700", category: "Routers & Network Switches" },
  { name: "F&D", logoText: "F&D", color: "from-violet-600 to-indigo-900", category: "Multimedia Speakers" },
  { name: "Plokama", logoText: "PLOKAMA", color: "from-yellow-500 to-amber-700", category: "Tripods & Mobile Accessories" }
];

export const productsData = [
  {
    id: "prod-1",
    name: "Interlink Aura 20W PD Ultra Fast Charger",
    brand: "Interlink",
    category: "mobile",
    subCategory: "Fast Chargers",
    price: 1850,
    originalPrice: 2400,
    rating: 4.9,
    reviewsCount: 48,
    inStock: true,
    badge: "Bestseller",
    image: "/images/Interlink Aura charger 1.jpg",
    description: "Premium Interlink Aura 20W Type-C Power Delivery Fast Charger. Compact fireproof build with multi-layer circuit protection.",
    specs: ["20W Power Delivery", "Type-C Output", "Fireproof PC Shell", "Overheat & Surge Protection"]
  },
  {
    id: "prod-2",
    name: "Interlink Aura Dual Port Quick Charger",
    brand: "Interlink",
    category: "mobile",
    subCategory: "Adapter Chargers",
    price: 1650,
    originalPrice: 2100,
    rating: 4.8,
    reviewsCount: 36,
    inStock: true,
    badge: "Store Choice",
    image: "/images/Interlink Aura charger 2.jpg",
    description: "Dual Output (QC 3.0 + Type-C) Fast Wall Adapter. Charges 2 devices simultaneously with safe thermal control.",
    specs: ["Dual Output Ports", "Quick Charge 3.0", "Universal Compatibility", "Smart Power Distribution"]
  },
  {
    id: "prod-3",
    name: "Interlink Aura 30W Super Fast Charger Pack",
    brand: "Interlink",
    category: "mobile",
    subCategory: "Fast Chargers",
    price: 2200,
    originalPrice: 2800,
    rating: 5.0,
    reviewsCount: 52,
    inStock: true,
    badge: "Top Rated",
    image: "/images/Interlink Aura charger 3.jpg",
    description: "High-power 30W charging brick featuring ultra-compact design. Compatible with iPhone 15/14, Samsung Galaxy, and iPads.",
    specs: ["30W Max Output", "GaN Tech Efficient", "Includes Braided Cable", "1 Year Warranty"]
  },
  {
    id: "prod-4",
    name: "Joyroom TWS Wireless ANC Bluetooth Earbuds",
    brand: "Joyroom",
    category: "audio",
    subCategory: "Earbuds",
    price: 4950,
    originalPrice: 6500,
    rating: 4.9,
    reviewsCount: 89,
    inStock: true,
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    description: "Active Noise Cancellation Bluetooth 5.3 Earbuds with deep bass boost and 32-hour playback battery case.",
    specs: ["Active Noise Control", "32 Hours Playtime", "Bluetooth 5.3", "IPX5 Sweat Proof"]
  },
  {
    id: "prod-5",
    name: "Ronin R-950 Heavy Bass Wireless Headphones",
    brand: "Ronin",
    category: "audio",
    subCategory: "Bluetooth Headphones",
    price: 5800,
    originalPrice: 7200,
    rating: 4.8,
    reviewsCount: 64,
    inStock: true,
    badge: "Premium Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    description: "Over-ear ergonomic wireless headset with memory foam cushions, clear mic calls, and HD sound clarity.",
    specs: ["40mm Audio Drivers", "Foldable Design", "Aux + Bluetooth Dual Mode", "Dual Mic Noise Reduction"]
  },
  {
    id: "prod-6",
    name: "Faster 20000mAh 22.5W Super Fast Power Bank",
    brand: "Faster",
    category: "mobile",
    subCategory: "Power Banks",
    price: 5200,
    originalPrice: 6800,
    rating: 4.9,
    reviewsCount: 110,
    inStock: true,
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&auto=format&fit=crop&q=80",
    description: "Massive 20,000mAh capacity power bank with LED digital percentage screen, PD fast charging, and triple ports.",
    specs: ["20,000mAh Li-Polymer", "22.5W Fast Charging", "Digital Battery Display", "Triple Device Output"]
  },
  {
    id: "prod-7",
    name: "TP-Link Archer AX55 WiFi 6 Gigabit Router",
    brand: "TP-Link",
    category: "networking",
    subCategory: "Routers",
    price: 14500,
    originalPrice: 17800,
    rating: 5.0,
    reviewsCount: 41,
    inStock: true,
    badge: "WiFi 6 Speed",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80",
    description: "Next-gen Dual-Band WiFi 6 router up to 3000 Mbps speeds. Supports multi-device streaming & lag-free gaming.",
    specs: ["3000 Mbps WiFi 6", "4 External Antennas", "OFDMA & MU-MIMO", "TP-Link HomeShield"]
  },
  {
    id: "prod-8",
    name: "Tenda N300 300Mbps Range Extender",
    brand: "Tenda",
    category: "networking",
    subCategory: "WiFi Extenders",
    price: 2850,
    originalPrice: 3500,
    rating: 4.7,
    reviewsCount: 76,
    inStock: true,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=600&auto=format&fit=crop&q=80",
    description: "Eliminate WiFi dead zones easily. Wall-plug signal booster with WPS one-button instant setup.",
    specs: ["300Mbps 2.4GHz", "WPS Quick Pairing", "Signal LED Indicator", "Universal Router Fit"]
  },
  {
    id: "prod-9",
    name: "Logitech MK270 Wireless Keyboard & Mouse Combo",
    brand: "Logitech",
    category: "computer",
    subCategory: "Keyboards",
    price: 6900,
    originalPrice: 8500,
    rating: 4.9,
    reviewsCount: 130,
    inStock: true,
    badge: "Official Stock",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    description: "Reliable 2.4GHz wireless combo with nano receiver, long battery life, shortcut keys, and splash resistance.",
    specs: ["2.4 GHz Lag-Free", "36 Month Battery", "Spill-Resistant", "Plug & Play USB"]
  },
  {
    id: "prod-10",
    name: "A4Tech Bloody RGB Mechanical Gaming Keyboard",
    brand: "A4Tech",
    category: "computer",
    subCategory: "Keyboards",
    price: 9400,
    originalPrice: 11500,
    rating: 4.8,
    reviewsCount: 58,
    inStock: true,
    badge: "Pro Gaming",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&auto=format&fit=crop&q=80",
    description: "Tactile mechanical key switches with customizable RGB lighting per key, anti-ghosting, and wrist rest support.",
    specs: ["Optic Mechanical Switches", "Full RGB Backlit", "100% Anti-Ghosting", "Braided Fiber Cable"]
  },
  {
    id: "prod-11",
    name: "Logitech C920 Pro HD Webcam 1080p",
    brand: "Logitech",
    category: "computer",
    subCategory: "Webcams",
    price: 18900,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 37,
    inStock: true,
    badge: "HD Video",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&auto=format&fit=crop&q=80",
    description: "Full HD 1080p video calling webcam with stereo audio dual microphones and automatic light correction.",
    specs: ["1080p / 30fps Resolution", "Stereo Dual Mics", "Auto Light Correction", "Glass Lens System"]
  },
  {
    id: "prod-12",
    name: "Universal Smart Gaming Laptop Cooling Pad",
    brand: "Speed-X",
    category: "laptop",
    subCategory: "Cooling Pads",
    price: 3400,
    originalPrice: 4200,
    rating: 4.7,
    reviewsCount: 45,
    inStock: true,
    badge: "Cooling Tech",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80",
    description: "6 High-speed silent fans with blue LED illumination, adjustable height stands, and dual USB pass-through ports.",
    specs: ["6 Silent RGB Fans", "Digital Speed Dial", "5 Elevation Angles", "Fits 12 to 17.3 Inch Laptops"]
  },
  {
    id: "prod-13",
    name: "Dell & HP Universal Laptop AC Power Charger 65W",
    brand: "Dell",
    category: "laptop",
    subCategory: "Laptop Chargers",
    price: 2950,
    originalPrice: 3800,
    rating: 4.8,
    reviewsCount: 82,
    inStock: true,
    badge: "Tested Safe",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    description: "Original standard replacement adapter for Dell, HP, Lenovo & Asus laptops. IC circuit overload protection.",
    specs: ["65W Output", "Smart Voltage Matching", "Pure Copper Core Wire", "6 Month Warranty"]
  },
  {
    id: "prod-14",
    name: "F&D 2.1 Bluetooth Multimedia Speaker System",
    brand: "F&D",
    category: "audio",
    subCategory: "Bluetooth Speakers",
    price: 11200,
    originalPrice: 13900,
    rating: 4.9,
    reviewsCount: 61,
    inStock: true,
    badge: "Booming Bass",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80",
    description: "Powerful 45W RMS subwoofer system with Bluetooth, FM Radio, USB MP3 player, and infrared remote control.",
    specs: ["45W RMS Pure Output", "Heavy Wooden Subwoofer", "Bluetooth 5.0 + AUX", "Full Function Remote"]
  },
  {
    id: "prod-15",
    name: "Speed-X 100W PD Braided Fast Type-C Cable",
    brand: "Speed-X",
    category: "mobile",
    subCategory: "Data Cables",
    price: 950,
    originalPrice: 1400,
    rating: 4.9,
    reviewsCount: 94,
    inStock: true,
    badge: "Durable",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    description: "Extra durable nylon braided Type-C to Type-C cable supporting 100W Power Delivery and high-speed data sync.",
    specs: ["100W Power Delivery", "10,000+ Bend Tested", "E-Marker Chip Safe", "480Mbps Data Speed"]
  }
];

export const servicesData = [
  {
    id: 1,
    title: "New Mobile Sales",
    description: "Authorized & genuine smartphones from Samsung, Xiaomi, Infinix, Tecno, Vivo, and Apple with official warranty.",
    icon: "Smartphone",
    badge: "100% Genuine"
  },
  {
    id: 2,
    title: "Used Mobile Sales & Purchase",
    description: "Thoroughly tested 100% non-PTA & PTA approved pre-owned devices in pristine condition with money-back guarantee.",
    icon: "RefreshCw",
    badge: "Verified Grade A"
  },
  {
    id: 3,
    title: "Mobile Accessories",
    description: "Fast chargers, braided cables, power banks, handsfree, earbuds, tempered glass, and shockproof cases.",
    icon: "BatteryCharging",
    badge: "Top Brands"
  },
  {
    id: 4,
    title: "Laptop Accessories",
    description: "Original chargers, cooling pads, docking stations, protective sleeves, and high-speed USB-C hubs.",
    icon: "Laptop",
    badge: "Universal Compatibility"
  },
  {
    id: 5,
    title: "Computer Accessories",
    description: "Gaming & office keyboards, optical mice, webcams, SSD enclosures, RAM upgrade modules, and cables.",
    icon: "Cpu",
    badge: "High Performance"
  },
  {
    id: 6,
    title: "Networking Solutions",
    description: "High-speed WiFi 6 routers, range extenders, Ethernet network switches, CAT6 cables, and USB WiFi dongles.",
    icon: "Wifi",
    badge: "Seamless Connectivity"
  },
  {
    id: 7,
    title: "Internet Devices",
    description: "4G LTE portable WiFi Mifi devices, cloud routers, and high-gain external antenna accessories.",
    icon: "Radio",
    badge: "Ultra Fast"
  },
  {
    id: 8,
    title: "Remote Controls",
    description: "Universal & replacement remotes for Smart LED TVs, Android TV boxes, ACs, and multimedia players.",
    icon: "Tv",
    badge: "All Models Stocked"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Muhammad Usman",
    location: "Lahore, Pakistan",
    rating: 5,
    comment: "Bought the Interlink Aura fast charger and Joyroom earbuds from Ali Ammar. Superb quality and 100% original product! Delivered via JazzCash payment seamlessly.",
    date: "1 week ago"
  },
  {
    id: 2,
    name: "Hamza Tariq",
    location: "Faisalabad, Pakistan",
    rating: 5,
    comment: "ANB Mobile is my go-to shop for all laptop chargers and TP-Link routers. Ali Ammar gives genuine guidance and honest prices. Highly recommended!",
    date: "2 weeks ago"
  },
  {
    id: 3,
    name: "Zubair Ahmad",
    location: "Rawalpindi, Pakistan",
    rating: 5,
    comment: "Ordered a used Samsung phone and Ronin headphones. Device condition was 10/10 as promised. Instant response on WhatsApp!",
    date: "3 weeks ago"
  }
];

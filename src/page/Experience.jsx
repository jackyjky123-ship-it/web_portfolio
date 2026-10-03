import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Animation Variants ───────────────────────────────────────────────────────

const VIEWPORT = { once: true, amount: 0.1 };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Section Definitions ──────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Engineering",
    subtitle:
      "Modern, responsive client applications built with React.js, TypeScript, Tailwind CSS & fluid animations.",
    badge: "Client-Side",
    badgeColor: "bg-[#2563eb]/10 text-[#2563eb] border-[#2563eb]/30",
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Architecture & APIs",
    subtitle:
      "Scalable RESTful services, database schemas, token authentication & transaction engines in Laravel & MySQL.",
    badge: "Server-Side",
    badgeColor: "bg-[#e11d48]/10 text-[#e11d48] border-[#e11d48]/30",
  },
  {
    id: "fullstack",
    number: "03",
    title: "Full-Stack Web Applications",
    subtitle:
      "End-to-end web platforms integrating dynamic React frontends with secure Laravel REST backends & MySQL data layers.",
    badge: "End-to-End",
    badgeColor: "bg-[#059669]/10 text-[#059669] border-[#059669]/30",
  },
];

// ─── Demo Data ────────────────────────────────────────────────────────────────

const ECOM_PRODUCTS = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "electronics",
    brand: "SonicWave",
    price: 79.99,
    oldPrice: 109.99,
    rating: 4.9,
    stock: 24,
    badge: "Best Seller",
    features: "Active noise cancellation, 40h battery, Bluetooth 5.3",
    variants: ["Standard (Matte Black)", "Silver Edition"],
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "electronics",
    brand: "PulseTrack",
    price: 49.5,
    oldPrice: 65.0,
    rating: 4.8,
    stock: 40,
    badge: "Popular",
    features: "Heart rate monitor, GPS route tracking, 5ATM waterproof",
    variants: ["Black Onyx", "Rose Gold (+ $5)"],
  },
  {
    id: 3,
    name: "Mechanical Keyboard 75%",
    category: "electronics",
    brand: "Keyforge",
    price: 65.0,
    oldPrice: null,
    rating: 5.0,
    stock: 3,
    badge: "Low Stock",
    features: "Hot-swappable switches, per-key RGB, aluminum frame",
    variants: ["Red Linear (Quiet)", "Blue Tactile (Clicky)"],
  },
  {
    id: 4,
    name: "Classic Heavyweight Cotton Tee",
    category: "fashion",
    brand: "Minimalist Studio",
    price: 24.0,
    oldPrice: 32.0,
    rating: 4.7,
    stock: 58,
    badge: null,
    features: "100% combed cotton, 240 GSM, preshrunk relaxed fit",
    variants: ["Medium / Sand", "Large / Charcoal", "XL / Forest Green"],
  },
  {
    id: 5,
    name: "Ceramic Matte Pour-Over Coffee Set",
    category: "home",
    brand: "Kanso Living",
    price: 38.0,
    oldPrice: null,
    rating: 4.9,
    stock: 19,
    badge: "Curated",
    features: "High-fired stone ceramic, heat-resistant wooden collar",
    variants: ["Off-White Glaze", "Smoked Obsidian"],
  },
];

const ECOM_ADMIN_STATS = [
  {
    label: "Total Revenue",
    value: "$18,450.00",
    growth: "+14.2% this month",
    highlight: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    label: "Total Orders",
    value: "142",
    growth: "12 pending fulfillment",
    highlight: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    label: "Active Users",
    value: "89",
    growth: "24 new this week",
    highlight: "text-purple-600 bg-purple-50 border-purple-200",
  },
  {
    label: "Low Stock Alert",
    value: "3 Items",
    growth: "Restock required",
    highlight: "text-amber-600 bg-amber-50 border-amber-200",
  },
];

const ECOM_INITIAL_ORDERS = [
  {
    id: "ORD-2026-8942",
    customer: "Juan Dela Cruz",
    total: 129.49,
    status: "Shipped",
    date: "Today, 11:20 AM",
    items: "Headphones (x1), Watch (x1)",
  },
  {
    id: "ORD-2026-8941",
    customer: "Sokha Chan",
    total: 79.99,
    status: "Processing",
    date: "Today, 09:45 AM",
    items: "Headphones (x1)",
  },
  {
    id: "ORD-2026-8940",
    customer: "Vireak Dara",
    total: 49.5,
    status: "Pending",
    date: "Yesterday, 04:15 PM",
    items: "Fitness Watch (x1)",
  },
  {
    id: "ORD-2026-8939",
    customer: "Bopha Pich",
    total: 103.0,
    status: "Delivered",
    date: "Oct 01, 02:30 PM",
    items: "Keyboard (x1), Tee (x1)",
  },
];

const INITIAL_STUDENTS = [
  { id: 1, name: "Sokha Chan", present: true, grade: "A" },
  { id: 2, name: "Vireak Dara", present: true, grade: "B+" },
  { id: 3, name: "Bopha Pich", present: false, grade: "A-" },
  { id: 4, name: "Kosal Meng", present: true, grade: "A" },
];

const ANGKOR_TOURS = [
  {
    id: "classic",
    name: "Classic Sunrise Circuit",
    duration: "1 Day (4:30 AM – 1:30 PM)",
    tuktuk: 42,
    car: 68,
    highlight: "Angkor Wat dawn reflection, 216 stone faces of Bayon, Ta Prohm tree roots",
    strategy: "Enter Bayon via the secluded East Gate before mass tourist buses arrive at 9:30 AM.",
    itinerary: [
      { time: "04:30 AM", title: "Hotel Pickup & Pre-Dawn Transfer" },
      { time: "05:15 AM", title: "Angkor Wat Lotus Pond Sunrise" },
      { time: "07:30 AM", title: "Inner Sanctum & Bakan Galleries" },
      { time: "09:45 AM", title: "Angkor Thom & 216 Bayon Faces" },
      { time: "11:30 AM", title: "Ta Prohm Giant Banyan Tree Roots" },
    ],
  },
  {
    id: "grand",
    name: "Grand Circuit & Lost Temples",
    duration: "1 Day (7:30 AM – 3:30 PM)",
    tuktuk: 48,
    car: 75,
    highlight: "Preah Khan labyrinth, Neak Pean healing island, Banteay Srei pink sandstone",
    strategy: "Early visit to Banteay Srei while morning sunlight enhances intricate 10th-century rose carvings.",
    itinerary: [
      { time: "07:30 AM", title: "Departure into Northern Forest" },
      { time: "08:30 AM", title: "Preah Khan Monastic Complex" },
      { time: "10:15 AM", title: "Neak Pean Sacred Island" },
      { time: "11:45 AM", title: "Banteay Srei Jewel Carvings" },
      { time: "02:00 PM", title: "East Mebon & Pre Rup Pyramids" },
    ],
  },
  {
    id: "tonle",
    name: "Tonle Sap Floating Villages",
    duration: "Half Day (1:30 PM – 6:30 PM)",
    tuktuk: 35,
    car: 55,
    highlight: "Kampong Phluk stilted community, flooded mangrove canoe, Great Lake sunset",
    strategy: "Mid-afternoon departure avoids peak humidity; authentic wooden boat experience with local fishermen.",
    itinerary: [
      { time: "01:30 PM", title: "Scenic Countryside Drive" },
      { time: "02:30 PM", title: "Kampong Phluk Stilted Community" },
      { time: "03:45 PM", title: "Flooded Mangrove Canoe Excursion" },
      { time: "05:15 PM", title: "Open Lake Sunset Reflection" },
      { time: "06:30 PM", title: "Evening Return to Siem Reap" },
    ],
  },
];

const API_ENDPOINTS = [
  {
    id: "tours",
    method: "GET",
    endpoint: "/api/v1/tours",
    status: 200,
    statusText: "OK",
    latency: "38ms",
    desc: "Retrieves list of active Angkor heritage tour packages with live pricing and vehicle options.",
    response: {
      status: "success",
      count: 3,
      data: [
        { id: 1, name: "Classic Sunrise Circuit", price_tuktuk: 42, price_car: 68 },
        { id: 2, name: "Grand Circuit & Lost Temples", price_tuktuk: 48, price_car: 75 },
        { id: 3, name: "Tonle Sap Floating Villages", price_tuktuk: 35, price_car: 55 },
      ],
    },
  },
  {
    id: "auth",
    method: "POST",
    endpoint: "/api/v1/auth/login",
    status: 200,
    statusText: "OK",
    latency: "65ms",
    desc: "Authenticates user credentials and issues a secure Bearer API token via Laravel Sanctum.",
    response: {
      status: "success",
      message: "User authenticated successfully",
      token_type: "Bearer",
      access_token: "1|7f3e8b92c4a1d5e6f8...",
      user: { id: 14, name: "Lun Lytayhok", role: "developer", email: "lunlytayhok@gmail.com" },
    },
  },
  {
    id: "students",
    method: "GET",
    endpoint: "/api/v1/students?grade=A",
    status: 200,
    statusText: "OK",
    latency: "42ms",
    desc: "Queries relational MySQL database for student records with attendance filter and caching.",
    response: {
      status: "success",
      total: 3,
      students: [
        { id: 1, name: "Sokha Chan", grade: "A", attendance: "present" },
        { id: 3, name: "Bopha Pich", grade: "A-", attendance: "absent" },
        { id: 4, name: "Kosal Meng", grade: "A", attendance: "present" },
      ],
    },
  },
  {
    id: "orders",
    method: "POST",
    endpoint: "/api/v1/orders/checkout",
    status: 201,
    statusText: "Created",
    latency: "89ms",
    desc: "Executes ACID transaction to decrement stock count, record invoice, and issue receipt.",
    response: {
      status: "created",
      order_id: "ORD-2026-8942",
      subtotal_usd: 6.0,
      tax_usd: 0.48,
      total_usd: 6.48,
      payment_status: "paid",
      created_at: "2026-10-03T05:42:00Z",
    },
  },
];

// ─── Project Definitions ──────────────────────────────────────────────────────

const PROJECTS = [
  // SECTION 1: FRONTEND
  {
    id: "travel-angkor",
    category: "frontend",
    categoryLabel: "Frontend",
    thumbBg: "bg-gradient-to-br from-[#121c13] via-[#1f2b1a] to-[#78541a]",
    url: "travel-angkor.app",
    title: "Angkor Travel — Siem Reap Heritage Platform",
    desc: "A premium luxury travel & tour booking frontend web application for Angkor Wat and Siem Reap. Features curated sunrise circuits, certified native historian profiles, crowd-avoidance routing, and fluid Framer Motion animations.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    demoKey: "angkor",
    github: "https://github.com/jackyjky123-ship-it/travel_angkor",
    thumbContent: (
      <div className="flex-1 flex flex-col justify-between p-4 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between z-10">
          <span className="text-[0.68rem] tracking-wider uppercase font-mono px-2 py-0.5 rounded bg-black/40 text-gold border border-gold/30">
            Frontend
          </span>
          <span className="text-[0.7rem] text-cream-soft font-mono opacity-80">Siem Reap, KH</span>
        </div>
        <div className="my-auto z-10 py-1">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 text-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 2L9 8h6l-3-6z" />
              <path d="M3 21h18M5 21V11l4-3v13M19 21V11l-4-3v13M9 21V8l3-3 3 3v13" />
            </svg>
            <h4 className="font-serif text-cream font-bold text-[1.05rem] tracking-wide leading-tight">
              Angkor Wat Sunrise
            </h4>
          </div>
          <p className="text-[0.74rem] text-cream-soft/80 line-clamp-2 leading-relaxed">
            Curated crowd-evading circuits &amp; certified native historians.
          </p>
        </div>
        <div className="flex items-center justify-between text-[0.72rem] z-10 pt-2 border-t border-white/10">
          <span className="text-mint font-mono font-medium">From $42 / person</span>
          <span className="text-gold font-mono flex items-center gap-1">VIP Car &bull; Tuk-Tuk</span>
        </div>
      </div>
    ),
  },
  {
    id: "smart-calculator",
    category: "frontend",
    categoryLabel: "Frontend",
    thumbBg: "bg-gradient-to-br from-[#282a36] to-[#3d4355]",
    url: "smart-calculator.app",
    title: "Smart Web & Financial Calculator",
    desc: "A modern, responsive calculation web application equipped with arithmetic operations, percentage evaluation, calculation history, and smooth keypress interaction feedback.",
    tags: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Math Engine"],
    demoKey: "calculator",
    thumbContent: (
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-2">
        <div className="w-full max-w-[170px] h-6 bg-black/35 rounded flex items-center justify-end px-[0.6rem] font-mono text-[0.75rem] text-mint mb-2">
          1,420.50
        </div>
        <div className="w-full max-w-[170px] grid grid-cols-4 gap-1">
          {["gold", "white/22", "white/22", "gold", "white/22", "white/22", "white/22", "gold"].map((c, i) => (
            <div key={i} className={`h-[13px] bg-${c === "gold" ? "gold/70" : "white/[0.22]"} rounded-sm`} />
          ))}
        </div>
      </div>
    ),
  },

  // SECTION 2: BACKEND
  {
    id: "laravel-api",
    category: "backend",
    categoryLabel: "Backend",
    thumbBg: "bg-gradient-to-br from-[#1a1c23] via-[#241a29] to-[#881337]",
    url: "api.gateway.kh",
    title: "Laravel RESTful API & Auth Gateway",
    desc: "A robust backend API architecture built with Laravel (PHP) and MySQL. Implements Sanctum/JWT token authentication, Role-Based Access Control (RBAC), rate-limiting, and relational schema optimization.",
    tags: ["Laravel (PHP)", "MySQL", "RESTful APIs", "Sanctum Auth", "Postman"],
    demoKey: "api",
    thumbContent: (
      <div className="flex-1 flex flex-col justify-between p-3 font-mono text-[0.72rem] bg-black/40">
        <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[0.68rem] text-cream-soft/70">
          <span>REST API SERVER</span>
          <span className="text-mint flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
            LIVE 200 OK
          </span>
        </div>
        <div className="space-y-1.5 my-auto">
          {[
            { method: "GET", path: "/api/v1/tours", badge: "bg-emerald-500/20 text-emerald-300", note: "38ms" },
            { method: "POST", path: "/api/v1/auth/login", badge: "bg-blue-500/20 text-blue-300", note: "65ms" },
            { method: "POST", path: "/api/v1/checkout", badge: "bg-purple-500/20 text-purple-300", note: "201" },
          ].map(({ method, path, badge, note }) => (
            <div key={path} className="flex items-center gap-2">
              <span className={`${badge} px-1 rounded text-[0.65rem] font-bold`}>{method}</span>
              <span className="text-white/80">{path}</span>
              <span className="ml-auto text-gold text-[0.65rem]">{note}</span>
            </div>
          ))}
        </div>
        <div className="text-[0.65rem] text-cream-soft/60 pt-1 border-t border-white/10 flex justify-between">
          <span>Bearer Token Auth</span>
          <span>MySQL Relational DB</span>
        </div>
      </div>
    ),
  },
  {
    id: "inventory-engine",
    category: "backend",
    categoryLabel: "Backend",
    thumbBg: "bg-gradient-to-br from-[#0c2233] via-[#103049] to-[#0f766e]",
    url: "api.inventory-order.kh",
    title: "E-Commerce Inventory & Order API Engine",
    desc: "High-performance relational inventory and order transaction backend. Features atomic database transactions, stock decrement guards, webhook integration, and automated invoice calculation.",
    tags: ["Laravel (PHP)", "MySQL", "Database Design", "Transactions", "RESTful APIs"],
    demoKey: "api",
    thumbContent: (
      <div className="flex-1 flex flex-col justify-between p-3.5 bg-black/35 font-mono text-[0.72rem]">
        <div className="flex items-center justify-between text-[0.68rem] text-cream-soft/70">
          <span>SCHEMA &amp; TRANSACTIONS</span>
          <span className="text-gold font-bold">ACID COMPLIANT</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-auto">
          {[
            { title: "orders", fields: ["id (PK)", "user_id (FK)", "total_usd"] },
            { title: "inventory", fields: ["product_id", "stock_qty", "reserved_qty"] },
          ].map(({ title, fields }) => (
            <div key={title} className="bg-white/10 rounded p-2 border border-white/10">
              <span className="text-mint font-bold block text-[0.7rem] mb-0.5">{title}</span>
              {fields.map((f, i) => (
                <span key={f} className={`block text-[0.62rem] ${i === fields.length - 1 ? "text-gold" : "text-white/70"}`}>{f}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[0.65rem] text-cream-soft/70 border-t border-white/10 pt-1.5">
          <span>Stock Lock Guard</span>
          <span className="text-mint">&bull; Thread Safe</span>
        </div>
      </div>
    ),
  },

  // SECTION 3: FULL STACK
  {
    id: "ecommerce-platform",
    category: "fullstack",
    categoryLabel: "Full Stack",
    thumbBg: "bg-gradient-to-br from-[#091f1a] via-[#11332b] to-[#047857]",
    url: "store.ecommerce.kh",
    title: "Full-Stack E-Commerce & Admin Platform",
    desc: "A production-grade bilingual (Khmer & English) full-stack e-commerce platform and back-office management suite. React 19, Tailwind CSS v4, Zustand, Radix UI frontend — paired with Laravel 13 REST API, Sanctum auth, relational MySQL schemas, variant management, and real-time admin analytics.",
    tags: ["React 19", "Laravel 13", "MySQL", "Tailwind CSS v4", "Zustand", "Sanctum Auth", "Radix UI"],
    demoKey: "ecommerce",
    github: "https://github.com/jackyjky123-ship-it/e-commerce",
    thumbContent: (
      <div className="flex-1 flex flex-col justify-between p-4 relative overflow-hidden font-sans">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between z-10 text-[0.68rem] font-mono">
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase tracking-wider">
            Full Stack &bull; React 19 + Laravel
          </span>
          <span className="text-white/70">Store + Admin</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-auto z-10">
          <div className="bg-black/40 border border-white/10 rounded-lg p-2.5">
            <span className="text-[0.65rem] font-mono text-emerald-400 block uppercase">Storefront</span>
            <div className="text-[0.82rem] font-bold text-white truncate mt-0.5">SonicWave Headphones</div>
            <div className="flex items-center justify-between mt-1 text-[0.72rem]">
              <span className="text-gold font-bold">$79.99</span>
              <span className="text-emerald-300 text-[0.65rem] bg-emerald-500/20 px-1.5 py-0.5 rounded font-mono">In Stock</span>
            </div>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-lg p-2.5">
            <span className="text-[0.65rem] font-mono text-blue-400 block uppercase">Admin Portal</span>
            <div className="text-[0.82rem] font-bold text-white truncate mt-0.5">$18,450.00</div>
            <div className="flex items-center justify-between mt-1 text-[0.72rem]">
              <span className="text-white/70 text-[0.65rem]">142 Orders</span>
              <span className="text-mint text-[0.65rem] font-mono">+14.2%</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[0.68rem] font-mono text-cream-soft/75 pt-2 border-t border-white/10 z-10">
          <span>Sanctum Bearer Auth</span>
          <span className="text-gold">Cart Sync &bull; RBAC</span>
        </div>
      </div>
    ),
  },
  {
    id: "smart-classroom",
    category: "fullstack",
    categoryLabel: "Full Stack",
    thumbBg: "bg-gradient-to-br from-[#1f3524] to-green",
    url: "classroom-system.app",
    title: "Smart Classroom Management System",
    desc: "Flagship full-stack web application architected with a dynamic React.js frontend, Laravel (PHP) RESTful API backend, secure CRUD data layer, and a MySQL database styled with Tailwind CSS.",
    tags: ["React.js", "Laravel", "MySQL", "Tailwind CSS", "RESTful APIs"],
    demoKey: "classroom",
    thumbContent: (
      <div className="flex-1 flex gap-[0.6rem] p-[0.8rem]">
        <div className="w-[22%] bg-white/[0.18] rounded-md" />
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-[22%] bg-white/[0.22] rounded-md" />
          <div className="h-[22%] bg-white/[0.22] rounded-md" />
        </div>
      </div>
    ),
  },
];

// ─── FILTER TABS ──────────────────────────────────────────────────────────────
const FILTER_TABS = [
  { id: "all", label: "All Projects (6)" },
  { id: "frontend", label: "Frontend (2)" },
  { id: "backend", label: "Backend (2)" },
  { id: "fullstack", label: "Full Stack (2)" },
];

// ─── Experience Component ─────────────────────────────────────────────────────

export default function Experience() {
  // UI state
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Calculator state
  const [calcDisplay, setCalcDisplay] = useState("0");
  const [calcPrev, setCalcPrev] = useState("");
  const [calcOp, setCalcOp] = useState(null);
  const [resetNext, setResetNext] = useState(false);

  // Angkor Travel state
  const [angkorTour, setAngkorTour] = useState("classic");
  const [angkorVehicle, setAngkorVehicle] = useState("tuktuk");
  const [angkorGuests, setAngkorGuests] = useState(2);
  const [angkorBooked, setAngkorBooked] = useState(false);

  // Backend API demo state
  const [selectedApiEndpoint, setSelectedApiEndpoint] = useState("tours");
  const [apiExecuted, setApiExecuted] = useState(true);

  // Classroom state
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  // E-Commerce full-stack state
  const [ecomTab, setEcomTab] = useState("store");
  const [ecomCategory, setEcomCategory] = useState("all");
  const [ecomCart, setEcomCart] = useState([
    { id: 1, name: "Wireless Noise-Cancelling Headphones", price: 79.99, variant: "Standard (Matte Black)", qty: 1 },
  ]);
  const [ecomSelectedVariants, setEcomSelectedVariants] = useState({
    1: "Standard (Matte Black)",
    2: "Black Onyx",
    3: "Red Linear (Quiet)",
    4: "Medium / Sand",
    5: "Off-White Glaze",
  });
  const [ecomOrders, setEcomOrders] = useState(ECOM_INITIAL_ORDERS);
  const [ecomCheckoutDone, setEcomCheckoutDone] = useState(false);

  // ── Derived values ──────────────────────────────────────────────────────────

  const currentAngkorTour = ANGKOR_TOURS.find((t) => t.id === angkorTour) || ANGKOR_TOURS[0];
  const angkorRate = angkorVehicle === "tuktuk" ? currentAngkorTour.tuktuk : currentAngkorTour.car;
  const angkorTotal = angkorRate * angkorGuests;

  const currentEndpoint = API_ENDPOINTS.find((e) => e.id === selectedApiEndpoint) || API_ENDPOINTS[0];

  const ecomSubtotal = ecomCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const ecomShipping = ecomCart.length > 0 && ecomSubtotal < 50 ? 4.99 : 0;
  const ecomTotal = ecomSubtotal + ecomShipping;

  const displayedSections =
    selectedCategory === "all"
      ? SECTIONS
      : SECTIONS.filter((s) => s.id === selectedCategory);

  // ── Calculator handlers ─────────────────────────────────────────────────────

  const handleNum = (n) => {
    if (resetNext || calcDisplay === "0") {
      setCalcDisplay(String(n));
      setResetNext(false);
    } else {
      setCalcDisplay((d) => (d.length < 12 ? d + n : d));
    }
  };

  const handleDot = () => {
    if (resetNext) { setCalcDisplay("0."); setResetNext(false); return; }
    if (!calcDisplay.includes(".")) setCalcDisplay((d) => d + ".");
  };

  const handleOp = (op) => { setCalcPrev(`${calcDisplay} ${op}`); setCalcOp(op); setResetNext(true); };

  const handleEquals = () => {
    if (!calcOp || !calcPrev) return;
    const p = parseFloat(calcPrev);
    const c = parseFloat(calcDisplay);
    let res = calcOp === "+" ? p + c : calcOp === "-" ? p - c : calcOp === "×" ? p * c : c !== 0 ? p / c : "Error";
    const finalStr = typeof res === "number" ? String(Number(res.toFixed(6))) : res;
    setCalcDisplay(finalStr);
    setCalcPrev(`${p} ${calcOp} ${c} =`);
    setCalcOp(null);
    setResetNext(true);
  };

  const handleClear = () => { setCalcDisplay("0"); setCalcPrev(""); setCalcOp(null); setResetNext(false); };
  const handlePercent = () => { const v = parseFloat(calcDisplay); if (!isNaN(v)) setCalcDisplay(String(v / 100)); };

  // ── Angkor handler ──────────────────────────────────────────────────────────

  const resetAngkor = () => setAngkorBooked(false);

  // ── Classroom handler ───────────────────────────────────────────────────────

  const toggleAttendance = (id) =>
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s)));

  // ── E-Commerce handlers ─────────────────────────────────────────────────────

  const addToEcomCart = (product) => {
    const variant = ecomSelectedVariants[product.id] || product.variants[0];
    setEcomCheckoutDone(false);
    setEcomCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.variant === variant);
      if (existing) return prev.map((item) => item.id === product.id && item.variant === variant ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { id: product.id, name: product.name, price: product.price, variant, qty: 1 }];
    });
  };

  const updateEcomQty = (id, variant, delta) => {
    setEcomCheckoutDone(false);
    setEcomCart((prev) =>
      prev.map((item) => {
        if (item.id === id && item.variant === variant) {
          const nextQty = item.qty + delta;
          return nextQty > 0 ? { ...item, qty: nextQty } : null;
        }
        return item;
      }).filter(Boolean),
    );
  };

  const cycleOrderStatus = (orderId) => {
    const next = { Pending: "Processing", Processing: "Shipped", Shipped: "Delivered", Delivered: "Pending" };
    setEcomOrders((prev) => prev.map((o) => o.id === orderId ? { ...o, status: next[o.status] || "Pending" } : o));
  };

  // ── Modal title helper ──────────────────────────────────────────────────────

  const MODAL_TITLES = {
    angkor: "Frontend Demo: Angkor Travel Platform",
    calculator: "Frontend Demo: Smart Web Calculator",
    api: "Backend Demo: Laravel RESTful API Tester",
    classroom: "Full-Stack Demo: Smart Classroom Management",
    ecommerce: "Full-Stack Demo: Modern E-Commerce & Admin Platform",
  };

  // ── Status badge helper for orders ─────────────────────────────────────────

  const statusClass = (status) => ({
    Shipped: "bg-blue-100 text-blue-800 border-blue-200",
    Processing: "bg-purple-100 text-purple-800 border-purple-200",
    Delivered: "bg-emerald-100 text-emerald-800 border-emerald-200",
    Pending: "bg-amber-100 text-amber-800 border-amber-200",
  }[status] || "bg-gray-100 text-gray-800 border-gray-200");

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Category Filter + Project Sections ── */}
      <div>
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-cream-soft/80 border border-line-light rounded-full self-start md:self-auto mb-12">
          {FILTER_TABS.map(({ id, label }) => {
            const isActive = selectedCategory === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedCategory(id)}
                className={`px-4 py-2 rounded-full text-[0.85rem] font-semibold font-sans transition-all cursor-pointer border-none relative ${
                  isActive ? "text-cream" : "text-ink/75 hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="work-tab-indicator"
                    className="absolute inset-0 bg-green rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Sections */}
        <div className="space-y-16">
          {displayedSections.map((sec) => {
            const sectionProjects = PROJECTS.filter((p) => p.category === sec.id);
            return (
              <div key={sec.id} className="pt-2">
                {/* Section Header */}
                <div className="flex items-center gap-3 pb-4 mb-8 border-b border-line-light">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full border bg-white text-ink">
                    {sec.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-serif font-bold text-[1.45rem] text-ink">{sec.title}</h3>
                      <span className={`text-[0.68rem] font-mono uppercase font-bold px-2 py-0.5 rounded-full border ${sec.badgeColor}`}>
                        {sec.badge}
                      </span>
                    </div>
                    <p className="text-[0.85rem] text-[#666] mt-0.5">{sec.subtitle}</p>
                  </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                  className="grid grid-cols-1 min-[861px]:grid-cols-2 gap-9"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                >
                  {sectionProjects.map((project) => (
                    <motion.article
                      key={project.id}
                      className="bg-white border border-line-light rounded-2xl overflow-hidden flex flex-col will-change-[transform,box-shadow]"
                      variants={cardVariants}
                      whileHover={{ y: -6, boxShadow: "0 24px 40px -20px rgba(20,22,15,0.25)", transition: { duration: 0.2 } }}
                    >
                      {/* Thumbnail */}
                      <div className={`aspect-[16/10] flex flex-col ${project.thumbBg}`}>
                        <div className="flex items-center gap-[0.4rem] px-[0.8rem] py-[0.6rem] bg-black/15">
                          <span className="w-[7px] h-[7px] rounded-full bg-white/60" />
                          <span className="w-[7px] h-[7px] rounded-full bg-white/60" />
                          <span className="w-[7px] h-[7px] rounded-full bg-white/60" />
                          <em className="ml-2 not-italic font-mono text-[0.68rem] text-white/75">{project.url}</em>
                          <span className="ml-auto font-mono text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded bg-black/30 text-white/90 border border-white/20">
                            {project.categoryLabel}
                          </span>
                        </div>
                        {project.thumbContent}
                      </div>

                      {/* Card Body */}
                      <div className="p-6 flex flex-col flex-1">
                        <h4 className="font-serif font-bold text-[1.25rem] text-ink mb-2">{project.title}</h4>
                        <p className="text-[0.92rem] leading-[1.6] text-[#4a4e42] flex-1">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[0.75rem] font-mono bg-cream-soft px-[0.6rem] py-[0.3rem] rounded-md text-[#4a4e42]">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Links */}
                        <div className="flex gap-4 mt-5 items-center flex-wrap pt-3 border-t border-line-light/60">
                          <button
                            type="button"
                            className="text-[0.88rem] font-semibold text-terracotta hover:underline font-sans cursor-pointer bg-transparent border-none p-0"
                            onClick={() => setActiveModal(project.demoKey)}
                          >
                            Live Demo ↗
                          </button>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[0.88rem] font-semibold text-ink hover:text-terracotta hover:underline font-sans flex items-center gap-1"
                            >
                              GitHub ↗
                            </a>
                          )}
                          <a
                            href="mailto:lunlytayhok@gmail.com"
                            className="text-[0.88rem] font-semibold text-terracotta hover:underline font-sans"
                          >
                            Contact ↗
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Interactive Demo Modals ── */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="fixed inset-0 bg-[#0e120f]/75 backdrop-blur-md z-[1000] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="bg-white text-ink rounded-[20px] w-full max-w-[700px] max-h-[88vh] flex flex-col shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] overflow-hidden border border-line-light"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-5 bg-cream border-b border-line-light shrink-0">
                <h3 className="font-sans font-bold text-[1.1rem] text-ink">
                  {MODAL_TITLES[activeModal]}
                </h3>
                <button
                  type="button"
                  className="bg-transparent border-none text-[1.6rem] leading-none text-[#666] hover:text-terracotta cursor-pointer px-2 py-1 rounded"
                  onClick={() => setActiveModal(null)}
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-1">

                {/* ── 1. ANGKOR TRAVEL DEMO ── */}
                {activeModal === "angkor" && (
                  <div>
                    <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-[#121c13] to-[#26332b] text-cream mb-5 flex-wrap">
                      <div>
                        <span className="text-[0.68rem] uppercase font-mono tracking-wider text-gold block mb-0.5">Frontend Project</span>
                        <h4 className="font-serif font-bold text-lg text-cream">Angkor Travel — Siem Reap Heritage Platform</h4>
                        <p className="text-[0.8rem] text-cream-soft opacity-85 mt-0.5">Built with React, TypeScript, Tailwind CSS &amp; Framer Motion.</p>
                      </div>
                      <a href="https://github.com/jackyjky123-ship-it/travel_angkor" target="_blank" rel="noopener noreferrer"
                        className="pill-btn pill-btn--gold shrink-0 text-[0.82rem] py-2 px-3.5">
                        GitHub Repo ↗
                      </a>
                    </div>

                    <p className="text-[0.88rem] text-[#555] mb-4 leading-relaxed">
                      Select a signature Angkor tour package, choose your transport vehicle, and simulate the live booking rate calculator and crowd-evasion itinerary below:
                    </p>

                    {/* Tour Tabs */}
                    <div className="flex gap-2 p-1 bg-cream-soft rounded-xl mb-5 overflow-x-auto">
                      {ANGKOR_TOURS.map((t) => (
                        <button key={t.id} type="button"
                          className={`flex-1 py-2 px-3 rounded-lg text-[0.82rem] font-semibold font-sans whitespace-nowrap cursor-pointer transition-all ${angkorTour === t.id ? "bg-white text-ink shadow-sm" : "text-[#555] hover:text-ink"}`}
                          onClick={() => { setAngkorTour(t.id); resetAngkor(); }}>
                          {t.name}
                        </button>
                      ))}
                    </div>

                    {/* Booking Config */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div className="p-4 rounded-xl border border-line-light bg-[#fdfbf7]">
                        <span className="text-[0.78rem] font-bold text-[#666] uppercase block mb-2 font-mono">Select Vehicle</span>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { key: "tuktuk", label: "Eco Tuk-Tuk", price: currentAngkorTour.tuktuk },
                            { key: "car", label: "VIP A/C Car", price: currentAngkorTour.car },
                          ].map(({ key, label, price }) => (
                            <button key={key} type="button"
                              className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${angkorVehicle === key ? "border-terracotta bg-terracotta/5 font-semibold" : "border-line-light bg-white hover:border-[#ccc]"}`}
                              onClick={() => { setAngkorVehicle(key); resetAngkor(); }}>
                              <span className="text-[0.85rem] block font-sans text-ink">{label}</span>
                              <span className="text-[0.78rem] text-terracotta font-mono font-bold">${price} / person</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 rounded-xl border border-line-light bg-[#fdfbf7] flex flex-col justify-between">
                        <div>
                          <span className="text-[0.78rem] font-bold text-[#666] uppercase block mb-2 font-mono">Travelers</span>
                          <div className="flex items-center gap-3">
                            <button type="button" className="w-8 h-8 rounded-lg border border-[#ccc] bg-white font-bold cursor-pointer hover:bg-gray-100 flex items-center justify-center text-base"
                              onClick={() => { setAngkorGuests((g) => Math.max(1, g - 1)); resetAngkor(); }}>-</button>
                            <span className="font-mono font-bold text-base min-w-[2ch] text-center">{angkorGuests}</span>
                            <button type="button" className="w-8 h-8 rounded-lg border border-[#ccc] bg-white font-bold cursor-pointer hover:bg-gray-100 flex items-center justify-center text-base"
                              onClick={() => { setAngkorGuests((g) => Math.min(10, g + 1)); resetAngkor(); }}>+</button>
                            <span className="text-[0.8rem] text-[#666] ml-2">Guest{angkorGuests > 1 ? "s" : ""}</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-line-light mt-3 flex items-center justify-between">
                          <span className="text-[0.85rem] text-[#555]">Calculated Total:</span>
                          <span className="text-[1.25rem] font-bold font-mono text-terracotta">${angkorTotal}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tour Details */}
                    <div className="p-4 rounded-xl border border-line-light bg-cream/40 mb-5">
                      <div className="mb-3">
                        <span className="text-[0.75rem] font-bold uppercase font-mono text-gold block mb-1">Highlights</span>
                        <p className="text-[0.88rem] text-ink font-medium">{currentAngkorTour.highlight}</p>
                      </div>
                      <div className="mb-3">
                        <span className="text-[0.75rem] font-bold uppercase font-mono text-terracotta block mb-1">Crowd Avoidance Strategy</span>
                        <p className="text-[0.84rem] text-[#4a4e42] leading-relaxed">{currentAngkorTour.strategy}</p>
                      </div>
                      <div>
                        <span className="text-[0.75rem] font-bold uppercase font-mono text-[#666] block mb-2">
                          Step-by-Step Itinerary ({currentAngkorTour.duration})
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[0.8rem]">
                          {currentAngkorTour.itinerary.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-2 rounded bg-white/70 border border-line-light">
                              <span className="font-mono text-gold font-bold text-[0.74rem]">{step.time}</span>
                              <span className="text-ink">{step.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Booking Action */}
                    {angkorBooked ? (
                      <div className="p-3 bg-[#d1f4e0] text-[#166534] rounded-xl text-center text-[0.88rem] font-semibold flex items-center justify-center gap-2">
                        <span>✓</span> Tour Reserved! Confirmation for {currentAngkorTour.name} ({angkorGuests} Guest{angkorGuests > 1 ? "s" : ""} &bull; ${angkorTotal}) has been simulated.
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <button type="button"
                          className="flex-1 py-3 px-4 bg-green text-cream rounded-xl font-semibold font-sans hover:opacity-90 transition-opacity cursor-pointer text-center"
                          onClick={() => setAngkorBooked(true)}>
                          Book Tour (${angkorTotal}) &rarr;
                        </button>
                        <a href="https://github.com/jackyjky123-ship-it/travel_angkor" target="_blank" rel="noopener noreferrer"
                          className="py-3 px-5 border border-line-dark rounded-xl font-semibold font-sans bg-ink text-cream hover:bg-black transition-colors text-center shrink-0 flex items-center gap-1.5">
                          GitHub Repo ↗
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* ── 2. CALCULATOR DEMO ── */}
                {activeModal === "calculator" && (
                  <div>
                    <p className="text-[0.9rem] text-[#555] mb-5 leading-[1.5]">
                      Try out the responsive web calculator below. Supports real-time arithmetic calculations, percentages, and clear entry states.
                    </p>
                    <div className="bg-[#181d19] rounded-2xl p-5 max-w-[320px] mx-auto shadow-2xl">
                      <div className="bg-[#0f1310] rounded-[10px] px-4 py-3 text-right mb-4 border border-white/10">
                        <div className="font-mono text-[0.8rem] text-[#889988] min-h-[1.2rem]">{calcPrev || " "}</div>
                        <div className="font-mono text-[1.75rem] font-bold text-white overflow-x-auto whitespace-nowrap">{calcDisplay}</div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { label: "C", fn: handleClear, cls: "bg-[#3a423d] text-[#ff9e9e] hover:bg-[#4a544e]" },
                          { label: "%", fn: handlePercent, cls: "bg-[#252e27] text-white hover:bg-[#334036]" },
                          { label: "÷", fn: () => handleOp("÷"), cls: "bg-terracotta text-white hover:bg-[#b54a2c]" },
                          { label: "×", fn: () => handleOp("×"), cls: "bg-terracotta text-white hover:bg-[#b54a2c]" },
                          ...["7", "8", "9"].map((n) => ({ label: n, fn: () => handleNum(n), cls: "bg-[#252e27] text-white hover:bg-[#334036]" })),
                          { label: "-", fn: () => handleOp("-"), cls: "bg-terracotta text-white hover:bg-[#b54a2c]" },
                          ...["4", "5", "6"].map((n) => ({ label: n, fn: () => handleNum(n), cls: "bg-[#252e27] text-white hover:bg-[#334036]" })),
                          { label: "+", fn: () => handleOp("+"), cls: "bg-terracotta text-white hover:bg-[#b54a2c]" },
                          ...["1", "2", "3"].map((n) => ({ label: n, fn: () => handleNum(n), cls: "bg-[#252e27] text-white hover:bg-[#334036]" })),
                          { label: "=", fn: handleEquals, cls: "bg-gold text-ink font-bold hover:bg-[#d4952e]" },
                          { label: "0", fn: () => handleNum("0"), cls: "col-span-2 bg-[#252e27] text-white hover:bg-[#334036]" },
                          { label: ".", fn: handleDot, cls: "bg-[#252e27] text-white hover:bg-[#334036]" },
                          { label: "⌫", fn: () => setCalcDisplay((d) => d.length > 1 ? d.slice(0, -1) : "0"), cls: "bg-[#252e27] text-white hover:bg-[#334036]" },
                        ].map(({ label, fn, cls }, i) => (
                          <button key={i} type="button"
                            className={`${cls} font-sans font-semibold text-[1.1rem] h-12 rounded-[10px] cursor-pointer transition-colors active:scale-95`}
                            onClick={fn}>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── 3. BACKEND API TESTER DEMO ── */}
                {activeModal === "api" && (
                  <div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#18181b] to-[#27272a] text-cream mb-5">
                      <span className="text-[0.68rem] uppercase font-mono tracking-wider text-rose-400 block mb-0.5">
                        Backend Architecture &amp; REST Services
                      </span>
                      <h4 className="font-serif font-bold text-lg text-cream">Laravel RESTful API Gateway Simulator</h4>
                      <p className="text-[0.8rem] text-cream-soft opacity-85 mt-0.5">
                        Test live backend endpoints, HTTP status codes, Sanctum tokens &amp; JSON responses.
                      </p>
                    </div>

                    {/* Endpoint Tabs */}
                    <div className="flex gap-2 p-1 bg-cream-soft rounded-xl mb-4 overflow-x-auto">
                      {API_ENDPOINTS.map((e) => (
                        <button key={e.id} type="button"
                          className={`flex-1 py-2 px-2.5 rounded-lg text-[0.78rem] font-mono whitespace-nowrap cursor-pointer transition-all flex items-center justify-center gap-1.5 ${selectedApiEndpoint === e.id ? "bg-white text-ink shadow-sm font-bold" : "text-[#555] hover:text-ink font-medium"}`}
                          onClick={() => { setSelectedApiEndpoint(e.id); setApiExecuted(true); }}>
                          <span className={e.method === "GET" ? "text-emerald-600 font-bold" : "text-rose-600 font-bold"}>{e.method}</span>
                          <span>{e.endpoint}</span>
                        </button>
                      ))}
                    </div>

                    {/* Endpoint Info */}
                    <div className="p-3 bg-[#fdfbf7] border border-line-light rounded-xl mb-4 flex items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="font-mono font-bold text-ink mr-2">{currentEndpoint.method} {currentEndpoint.endpoint}</span>
                        <span className="text-[#666] hidden sm:inline">— {currentEndpoint.desc}</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono shrink-0">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[0.7rem]">
                          {currentEndpoint.status} {currentEndpoint.statusText}
                        </span>
                        <span className="text-gold font-bold text-[0.7rem]">{currentEndpoint.latency}</span>
                      </div>
                    </div>

                    {/* Terminal JSON */}
                    <div className="bg-[#18181b] rounded-xl overflow-hidden shadow-xl border border-white/10 mb-4">
                      <div className="flex items-center justify-between px-3.5 py-2 bg-black/40 border-b border-white/10 text-xs font-mono text-cream-soft/70">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                          <span className="ml-2 text-[0.72rem]">response.json</span>
                        </div>
                        <span className="text-emerald-400 text-[0.72rem]">Content-Type: application/json</span>
                      </div>
                      <pre className="p-4 m-0 font-mono text-[0.8rem] text-cream-soft overflow-x-auto leading-relaxed">
                        <code>{JSON.stringify(currentEndpoint.response, null, 2)}</code>
                      </pre>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between text-xs text-[#666]">
                      <span>Backend: <strong>Laravel 11</strong> &bull; <strong>MySQL 8</strong> &bull; <strong>Sanctum Auth</strong></span>
                      <button type="button"
                        onClick={() => { setApiExecuted(false); setTimeout(() => setApiExecuted(true), 250); }}
                        className="px-3.5 py-1.5 bg-green text-cream rounded-lg font-sans font-semibold cursor-pointer hover:opacity-90 transition-opacity">
                        {apiExecuted ? "Re-send Request ↺" : "Executing..."}
                      </button>
                    </div>
                  </div>
                )}

                {/* ── 4. CLASSROOM DEMO ── */}
                {activeModal === "classroom" && (
                  <div>
                    <p className="text-[0.9rem] text-[#555] mb-5 leading-[1.5]">
                      Interactive student attendance and performance record system. Tap on any student's status pill to toggle their attendance state in real time.
                    </p>
                    <div className="bg-[#fdfbf7] border border-line-light rounded-xl p-4 overflow-x-auto">
                      <table className="w-full border-collapse text-[0.88rem]">
                        <thead>
                          <tr>
                            {["Student Name", "Current Status", "Grade"].map((h) => (
                              <th key={h} className="text-left p-2 border-b-2 border-line-light text-[#666] text-[0.78rem] uppercase font-mono">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {students.map((student) => (
                            <tr key={student.id}>
                              <td className="p-2 border-b border-line-light"><strong>{student.name}</strong></td>
                              <td className="p-2 border-b border-line-light">
                                <span
                                  className={`inline-block px-2.5 py-0.5 rounded-full text-[0.75rem] font-semibold cursor-pointer ${student.present ? "bg-[#d1f4e0] text-[#1b6338]" : "bg-[#fee2e2] text-[#991b1b]"}`}
                                  onClick={() => toggleAttendance(student.id)}
                                  title="Click to toggle status"
                                >
                                  {student.present ? "✓ Present" : "✕ Absent"}
                                </span>
                              </td>
                              <td className="p-2 border-b border-line-light"><span className="font-semibold">{student.grade}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ── 5. E-COMMERCE FULL-STACK DEMO ── */}
                {activeModal === "ecommerce" && (
                  <div>
                    {/* Repo Hero Card */}
                    <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-[#091f1a] via-[#11332b] to-[#047857] text-cream mb-5 flex-wrap border border-emerald-500/25">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[0.68rem] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                            Full-Stack Application
                          </span>
                          <span className="text-[0.72rem] text-cream-soft opacity-75 font-mono">React 19 &bull; Laravel 13 &bull; MySQL</span>
                        </div>
                        <h4 className="font-serif font-bold text-lg text-cream">Modern E-Commerce &amp; Admin Suite</h4>
                        <p className="text-[0.8rem] text-cream-soft opacity-90 mt-0.5">
                          Bilingual storefront (Khmer &amp; English) + Zustand cart + Sanctum REST API + Admin back-office.
                        </p>
                      </div>
                      <a href="https://github.com/jackyjky123-ship-it/e-commerce" target="_blank" rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#091f1a] font-sans font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md no-underline shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub Repo ↗
                      </a>
                    </div>

                    {/* View Mode Switcher */}
                    <div className="flex gap-2 p-1 bg-cream-soft rounded-xl mb-5 overflow-x-auto">
                      {[
                        { id: "store", label: "🛍️ Customer Storefront" },
                        { id: "admin", label: "📊 Admin Portal" },
                        { id: "arch", label: "🔌 Architecture & APIs" },
                      ].map((tab) => (
                        <button key={tab.id} type="button"
                          className={`flex-1 py-2 px-3 rounded-lg text-xs font-sans whitespace-nowrap cursor-pointer transition-all ${ecomTab === tab.id ? "bg-white text-ink shadow-sm font-bold" : "text-[#666] hover:text-ink font-medium"}`}
                          onClick={() => setEcomTab(tab.id)}>
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* TAB: STOREFRONT */}
                    {ecomTab === "store" && (
                      <div className="space-y-4">
                        {/* Category Filters */}
                        <div className="flex gap-1.5 overflow-x-auto pb-1">
                          {[
                            { id: "all", label: "All Products" },
                            { id: "electronics", label: "Electronics (គ្រឿងអេឡិចត្រូនិក)" },
                            { id: "fashion", label: "Fashion (ម៉ូដសម្លៀកបំពាក់)" },
                            { id: "home", label: "Home (សម្ភារៈក្នុងផ្ទះ)" },
                          ].map((cat) => (
                            <button key={cat.id} type="button" onClick={() => setEcomCategory(cat.id)}
                              className={`px-3 py-1.5 rounded-full text-xs font-sans whitespace-nowrap cursor-pointer transition-all border ${ecomCategory === cat.id ? "bg-green text-cream border-green font-semibold" : "bg-white text-[#555] border-line-light hover:border-green/40"}`}>
                              {cat.label}
                            </button>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-4">
                          {/* Product Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                            {ECOM_PRODUCTS.filter((p) => ecomCategory === "all" || p.category === ecomCategory).map((product) => (
                              <div key={product.id} className="bg-[#fcfbf9] border border-line-light rounded-xl p-3 flex flex-col justify-between hover:border-emerald-600 transition-all group">
                                <div>
                                  <div className="flex items-center justify-between text-[0.68rem] text-[#888] font-mono mb-1">
                                    <span className="uppercase">{product.brand}</span>
                                    <span className="text-gold font-bold">★ {product.rating}</span>
                                  </div>
                                  <h5 className="font-sans font-bold text-[0.88rem] text-ink leading-snug group-hover:text-emerald-800 transition-colors">{product.name}</h5>
                                  <p className="text-[0.72rem] text-[#666] mt-1 line-clamp-2 leading-relaxed">{product.features}</p>
                                  <div className="mt-2.5">
                                    <label className="text-[0.65rem] font-mono text-[#777] uppercase block mb-0.5">Variant:</label>
                                    <select
                                      value={ecomSelectedVariants[product.id] || product.variants[0]}
                                      onChange={(e) => setEcomSelectedVariants((prev) => ({ ...prev, [product.id]: e.target.value }))}
                                      className="w-full text-[0.72rem] font-sans bg-white border border-line-light rounded px-2 py-1 text-ink focus:outline-none focus:border-green">
                                      {product.variants.map((v) => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                  </div>
                                </div>
                                <div className="pt-2.5 mt-2 border-t border-line-light/60 flex items-center justify-between">
                                  <div>
                                    <span className="font-sans font-bold text-[0.95rem] text-terracotta">${product.price.toFixed(2)}</span>
                                    {product.oldPrice && (
                                      <span className="text-[0.7rem] text-[#999] line-through ml-1.5 font-mono">${product.oldPrice.toFixed(2)}</span>
                                    )}
                                  </div>
                                  <button type="button" onClick={() => addToEcomCart(product)}
                                    className="px-2.5 py-1 rounded bg-green hover:bg-green-soft text-cream text-[0.75rem] font-semibold font-sans cursor-pointer transition-colors active:scale-95">
                                    + Add
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Cart Panel */}
                          <div className="bg-[#fcfbf9] border border-line-light rounded-xl p-3.5 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between pb-2 border-b border-line-light">
                                <span className="font-sans font-bold text-[0.9rem] text-ink flex items-center gap-1.5">
                                  Zustand Cart
                                  <span className="px-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[0.7rem] font-mono font-bold">
                                    {ecomCart.reduce((sum, i) => sum + i.qty, 0)}
                                  </span>
                                </span>
                                <span className="text-[0.7rem] font-mono text-[#888]">API Synced</span>
                              </div>
                              <div className="max-h-[175px] overflow-y-auto my-2 space-y-2 pr-1">
                                {ecomCart.length === 0 ? (
                                  <p className="text-[0.8rem] text-[#888] text-center py-6">Cart is empty. Add products to test checkout.</p>
                                ) : (
                                  ecomCart.map((item) => (
                                    <div key={`${item.id}-${item.variant}`} className="flex items-center justify-between text-[0.78rem] p-2 bg-white rounded-lg border border-line-light/70">
                                      <div className="min-w-0 pr-2">
                                        <div className="font-semibold text-ink truncate text-[0.8rem]">{item.name}</div>
                                        <div className="text-[0.68rem] text-[#777] font-mono truncate">{item.variant} &bull; ${item.price.toFixed(2)}</div>
                                      </div>
                                      <div className="flex items-center gap-1 shrink-0 font-mono">
                                        <button type="button" onClick={() => updateEcomQty(item.id, item.variant, -1)}
                                          className="w-5 h-5 rounded bg-cream-soft hover:bg-line-light text-ink flex items-center justify-center cursor-pointer border-none font-bold text-xs">-</button>
                                        <span className="w-4 text-center font-bold">{item.qty}</span>
                                        <button type="button" onClick={() => updateEcomQty(item.id, item.variant, 1)}
                                          className="w-5 h-5 rounded bg-cream-soft hover:bg-line-light text-ink flex items-center justify-center cursor-pointer border-none font-bold text-xs">+</button>
                                      </div>
                                    </div>
                                  ))
                                )}
                              </div>
                            </div>
                            <div className="pt-2 border-t border-line-light text-[0.8rem] space-y-1">
                              <div className="flex justify-between text-[#666]">
                                <span>Subtotal</span><span className="font-mono">${ecomSubtotal.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between text-[#666]">
                                <span>Shipping</span>
                                <span className="font-mono">{ecomShipping === 0 ? <span className="text-emerald-700 font-bold">FREE ($50+)</span> : `$${ecomShipping.toFixed(2)}`}</span>
                              </div>
                              <div className="flex justify-between text-[0.95rem] font-bold text-ink pt-1 border-t border-dashed border-line-light">
                                <span>Total</span><span className="text-terracotta font-mono">${ecomTotal.toFixed(2)}</span>
                              </div>
                              {ecomCheckoutDone ? (
                                <div className="mt-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-center text-xs">
                                  <div className="font-bold">✓ Order #ORD-2026-8943 Placed!</div>
                                  <div className="text-[0.68rem] text-emerald-700 mt-0.5">ACID transaction committed &bull; Status: Processing</div>
                                </div>
                              ) : (
                                <button type="button" disabled={ecomCart.length === 0} onClick={() => setEcomCheckoutDone(true)}
                                  className="w-full mt-2 py-2 rounded-lg bg-green hover:bg-green-soft text-cream font-sans font-bold text-xs cursor-pointer transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                  Checkout (POST /api/orders) &rarr;
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB: ADMIN PORTAL */}
                    {ecomTab === "admin" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white border border-line-light rounded-xl text-xs flex-wrap gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-semibold text-ink">Session: admin@example.com</span>
                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[0.68rem] font-bold">Role: Admin</span>
                          </div>
                          <span className="text-[#666] font-mono text-[0.72rem]">Laravel Sanctum Bearer Token Active</span>
                        </div>

                        {/* KPI Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {ECOM_ADMIN_STATS.map((stat) => (
                            <div key={stat.label} className="p-3 bg-white border border-line-light rounded-xl flex flex-col justify-between">
                              <span className="text-[0.7rem] text-[#777] font-sans">{stat.label}</span>
                              <div className="text-[1.2rem] font-serif font-bold text-ink my-1">{stat.value}</div>
                              <span className={`text-[0.65rem] font-mono font-medium px-1.5 py-0.5 rounded border inline-block ${stat.highlight}`}>{stat.growth}</span>
                            </div>
                          ))}
                        </div>

                        {/* Orders Table */}
                        <div className="bg-white border border-line-light rounded-xl p-3.5">
                          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-line-light">
                            <div>
                              <h5 className="font-sans font-bold text-[0.88rem] text-ink">Recent Store Orders</h5>
                              <p className="text-[0.72rem] text-[#777]">Click any status pill → simulates <code>PUT /api/admin/orders/[id]/status</code></p>
                            </div>
                            <span className="text-[0.72rem] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Live DB Sync</span>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-[0.78rem] border-collapse">
                              <thead>
                                <tr className="border-b border-line-light text-[#888] font-mono text-[0.68rem] uppercase">
                                  {["Order ID", "Customer", "Items", "Total", "Status", "Timestamp"].map((h) => (
                                    <th key={h} className="pb-1.5 pr-3">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {ecomOrders.map((ord) => (
                                  <tr key={ord.id} className="border-b border-line-light/50 hover:bg-cream/40 transition-colors">
                                    <td className="py-2 pr-3 font-mono font-bold text-ink text-[0.74rem]">{ord.id}</td>
                                    <td className="py-2 pr-3 text-ink font-medium">{ord.customer}</td>
                                    <td className="py-2 pr-3 text-[#666] text-[0.72rem]">{ord.items}</td>
                                    <td className="py-2 pr-3 font-mono font-bold text-terracotta">${ord.total.toFixed(2)}</td>
                                    <td className="py-2 pr-3">
                                      <button type="button" onClick={() => cycleOrderStatus(ord.id)}
                                        className={`px-2 py-0.5 rounded-full text-[0.68rem] font-bold font-mono cursor-pointer border transition-transform active:scale-95 ${statusClass(ord.status)}`}
                                        title="Click to cycle order status">
                                        {ord.status} ↺
                                      </button>
                                    </td>
                                    <td className="py-2 text-[#888] text-[0.7rem] font-mono">{ord.date}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB: ARCHITECTURE */}
                    {ecomTab === "arch" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            {
                              tier: "Client Tier", color: "text-blue-600", title: "React 19 Frontend", port: "Port: 5173 (Vite)",
                              items: ["Tailwind CSS v4 & Radix UI", "Zustand for Client/Cart State", "Axios HTTP Client + Interceptors", "Sonner Toast Notifications"],
                            },
                            {
                              tier: "API Tier", color: "text-rose-600", title: "Laravel 13 Backend", port: "PHP 8.3 RESTful Engine",
                              items: ["Laravel Sanctum Bearer Auth", "Role-Based Access (Admin/User)", "ACID Transaction Isolation", "Eloquent Relational Mapping"],
                            },
                            {
                              tier: "Data Tier", color: "text-emerald-600", title: "MySQL Relational DB", port: "Strict Foreign Keys & Indexes",
                              items: ["Users • Categories • Products", "ProductVariants • Images", "Carts • CartItems", "Orders • OrderItems"],
                            },
                          ].map(({ tier, color, title, port, items }) => (
                            <div key={tier} className="p-3.5 rounded-xl bg-white border border-line-light flex flex-col justify-between">
                              <div>
                                <span className={`text-[0.65rem] font-mono uppercase font-bold block mb-1 ${color}`}>{tier}</span>
                                <h5 className="font-sans font-bold text-[0.92rem] text-ink mb-1.5">{title}</h5>
                                <ul className="text-[0.74rem] text-[#555] space-y-1 list-disc pl-3 leading-relaxed">
                                  {items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                              </div>
                              <span className="text-[0.68rem] font-mono text-[#888] mt-3 block pt-2 border-t border-line-light">{port}</span>
                            </div>
                          ))}
                        </div>

                        {/* API Routes Table */}
                        <div className="bg-[#18181b] rounded-xl overflow-hidden shadow-lg border border-white/10 p-3.5 text-cream font-mono text-xs">
                          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[0.7rem] text-cream-soft/70">
                            <span>CONFIRMED REST API ROUTES (routes/api.php)</span>
                            <span className="text-emerald-400">Laravel Sanctum</span>
                          </div>
                          <div className="space-y-1.5 mt-2.5 text-[0.74rem]">
                            {[
                              { method: "POST", path: "/api/auth/login", badge: "bg-blue-500/20 text-blue-300", note: "Issues Sanctum Bearer Token" },
                              { method: "GET", path: "/api/products", badge: "bg-emerald-500/20 text-emerald-300", note: "Catalog, Category Filters, Variants" },
                              { method: "POST", path: "/api/cart/merge", badge: "bg-blue-500/20 text-blue-300", note: "Syncs Guest Cart to Auth User" },
                              { method: "POST", path: "/api/orders", badge: "bg-purple-500/20 text-purple-300", note: "ACID Checkout & Stock Decrement" },
                              { method: "GET", path: "/api/admin/dashboard", badge: "bg-amber-500/20 text-amber-300", note: "Protected: Admin Middleware" },
                            ].map(({ method, path, badge, note }) => (
                              <div key={path} className="flex items-center gap-2">
                                <span className={`${badge} px-1.5 py-0.5 rounded text-[0.65rem] font-bold`}>{method}</span>
                                <span className="text-white/90">{path}</span>
                                <span className="ml-auto text-cream-soft/60 text-[0.68rem]">{note}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

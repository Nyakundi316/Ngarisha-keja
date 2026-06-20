// =====================================================================
// SITE CONFIG — edit everything here. Components read from this file.
// =====================================================================

export const company = {
  name: "Ngarishakeja",
  tagline: "Cleaning & Facility Support", // TODO: replace with a real slogan if you have one
  phoneDisplay: "0759 553 961",
  phoneHref: "+254759553961", // tel: link
  whatsapp: "254759553961", // wa.me number (international, no +)
  email: "nyakundibrian316@gmail.com",
  address: "Nairobi, Kenya", // TODO: confirm
  serviceArea: "Nairobi & surrounding counties", // TODO: confirm
  hours: "Mon–Sat, 7:00–18:00", // TODO: confirm
  socials: {
    instagram: "", // TODO
    facebook: "", // TODO
    x: "", // TODO
    linkedin: "", // TODO
    tiktok: "", // TODO
  },
};

export const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  "Hello Ngarishakeja, I'd like a quote for cleaning / facility support."
)}`;

// Header navigation -----------------------------------------------------
// Each entry is a real route (App Router page), not an in-page anchor.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Plans", href: "/plans" },
  { label: "Contact", href: "/contact" },
];

// Hero ------------------------------------------------------------------
export const heroBadges = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Facility Support",
  "Flexible Contracts",
];

// Stats -----------------------------------------------------------------
export const stats = [
  { value: "6", suffix: "+", label: "Years Experience" }, // TODO: confirm
  { value: "500", suffix: "+", label: "Clients Served" }, // TODO
  { value: "10,000", suffix: "+", label: "Spaces Cleaned" }, // TODO
  { value: "98", suffix: "%", label: "Satisfaction Rate" }, // TODO
];

// Services --------------------------------------------------------------
export const services = [
  { icon: "home", title: "Home & Apartment Cleaning", desc: "Thorough, dependable cleaning for living spaces of any size." },
  { icon: "office", title: "Office Cleaning", desc: "Keep your workplace spotless, healthy, and professional." },
  { icon: "school", title: "School & Institutional Cleaning", desc: "Large-scale sanitation that meets health standards." },
  { icon: "key", title: "Airbnb Turnover Cleaning", desc: "Fast, reliable turnarounds between guest stays." },
  { icon: "sparkle", title: "Deep Cleaning", desc: "Intensive, top-to-bottom cleans for a fresh reset." },
  { icon: "truck", title: "Move-In & Move-Out Cleaning", desc: "Spotless handovers for tenants and owners." },
  { icon: "hardhat", title: "Post-Construction Cleaning", desc: "Dust, debris, and residue removed after works." },
  { icon: "rug", title: "Carpet Cleaning", desc: "Deep extraction for fresh, stain-free carpets." },
  { icon: "sofa", title: "Sofa & Upholstery Cleaning", desc: "Restore and sanitize your furniture." },
  { icon: "bed", title: "Mattress Cleaning", desc: "Hygienic, allergen-reducing mattress care." },
  { icon: "window", title: "Window Cleaning", desc: "Streak-free clarity, inside and out." },
  { icon: "floor", title: "Floor Care", desc: "Scrubbing, polishing, and protection for all floor types." },
  { icon: "drop", title: "Washroom Sanitization", desc: "Deep disinfection for hygienic restrooms." },
  { icon: "trash", title: "Waste Collection & Disposal", desc: "Responsible removal and disposal." },
  { icon: "kitchen", title: "Kitchen & Common Area Cleaning", desc: "Spotless shared and food-prep spaces." },
];

// Facility Support ------------------------------------------------------
export const facilitySupport = [
  { icon: "bug", title: "Fumigation Coordination", desc: "Pest control arranged and managed for you." },
  { icon: "leaf", title: "Landscaping & Compound Maintenance", desc: "Tidy grounds and outdoor spaces." },
  { icon: "trash", title: "Garbage Management", desc: "Organized, reliable waste handling." },
  { icon: "tank", title: "Water Tank Cleaning", desc: "Safe, sanitized water storage." },
  { icon: "shield", title: "Office Hygiene Management", desc: "Ongoing hygiene oversight for workplaces." },
  { icon: "confetti", title: "Event Clean-Up Services", desc: "Pre- and post-event cleaning crews." },
  { icon: "wrench", title: "General Facility Upkeep", desc: "Routine maintenance to keep things running." },
  { icon: "calendar", title: "Long-Term Property Maintenance", desc: "A dependable ongoing partner." },
];

// Why Choose Us ---------------------------------------------------------
export const whyChooseUs = [
  { icon: "clock", title: "Reliable & punctual", desc: "We show up on time, every time, and follow through." },
  { icon: "badge", title: "Professional team", desc: "Trained, vetted, and supervised cleaning staff." },
  { icon: "calendar", title: "Flexible plans", desc: "Daily, weekly, monthly, and custom schedules." },
  { icon: "building", title: "Every space", desc: "Homes, offices, institutions, and commercial sites." },
  { icon: "drop", title: "Hygiene-focused", desc: "Consistent standards and proper sanitation." },
  { icon: "handshake", title: "Long-term partner", desc: "Facility support beyond one-off cleaning." },
  { icon: "chat", title: "Easy booking", desc: "Reach us by WhatsApp, phone, email, or form." },
  { icon: "shield", title: "Accountable", desc: "Clear plans, dependable results, real ownership." },
];

// How It Works ----------------------------------------------------------
export const steps = [
  { n: "01", title: "Request a Quote", desc: "Tell us what you need; get a fast response." },
  { n: "02", title: "Schedule a Site Visit", desc: "We assess your space and requirements." },
  { n: "03", title: "Get a Custom Plan", desc: "A tailored plan and clear pricing." },
  { n: "04", title: "Service Begins", desc: "Your team gets to work, on schedule." },
];

// Plans -----------------------------------------------------------------
export const plans = [
  { title: "One-Time Cleaning", desc: "A single thorough clean, whenever you need it.", popular: false },
  { title: "Weekly Cleaning", desc: "Consistent weekly upkeep for busy spaces.", popular: false },
  { title: "Monthly Cleaning", desc: "Scheduled monthly maintenance cleaning.", popular: false },
  { title: "Long-Term Contract", desc: "Ongoing service with priority scheduling.", popular: true },
  { title: "Custom Facility Plan", desc: "Tailored cleaning + facility management.", popular: false },
];

// Clients We Serve ------------------------------------------------------
export const clients = [
  { icon: "home", label: "Homes" },
  { icon: "building", label: "Apartments" },
  { icon: "office", label: "Offices" },
  { icon: "school", label: "Schools" },
  { icon: "city", label: "Commercial Buildings" },
  { icon: "key", label: "Airbnbs" },
  { icon: "bank", label: "Institutions" },
  { icon: "confetti", label: "Events" },
];

// Testimonials ----------------------------------------------------------
export const testimonials = [
  { quote: "Always on time and incredibly thorough. Our office has never looked better.", name: "Client Name", role: "Office Manager" },
  { quote: "Their Airbnb turnovers are fast and flawless — guests always comment on how clean it is.", name: "Client Name", role: "Airbnb Host" },
  { quote: "A reliable long-term partner for our facility. Truly hassle-free.", name: "Client Name", role: "Property Manager" },
];

// Trust / Quality -------------------------------------------------------
export const qualityPoints = [
  "Cleanliness", "Hygiene", "Reliability", "Accountability", "Customer Satisfaction", "Long-Term Support",
];

// FAQ -------------------------------------------------------------------
export const faqs = [
  { q: "What areas do you serve?", a: `We operate across ${company.serviceArea}.` },
  { q: "Do you offer one-time and recurring cleaning?", a: "Yes — from single deep cleans to long-term contracts." },
  { q: "Are your staff trained and vetted?", a: "All team members are trained, vetted, and supervised to consistent standards." },
  { q: "Do you bring your own equipment and supplies?", a: "Yes, unless you prefer we use yours." },
  { q: "How fast can you start?", a: "After a quick site visit and plan, we schedule at your convenience." },
  { q: "How do I get a quote?", a: "Use the form below, WhatsApp, or call us — we respond quickly." },
];

// Service options for the contact form ----------------------------------
export const serviceOptions = [
  ...services.map((s) => s.title),
  ...plans.map((p) => p.title),
  "Other / Not sure",
];

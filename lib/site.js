// =====================================================================
// SITE CONFIG — edit everything here. Components read from this file.
// =====================================================================

export const company = {
  name: "Ngarishakeja",
  tagline: "Cleaning & Facility Support", // TODO: replace with a real slogan if you have one
  siteUrl: "https://ngarishakeja.co.ke", // TODO: replace with the real production domain before launch
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

// Services --------------------------------------------------------------
// Each item has its own detail page at /services/[slug].
//  - long:     a fuller intro for the detail page
//  - includes: what the service covers (checklist)
//  - serves:   who the service is for
//  - image / imageAlt (optional): card + detail photo from public/images
//  - gallery (optional): extra photos shown on the detail page
// Photos keep their original WhatsApp export filenames on purpose — new
// ones can be dropped into public/images and referenced the same way.
const img = (file) => `/images/${file}`;

export const services = [
  {
    icon: "home",
    slug: "home-apartment-cleaning",
    title: "Home & Apartment Cleaning",
    desc: "Thorough, dependable cleaning for living spaces of any size.",
    long: "Reliable, detail-focused cleaning that keeps your home fresh and comfortable — from compact studios to large family houses, on a one-off or recurring basis.",
    includes: ["Dusting & surface wiping", "Vacuuming & mopping of all floors", "Kitchen & bathroom cleaning", "Bedrooms & living areas tidied", "Bins emptied and relined"],
    serves: "Homeowners, tenants, and apartment residents who want a consistently clean home.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.29 (1).jpeg"),
    imageAlt: "Wet mop and bucket working across a home's wooden floor",
    gallery: [
      { src: img("WhatsApp Image 2026-07-03 at 19.30.15.jpeg"), alt: "Gloved hand wiping down a bathtub and shower fittings" },
    ],
  },
  {
    icon: "office",
    slug: "office-cleaning",
    title: "Office Cleaning",
    desc: "Keep your workplace spotless, healthy, and professional.",
    long: "Daily or scheduled office cleaning that gives your team a healthier, more professional space and leaves the right impression on every visitor.",
    includes: ["Workstations & desks", "Meeting rooms & reception", "Kitchenette & breakout areas", "Restrooms sanitized", "Waste collection & restocking"],
    serves: "Businesses, co-working spaces, and offices that need a professional, healthy workplace.",
    image: img("WhatsApp Image 2026-07-03 at 19.34.42.jpeg"),
    imageAlt: "Microfibre flat mop gliding across a polished office floor",
    gallery: [
      { src: img("WhatsApp Image 2026-07-03 at 19.22.30 (2).jpeg"), alt: "Cleaning crew working a large floor with a buffer, mops, and squeegees" },
    ],
  },
  {
    icon: "school",
    slug: "school-institutional-cleaning",
    title: "School & Institutional Cleaning",
    desc: "Large-scale sanitation that meets health standards.",
    long: "Large-scale cleaning and sanitation built for high foot traffic and strict health standards, keeping learning and care environments safe.",
    includes: ["Classrooms & lecture halls", "Corridors & common areas", "Washrooms & sanitation", "High-touch surface disinfection", "Daily large-scale upkeep"],
    serves: "Schools, colleges, hospitals, and institutions with high foot traffic and health standards.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.30 (2).jpeg"),
    imageAlt: "Cleaning team covering a large institutional floor with a buffer and mops",
  },
  {
    icon: "key",
    slug: "airbnb-turnover-cleaning",
    title: "Airbnb Turnover Cleaning",
    desc: "Fast, reliable turnarounds between guest stays.",
    long: "Fast, guest-ready turnovers between bookings so every stay starts spotless — with fresh linen, restocked essentials, and a flawless first impression.",
    includes: ["Guest-ready quick turnarounds", "Fresh linen & bed making", "Bathroom & kitchen reset", "Restocking of essentials", "Damage & issue reporting"],
    serves: "Airbnb hosts and short-stay property managers turning over between guests.",
    image: img("WhatsApp Image 2026-07-03 at 19.31.25.jpeg"),
    imageAlt: "Freshly washed linen drying on a rack by the window between stays",
    gallery: [
      { src: img("WhatsApp Image 2026-07-03 at 19.26.12.jpeg"), alt: "Mattress before and after stain removal treatment" },
    ],
  },
  {
    icon: "sparkle",
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    desc: "Intensive, top-to-bottom cleans for a fresh reset.",
    long: "An intensive, top-to-bottom clean that reaches the spots routine cleaning misses — ideal for a seasonal reset or before a big occasion.",
    includes: ["Top-to-bottom intensive clean", "Behind & under furniture", "Grout, tiles & fittings", "Appliance exteriors", "Built-up grime removal"],
    serves: "Anyone needing a thorough reset — seasonal, pre-event, or first-time cleans.",
    image: img("WhatsApp Image 2026-07-03 at 19.23.07.jpeg"),
    imageAlt: "Surfaces being sprayed and wiped down during an intensive deep clean",
    gallery: [
      { src: img("WhatsApp Image 2026-07-03 at 19.34.43.jpeg"), alt: "Deck brush scrubbing suds across terracotta floor tiles" },
      { src: img("WhatsApp Image 2026-07-03 at 19.26.15.jpeg"), alt: "Washroom floor tiles washed down with detergent" },
    ],
  },
  {
    icon: "truck",
    slug: "move-in-move-out-cleaning",
    title: "Move-In & Move-Out Cleaning",
    desc: "Spotless handovers for tenants and owners.",
    long: "A complete clean of an empty property so the handover is spotless — protecting deposits and giving new occupants a fresh start.",
    includes: ["Empty-property deep clean", "Cabinets inside & out", "Floors, walls & skirting", "Bathroom & kitchen detailing", "Handover-ready finish"],
    serves: "Tenants, landlords, and agents preparing a spotless handover.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.29 (2).jpeg"),
    imageAlt: "Crew member scrubbing down an outdoor terrace during a handover clean",
  },
  {
    icon: "hardhat",
    slug: "post-construction-cleaning",
    title: "Post-Construction Cleaning",
    desc: "Dust, debris, and residue removed after works.",
    long: "Specialist cleaning after building or renovation works — clearing dust, debris, and residue to make the site truly move-in ready.",
    includes: ["Dust & debris removal", "Paint & adhesive residue", "Window & fixture cleaning", "Floor washing & polishing", "Move-in-ready finish"],
    serves: "Contractors, developers, and owners after building or renovation works.",
    image: img("WhatsApp Image 2026-07-03 at 19.26.15.jpeg"),
    imageAlt: "Tiled floors washed down with detergent after finishing works",
  },
  {
    icon: "rug",
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    desc: "Deep extraction for fresh, stain-free carpets.",
    long: "Deep-extraction carpet cleaning that lifts dirt, stains, and odours from the fibres — leaving carpets fresh, hygienic, and fast-drying.",
    includes: ["Deep extraction cleaning", "Stain & spot treatment", "Odour removal", "Fast-drying process", "Fibre-safe products"],
    serves: "Homes and offices wanting fresh, hygienic, stain-free carpets.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.30.jpeg"),
    imageAlt: "Steam extraction lifting dirt out of carpet fibres",
    gallery: [
      { src: img("WhatsApp Image 2026-07-03 at 19.22.41.jpeg"), alt: "Rug being shampooed with a rotary machine" },
    ],
  },
  {
    icon: "sofa",
    slug: "sofa-upholstery-cleaning",
    title: "Sofa & Upholstery Cleaning",
    desc: "Restore and sanitize your furniture.",
    long: "Gentle, material-safe cleaning that restores and sanitizes sofas, chairs, and soft furniture — removing stains, dust, and odours.",
    includes: ["Fabric & leather care", "Stain & spill treatment", "Sanitizing & deodorizing", "Cushion & crevice cleaning", "Material-safe methods"],
    serves: "Households and offices restoring sofas, chairs, and soft furniture.",
    image: img("WhatsApp Image 2026-07-03 at 19.30.18.jpeg"),
    imageAlt: "Cleaning foam being worked in during a full interior clean",
    gallery: [
      { src: img("WhatsApp Image 2026-07-03 at 19.22.28.jpeg"), alt: "Steam-cleaning seats and interior carpet" },
      { src: img("WhatsApp Image 2026-07-03 at 19.26.13.jpeg"), alt: "Fabric seats before and after upholstery cleaning" },
    ],
  },
  {
    icon: "bed",
    slug: "mattress-cleaning",
    title: "Mattress Cleaning",
    desc: "Hygienic, allergen-reducing mattress care.",
    long: "Hygienic mattress cleaning that reduces dust mites and allergens and removes stains and odours — for healthier, fresher sleep.",
    includes: ["Deep surface cleaning", "Stain treatment", "Dust-mite & allergen reduction", "Sanitizing & deodorizing", "Quick-dry finish"],
    serves: "Homes, Airbnbs, and hostels wanting hygienic, allergen-reduced sleep.",
    image: img("WhatsApp Image 2026-07-03 at 19.26.12.jpeg"),
    imageAlt: "Mattress shown before and after stain and odour treatment",
  },
  {
    icon: "window",
    slug: "window-cleaning",
    title: "Window Cleaning",
    desc: "Streak-free clarity, inside and out.",
    long: "Streak-free window cleaning inside and out, including frames, sills, and glass partitions — for clear views and brighter spaces.",
    includes: ["Interior & exterior glass", "Frames & sills", "Streak-free finish", "Glass doors & partitions", "Reachable high windows"],
    serves: "Homes, offices, and storefronts wanting clear, streak-free windows.",
  },
  {
    icon: "floor",
    slug: "floor-care",
    title: "Floor Care",
    desc: "Scrubbing, polishing, and protection for all floor types.",
    long: "Scrubbing, polishing, and protection tailored to your floor type — keeping tile, vinyl, wood, and stone looking their best for longer.",
    includes: ["Scrubbing & deep cleaning", "Polishing & buffing", "Tile, vinyl, wood & stone", "Sealing & protection", "Routine maintenance"],
    serves: "Commercial and residential spaces with floors that need lasting care.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.29.jpeg"),
    imageAlt: "Rotary buffer polishing a tiled corridor floor",
    gallery: [
      { src: img("WhatsApp Image 2026-07-03 at 19.22.30 (2).jpeg"), alt: "Crew scrubbing and squeegeeing a large floor area" },
      { src: img("WhatsApp Image 2026-07-03 at 19.34.43.jpeg"), alt: "Terracotta tiles scrubbed with a deck brush and suds" },
    ],
  },
  {
    icon: "drop",
    slug: "washroom-sanitization",
    title: "Washroom Sanitization",
    desc: "Deep disinfection for hygienic restrooms.",
    long: "Deep disinfection and odour control for restrooms, with descaling, restocking, and routine hygiene checks that keep facilities fresh.",
    includes: ["Deep disinfection", "Toilets, sinks & fittings", "Descaling & odour control", "Consumable restocking", "Routine hygiene checks"],
    serves: "Offices, institutions, and public facilities needing hygienic restrooms.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.28 (1).jpeg"),
    imageAlt: "Cleaner disinfecting a toilet and washroom fittings",
    gallery: [
      { src: img("WhatsApp Image 2026-07-03 at 19.30.15.jpeg"), alt: "Bathtub and shower fittings being wiped down" },
    ],
  },
  {
    icon: "trash",
    slug: "waste-collection-disposal",
    title: "Waste Collection & Disposal",
    desc: "Responsible removal and disposal.",
    long: "Dependable waste collection and responsible disposal on a schedule that suits you — including bin cleaning and recycling separation.",
    includes: ["Scheduled waste pickup", "Responsible disposal", "Bin cleaning & relining", "Recycling separation", "Reliable routes"],
    serves: "Homes, estates, and businesses needing dependable waste handling.",
  },
  {
    icon: "kitchen",
    slug: "kitchen-common-area-cleaning",
    title: "Kitchen & Common Area Cleaning",
    desc: "Spotless shared and food-prep spaces.",
    long: "Hygienic cleaning of kitchens and shared spaces — keeping food-prep and common areas spotless, sanitized, and well stocked.",
    includes: ["Worktops & surfaces", "Sinks & appliance exteriors", "Floors & high-touch points", "Shared-area tidying", "Sanitizing & restocking"],
    serves: "Offices, restaurants, and shared spaces keeping food-prep areas spotless.",
    image: img("WhatsApp Image 2026-07-03 at 19.26.14.jpeg"),
    imageAlt: "Gas cooker top being degreased with a soapy sponge",
  },
];

// Facility Support ------------------------------------------------------
export const facilitySupport = [
  {
    icon: "bug",
    slug: "fumigation-coordination",
    title: "Fumigation Coordination",
    desc: "Pest control arranged and managed for you.",
    long: "We arrange and manage professional pest control end-to-end — coordinating licensed partners, scheduling, and follow-ups with minimal disruption.",
    includes: ["Licensed pest-control partners", "Site assessment & scheduling", "Safe, approved treatments", "Follow-up visits", "Minimal disruption"],
    serves: "Properties dealing with pests that need managed, professional fumigation.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.28 (2).jpeg"),
    imageAlt: "Pest-control technician in protective gear treating a living room",
  },
  {
    icon: "leaf",
    slug: "landscaping-compound-maintenance",
    title: "Landscaping & Compound Maintenance",
    desc: "Tidy grounds and outdoor spaces.",
    long: "Ongoing care for lawns, hedges, and outdoor areas that keeps your compound tidy, welcoming, and well maintained year-round.",
    includes: ["Lawn mowing & edging", "Hedge & shrub trimming", "Weeding & clearing", "Compound tidying", "Scheduled upkeep"],
    serves: "Homes, estates, and commercial compounds wanting tidy outdoor spaces.",
    image: img("WhatsApp Image 2026-07-03 at 19.30.19.jpeg"),
    imageAlt: "Groundskeeper edging a lawn beside a trimmed hedge",
  },
  {
    icon: "trash",
    slug: "garbage-management",
    title: "Garbage Management",
    desc: "Organized, reliable waste handling.",
    long: "Organized garbage management with reliable collection routes, bin sanitation, and recurring schedules that keep premises clean.",
    includes: ["Organized collection", "Reliable disposal routes", "Bin sanitation", "High-volume handling", "Recurring schedules"],
    serves: "Apartments, estates, and businesses needing organized waste systems.",
  },
  {
    icon: "tank",
    slug: "water-tank-cleaning",
    title: "Water Tank Cleaning",
    desc: "Safe, sanitized water storage.",
    long: "Thorough draining, scrubbing, and disinfection of water tanks so your stored water stays safe and clean — with an inspection report.",
    includes: ["Draining & scrubbing", "Sediment & sludge removal", "Disinfection", "Safe refilling", "Inspection report"],
    serves: "Homes and institutions keeping stored water safe and clean.",
  },
  {
    icon: "shield",
    slug: "office-hygiene-management",
    title: "Office Hygiene Management",
    desc: "Ongoing hygiene oversight for workplaces.",
    long: "Continuous hygiene oversight for your workplace — high-touch disinfection, consumable restocking, and monitored standards on a tailored schedule.",
    includes: ["Ongoing hygiene oversight", "High-touch disinfection", "Consumable restocking", "Standards monitoring", "Tailored schedules"],
    serves: "Workplaces wanting continuous, managed hygiene standards.",
    image: img("WhatsApp Image 2026-07-03 at 19.23.22.jpeg"),
    imageAlt: "Caddy stocked with sanitising sprays and cleaning cloths",
  },
  {
    icon: "confetti",
    slug: "event-clean-up",
    title: "Event Clean-Up Services",
    desc: "Pre- and post-event cleaning crews.",
    long: "Dedicated crews to prepare your venue before an event and clear it afterwards — fast waste removal and a complete reset.",
    includes: ["Pre-event preparation", "Post-event clearing", "Waste removal", "Venue reset", "Fast, flexible crews"],
    serves: "Event organizers and venues before and after gatherings.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.29 (1).jpeg"),
    imageAlt: "Mop and bucket ready during a venue floor clean",
  },
  {
    icon: "wrench",
    slug: "general-facility-upkeep",
    title: "General Facility Upkeep",
    desc: "Routine maintenance to keep things running.",
    long: "Routine upkeep that keeps your facility running smoothly — common-area care, minor repair coordination, and dependable reporting.",
    includes: ["Routine maintenance", "Minor repair coordination", "Common-area care", "Issue reporting", "Dependable schedules"],
    serves: "Property managers keeping facilities running smoothly day to day.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.30 (1).jpeg"),
    imageAlt: "Team machine-scrubbing floors during routine facility upkeep",
  },
  {
    icon: "calendar",
    slug: "long-term-property-maintenance",
    title: "Long-Term Property Maintenance",
    desc: "A dependable ongoing partner.",
    long: "A long-term partnership combining cleaning and facility upkeep under one point of contact, with priority scheduling and consistent standards.",
    includes: ["Ongoing service contracts", "Priority scheduling", "Combined cleaning + upkeep", "Single point of contact", "Consistent standards"],
    serves: "Owners and managers wanting a dependable long-term partner.",
    image: img("WhatsApp Image 2026-07-03 at 19.22.29 (2).jpeg"),
    imageAlt: "Crew member washing down an outdoor terrace on a maintenance visit",
  },
];

// Combined catalog + lookup for the /services/[slug] detail pages --------
export const allServices = [
  ...services.map((s) => ({ ...s, category: "Cleaning Services" })),
  ...facilitySupport.map((s) => ({ ...s, category: "Facility Support" })),
];

export const getServiceBySlug = (slug) => allServices.find((s) => s.slug === slug);

// Why Choose Us ---------------------------------------------------------
export const whyChooseUs = [
  { icon: "clock", title: "Reliable & punctual", desc: "We show up on time, every time, and follow through." },
  { icon: "badge", title: "Professional team", desc: "Trained and supervised cleaning staff." },
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

// At a glance -----------------------------------------------------------
// Every figure here is derived from this file, so nothing on the site
// claims numbers we can't back up. Swap in real business metrics
// (years operating, contracts held, etc.) once they're confirmed.
export const stats = [
  { value: String(services.length), suffix: "", label: "Cleaning Services" },
  { value: String(facilitySupport.length), suffix: "", label: "Facility Support Services" },
  { value: "6", suffix: "", label: "Days a Week" },
  { value: String(steps.length), suffix: "", label: "Steps to Get Started" },
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
// PLACEHOLDERS — anonymized until real client quotes are collected.
// Replace each entry with a genuine quote and (with permission) a real
// name. Until then they stay role-only so nothing reads as fabricated.
export const testimonials = [
  { quote: "Always on time and incredibly thorough. Our office has never looked better.", name: "Office Manager", role: "Commercial client, Nairobi" },
  { quote: "Turnovers between guests are fast and flawless — guests comment on how clean it is.", name: "Airbnb Host", role: "Short-stay client, Nairobi" },
  { quote: "A reliable long-term partner for our facility. Truly hassle-free.", name: "Property Manager", role: "Facility contract client" },
];

// Trust / Quality -------------------------------------------------------
export const qualityPoints = [
  "Cleanliness", "Hygiene", "Reliability", "Accountability", "Customer Satisfaction", "Long-Term Support",
];

// FAQ -------------------------------------------------------------------
export const faqs = [
  { q: "What areas do you serve?", a: `We operate across ${company.serviceArea}.` },
  { q: "Do you offer one-time and recurring cleaning?", a: "Yes — from single deep cleans to long-term contracts." },
  { q: "Are your staff trained?", a: "All team members are trained and supervised to consistent standards." },
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

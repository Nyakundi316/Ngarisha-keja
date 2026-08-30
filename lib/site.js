// =====================================================================
// SITE CONFIG — edit everything here. Components read from this file.
// =====================================================================

export const company = {
  name: "Ngarishakeja",
  shortName: "Ngarisha",
  legalName: "", // TODO: add only if the owner supplies the registered name
  tagline: "Cleaning & Facility Support", // TODO: replace with a real slogan if you have one
  siteUrl: "https://www.ngarisha.co.ke",
  socialImage: "/images/WhatsApp Image 2026-07-03 at 20.01.09.jpeg",
  phoneDisplay: "0759 553 961",
  phoneHref: "+254759553961", // tel: link
  whatsapp: "254759553961", // wa.me number (international, no +)
  email: "nyakundibrian316@gmail.com",
  address: "Nairobi, Kenya", // TODO: confirm
  serviceArea: "Nairobi",
  serviceAreas: ["Nairobi"],
  operatingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  hours: "Mon–Sat, 7:00–18:00", // TODO: confirm
  googleBusinessProfileUrl: "", // TODO: add the verified profile URL
  reviewRequestUrl: "", // TODO: add an approved review-request URL
  socials: {
    instagram: "", // TODO
    facebook: "", // TODO
    x: "", // TODO
    linkedin: "", // TODO
    tiktok: "", // TODO
  },
};

export const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  `Hello ${company.name}, I'd like a quote for cleaning / facility support.`
)}`;

// Header navigation -----------------------------------------------------
// Each entry is a real route (App Router page), not an in-page anchor.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Plans", href: "/plans" },
  { label: "Service Areas", href: "/service-areas" },
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

// Service-specific planning details. Keep these factual and quote-based until
// the owner approves operational ranges, prices, or guarantees.
export const serviceDetails = {
  "home-apartment-cleaning": { frequency: "One-time or recurring", duration: "Confirmed from rooms, condition, and checklist.", preparation: "Please share access details and any rooms or surfaces that need special attention.", excludes: ["Unrequested specialist work", "Repairs or maintenance"], pricingFactors: ["Room count", "Condition", "Frequency", "Supplies", "Travel"], quoteQuestions: ["How many rooms need cleaning?", "Is this a one-off or recurring visit?"], faqs: [{ q: "Can I book recurring home cleaning?", a: "Yes. A suitable visit rhythm can be discussed after reviewing your home and priorities." }], relatedPlans: ["One-Time Cleaning", "Weekly Home Cleaning", "Twice-Monthly Home Cleaning", "Monthly Maintenance Cleaning"] },
  "office-cleaning": { frequency: "Daily or scheduled", duration: "Confirmed from floor area, occupancy, rooms, and schedule.", preparation: "Please identify access arrangements, occupied areas, and any workplace priorities.", excludes: ["Repairs or maintenance", "Specialist works outside the agreed scope"], pricingFactors: ["Floor area", "Frequency", "Occupancy", "Crew requirements", "Supplies"], quoteQuestions: ["What days and hours can the team work?", "Which areas and shared facilities are in scope?"], faqs: [{ q: "Can office cleaning be scheduled around working hours?", a: "Yes. The schedule and access window can be agreed around your workplace operations." }], relatedPlans: ["Office Cleaning Contract", "Custom Facility Plan"] },
  "school-institutional-cleaning": { frequency: "Agreed institutional schedule", duration: "Confirmed from buildings, foot traffic, and required areas.", preparation: "Please share operating times, access rules, and areas that require coordinated cleaning.", excludes: ["Unapproved specialist works", "Work outside agreed access or scope"], pricingFactors: ["Buildings and floor area", "Schedule", "Occupancy", "Crew requirements", "Supplies"], quoteQuestions: ["Which buildings or rooms are included?", "What access and timing rules should the team follow?"], faqs: [{ q: "Can institutional cleaning follow an existing timetable?", a: "The team can discuss a schedule that fits the institution’s operating and access requirements." }], relatedPlans: ["Office Cleaning Contract", "Custom Facility Plan"] },
  "airbnb-turnover-cleaning": { frequency: "Per turnover", duration: "Confirmed from rooms, changeover window, and reset checklist.", preparation: "Please share check-in timing, access instructions, linen responsibilities, and restocking needs.", excludes: ["Repairs or maintenance", "Unagreed laundry or supply purchases"], pricingFactors: ["Property size", "Turnover window", "Linen needs", "Restocking", "Travel"], quoteQuestions: ["What is the changeover window?", "Which linen and restocking tasks are required?"], faqs: [{ q: "Can you report issues found during a turnover?", a: "Issue reporting can be included in the agreed turnover checklist." }], relatedPlans: ["Airbnb Turnover Cleaning", "Custom Facility Plan"] },
  "deep-cleaning": { frequency: "One-off or occasional reset", duration: "Confirmed from condition, rooms, and requested detail.", preparation: "Please clear personal items where possible and flag fragile or restricted areas.", excludes: ["Repairs or restoration", "Work outside the agreed checklist"], pricingFactors: ["Condition", "Room count", "Detail requested", "Crew requirements", "Supplies"], quoteQuestions: ["Which areas need the deepest attention?", "Is there a preferred date or event deadline?"], faqs: [{ q: "When is a deep clean useful?", a: "It suits a reset, seasonal clean, pre-event preparation, or a first visit where routine cleaning is not enough." }], relatedPlans: ["One-Time Cleaning", "Monthly Maintenance Cleaning"] },
  "move-in-move-out-cleaning": { frequency: "At handover", duration: "Confirmed from empty-property size, condition, and handover scope.", preparation: "Please arrange access to the empty property and share the handover deadline.", excludes: ["Moving, repairs, or painting", "Items left outside the agreed scope"], pricingFactors: ["Property size", "Condition", "Cabinets and fixtures", "Deadline", "Travel"], quoteQuestions: ["Is the property empty and accessible?", "What is the handover date?"], faqs: [{ q: "Do you clean before a new tenant moves in?", a: "Yes. The scope can be planned around an empty-property handover or move-in date." }], relatedPlans: ["One-Time Cleaning", "Custom Facility Plan"] },
  "post-construction-cleaning": { frequency: "After works are complete", duration: "Confirmed from site condition, residue, and move-in deadline.", preparation: "Please confirm that active construction work is complete and identify restricted areas.", excludes: ["Construction or repair work", "Hazardous material removal"], pricingFactors: ["Site size", "Dust and residue", "Fixtures and windows", "Crew requirements", "Travel"], quoteQuestions: ["Are all contractors finished on site?", "Which surfaces and fixtures need handover cleaning?"], faqs: [{ q: "When should post-construction cleaning be booked?", a: "It is best discussed once active works are complete and the site can be safely accessed for cleaning." }], relatedPlans: ["One-Time Cleaning", "Custom Facility Plan"] },
  "carpet-cleaning": { frequency: "As needed", duration: "Confirmed from carpet area, fibre, condition, and drying requirements.", preparation: "Please move loose items where possible and mention fibre, stain, or access concerns.", excludes: ["Carpet repair or replacement", "Guaranteed stain removal"], pricingFactors: ["Carpet area", "Fibre and condition", "Stain treatment", "Access", "Travel"], quoteQuestions: ["How much carpet needs cleaning?", "Are there specific stains or fibre-care requirements?"], faqs: [{ q: "How is carpet cleaning planned?", a: "The method and scope are confirmed after considering the carpet type, condition, access, and drying needs." }], relatedPlans: ["One-Time Cleaning", "Monthly Maintenance Cleaning"] },
  "sofa-upholstery-cleaning": { frequency: "As needed", duration: "Confirmed from item count, material, and condition.", preparation: "Please identify fabric or leather types and keep the furniture accessible.", excludes: ["Upholstery repair", "Guaranteed stain or colour restoration"], pricingFactors: ["Number of items", "Material", "Condition", "Treatment requested", "Travel"], quoteQuestions: ["How many items need treatment?", "Do you know the upholstery material?"], faqs: [{ q: "Can different upholstery materials be assessed?", a: "Yes. Material and condition can be reviewed before the suitable cleaning scope is agreed." }], relatedPlans: ["One-Time Cleaning", "Monthly Maintenance Cleaning"] },
  "mattress-cleaning": { frequency: "As needed", duration: "Confirmed from mattress count, size, and condition.", preparation: "Please provide clear access and mention any stains, odours, or material concerns.", excludes: ["Mattress repair or replacement", "Guaranteed allergen or stain removal"], pricingFactors: ["Mattress count and size", "Condition", "Treatment requested", "Drying needs", "Travel"], quoteQuestions: ["How many mattresses need cleaning?", "Are there specific stains or odours to discuss?"], faqs: [{ q: "How is mattress cleaning scoped?", a: "The number, size, material, and condition of the mattresses guide the agreed treatment." }], relatedPlans: ["One-Time Cleaning", "Monthly Maintenance Cleaning"] },
  "window-cleaning": { frequency: "As needed or scheduled", duration: "Confirmed from panes, access, frames, and height.", preparation: "Please identify reachable and restricted windows and clear interior sills where possible.", excludes: ["Glass replacement or repair", "Unsafe access work"], pricingFactors: ["Number of panes", "Access", "Frames and sills", "Height", "Travel"], quoteQuestions: ["How many windows need cleaning?", "Are all windows safely accessible?"], faqs: [{ q: "Do you clean window frames too?", a: "Frames and sills can be included when they are accessible and part of the agreed scope." }], relatedPlans: ["One-Time Cleaning", "Office Cleaning Contract"] },
  "floor-care": { frequency: "As needed or scheduled", duration: "Confirmed from floor type, area, and treatment.", preparation: "Please clear loose items and identify floor materials or areas that need protection.", excludes: ["Floor replacement or structural repair", "Treatments not approved for the floor type"], pricingFactors: ["Floor type", "Area", "Condition", "Treatment", "Equipment"], quoteQuestions: ["What floor types are involved?", "Is the goal routine care, polishing, or a deeper reset?"], faqs: [{ q: "Can different floor types be handled in one visit?", a: "The scope can be planned around the floor materials and treatments present at the property." }], relatedPlans: ["One-Time Cleaning", "Office Cleaning Contract", "Custom Facility Plan"] },
  "washroom-sanitization": { frequency: "One-off or scheduled", duration: "Confirmed from number of washrooms, condition, and access.", preparation: "Please share access windows and any consumable or restocking requirements.", excludes: ["Plumbing repairs", "Unrequested consumable purchases"], pricingFactors: ["Number of washrooms", "Condition", "Frequency", "Restocking", "Travel"], quoteQuestions: ["How many washrooms are included?", "Is routine restocking part of the requested scope?"], faqs: [{ q: "Can washroom care be scheduled regularly?", a: "Yes. A recurring hygiene checklist and access schedule can be agreed for the facility." }], relatedPlans: ["Office Cleaning Contract", "Custom Facility Plan"] },
  "waste-collection-disposal": { frequency: "Agreed collection schedule", duration: "Confirmed from volume, access, and collection points.", preparation: "Please identify collection points, access windows, and any separation requirements.", excludes: ["Hazardous waste", "Unapproved disposal arrangements"], pricingFactors: ["Collection volume", "Frequency", "Access", "Separation needs", "Travel"], quoteQuestions: ["How often should collection happen?", "What types and volumes of waste are involved?"], faqs: [{ q: "Can collection schedules be recurring?", a: "Yes. Frequency and collection points can be planned around the property’s routine." }], relatedPlans: ["Custom Facility Plan", "Office Cleaning Contract"] },
  "kitchen-common-area-cleaning": { frequency: "One-off or scheduled", duration: "Confirmed from rooms, use, condition, and access.", preparation: "Please clear loose items and identify food-prep, shared, and high-touch priorities.", excludes: ["Appliance repair", "Unrequested deep cleaning outside the checklist"], pricingFactors: ["Area and rooms", "Condition", "Frequency", "Access", "Supplies"], quoteQuestions: ["Which shared or food-prep areas are included?", "What schedule fits the space’s use?"], faqs: [{ q: "Can common areas be added to office cleaning?", a: "Yes. Shared kitchens and common areas can be included in an agreed workplace checklist." }], relatedPlans: ["Office Cleaning Contract", "Custom Facility Plan"] },
  "fumigation-coordination": { frequency: "As needed", duration: "Confirmed with the coordinating partner and property scope.", preparation: "Please describe the concern and provide access and scheduling constraints; treatment advice comes from the appointed partner.", excludes: ["Unlicensed treatment", "Structural pest repairs"], pricingFactors: ["Property scope", "Assessment needs", "Scheduling", "Partner treatment", "Travel"], quoteQuestions: ["What property areas need assessment?", "Are there access or timing constraints?"], faqs: [{ q: "Do you perform the treatment directly?", a: "Ngarisha coordinates the service with a professional pest-control partner; the treatment scope is confirmed separately." }], relatedPlans: ["Custom Facility Plan"] },
  "landscaping-compound-maintenance": { frequency: "Agreed outdoor schedule", duration: "Confirmed from grounds size, condition, and tasks.", preparation: "Please identify access, outdoor priorities, and any areas that should remain undisturbed.", excludes: ["Major landscaping construction", "Unapproved tree or structural work"], pricingFactors: ["Grounds area", "Task list", "Frequency", "Equipment", "Travel"], quoteQuestions: ["Which outdoor areas need upkeep?", "Which tasks should recur and how often?"], faqs: [{ q: "Can grounds upkeep be recurring?", a: "Yes. Lawn, hedge, weeding, and compound tasks can be organized on an agreed schedule." }], relatedPlans: ["Custom Facility Plan", "Office Cleaning Contract"] },
  "garbage-management": { frequency: "Recurring or agreed schedule", duration: "Confirmed from property size, volume, and collection points.", preparation: "Please share collection points, access windows, and the intended waste-handling routine.", excludes: ["Hazardous waste", "Unapproved disposal arrangements"], pricingFactors: ["Volume", "Frequency", "Access", "Bin requirements", "Travel"], quoteQuestions: ["How many collection points are there?", "What recurring schedule is needed?"], faqs: [{ q: "Can garbage management be combined with facility support?", a: "Yes. Collection, bin care, and selected facility services can be discussed in one plan." }], relatedPlans: ["Custom Facility Plan", "Office Cleaning Contract"] },
  "water-tank-cleaning": { frequency: "As needed or scheduled", duration: "Confirmed from tank access, size, condition, and refill planning.", preparation: "Please share tank access details and plan for the service window and water interruption.", excludes: ["Tank repair or replacement", "Water-quality certification"], pricingFactors: ["Tank access and size", "Condition", "Sediment", "Equipment", "Travel"], quoteQuestions: ["How many tanks need cleaning?", "What access and refill arrangements are available?"], faqs: [{ q: "How is tank cleaning scheduled?", a: "The visit is planned around safe access, the tank condition, and the property’s refill arrangements." }], relatedPlans: ["One-Time Cleaning", "Custom Facility Plan"] },
  "office-hygiene-management": { frequency: "Agreed workplace schedule", duration: "Confirmed from workplace size, touchpoints, and checklist.", preparation: "Please share workplace access, consumable responsibilities, and current hygiene priorities.", excludes: ["Medical or laboratory certification", "Unapproved specialist works"], pricingFactors: ["Workplace size", "Frequency", "Touchpoints", "Supplies", "Crew requirements"], quoteQuestions: ["Which hygiene standards and supplies need monitoring?", "What schedule suits the workplace?"], faqs: [{ q: "Can this sit alongside office cleaning?", a: "Yes. Hygiene oversight can be scoped alongside a recurring workplace cleaning plan." }], relatedPlans: ["Office Cleaning Contract", "Custom Facility Plan"] },
  "event-clean-up": { frequency: "Before or after an event", duration: "Confirmed from venue size, event timing, and reset scope.", preparation: "Please share venue access, event times, waste arrangements, and handover deadlines.", excludes: ["Event setup or teardown beyond cleaning", "Repairs or equipment hire"], pricingFactors: ["Venue size", "Timing", "Waste volume", "Crew requirements", "Travel"], quoteQuestions: ["When can the venue be accessed?", "Is cleaning needed before, after, or both?"], faqs: [{ q: "Can you work to an event deadline?", a: "The team can assess the venue, access window, and required reset before confirming a workable schedule." }], relatedPlans: ["One-Time Cleaning", "Custom Facility Plan"] },
  "general-facility-upkeep": { frequency: "Agreed maintenance schedule", duration: "Confirmed from property scope and requested coordination.", preparation: "Please list routine upkeep needs, access arrangements, and issues needing reporting.", excludes: ["Licensed construction or repair work", "Unapproved specialist services"], pricingFactors: ["Property scope", "Task list", "Frequency", "Coordination", "Travel"], quoteQuestions: ["Which recurring upkeep tasks matter most?", "Which issues should be reported or coordinated?"], faqs: [{ q: "Can upkeep be combined with cleaning?", a: "Yes. Selected cleaning and upkeep tasks can be brought together in a custom plan." }], relatedPlans: ["Custom Facility Plan", "Office Cleaning Contract"] },
  "long-term-property-maintenance": { frequency: "Ongoing agreed schedule", duration: "Confirmed from property scope, services, and coordination needs.", preparation: "Please share the property priorities, access process, and services you want managed together.", excludes: ["Unapproved specialist works", "Services outside the agreed plan"], pricingFactors: ["Services selected", "Property size", "Frequency", "Crew requirements", "Travel"], quoteQuestions: ["Which services should be managed together?", "What recurring reporting or scheduling is needed?"], faqs: [{ q: "What does a long-term plan cover?", a: "It can combine selected cleaning and facility-upkeep services under one agreed schedule and point of contact." }], relatedPlans: ["Custom Facility Plan", "Office Cleaning Contract"] },
};

// Combined catalog + lookup for the /services/[slug] detail pages --------
export const allServices = [
  ...services.map((s) => ({ ...s, ...serviceDetails[s.slug], category: "Cleaning Services" })),
  ...facilitySupport.map((s) => ({ ...s, ...serviceDetails[s.slug], category: "Facility Support" })),
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
  { value: String(company.operatingDays.length), suffix: "", label: "Days a Week" },
  { value: String(steps.length), suffix: "", label: "Steps to Get Started" },
];

// Plans -----------------------------------------------------------------
// Prices stay quote-based until approved amounts are supplied by the owner.
export const plans = [
  {
    title: "One-Time Cleaning",
    desc: "A single thorough clean, whenever you need it.",
    bestFor: "A reset, handover, occasion, or first visit.",
    frequency: "One visit",
    scope: "A tailored clean based on the rooms, surfaces, and condition of the space.",
    includes: ["Room-by-room cleaning plan", "Agreed priority areas", "Equipment and supply discussion"],
    excludes: ["Unrequested specialist work", "Work outside the agreed scope"],
    equipment: "Equipment and supplies are agreed during the quote.",
    teamSize: "Confirmed after the space is assessed.",
    duration: "Confirmed from property size, condition, and scope.",
    priority: "Standard scheduling",
    priceType: "Quote-based",
    pricingFactors: ["Property size", "Condition", "Crew requirements", "Equipment or supplies", "Travel"],
    popular: false,
  },
  {
    title: "Weekly Home Cleaning",
    desc: "Consistent weekly upkeep for a home that stays ready.",
    bestFor: "Households that want a regular maintenance rhythm.",
    frequency: "Weekly",
    scope: "Recurring routine cleaning with priorities refined as the home is used.",
    includes: ["Recurring visit plan", "Core living-area cleaning", "Kitchen and bathroom upkeep"],
    excludes: ["One-off specialist work unless added", "Unagreed extra rooms or tasks"],
    equipment: "Bring-your-own or customer-supplied items can be agreed.",
    teamSize: "Confirmed from the home and visit scope.",
    duration: "Confirmed from room count, condition, and routine.",
    priority: "Recurring slot requested",
    priceType: "Quote-based",
    pricingFactors: ["Room count", "Frequency", "Condition", "Supplies", "Travel"],
    popular: false,
  },
  {
    title: "Twice-Monthly Home Cleaning",
    desc: "A practical twice-monthly rhythm between deep resets.",
    bestFor: "Homes needing regular upkeep without weekly visits.",
    frequency: "Twice monthly",
    scope: "Two planned maintenance visits each month, with priorities agreed in advance.",
    includes: ["Two planned visits", "Core rooms and high-use areas", "Flexible priority list"],
    excludes: ["Unrequested specialist work", "Tasks outside the agreed visit scope"],
    equipment: "Equipment and supplies policy is confirmed in the quote.",
    teamSize: "Confirmed from the property and scope.",
    duration: "Confirmed from room count, condition, and priorities.",
    priority: "Recurring slot requested",
    priceType: "Quote-based",
    pricingFactors: ["Property size", "Visit frequency", "Condition", "Crew requirements", "Travel"],
    popular: false,
  },
  {
    title: "Monthly Maintenance Cleaning",
    desc: "Scheduled monthly maintenance for a consistently cared-for space.",
    bestFor: "Homes or small workplaces needing a monthly reset.",
    frequency: "Monthly",
    scope: "One planned maintenance visit with a repeatable checklist.",
    includes: ["Monthly checklist", "Agreed priority areas", "Review of changing needs"],
    excludes: ["Unrequested deep-cleaning tasks", "Work outside the agreed checklist"],
    equipment: "Bring-your-own or customer-supplied items can be agreed.",
    teamSize: "Confirmed from the space and scope.",
    duration: "Confirmed from property size and condition.",
    priority: "Recurring slot requested",
    priceType: "Quote-based",
    pricingFactors: ["Property size", "Condition", "Frequency", "Supplies", "Travel"],
    popular: false,
  },
  {
    title: "Airbnb Turnover Cleaning",
    desc: "Fast, reliable turnarounds between guest stays.",
    bestFor: "Airbnb hosts and short-stay managers between bookings.",
    frequency: "Per turnover",
    scope: "Guest-ready reset timed around check-out and check-in requirements.",
    includes: ["Room reset", "Linen and bed-making discussion", "Restocking and issue reporting"],
    excludes: ["Repairs or maintenance work", "Unagreed laundry or supply purchases"],
    equipment: "Access, linen, and supply responsibilities are agreed in the quote.",
    teamSize: "Confirmed from property size and turnaround window.",
    duration: "Confirmed from rooms, changeover window, and scope.",
    priority: "Scheduling depends on the turnover window",
    priceType: "Quote-based",
    pricingFactors: ["Property size", "Turnover window", "Linen needs", "Restocking", "Travel"],
    popular: false,
  },
  {
    title: "Office Cleaning Contract",
    desc: "Planned workplace cleaning with a repeatable standard.",
    bestFor: "Offices and workspaces seeking an ongoing cleaning partner.",
    frequency: "Agreed schedule",
    scope: "Workplace cleaning mapped to occupancy, rooms, and operating hours.",
    includes: ["Workplace checklist", "Agreed frequency", "Issue and supply reporting"],
    excludes: ["Specialist works outside the contract", "Unagreed consumable purchases"],
    equipment: "Equipment and supplies responsibilities are documented before service.",
    teamSize: "Confirmed from workplace size, schedule, and scope.",
    duration: "Confirmed from occupancy, rooms, condition, and frequency.",
    priority: "Contract scheduling",
    priceType: "Quote-based",
    pricingFactors: ["Floor area", "Frequency", "Occupancy", "Crew requirements", "Equipment and supplies"],
    popular: true,
  },
  {
    title: "Custom Facility Plan",
    desc: "Tailored cleaning and facility support under one plan.",
    bestFor: "Property owners and managers combining several support needs.",
    frequency: "Agreed schedule",
    scope: "A coordinated plan covering selected cleaning and facility-support services.",
    includes: ["Needs assessment", "Combined service plan", "Single point of contact"],
    excludes: ["Unapproved specialist work", "Services outside the agreed plan"],
    equipment: "Equipment, supplies, and partner responsibilities are agreed in writing.",
    teamSize: "Confirmed from the property and selected services.",
    duration: "Confirmed from the property, scope, and schedule.",
    priority: "Priority can be discussed for an ongoing plan",
    priceType: "Quote-based",
    pricingFactors: ["Services selected", "Property size", "Frequency", "Crew requirements", "Travel"],
    popular: false,
  },
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

// Service standards -----------------------------------------------------
// These reuse commitments already stated elsewhere on the site. Add a
// testimonials section only after genuine, approved client quotes exist.
export const servicePromises = [whyChooseUs[0], whyChooseUs[1], whyChooseUs[7]];

// Verified proof content is intentionally empty until the owner supplies
// approved project records and customer permissions.
export const projects = [];

export const reviews = [];

export function createProjectRecord(input = {}) {
  return {
    slug: "",
    title: "",
    serviceSlug: "",
    serviceCategory: "",
    location: "",
    problem: "",
    workCompleted: "",
    completionDate: "",
    beforeImages: [],
    afterImages: [],
    imageCaptions: {},
    beforeAlt: "",
    afterAlt: "",
    customerQuotation: "",
    approvalStatus: "draft",
    permissionStatus: "pending",
    featured: false,
    ...input,
  };
}

export function createReviewRecord(input = {}) {
  return {
    id: "",
    displayName: "",
    text: "",
    rating: null,
    reviewDate: "",
    source: "",
    sourceUrl: "",
    verified: false,
    permission: false,
    serviceSlug: "",
    ...input,
  };
}

export const getApprovedReviews = () =>
  reviews.filter((review) => review.verified === true && review.permission === true);

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
  ...allServices.map((s) => s.title),
  ...plans.map((p) => p.title),
  "Other / Not sure",
];

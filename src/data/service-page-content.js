import { ALL_SERVICES } from "@/data/all-services";

const DEFAULT_SIGNS_TITLE = "Signs it is time to book this service";
const DEFAULT_SIGNS_DESCRIPTION = [
  "Small issues are easier and cheaper to handle before they turn into bigger repairs.",
  "If you notice any of the signs below, a professional visit can help you fix the cause early.",
];

const catalogBySlug = Object.fromEntries(
  ALL_SERVICES.map((service) => [service.slug, service]),
);

function fallbackCard({
  title,
  href,
  slug,
  image,
  description,
  keywords = [],
}) {
  return {
    title,
    href,
    slug,
    image,
    description,
    keywords,
  };
}

const routeCards = {
  ac:
    catalogBySlug["ac-servicing-repair-replacement"] ||
    fallbackCard({
      title: "AC Servicing, Repair & Replacement",
      href: "/services/ac",
      slug: "ac-servicing-repair-replacement",
      image: "/ac_repair.jpg",
      description: "Cooling repairs, servicing, and replacement guidance for homes and businesses.",
    }),
  electrical: fallbackCard({
    title: "Electrical",
    href: "/services/electrical",
    slug: "electrical",
    image: "/electrical.jpg",
    description: "Safe troubleshooting, repairs, and installation work for common electrical issues.",
    keywords: ["electrical", "wiring", "power", "lights", "sockets"],
  }),
  plumbing: fallbackCard({
    title: "Plumbing",
    href: "/services/plumbing",
    slug: "plumbing",
    image: "/plumbing.jpeg",
    description: "Leak repairs, fixture work, and practical plumbing support for everyday problems.",
    keywords: ["plumbing", "leaks", "water", "pipes", "fixtures"],
  }),
  painting:
    catalogBySlug["painting-works"] ||
    fallbackCard({
      title: "Painting Works",
      href: "/services/painting",
      slug: "painting-works",
      image: "/painting.jpeg",
      description: "Clean, professional interior and exterior painting with durable finishes.",
    }),
  handyman:
    catalogBySlug["handyman-services"] ||
    fallbackCard({
      title: "Handyman Services",
      href: "/services/handyman",
      slug: "handyman-services",
      image: "/handyman.jpeg",
      description: "Reliable help for mounting, minor repairs, adjustments, and general fixes.",
    }),
  waterTankCleaning:
    catalogBySlug["water-tank-cleaning"] ||
    fallbackCard({
      title: "Water Tank Cleaning",
      href: "/services/water-tank-cleaning",
      slug: "water-tank-cleaning",
      image: "/watertankcleaning.jpg",
      description: "Professional cleaning and sanitization to support safer stored water.",
    }),
  ductCleaning: fallbackCard({
    title: "Duct Cleaning",
    href: "/services/duct-cleaning",
    slug: "duct-cleaning",
    image: "/duct-cleaning.jpg",
    description: "Duct cleaning to improve airflow and support cleaner indoor air.",
    keywords: ["duct", "cleaning", "air quality", "airflow"],
  }),
  coilCleaning: fallbackCard({
    title: "Coil Cleaning",
    href: "/services/coil-cleaning",
    slug: "coil-cleaning",
    image: "/coilcleaning.jpg",
    description: "Coil cleaning that helps AC systems cool more efficiently.",
    keywords: ["coil", "cleaning", "ac", "cooling"],
  }),
};

function createServicePage(service) {
  return {
    heroImage: service.image,
    heroImageAlt: `${service.title} service`,
    introTitle: service.title,
    introText:
      "Trusted technicians, responsive booking, and practical support for homes across the UAE.",
    signsTitle: DEFAULT_SIGNS_TITLE,
    signsDescription: DEFAULT_SIGNS_DESCRIPTION,
    signsCtaLabel: "Get a Quote",
    benefitsTitle: "Why this service matters",
    benefitsSubtitle:
      "The right maintenance and repairs improve comfort, reduce risk, and help prevent avoidable costs.",
    topIssues: [],
    trustTitle: "Why customers choose us",
    trustImage: "/abouthero.jpg",
    trustImageAlt: "Home maintenance team",
    faqs: [],
    relatedServices: [],
    ...service,
  };
}

export const AC_SERVICE = createServicePage({
  ...routeCards.ac,
  category: "Air Conditioning",
  heroImage: "/ac_repair.jpg",
  heroDescription:
    "From weak airflow to full replacement decisions, we handle AC servicing, repair, and system upgrades with clear recommendations.",
  introTitle: "Complete AC solutions for long-term comfort and performance",
  introText:
    "Maintaining your air conditioning system through regular, professional servicing is the most effective way to ensure peak efficiency and consistent cooling performance throughout the year. While timely repairs act as a critical safeguard against catastrophic system failures, we recognize that as units age, a strategic replacement often emerges as the more sustainable and cost-effective long-term solution. Our technicians provide transparent, data-driven insights to help you navigate these decisions with confidence, ensuring you receive honest recommendations tailored to your home’s specific needs—completely free from guesswork or the pressure of unnecessary upselling",
  signsTitle: "Is your AC in need of repair?",
 signsDescription: [
  "From subtle drops in temperature to more obvious issues like restricted airflow, unusual cycling, or persistent moisture pooling around your indoor unit, these symptoms are your system's way of signaling underlying mechanical or electrical stress. Ignoring these early warning signs often leads to more extensive component damage, such as compressor failure or evaporator coil leaks, which are significantly more complex and costly to resolve.",
  
 
],
  signs: [
    { text: "Weak Cooling", icon: "Snowflake" },
    { text: "Rising Bills", icon: "Bolt" },
    { text: "Low Airflow", icon: "Fan" },
    { text: "Leaks or Humidity", icon: "Droplet" },
  ],
  benefitsTitle: "Benefits of servicing, repairing, or upgrading your AC",
  benefitsSubtitle: "The right decision at the right time improves comfort and reduces repeat issues.",
  benefits: [
    { icon: "Fan", title: "Better Cooling", description: "Restore more even and reliable airflow." },
    { icon: "Lightning", title: "Efficiency", description: "Well-maintained systems use less power." },
    { icon: "Repeat", title: "Fewer Breakdowns", description: "Fix root causes before they keep returning." },
    { icon: "CurrencyDollar", title: "Long-Term Savings", description: "Avoid expensive emergency failures." },
  ],
  topIssuesTitle: "Common AC problems we handle",
  topIssues: [
    { title: "Warm Air", description: "Cooling issues often trace back to coils, gas levels, or faulty components." },
    { title: "Weak Airflow", description: "Poor circulation can come from blocked ducts, dirty filters, or blower issues." },
    { title: "Water Leaks", description: "Drainage and frozen-coil issues can cause indoor leakage and dampness." },
    { title: "Frequent Trips", description: "Repeated shutdowns usually point to an underlying system fault." },
  ],
  trustTitle: "Why customers trust us with their AC systems",
  trustImage: "/ac-service.jpg",
  trustImageAlt: "Technician servicing an AC system",
  trustPoints: [
    { title: "Honest recommendations", description: "If repair is enough, we say so. If not, we explain why." },
    { title: "Clear communication", description: "You understand the issue, options, and likely outcome before work begins." },
    { title: "Clean service", description: "Our technicians work carefully and leave the area tidy." },
  ],
faqs: [
  { 
    question: "How do I know if I should repair or replace my AC?", 
    answer: "Newer systems with isolated faults are often worth repairing. Older units with recurring issues are often better replaced." 
  },
  { 
    question: "How often should I service my AC?", 
    answer: "Regular servicing during heavy-use periods helps maintain performance and reduces the chance of breakdowns." 
  },
  { 
    question: "What are the signs that my AC needs immediate attention?", 
    answer: "Keep an eye out for unusual noises, weak airflow, or unexpected spikes in your utility bills, as these often signal internal mechanical stress." 
  },
  { 
    question: "Can I improve my AC's efficiency on my own?", 
    answer: "Yes, simple steps like keeping the outdoor unit clear of debris and ensuring your home is properly sealed can significantly reduce the workload on your system." 
  },
  { 
    question: "What is the average lifespan of a modern AC unit?", 
    answer: "Most well-maintained central air systems typically last between 15 to 20 years, though coastal environments can shorten this due to salt corrosion." 
  },
],
  relatedServices: [routeCards.ductCleaning, routeCards.coilCleaning, routeCards.electrical],
});

export const ELECTRICAL_SERVICE = createServicePage({
  ...routeCards.electrical,
  category: "Electrical",
  heroImage: "/electrical.jpg",
  heroImageAlt: "Electrical technician at work",
  heroDescription:
    "From faults and tripping circuits to upgrades and installations, we deliver safe electrical work with clear troubleshooting.",
  introTitle: "Reliable electrical support for repairs, safety, and upgrades",
  introText:
    "Electrical infrastructure is the silent backbone of your property's comfort and safety. Issues like faulty wiring or overloaded circuits aren't just inconveniences—they are significant fire hazards. Our certified team provides precise fault finding and modern upgrades, ensuring your system meets current safety standards while supporting the increasing power demands of modern appliances and smart home technology.",
  signsTitle: "Critical electrical warning signs",
  signsDescription: [
    "Electrical faults often start with subtle cues before escalating into dangerous failures. If you notice persistent flickering or warmth around your outlets, your system is likely under stress. Addressing these symptoms early through professional diagnosis prevents catastrophic damage to your electronics and ensures the long-term safety of your home or office environment.",
  ],
  signs: [
    { text: "Frequent Trips", icon: "Zap" },
    { text: "Flickering Lights", icon: "Lightbulb" },
    { text: "Burning Smell", icon: "AlertTriangle" },
    { text: "Dead Sockets", icon: "Wrench" },
  ],
  benefits: [
    { icon: "Shield", title: "Better Safety", description: "Address hazards before they become larger risks to life and property." },
    { icon: "Lightbulb", title: "Reliable Power", description: "Ensure your lights, sockets, and fittings work consistently without interruption." },
    { icon: "Search", title: "Accurate Diagnosis", description: "We identify the root cause of electrical noise and failures to prevent repeat issues." },
    { icon: "Zap", title: "Smarter Upgrades", description: "Improve convenience and capacity when adding new heavy-duty appliances." },
  ],
  topIssuesTitle: "Electrical issues we solve every day",
  topIssues: [
    { title: "Tripping Breakers", description: "We trace overloads, short circuits, and appliance-related earth leakage faults." },
    { title: "Faulty Outlets", description: "Loose internal connections and worn parts can stop sockets from working safely." },
    { title: "Lighting Problems", description: "We repair flickering fixtures, failed dimmers, and complex switching issues." },
    { title: "Upgrade Work", description: "We support replacements, circuit additions, and practical panel improvements." },
  ],
  trustImage: "/vecteezy_electrician-engineer-with-plan-to-check-electrical-supply-in_29630617.jpeg",
  trustImageAlt: "Electrician checking an installation",
  trustPoints: [
    { title: "Safety-focused work", description: "We prioritize sound repairs and practical long-term solutions over quick fixes." },
    { title: "Clear scope", description: "You get straightforward explanations and transparent pricing before any work starts." },
    { title: "Dependable follow-through", description: "Our technicians arrive fully equipped to solve the problem in a single visit." },
  ],
  faqs: [
    { 
      question: "Should I ignore a breaker that trips only occasionally?", 
      answer: "No. Occasional trips point to an intermittent fault or an overloaded circuit that could eventually cause a fire if left unchecked." 
    },
    { 
      question: "Can you help with new lights or socket installations?", 
      answer: "Yes. We handle everything from repairing existing circuits to adding completely new points for appliances and décor." 
    },
    { 
      question: "Why do my lights flicker when the AC turns on?", 
      answer: "This often indicates a high 'inrush current' or a weak connection in your panel that requires a professional load check." 
    },
    { 
      question: "Do you provide emergency electrical repairs?", 
      answer: "Yes, we prioritize urgent safety issues like total power loss or burning smells that require immediate intervention." 
    },
    { 
      question: "Is it safe to replace a light switch myself?", 
      answer: "While it seems simple, incorrect wiring can lead to shocks or short circuits. We recommend professional installation for all electrical work." 
    },
  ],
  relatedServices: [routeCards.plumbing, routeCards.handyman, routeCards.ac],
});

export const PLUMBING_SERVICE = createServicePage({
  ...routeCards.plumbing,
  category: "Plumbing",
  heroImage: "/plumbing.jpeg",
  heroDescription:
    "Leaks, drainage issues, fixture replacements, and everyday plumbing faults handled with responsive service and practical repair advice.",
  introTitle: "Plumbing repairs and upgrades that keep your home running smoothly",
  introText:
    "Water-related failures are among the most disruptive and potentially expensive issues a property owner can face. A small leak can silently destroy flooring and structural finishes over time. Our plumbing specialists focus on rapid detection and durable repairs, helping you maintain a reliable water supply and efficient drainage system while protecting your property from secondary moisture damage.",
  signsTitle: "Common plumbing red flags",
  signsDescription: [
    "Plumbing problems often manifest as slow changes in pressure or drainage before leading to a total failure. If you hear banging in your pipes or notice water spots on your ceiling, your system is already compromised. Proactive maintenance is the only way to avoid the high costs of emergency water restoration and ensure your fixtures operate at peak performance.",
  ],
  signs: [
    { text: "Visible Leaks", icon: "Droplets" },
    { text: "Slow Drainage", icon: "AlertCircle" },
    { text: "Low Pressure", icon: "Activity" },
    { text: "Noisy Pipes", icon: "Search" },
  ],
  benefits: [
    { icon: "ShieldCheck", title: "Damage Prevention", description: "Early leak detection protects your walls, cabinetry, and structural foundation." },
    { icon: "Activity", title: "Optimized Flow", description: "Restore usable water pressure and ensure consistent drainage throughout the house." },
    { icon: "Wallet", title: "Resource Efficiency", description: "Fixing dripping taps and running toilets can significantly lower your monthly water bill." },
    { icon: "Wrench", title: "Precision Installation", description: "Properly fitted fixtures and pipes have a much lower risk of future failure." },
  ],
  topIssuesTitle: "Plumbing problems we commonly fix",
  topIssues: [
    { title: "Leak Detection", description: "We use diagnostic tools to identify the source of hidden leaks before they spread." },
    { title: "Blocked Drains", description: "We clear stubborn blockages in sinks, showers, and main lines using professional equipment." },
    { title: "Fixture Performance", description: "We repair or replace worn-out taps, valves, and toilet flush mechanisms." },
    { title: "Pressure Regulation", description: "We solve weak water flow issues caused by calcification, leaks, or pump failures." },
  ],
  trustPoints: [
    { title: "Practical advice", description: "We focus on the most sensible, long-lasting fix instead of temporary patches." },
    { title: "Clean job handling", description: "Our team uses protective covers and cleans the area thoroughly after completing the repair." },
    { title: "Clear communication", description: "You are informed of the issue, the required parts, and the timeline before we begin." },
  ],
  faqs: [
    { 
      question: "When should a small leak be treated as urgent?", 
      answer: "Immediately. Even a minor drip can lead to mold growth and structural decay if the moisture is allowed to settle." 
    },
    { 
      question: "Can you replace damaged taps and bathroom fixtures?", 
      answer: "Yes. we handle the full installation of modern taps, showerheads, and sanitaryware for both repairs and upgrades." 
    },
    { 
      question: "Why does my drain keep getting blocked?", 
      answer: "Frequent blockages are often caused by deep-seated buildup or misaligned pipes that require a professional clear-out." 
    },
    { 
      question: "Do you handle water heater repairs?", 
      answer: "Yes, we troubleshoot and repair heating elements, thermostats, and pressure valves for all standard residential heaters." 
    },
    { 
      question: "What should I do in the event of a burst pipe?", 
      answer: "Immediately turn off the main water supply valve and call us. We prioritize burst pipe callouts to minimize flooding." 
    },
  ],
  relatedServices: [routeCards.electrical, routeCards.handyman, routeCards.waterTankCleaning],
});

export const PAINTING_SERVICE = createServicePage({
  ...routeCards.painting,
  category: "Painting",
  heroImage: "/painting.jpeg",
  heroDescription:
    "Interior and exterior painting delivered with careful preparation, clean edges, and finishes that refresh your property.",
  introTitle: "Professional painting that improves appearance and protects surfaces",
  introText:
    "A professional paint job is about more than just a change of color—it's a critical layer of protection for your property. High-quality paint acts as a barrier against moisture, sunlight, and everyday wear. Our approach focuses on meticulous surface preparation and the use of premium materials to ensure that your finish remains vibrant and durable, significantly enhancing the overall aesthetic and value of your space.",
  signsTitle: "Is it time for a professional repaint?",
  signsDescription: [
    "Fading, peeling, and surface staining are signs that your previous paint layer has lost its protective properties. Beyond aesthetics, neglected surfaces are prone to moisture absorption and structural degradation. Whether you are looking to modernize your interior palette or protect your exterior walls from the elements, a fresh coat applied with professional precision provides an immediate and lasting transformation.",
  ],
  signs: [
    { text: "Peeling Paint", icon: "PaintRoller" },
    { text: "Wall Stains", icon: "AlertTriangle" },
    { text: "Faded Surfaces", icon: "Sparkles" },
    { text: "Cracks and Marks", icon: "Search" },
  ],
  benefits: [
    { icon: "Sparkles", title: "Flawless Finish", description: "Our expert application ensures uniform color and crisp edges throughout your space." },
    { icon: "Shield", title: "Surface Longevity", description: "Proper priming and painting protect your walls from humidity and staining." },
    { icon: "Home", title: "Aesthetic Refresh", description: "Instantly update the mood and feel of your property with modern color schemes." },
    { icon: "Briefcase", title: "Managed Execution", description: "We handle all the preparation and cleanup, providing a stress-free experience." },
  ],
  trustImage: "/painting2.jpeg",
  trustImageAlt: "Professional painters applying a clean interior finish",
  trustPoints: [
    { title: "Preparation focus", description: "We spend time on sanding and filling to ensure the final finish is perfectly smooth." },
    { title: "Clean environment", description: "We use drop cloths and masking tape to protect your furniture and flooring throughout." },
    { title: "Expert color advice", description: "We provide practical guidance on finishes and shades that suit your lighting conditions." },
  ],
  faqs: [
    { 
      question: "Can you help with touch-ups and full repainting?", 
      answer: "Yes. We support everything from single-wall refreshes and minor touch-ups to full-property interior and exterior projects." 
    },
    { 
      question: "Does preparation really matter that much?", 
      answer: "Absolutely. Preparation is the key to adhesion; without it, even the best paint will peel or show imperfections." 
    },
    { 
      question: "How long does a standard room take to paint?", 
      answer: "A standard room typically takes 1 to 2 days, allowing for proper drying time between the primer and finishing coats." 
    },
    { 
      question: "Do you use low-odor or eco-friendly paints?", 
      answer: "Yes, we prioritize low-VOC and odorless paints for indoor projects to ensure your home remains comfortable during the process." 
    },
    { 
      question: "Do I need to buy the paint myself?", 
      answer: "We can provide high-quality paint based on your choice, or we can work with materials you have already purchased." 
    },
  ],
  relatedServices: [routeCards.handyman, routeCards.plumbing, routeCards.electrical],
});

export const HANDYMAN_SERVICE = createServicePage({
  ...routeCards.handyman,
  category: "Handyman",
  heroImage: "/handyman.jpeg",
  heroDescription:
    "From small repairs and fittings to general home fixes, our handyman service helps you clear the to-do list efficiently.",
  introTitle: "Flexible handyman support for all the small jobs around the home",
  introText:
    "A home is a complex system where small components frequently require adjustment or repair. Often, these tasks are too specialized for a DIY approach but too small for a major contractor. Our handyman service bridges that gap, providing a versatile professional to handle everything from wall-mounting and furniture assembly to minor structural fixes, ensuring your property remains functional and polished.",
  signsTitle: "When your to-do list needs professional help",
  signsDescription: [
    "Small household issues—a loose door handle, a crooked shelf, or a stubborn cabinet hinge—tend to accumulate until they disrupt your daily routine. If you find your weekend plans constantly sidelined by a growing list of 'minor' repairs, our handyman service is the most efficient way to reclaim your time. We handle the technical details and specialized tools required to cross multiple tasks off your list in a single, productive visit.",
  ],
  signs: [
    { text: "Loose Fixtures", icon: "Wrench" },
    { text: "Minor Damage", icon: "AlertTriangle" },
    { text: "Items Need Mounting", icon: "PlusSquare" },
    { text: "Repair List Growing", icon: "ClipboardList" },
  ],
  benefits: [
    { icon: "Wrench", title: "Versatile Skillset", description: "Access a professional capable of handling wood, masonry, and hardware tasks." },
    { icon: "Clock3", title: "Efficiency First", description: "Consolidate multiple small repairs into one visit to save time and call-out fees." },
    { icon: "CheckCircle", title: "Quality Assurance", description: "Every fix is performed with professional tools for a more durable, cleaner result." },
    { icon: "Shield", title: "Safety Focused", description: "Ensure heavy items like TVs and mirrors are mounted securely to prevent accidents." },
  ],
  trustPoints: [
    { title: "Versatile support", description: "We are equipped to handle the diverse, practical jobs that often pile up over time." },
    { title: "Efficient visits", description: "Our team arrives prepared to work productively, minimizing disruption to your schedule." },
    { title: "Clear expectations", description: "We provide a straightforward breakdown of the work required and the estimated time to completion." },
  ],
  faqs: [
    { 
      question: "What kind of jobs suit a handyman service?", 
      answer: "It is ideal for minor repairs, picture/TV mounting, shelving installation, furniture assembly, and basic hardware adjustments." 
    },
    { 
      question: "Can I combine multiple small jobs in one booking?", 
      answer: "Yes. In fact, we encourage it. Creating a list of tasks for a single visit is the most cost-effective way to use our service." 
    },
    { 
      question: "Do you bring your own tools and hardware?", 
      answer: "We arrive with a full professional toolset and standard consumables like screws and wall plugs. Specific fixtures like brackets should be provided by the client." 
    },
    { 
      question: "Can a handyman handle electrical or plumbing work?", 
      answer: "Our handymen can handle minor 'surface' tasks like changing a tap or a light fixture. For complex internal repairs, we recommend our specialized MEP services." 
    },
    { 
      question: "Do you offer furniture assembly for new purchases?", 
      answer: "Absolutely. We can quickly and correctly assemble flat-pack furniture from any major retailer, ensuring it is structurally sound and level." 
    },
  ],
  relatedServices: [routeCards.painting, routeCards.electrical, routeCards.plumbing],
});

export const WATER_TANK_CLEANING_SERVICE = createServicePage({
  ...routeCards.waterTankCleaning,
  category: "Water Hygiene",
  heroImage: "/watertankcleaning.jpg",
  heroDescription:
    "Scheduled tank cleaning and sanitization to help keep stored water cleaner, safer, and more suitable for daily use.",
  introTitle: "Water tank cleaning that supports hygiene and peace of mind",
  introText:
    "While the water entering your property may be treated, the storage tank itself can become a collection point for silt, rust, and biological growth over time. Stagnant water and sediment buildup compromise the hygiene of your entire plumbing system. Our specialized cleaning and sanitization process removes these hidden contaminants, ensuring the water used for your family’s hygiene and daily tasks meets the highest safety standards.",
  signsTitle: "Is your water storage a health risk?",
  signsDescription: [
    "Bio-film and sediment often accumulate at the bottom of a tank without affecting the water’s appearance initially. However, if you notice a subtle metallic smell, slight discoloration, or a drop in water pressure, your tank likely has significant debris buildup. Regular, professional sanitization is essential to prevent the growth of harmful bacteria and to protect your pumps and pipes from abrasive grit and residue.",
  ],
  signs: [
    { text: "Tank Due for Cleaning", icon: "Calendar" },
    { text: "Sediment Buildup", icon: "Layers" },
    { text: "Odor or Discoloration", icon: "AlertCircle" },
    { text: "Low Hygiene Confidence", icon: "ShieldCheck" },
  ],
  benefits: [
    { icon: "ShieldCheck", title: "Total Sanitization", description: "We use approved anti-bacterial treatments to eliminate microbial growth and bio-film." },
    { icon: "Droplets", title: "Enhanced Purity", description: "Removing heavy sediment leads to clearer water for bathing, washing, and cleaning." },
    { icon: "RefreshCw", title: "System Longevity", description: "Clean tanks prevent grit from entering and damaging your pumps and water heaters." },
    { icon: "Heart", title: "Family Health", description: "Reduce the risk of skin irritations and water-borne illnesses caused by stored contaminants." },
  ],
  trustPoints: [
    { title: "Hygiene-focused process", description: "We use a multi-stage cleaning protocol that includes scrubbing, vacuuming, and UV/chemical sanitization." },
    { title: "Non-Toxic Methods", description: "All cleaning agents are food-safe and thoroughly rinsed to ensure no residue remains in your supply." },
    { title: "Post-Service Reports", description: "We provide before-and-after visual evidence so you can see the results of the cleaning process." },
  ],
  faqs: [
    { 
      question: "How often should a water tank be cleaned?", 
      answer: "For most residential properties, we recommend a professional cleaning every 6 months to prevent the accumulation of silt and bio-film." 
    },
    { 
      question: "How long does the cleaning process take?", 
      answer: "A standard residential tank typically takes between 2 to 4 hours to thoroughly drain, clean, and sanitize." 
    },
    { 
      question: "Will my water supply be cut off during the cleaning?", 
      answer: "Yes, the tank must be drained for a deep clean. We coordinate with you to minimize disruption and perform the work as quickly as possible." 
    },
    { 
      question: "Do you use harsh chemicals that might leave a smell?", 
      answer: "No. We use approved, biodegradable sanitizers that are effective against bacteria but safe for domestic water systems once rinsed." 
    },
    { 
      question: "Do you clean both underground and roof-top tanks?", 
      answer: "Yes, our team is equipped to handle both GRP roof tanks and concrete underground reservoirs using specialized submersible equipment." 
    },
  ],
  relatedServices: [routeCards.plumbing, routeCards.ductCleaning, routeCards.pestControl],
});

export const DUCT_CLEANING_SERVICE = createServicePage({
  ...routeCards.ductCleaning,
  category: "Air Quality",
  heroImage: "/duct-cleaning.jpg",
  heroDescription:
    "Professional duct cleaning helps improve airflow, reduce dust circulation, and support a cleaner indoor environment.",
  introTitle: "Duct cleaning for better airflow and cleaner air indoors",
  introText:
    "Dust and debris inside ductwork can affect airflow, comfort, and overall air quality. Duct cleaning helps restore cleaner circulation and supports better AC performance.",
  signs: [
    { text: "Dust Around Vents", icon: "Wind" },
    { text: "Uneven Airflow", icon: "Fan" },
    { text: "Stale Indoor Air", icon: "WarningCircle" },
    { text: "AC Working Harder", icon: "Lightning" },
  ],
  benefits: [
    { icon: "Wind", title: "Improved Circulation", description: "Cleaner ducts help conditioned air move more freely." },
    { icon: "Sparkles", title: "Cleaner Indoor Feel", description: "Less buildup in the system supports fresher indoor air." },
    { icon: "Lightning", title: "Efficiency Support", description: "Better airflow helps AC systems work with less strain." },
    { icon: "Shield", title: "Smarter Maintenance", description: "Useful as part of a broader AC care routine." },
  ],
  trustPoints: [
    { title: "System-aware service", description: "We treat duct cleaning as part of overall AC performance." },
    { title: "Practical recommendations", description: "Advice is based on visible buildup and airflow concerns." },
    { title: "Professional handling", description: "We complete the work efficiently and with minimal disruption." },
  ],
  faqs: [
    { question: "When is duct cleaning worth considering?", answer: "Usually when you notice dust around vents, reduced airflow, stale air, or long-neglected maintenance." },
    { question: "Is duct cleaning the same as AC servicing?", answer: "No. Duct cleaning focuses on air distribution, while servicing focuses on the AC unit itself." },
  ],
  relatedServices: [routeCards.coilCleaning, routeCards.ac, routeCards.waterTankCleaning],
});

export const COIL_CLEANING_SERVICE = createServicePage({
  ...routeCards.coilCleaning,
  category: "Air Conditioning",
  heroImage: "/coilcleaning.jpg",
  heroDescription:
    "Coil cleaning helps your AC cool more effectively by removing buildup that reduces heat transfer and efficiency.",
  introTitle: "Coil cleaning that helps your AC cool efficiently again",
  introText:
    "Dirty coils reduce AC efficiency, affect cooling performance, and can contribute to higher running costs. Professional cleaning helps restore performance and supports better long-term system health.",
  signs: [
    { text: "Weak Cooling", icon: "Snowflake" },
    { text: "Higher Energy Use", icon: "Lightning" },
    { text: "Longer Run Time", icon: "Clock3" },
    { text: "Recurring Issues", icon: "Repeat" },
  ],
  benefits: [
    { icon: "Snowflake", title: "Stronger Cooling", description: "Cleaner coils help the AC remove heat more effectively." },
    { icon: "Lightning", title: "Efficiency Gains", description: "Less buildup means less system strain and energy waste." },
    { icon: "Repeat", title: "Better System Health", description: "Regular cleaning supports smoother long-term performance." },
    { icon: "Wallet", title: "Maintenance Value", description: "Preventive care can help avoid costlier issues later." },
  ],
  trustPoints: [
    { title: "Maintenance-minded service", description: "We treat coil cleaning as an important part of AC care." },
    { title: "Clear recommendations", description: "We explain when coil cleaning makes sense and why." },
    { title: "Reliable execution", description: "The work is carried out with attention to cleanliness and results." },
  ],
  faqs: [
    { question: "What happens if AC coils stay dirty for too long?", answer: "They can reduce cooling efficiency, increase system strain, and contribute to higher energy use." },
    { question: "Can coil cleaning help if the AC is running but not cooling well?", answer: "Yes. Dirty coils are a common cause of reduced cooling performance." },
  ],
  relatedServices: [routeCards.ductCleaning, routeCards.ac, routeCards.electrical],
});

export const EMERGENCY_SERVICE = createServicePage({
  title: "Emergency Maintenance Services",
  category: "Emergency Support",
  heroImage: "/emergency-maintenance.jpeg",
  heroDescription:
    "Unexpected breakdowns can disrupt your home or business at any time. Our team responds quickly to resolve urgent issues safely and efficiently.",
  introTitle: "Fast response when you need it most",
  introText:
   "From sudden electrical failures that compromise your safety to catastrophic burst pipes and mid-summer AC breakdowns, household emergencies demand immediate, expert intervention. We provide a rapid-response lifeline designed to mitigate property damage, prevent escalating costs, and restore your home’s essential functions without unnecessary delays.",
  signsTitle: "Do you need emergency maintenance right now?",
  signsDescription: [
   
    "When you are confronted with a sudden mechanical failure, structural instability, or a critical safety risk, attempting a DIY fix can often exacerbate the problem or lead to personal injury. In these high-stakes scenarios, securing immediate professional assistance is not just a convenience—it is the most reliable way to stabilize the situation, protect your property from further damage, and ensure the long-term safety of everyone involved.",
  ],
  signs: [
    { text: "Power Failure", icon: "Bolt" },
    { text: "Water Leakage", icon: "Droplet" },
    { text: "AC Not Working", icon: "Snowflake" },
    { text: "Burning Smell or Sparks", icon: "AlertTriangle" },
  ],
  benefits: [
    { icon: "Clock3", title: "Immediate Response", description: "Quick action helps prevent escalation." },
    { icon: "Shield", title: "Safety First", description: "Urgent issues are handled with a focus on risk reduction." },
    { icon: "Wallet", title: "Damage Control", description: "Acting early can limit repair costs and secondary damage." },
    { icon: "Wrench", title: "Multi-Service Support", description: "We handle common AC, plumbing, and electrical emergencies." },
  ],
  trustTitle: "Why customers rely on us in emergencies",
  trustPoints: [
    { title: "Fast dispatch", description: "Urgent requests are prioritized whenever possible." },
    { title: "Experienced team", description: "Technicians are prepared to handle stressful situations calmly." },
    { title: "Transparent communication", description: "You get a clear explanation of the issue and next steps." },
  ],
faqs: [
  { 
    question: "What kinds of emergencies do you handle?", 
    answer: "We support urgent AC, plumbing, electrical, and general maintenance issues." 
  },
  { 
    question: "How quickly can you respond?", 
    answer: "Response time depends on location and availability, but urgent callouts are prioritized." 
  },
  { 
    question: "Are your emergency services available 24/7?", 
    answer: "Yes, our team is on standby around the clock to ensure that critical failures are addressed regardless of the time or day." 
  },
  { 
    question: "What should I do while waiting for a technician to arrive?", 
    answer: "For water leaks, shut off the main valve; for electrical issues, turn off the power at the breaker. Our dispatchers will provide specific safety guidance over the phone." 
  },
  { 
    question: "Is there an additional fee for emergency callouts?", 
    answer: "Emergency services may involve a priority dispatch fee, which covers the immediate mobilization of resources to stabilize your situation as quickly as possible." 
  },
],
  relatedServices: [routeCards.ac, routeCards.electrical, routeCards.plumbing],
});

export const DUCT_COIL_CLEANING_SERVICE = createServicePage({
  ...(catalogBySlug["ac-duct-coil-cleaning"] || fallbackCard({
    title: "AC Duct & Coil Cleaning",
    href: "/quote",
    slug: "ac-duct-coil-cleaning",
    image: "/duct-cleaning.jpg",
    description: "Deep cleaning of ducts and coils to improve airflow, indoor air quality, and system efficiency.",
  })),
  category: "Air Quality",
  heroImage: "/duct-cleaning.jpg", // Ensure this matches the expected key
  heroDescription:
    "Deep duct and coil cleaning helps improve airflow, support cleaner indoor air, and restore better AC efficiency.",
  introTitle: "AC duct and coil cleaning for stronger airflow and cleaner air",
  introText:
    "Over time, your AC system accumulates dust, allergens, and microbial growth within the ductwork and on the cooling coils. This buildup doesn't just degrade your air quality—it forces your system to work harder, leading to higher bills and premature mechanical failure. Our specialized cleaning process removes these hidden contaminants, restoring your system to peak performance.",
  signsTitle: "Is it time to clean your ducts and coils?",
  signsDescription: [
    "While some dust is normal, excessive buildup can become a breeding ground for mold and bacteria. If you notice a persistent musty smell or a visible layer of gray debris on your vents, your system is likely circulating polluted air throughout your living space. Professional cleaning is the only way to reach deep into the ventilation system to eliminate these risks at the source.",
  ],
  signs: [
    { text: "Dust Around Vents", icon: "Wind" },
    { text: "Weak Airflow", icon: "Fan" },
    { text: "Reduced Cooling", icon: "Snowflake" },
    { text: "Higher Running Costs", icon: "Zap" }, // Changed from 'Lightning' to 'Zap' to match standard Lucide naming
  ],
  benefits: [
    { icon: "Breathe", title: "Healthier Air", description: "Removes allergens, dust mites, and mold spores from circulation." },
    { icon: "Activity", title: "Better Airflow", description: "Clearing obstructions allows your AC to breathe and blow stronger." },
    { icon: "TrendingDown", title: "Lower Energy Bills", description: "Clean coils transfer heat more efficiently, reducing power draw." },
    { icon: "ShieldCheck", title: "Extended Unit Life", description: "Reducing strain on the compressor prevents expensive early replacements." },
  ],
  trustTitle: "Why choose our air quality specialists",
  trustPoints: [
    { title: "Advanced Equipment", description: "We use high-suction vacuums and HEPA filtration to trap all debris." },
    { title: "Certified Technicians", description: "Our team follows industry-standard protocols for safe microbial removal." },
    { title: "Visual Verification", description: "We provide before-and-after evidence to ensure a job well done." },
  ],
  faqs: [
    { 
      question: "How often should AC ducts be cleaned?", 
      answer: "Generally, every 2 to 3 years is recommended, though homes with pets or residents with allergies may benefit from annual cleaning." 
    },
    { 
      question: "Will duct cleaning make a mess in my home?", 
      answer: "No. We use negative pressure technology and protective coverings to ensure all dust is contained within our vacuum system." 
    },
    { 
      question: "What is the difference between duct cleaning and coil cleaning?", 
      answer: "Duct cleaning clears the 'veins' of your home, while coil cleaning focuses on the heat exchange component of the AC unit itself." 
    },
    { 
      question: "Can cleaning my AC help with my allergies?", 
      answer: "Absolutely. Removing the accumulation of pollen, pet dander, and dust from your ducts significantly reduces respiratory triggers." 
    },
    { 
      question: "How long does a standard cleaning take?", 
      answer: "Depending on the size of the property, a thorough deep clean typically takes between 3 to 5 hours." 
    },
  ],
  relatedServices: [routeCards.ac, routeCards.electrical, routeCards.plumbing],
});


export const ELECTRICAL_PLUMBING_SERVICE = createServicePage({
  ...(catalogBySlug["electrical-plumbing-services"] || fallbackCard({
    title: "Electrical & Plumbing Services",
    href: "/quote",
    slug: "electrical-plumbing-services",
    image: "/plumbing.jpeg",
    description: "Certified MEP support for electrical troubleshooting, leak fixes, fixture installations, and system upgrades.",
  })),
  category: "MEP Services",
  heroDescription:
    "Certified support for essential electrical and plumbing work, from troubleshooting and leak repairs to installations and upgrades.",
  introTitle: "Combined electrical and plumbing support for essential property systems",
  introText: 
    "Your property’s electrical and plumbing networks are its most critical infrastructure. From ensuring safe power distribution to maintaining a seamless water supply, our MEP specialists handle complex troubleshooting and routine upgrades. We focus on long-term reliability, using high-quality components and industry-standard safety protocols to keep your home or office running smoothly.",
  signsTitle: "Does your property need professional MEP attention?",
  signsDescription: [
    "Electrical and plumbing issues rarely stay small; a minor flicker or a slow drip is often a symptom of a larger systemic failure. Ignoring these signs can lead to electrical fires, structural water damage, or significant utility waste. Our team provides comprehensive inspections to identify hidden faults before they become expensive, high-priority emergencies.",
  ],
  signs: [
    { text: "Power Issues", icon: "Zap" },
    { text: "Water Leaks", icon: "Droplet" },
    { text: "Faulty Fixtures", icon: "Wrench" },
    { text: "Urgent Home Repairs", icon: "AlertTriangle" },
  ],
  benefits: [
    { icon: "ShieldCheck", title: "Certified Expertise", description: "All work is performed by qualified technicians following strict safety codes." },
    { icon: "Layers", title: "Integrated Support", description: "Handle both electrical and plumbing needs in a single, coordinated visit." },
    { icon: "Search", title: "Precision Diagnostics", description: "We find the root cause of issues to prevent recurring mechanical failures." },
    { icon: "Zap", title: "Efficiency Upgrades", description: "Modernize your fixtures to reduce water consumption and energy costs." },
  ],
  trustImage: "/emergency.jpeg",
  trustImageAlt: "Certified plumber and electrician on a job",
  trustTitle: "Why customers rely on our MEP team",
  trustPoints: [
    { title: "Standardized Pricing", description: "Clear, upfront estimates without hidden costs or surprise fees." },
    { title: "Quality Guarantee", description: "We stand behind our repairs with a dedicated service warranty." },
    { title: "24/7 Availability", description: "Support for critical failures that simply cannot wait until morning." },
  ],
  faqs: [
    { 
      question: "Do you handle small jobs like fixing a single socket or tap?", 
      answer: "Yes, we handle everything from minor fixture repairs to complete system rewiring and replumbing." 
    },
    { 
      question: "Are your technicians licensed for electrical work?", 
      answer: "Our team consists of certified MEP professionals trained to work safely with residential and commercial power systems." 
    },
    { 
      question: "How do you detect hidden water leaks?", 
      answer: "We use moisture meters and pressure testing to locate leaks behind walls or under floors without unnecessary demolition." 
    },
    { 
      question: "Can you help with new appliance installations?", 
      answer: "Absolutely. We provide safe electrical connections and plumbing hookups for water heaters, dishwashers, and more." 
    },
    { 
      question: "What is included in a general MEP inspection?", 
      answer: "We check breaker panels, grounding, pipe integrity, and fixture performance to ensure everything is up to code." 
    },
  ],
  relatedServices: [routeCards.ac, routeCards.electrical, routeCards.plumbing],
});

export const WATERPROOFING_SERVICE = createServicePage({
  ...(catalogBySlug["waterproofing"] || fallbackCard({
    title: "Waterproofing",
    href: "/quote",
    slug: "waterproofing",
    image: "/waterproofing.png",
    description: "Specialized waterproofing for roofs, bathrooms, and balconies to prevent seepage and long-term damage.",
  })),
  category: "Waterproofing",
  heroDescription:
    "Specialized waterproofing for roofs, bathrooms, and balconies to help prevent seepage, dampness, and long-term structural damage.",
  introTitle: "Waterproofing that protects your home from hidden moisture damage",
  introText: 
    "In regions with high humidity or heavy rainfall, effective waterproofing is the first line of defense for your property's structural integrity. Moisture infiltration leads to more than just unsightly stains; it weakens concrete, promotes hazardous mold growth, and ruins interior finishes. We apply advanced membrane and liquid-applied systems to seal your home from the top down.",
  signsTitle: "Is moisture compromising your property?",
  signsDescription: [
    "Water damage is often invisible until it’s already caused significant harm. Bubbling paint, a musty odor, or salt deposits (efflorescence) on your walls are clear indicators that your current waterproofing has failed. Taking action now prevents the high cost of structural repairs and ensures a dry, healthy indoor environment for your family or tenants.",
  ],
  signs: [
    { text: "Damp Patches", icon: "Droplet" },
    { text: "Peeling Paint", icon: "PaintRoller" },
    { text: "Water Seepage", icon: "AlertTriangle" },
    { text: "Recurring Leaks", icon: "ShieldCheck" },
  ],
  benefits: [
    { icon: "Shield", title: "Structural Integrity", description: "Protects the building foundation and slabs from water-induced decay." },
    { icon: "Home", title: "Mold Prevention", description: "Eliminates the damp conditions required for hazardous fungal growth." },
    { icon: "Sparkles", title: "Interior Protection", description: "Keeps your wallpaper, paint, and flooring safe from moisture damage." },
    { icon: "TrendingUp", title: "Value Preservation", description: "A certified waterproofed property maintains a higher market value." },
  ],
  trustTitle: "Why choose our waterproofing specialists",
  trustPoints: [
    { title: "Advanced Materials", description: "We use premium PU and bituminous membranes for long-lasting protection." },
    { title: "Site-Specific Solutions", description: "Every project gets a custom plan based on the area's specific exposure." },
    { title: "Long-Term Warranty", description: "Our waterproofing applications come with extended peace-of-mind guarantees." },
  ],
  faqs: [
    { 
      question: "Which areas of the house require waterproofing most?", 
      answer: "Roofs, balconies, bathrooms, and kitchen wet areas are the most critical zones for moisture protection." 
    },
    { 
      question: "How long does a waterproofing treatment last?", 
      answer: "With high-quality materials and professional application, our systems typically provide 5 to 10+ years of protection." 
    },
    { 
      question: "Can you waterproof a roof without removing the tiles?", 
      answer: "In many cases, yes. We offer specialized liquid-applied membranes that can be installed over existing surfaces." 
    },
    { 
      question: "Is it possible to stop an active leak from the inside?", 
      answer: "While external waterproofing is best, we offer injection systems that can stop active seepage through foundation walls." 
    },
    { 
      question: "Does waterproofing help with indoor temperature?", 
      answer: "Yes, many modern roof coatings are reflective, which helps reduce heat absorption and lowers AC costs." 
    },
  ],
  relatedServices: [routeCards.plumbing, routeCards.ac, routeCards.ductCleaning],
});

export const PEST_CONTROL_SERVICE = createServicePage({
  ...(catalogBySlug["pestcontrol"] || fallbackCard({
    title: "Pest Control",
    href: "/quote",
    slug: "pestcontrol",
    image: "/pestcontrol.jpeg",
    description: "Targeted pest treatment programs and preventive follow-up support for homes and facilities.",
  })),
  category: "Pest Control",
  heroDescription:
    "Targeted pest treatment and preventive follow-up support that help keep homes and facilities cleaner, safer, and more comfortable.",
  introTitle: "Pest control plans that focus on treatment and prevention",
  introText: 
    "A clean environment is about more than just aesthetics; it's about health and safety. Pests carry diseases and can cause extensive damage to your property’s wiring, wood, and insulation. Our pest management approach combines immediate eradication of active infestations with strategic baiting and sealing to ensure that once they are gone, they don't return.",
  signsTitle: "Signs that pests have entered your space",
  signsDescription: [
    "Often, the pests you see are only a small fraction of the total population hiding within walls or crawl spaces. Noticing droppings, strange noises in the ceiling, or chewed wiring are urgent signals that your property is under threat. Professional intervention is necessary to identify nesting sites and break the breeding cycle before the infestation spreads.",
  ],
  signs: [
    { text: "Visible Activity", icon: "Bug" },
    { text: "Recurring Issues", icon: "RotateCcw" },
    { text: "Property Damage", icon: "ShieldAlert" },
    { text: "Hygiene Concerns", icon: "Sparkles" },
  ],
  benefits: [
    { icon: "HeartPulse", title: "Health & Hygiene", description: "Protects your family from bacteria and allergens carried by pests." },
    { icon: "Lock", title: "Preventive Sealing", description: "We identify and close entry points to stop future invasions." },
    { icon: "Leaf", title: "Eco-Safe Methods", description: "We use targeted treatments that are safe for pets and residents." },
    { icon: "ClipboardCheck", title: "Regular Monitoring", description: "Scheduled follow-ups ensure your property remains pest-free." },
  ],
  trustTitle: "Why customers trust our pest management",
  trustPoints: [
    { title: "Odorless Treatments", description: "Modern, low-toxicity solutions that don't require you to leave for days." },
    { title: "Targeted Results", description: "Custom plans for specific pests including cockroaches, ants, and rodents." },
    { title: "Discreet Service", description: "We provide professional service with minimal disruption to your daily routine." },
  ],
  faqs: [
    { 
      question: "Are your pest control chemicals safe for pets and children?", 
      answer: "Yes, we use approved, low-toxicity formulas and apply them in areas that are inaccessible to pets and children." 
    },
    { 
      question: "How long after treatment will I see results?", 
      answer: "Most customers see a significant reduction in pest activity within 24 to 48 hours, with total eradication following shortly." 
    },
    { 
      question: "Do I need to leave my house during the treatment?", 
      answer: "For standard treatments, you usually don't need to leave. We will advise you if a specific service requires a short absence." 
    },
    { 
      question: "How often should I get pest control done?", 
      answer: "We recommend a preventive treatment every 3 to 6 months to maintain a protective barrier around your property." 
    },
    { 
      question: "Do you provide a warranty for pest services?", 
      answer: "Yes, we offer a service guarantee; if pests return within a specified period, we will re-treat the area at no extra cost." 
    },
  ],
  relatedServices: [routeCards.ductCleaning, routeCards.ac, routeCards.plumbing],
});

export const RENOVATION_WORKS_SERVICE = createServicePage({
  ...(catalogBySlug["renovation-works"] || fallbackCard({
    title: "Renovation Works",
    href: "/quote",
    slug: "renovation-works",
    image: "/home-renovation.jpg",
    description: "Complete remodeling support covering planning, structural upgrades, and high-end finishes.",
  })),
  category: "Renovation",
  heroDescription:
    "Complete remodeling support covering planning, upgrades, finishes, and coordinated execution for residential and commercial spaces.",
  introTitle: "Renovation support for transforming outdated or underperforming spaces",
  introText:
    "A successful renovation is a balance of structural integrity and aesthetic evolution. Whether you are modernizing a legacy residential property or optimizing a commercial layout for better workflow, our team handles the heavy lifting of planning and execution. We focus on transforming dated environments into high-performance spaces that reflect modern living standards and premium design sensibilities.",
  signsTitle: "Is your property reaching its full potential?",
  signsDescription: [
    "Over time, even the most well-designed spaces can feel restrictive or aesthetically fatigued. If your current layout no longer supports your lifestyle, or if worn finishes are detracting from your property’s value, a professional renovation is the most effective solution. We address everything from internal reconfigurations to high-end surface treatments, ensuring every square foot is functional and visually striking.",
  ],
  signs: [
    { text: "Outdated Interiors", icon: "Home" },
    { text: "Layout Issues", icon: "Layout" },
    { text: "Worn Finishes", icon: "PaintRoller" },
    { text: "Upgrade Plans", icon: "Sparkles" },
  ],
  benefits: [
    { icon: "TrendingUp", title: "Property Value", description: "Strategic upgrades offer a significant return on investment for resale or rental." },
    { icon: "Maximize", title: "Space Optimization", description: "We reconfigure layouts to maximize usable area and improve natural light flow." },
    { icon: "Palette", title: "Modern Aesthetics", description: "Access high-end finishes and contemporary designs tailored to your taste." },
    { icon: "Shield", title: "Structural Refresh", description: "Identify and resolve underlying issues like old wiring or plumbing during the build." },
  ],
  trustTitle: "Why trust our renovation team",
  trustPoints: [
    { title: "Turnkey Solutions", description: "We manage every phase, from initial demolition to the final coat of paint." },
    { title: "Skilled Craftsmanship", description: "Our team includes specialized masonry, carpentry, and finishing experts." },
    { title: "Transparent Timelines", description: "We provide realistic project schedules and regular milestones updates." },
  ],
  faqs: [
    { 
      question: "How long does a typical home renovation take?", 
      answer: "A standard room renovation takes 2-4 weeks, while a full property remodel can take 2-4 months depending on the complexity." 
    },
    { 
      question: "Do I need to move out during the renovation?", 
      answer: "For major structural changes, it is recommended. For single-room or cosmetic updates, we can phase the work to minimize disruption." 
    },
    { 
      question: "Can you help with the design and planning phase?", 
      answer: "Yes, we offer design consultancy to ensure your vision is structurally feasible and aesthetically cohesive." 
    },
    { 
      question: "Are permits required for renovation work?", 
      answer: "Major structural or MEP changes often require local authority approvals. We can guide you through the permitting process." 
    },
    { 
      question: "Do you provide a warranty on renovation work?", 
      answer: "We provide a standard 12-month warranty on workmanship and materials used during the project." 
    },
  ],
  relatedServices: [routeCards.glassAluminium, routeCards.electrical, routeCards.waterproofing],
});

export const LANDSCAPING_HARDSCAPING_SERVICE = createServicePage({
  ...(catalogBySlug["landscaping-hardscaping"] || fallbackCard({
    title: "Landscaping & Hardscaping",
    href: "/quote",
    slug: "landscaping-hardscaping",
    image: "/landscape.jpg",
    description: "Outdoor upgrades including planting layouts, paving, pathways, and structural garden elements.",
  })),
  category: "Outdoor Works",
  heroDescription:
    "Outdoor upgrades including planting layouts, paving, pathways, and structural garden features designed to improve both function and curb appeal.",
  introTitle: "Landscaping and hardscaping for more usable, attractive outdoor spaces",
  introText:
    "Your outdoor space is an extension of your home’s architecture. Our landscaping and hardscaping services merge natural beauty with structural precision, creating environments that are as durable as they are inviting. From custom paving and stone pathways to climate-appropriate planting and automated irrigation, we build outdoor retreats that enhance both the value and the livability of your property.",
  signsTitle: "Does your outdoor area need a professional touch?",
  signsDescription: [
    "Unfinished outdoor spaces often lead to drainage issues, soil erosion, and wasted square footage. If your garden is an afterthought or your pathways are cracking and uneven, it’s time for a professional intervention. We specialize in creating cohesive outdoor designs that resolve functional problems while delivering a premium, resort-like atmosphere for your backyard or entrance.",
  ],
  signs: [
    { text: "Unfinished Areas", icon: "Tree" },
    { text: "Drainage Issues", icon: "Droplets" },
    { text: "Worn Pathways", icon: "MapPin" },
    { text: "Upgrade Plans", icon: "Sparkles" },
  ],
  benefits: [
    { icon: "Sun", title: "Curb Appeal", description: "A well-designed landscape creates an immediate, premium first impression." },
    { icon: "Layers", title: "Functional Hardscaping", description: "Stable, level surfaces for outdoor seating, dining, and movement." },
    { icon: "CloudRain", title: "Better Drainage", description: "Professionally graded land prevents water pooling and foundation damage." },
    { icon: "Leaf", title: "Low Maintenance", description: "We choose local flora and install smart irrigation to reduce upkeep effort." },
  ],
  trustTitle: "Excellence in outdoor design",
  trustPoints: [
    { title: "Material Knowledge", description: "We source high-grade stone, timber, and plants suited for the local climate." },
    { title: "Engineering Precision", description: "Our hardscaping is built with proper foundations to prevent future shifting." },
    { title: "Eco-Friendly Focus", description: "We implement water-efficient irrigation and sustainable landscaping practices." },
  ],
  faqs: [
    { 
      question: "What is the difference between landscaping and hardscaping?", 
      answer: "Landscaping refers to the living elements (plants, grass), while hardscaping involves 'hard' features like paths, walls, and decks." 
    },
    { 
      question: "How long does a backyard landscape project take?", 
      answer: "Most medium-sized projects are completed within 10 to 15 days, including soil preparation and hardscape installation." 
    },
    { 
      question: "Can you fix drainage issues in my garden?", 
      answer: "Yes, we can install French drains, soakaways, and regrade the land to ensure water moves away from your structure." 
    },
    { 
      question: "What plants work best for a low-maintenance garden?", 
      answer: "We recommend native succulents and drought-resistant shrubs that thrive with minimal water and pruning." 
    },
    { 
      question: "Do you offer landscape lighting?", 
      answer: "Absolutely. We integrate low-voltage LED lighting into our designs to enhance safety and ambiance after dark." 
    },
  ],
  relatedServices: [routeCards.petHousing, routeCards.waterproofing, routeCards.renovation],
});


export const GLASS_ALUMINIUM_CARPENTRY_SERVICE = createServicePage({
  ...(catalogBySlug["glass-aluminium-carpentry-works"] || fallbackCard({
    title: "Glass, Aluminium & Carpentry Works",
    href: "/quote",
    slug: "glass-aluminium-carpentry-works",
    image: "/carpentry.jpg",
    description: "Custom fabrication and installation of glass systems, aluminium frames, and specialized woodwork.",
  })),
  category: "Custom Fabrication",
  heroDescription:
    "Custom fabrication and installation of glass systems, aluminium frames, and carpentry work for practical upgrades and tailored fit-outs.",
  introTitle: "Glass, aluminium, and carpentry work for custom functional upgrades",
  introText:
    "Off-the-shelf solutions often fall short of modern architectural requirements. Our fabrication team specializes in custom-engineered glass, aluminium, and wood solutions that fit your space with millimeter precision. Whether it's a sleek minimalist glass partition, durable aluminium window frames, or bespoke interior carpentry, we prioritize structural accuracy and a refined finish in every piece we build.",
  signsTitle: "When standard fittings aren't enough",
  signsDescription: [
    "Damaged frames, sticking doors, or gaps in outdated fittings aren't just cosmetic issues—they compromise your home’s security and thermal efficiency. If you are struggling with non-standard dimensions or want to upgrade to a more modern, open-concept look with glass and slimline aluminium, our custom fabrication service is designed to solve these unique challenges without compromise.",
  ],
  signs: [
    { text: "Damaged Frames", icon: "Square" },
    { text: "Outdated Fittings", icon: "Box" },
    { text: "Custom Build Needs", icon: "Hammer" },
    { text: "Replacement Projects", icon: "History" },
  ],
  benefits: [
    { icon: "Compass", title: "Tailored Dimensions", description: "Every unit is fabricated to your exact site measurements for a perfect fit." },
    { icon: "Shield", title: "Material Durability", description: "We use high-grade alloys and tempered glass for maximum longevity." },
    { icon: "Maximize", title: "Aesthetic Modernization", description: "Sleek, slim profiles that allow more light and a cleaner visual style." },
    { icon: "Lock", title: "Enhanced Security", description: "Our custom frames feature reinforced locking points and safety glass." },
  ],
  trustTitle: "Why choose our fabrication experts",
  trustPoints: [
    { title: "Precision Measurement", description: "We use digital laser measurement tools to ensure zero-gap installations." },
    { title: "Expert Finish", description: "All carpentry and metalwork is finished to showroom standards." },
    { title: "Seamless Integration", description: "Our designs are engineered to complement your existing interior architecture." },
  ],
  faqs: [
    { 
      question: "Can you match new aluminium frames to my existing ones?", 
      answer: "Yes, we offer a wide range of powder-coated finishes to match your current window and door profiles." 
    },
    { 
      question: "Is tempered glass necessary for all partitions?", 
      answer: "For safety and compliance, we use tempered or laminated glass for all floor-to-ceiling partitions and doors." 
    },
    { 
      question: "Do you handle custom furniture builds?", 
      answer: "Our carpentry team specializes in built-in solutions like wardrobes, cabinets, and shelving units rather than loose furniture." 
    },
    { 
      question: "How long does custom fabrication take?", 
      answer: "Typically, fabrication takes 7-10 days, with installation usually completed in a single day." 
    },
    { 
      question: "Can you repair broken aluminium tracks?", 
      answer: "Yes, we provide maintenance and hardware replacement for sliding doors and window systems." 
    },
  ],
  relatedServices: [routeCards.renovation, routeCards.smartHome, routeCards.ac],
});

export const SMART_HOME_INSTALLATION_SERVICE = createServicePage({
  ...(catalogBySlug["smart-home-installation"] || fallbackCard({
    title: "Smart Home Installation (CCTV, Automation)",
    href: "/quote",
    slug: "smart-home-installation",
    image: "/cctv.jpg",
    description: "Full setup for CCTV security, smart automation controls, and connected home comfort systems.",
  })),
  category: "Smart Home",
  heroDescription:
    "Full setup for CCTV, automation controls, and connected smart home systems designed for convenience, oversight, and efficiency.",
  introTitle: "Smart home installation for better control, comfort, and visibility",
  introText:
    "Modern homes are becoming living ecosystems that respond to your needs. Our smart home integration services go beyond just installing gadgets; we create unified systems that connect your security, lighting, and climate controls into a single, intuitive interface. Whether you are looking for 24/7 remote monitoring or automated energy-saving scenes, we provide the technical foundation to make your home truly intelligent.",
  signsTitle: "Is it time to upgrade your home’s intelligence?",
  signsDescription: [
    "Relying on outdated security systems or manually adjusting your home’s settings is no longer the standard. If you are concerned about property blind spots, rising energy bills, or simply want the convenience of controlling your home from your phone, our smart solutions bridge the gap. We transform standard living spaces into high-tech hubs focused on security, efficiency, and total user control.",
  ],
  signs: [
    { text: "Security Upgrades", icon: "ShieldCheck" },
    { text: "Automation Needs", icon: "Zap" },
    { text: "Remote Access Goals", icon: "Smartphone" },
    { text: "Older Systems", icon: "History" },
  ],
  benefits: [
    { icon: "Eye", title: "Enhanced Security", description: "High-definition CCTV and smart sensors provide real-time alerts to your device." },
    { icon: "Activity", title: "Energy Management", description: "Automated lighting and AC control can reduce monthly utility costs by up to 20%." },
    { icon: "Smile", title: "Daily Convenience", description: "Control everything from voice commands or a single mobile dashboard." },
    { icon: "UploadCloud", title: "Remote Access", description: "Check in on your home, unlock doors, or adjust temp from anywhere in the world." },
  ],
  trustTitle: "Why choose our tech integration team",
  trustPoints: [
    { title: "Future-Proof Setups", description: "We use scalable platforms that allow you to add more devices as you grow." },
    { title: "Secure Networking", description: "We prioritize network security to ensure your smart devices are protected from intrusion." },
    { title: "User-First Training", description: "We don't just install; we ensure you are fully confident in using your new system." },
  ],
  faqs: [
    { 
      question: "Do I need high-speed internet for a smart home?", 
      answer: "Yes, a stable Wi-Fi connection is necessary for remote access and real-time alerts, especially for CCTV." 
    },
    { 
      question: "Can you integrate different brands into one app?", 
      answer: "We specialize in ecosystem integration (like HomeKit, Google Home, or Alexa) to bring disparate devices under one control." 
    },
    { 
      question: "Is it possible to install smart features in an old house?", 
      answer: "Absolutely. We use wireless and retrofitted components that don't require heavy rewiring in most cases." 
    },
    { 
      question: "What happens to the smart home if the power goes out?", 
      answer: "Most systems retain their settings, and critical components (like locks) often have battery backups for continued use." 
    },
    { 
      question: "Are smart home cameras private?", 
      answer: "We implement end-to-end encryption and two-factor authentication to ensure you are the only one with access to your feed." 
    },
  ],
  relatedServices: [routeCards.solar, routeCards.electrical, routeCards.renovation],
});

export const SOLAR_PANEL_SERVICE = createServicePage({
  ...(catalogBySlug["solar-panel-installation-maintenance"] || fallbackCard({
    title: "Solar Panel Installation & Maintenance",
    href: "/quote",
    slug: "solar-panel-installation-maintenance",
    image: "/solarpanel.jpg",
    description: "Professional installation and periodic maintenance of solar panels for sustainable energy.",
  })),
  category: "Solar Solutions",
  heroDescription:
    "Professional installation and ongoing maintenance for solar panel systems that support long-term energy efficiency and performance.",
  introTitle: "Solar panel installation and maintenance for efficient, long-term energy use",
  introText:
    "Transitioning to solar is a strategic investment in both environmental sustainability and financial predictability. Our solar services provide a comprehensive pathway from initial site assessment to peak performance monitoring. We use high-efficiency photovoltaic modules and robust mounting systems designed to withstand local weather conditions, ensuring that your property generates clean, reliable energy for decades to come.",
  signsTitle: "Signs it’s time to switch to solar",
  signsDescription: [
    "Escalating energy costs and the desire for environmental stewardship are the primary drivers for solar adoption. If you have an underutilized roof space and are looking for a way to hedge against rising utility prices, solar is the most effective technology available. Beyond installation, if your existing system is showing a drop in output, our specialized maintenance can restore its efficiency through deep cleaning and electrical optimization.",
  ],
  signs: [
    { text: "Energy Cost Concerns", icon: "Wallet" },
    { text: "Sustainability Goals", icon: "Sun" },
    { text: "Maintenance Needs", icon: "Wrench" },
    { text: "Expansion Plans", icon: "Plus" },
  ],
  benefits: [
    { icon: "TrendingDown", title: "Drastic Savings", description: "Significantly reduce or eliminate your monthly electricity bills from day one." },
    { icon: "Leaf", title: "Carbon Reduction", description: "Lower your property's environmental footprint with zero-emission energy." },
    { icon: "BatteryCharging", title: "Energy Autonomy", description: "Reduce your dependence on the national grid with localized power generation." },
    { icon: "ShieldCheck", title: "Low Maintenance", description: "Solar systems have no moving parts, resulting in very high reliability." },
  ],
  trustTitle: "Your reliable solar partner",
  trustPoints: [
    { title: "System Optimization", description: "We perform shade analysis to ensure panels are placed for maximum sunlight capture." },
    { title: "Grade-A Components", description: "We only use Tier-1 solar modules and high-efficiency power inverters." },
    { title: "Lifecycle Support", description: "From cleaning to performance audits, we stay with you for the life of the system." },
  ],
  faqs: [
    { 
      question: "How long does a solar installation take?", 
      answer: "A residential installation typically takes 2-3 days, following the approval of the necessary permits." 
    },
    { 
      question: "Will solar panels work on cloudy days?", 
      answer: "Yes, they still generate power during overcast conditions, though at a lower efficiency than in direct sunlight." 
    },
    { 
      question: "How often do solar panels need cleaning?", 
      answer: "In dusty environments, we recommend a professional cleaning every 4-6 months to maintain peak output." 
    },
    { 
      question: "What is the lifespan of a modern solar system?", 
      answer: "Most high-quality solar panels are warrantied for 25 years and can continue to operate efficiently well beyond that." 
    },
    { 
      question: "Can I sell excess electricity back to the grid?", 
      answer: "Depending on your local regulations and utility provider, you may be eligible for net-metering credits for the power you export." 
    },
  ],
  relatedServices: [routeCards.smartHome, routeCards.electrical, routeCards.waterproofing],
});

export const PET_HOUSING_SERVICE = createServicePage({
  ...(catalogBySlug["pet-housing-solutions"] || fallbackCard({
    title: "Pet Housing Solutions",
    href: "/quote",
    slug: "pet-housing-solutions",
    image: "/pet-housing.jpeg",
    description: "Custom-designed pet housing and utility-friendly setups focused on comfort and durability.",
  })),
  category: "Pet Solutions",
  heroDescription:
    "Custom-designed pet housing and utility-friendly setups focused on durability, comfort, and practical day-to-day use.",
  introTitle: "Pet housing solutions designed around comfort, durability, and function",
  introText:
    "Standard pet housing often fails to consider the specific ergonomic needs of animals or the aesthetic flow of a modern home. Our solutions are custom-built to provide your pets with a safe, thermally regulated, and comfortable sanctuary while ensuring the materials used are durable enough to withstand daily use. From integrated indoor suites to high-performance outdoor kennels, we build with both the pet’s wellbeing and the owner’s convenience in mind.",
  signsTitle: "Is your pet’s current housing adequate?",
  signsDescription: [
    "Inadequate housing can lead to pet stress, behavioral issues, and cleanliness challenges for the owner. If you are struggling with a setup that is difficult to clean, looks out of place in your garden, or doesn't provide enough space for your growing pet, a custom-built solution is the answer. We focus on airflow, non-toxic materials, and clever space planning to create a home your pet will actually love to use.",
  ],
  signs: [
    { text: "Need for Custom Fit", icon: "Dog" },
    { text: "Durability Concerns", icon: "ShieldCheck" },
    { text: "Space Planning Needs", icon: "Maximize" },
    { text: "Comfort Upgrades", icon: "Sparkles" },
  ],
  benefits: [
    { icon: "Heart", title: "Pet Well-being", description: "Designs focused on ventilation, light, and ergonomic comfort for any breed." },
    { icon: "Sparkles", title: "Easy Sanitation", description: "We use non-porous, pet-safe materials that are easy to wash and disinfect." },
    { icon: "Shield", title: "Safety First", description: "Reinforced structures and secure latches to keep your pets safe and contained." },
    { icon: "Home", title: "Aesthetic Harmony", description: "Our builds are designed to match your property's existing style and color palette." },
  ],
  trustTitle: "Specialized builds for pet owners",
  trustPoints: [
    { title: "Pet-Safe Materials", description: "Zero-VOC paints and chew-resistant hardware for your pet’s safety." },
    { title: "Climate Ready", description: "Outdoor units are insulated and shaded to prevent overheating." },
    { title: "Versatile Designs", description: "From cat patios (catios) to large dog runs, we scale to any requirement." },
  ],
  faqs: [
    { 
      question: "What materials do you use for outdoor pet houses?", 
      answer: "We use weather-treated timber, powder-coated aluminium, and composite materials that won't rot or corrode." 
    },
    { 
      question: "Can you build a house for multiple pets?", 
      answer: "Yes, we specialize in multi-occupancy designs that provide individual space while maintaining a shared footprint." 
    },
    { 
      question: "Are your pet houses insulated?", 
      answer: "We offer thermal insulation options for outdoor units to ensure a comfortable temperature year-round." 
    },
    { 
      question: "How long does a custom pet house take to build?", 
      answer: "Most custom builds are completed and installed within 5 to 7 days after the design is approved." 
    },
    { 
      question: "Do you offer cleaning services for pet housing?", 
      answer: "While we build for easy self-cleaning, we can include deep-sanitization as part of our general maintenance visits." 
    },
  ],
  relatedServices: [routeCards.landscaping, routeCards.renovation, routeCards.pestControl],
});

export const SERVICE_PAGES = {
  ac: AC_SERVICE,
  electrical: ELECTRICAL_SERVICE,
  plumbing: PLUMBING_SERVICE,
  painting: PAINTING_SERVICE,
  handyman: HANDYMAN_SERVICE,
  waterTankCleaning: WATER_TANK_CLEANING_SERVICE,
  ductCleaning: DUCT_CLEANING_SERVICE,
  coilCleaning: COIL_CLEANING_SERVICE,
  emergency: EMERGENCY_SERVICE,
  "emergency-maintenance-services": EMERGENCY_SERVICE,
  "ac-servicing-repair-replacement": AC_SERVICE,
  "ac-duct-coil-cleaning": DUCT_COIL_CLEANING_SERVICE,
  "electrical-plumbing-services": ELECTRICAL_PLUMBING_SERVICE,
  "painting-works": PAINTING_SERVICE,
  "handyman-services": HANDYMAN_SERVICE,
  "water-tank-cleaning": WATER_TANK_CLEANING_SERVICE,
  waterproofing: WATERPROOFING_SERVICE,
  pestcontrol: PEST_CONTROL_SERVICE,
  "renovation-works": RENOVATION_WORKS_SERVICE,
  "landscaping-hardscaping": LANDSCAPING_HARDSCAPING_SERVICE,
  "glass-aluminium-carpentry-works": GLASS_ALUMINIUM_CARPENTRY_SERVICE,
  "smart-home-installation": SMART_HOME_INSTALLATION_SERVICE,
  "solar-panel-installation-maintenance": SOLAR_PANEL_SERVICE,
  "pet-housing-solutions": PET_HOUSING_SERVICE,
};

export function getServicePageBySlug(slug) {
  return SERVICE_PAGES[slug] || null;
}

export const ALL_SERVICE_PAGES = Object.values(SERVICE_PAGES);

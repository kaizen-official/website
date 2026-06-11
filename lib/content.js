export const SITE = {
  name: "Prime Meridian Systems",
  email: "contact@primemeridiansystems.in",
  tagline: "Enabling Intelligent Growth for Bharat's Businesses.",
  description:
    "We build AI-native systems and intelligence platforms that help Bharat's businesses operate and grow more intelligently.",
};

export const WHATSAPP = {
  number: "918398840207",
  display: "+91 83988 40207",
  demoMessage:
    "Hi Satyarth - I visited the Prime Meridian Systems website and would like to learn more about your AI-native systems and operational intelligence. Could we schedule a call to discuss?",
};

export function whatsappDemoHref() {
  return `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.demoMessage)}`;
}

function teamContactMessage(name) {
  return `Hi ${name} - I visited the Prime Meridian Systems website and would like to learn more about your AI-native systems and operational intelligence. Could we schedule a call to discuss?`;
}

export function teamEmailHref(member) {
  const subject = `Prime Meridian Systems - Conversation with ${member.name}`;
  const body = `${teamContactMessage(member.name)}\n\nThanks,`;
  return `mailto:${member.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function teamWhatsappHref(member) {
  if (!member.whatsapp) return null;
  const message = member.whatsappMessage ?? teamContactMessage(member.name);
  return `https://wa.me/${member.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const TEAM = [
  {
    name: "Satyarth",
    role: "Co-Founder & CEO",
    email: "satyarth@primemeridiansystems.in",
    whatsapp: "918398840207",
    linkedin: "https://www.linkedin.com/in/satyarth-choudhary-6a1a9b1b4/",
    image: "/team/satyarth.webp",
    focus:
      "Leads product vision, customer partnerships, and forward-deployed engagements across Bharat's businesses.",
  },
  {
    name: "Nakul",
    role: "Co-Founder & CTO",
    email: "nakul@primemeridiansystems.in",
    whatsapp: "917988223181",
    linkedin: "https://www.linkedin.com/in/nakuljaglan/",
    image: "/team/nakul.webp",
    focus:
      "Architects AI-native systems, intelligence platforms, and the engineering backbone that powers Prime Meridian.",
  },
];

export const FDE_POINTS = [
  "On-site workflow discovery across factories, sites, and offices",
  "Operational bottleneck mapping with the teams who run the work",
  "AI-native solutions shaped by ground reality - not assumptions",
  "Continuous iteration alongside your operators as conditions change",
];

export const PRODUCTS = [
  {
    name: "Meridian Build",
    tag: "Real estate & construction",
    body: "AI-native operating system for real estate and construction businesses.",
    details:
      "Projects, procurement, sales, inventory, and finance on one intelligent workflow layer - built for developers and builders who need coordination, not another spreadsheet.",
    features: [
      "End-to-end project coordination",
      "Procurement & vendor workflows",
      "Sales pipeline & collections intelligence",
      "Industry-specific customizable modules",
    ],
  },
  {
    name: "Meridian Process",
    tag: "Chemical & manufacturing",
    body: "AI-native operating system for chemical and manufacturing businesses.",
    details:
      "Production, materials, quality, and plant intelligence unified in real time - for factories where downtime, variance, and material flow directly impact margin.",
    features: [
      "Production planning & execution",
      "Raw material & batch traceability",
      "Plant monitoring & anomaly detection",
      "Cost and yield intelligence",
    ],
  },
];

export const IOT = {
  name: "IoT & Hardware Integration",
  body: "We integrate IoT devices and sensors - Raspberry Pi, meters, machines, and shop-floor equipment - to capture real-time operational data and unlock deeper intelligence.",
  details:
    "From energy meters to machine signals, we connect physical operations to your software stack so intelligence is grounded in what is actually happening on the floor.",
};

export const INTELLIGENCE_CAPABILITIES = [
  {
    title: "Data Consolidation",
    body: "Unify fragmented data from ERP, CRM, spreadsheets, and shop-floor systems into one intelligence layer.",
  },
  {
    title: "AI Analytics & Insights",
    body: "Surface patterns, anomalies, and opportunities that manual reporting cannot catch at operational speed.",
  },
  {
    title: "Real-time Dashboards",
    body: "Give leaders live visibility into the metrics that matter - from plant health to cash flow.",
  },
  {
    title: "Business Health Monitoring",
    body: "Track operational pulse across departments with alerts when performance drifts off course.",
  },
  {
    title: "Predictive Analytics",
    body: "Anticipate demand, downtime, and resource constraints before they become costly problems.",
  },
  {
    title: "Proactive Recommendations",
    body: "Move from dashboards to decisions with AI-generated actions your teams can execute.",
  },
];

export const INTEGRATIONS = [
  "SAP",
  "Oracle",
  "Tally",
  "Odoo",
  "Zoho",
  "Custom Systems",
];

export const PIPELINE = ["Data", "Intelligence", "Growth"];

export const PIPELINE_STAGES = [
  {
    name: "Data",
    title: "Capture what is real",
    body: "Transactions, machine signals, and team inputs from every corner of operations - not just what fits a report template.",
  },
  {
    name: "Intelligence",
    title: "Connect and interpret",
    body: "AI that finds bottlenecks, variance, and opportunity across ERP, shop floor, and spreadsheets - in context.",
  },
  {
    name: "Growth",
    title: "Act and compound",
    body: "Decisions that tighten margins, speed throughput, and scale what works - with intelligence that improves every cycle.",
  },
];

export const WHY_WE_WIN_CONTRASTS = [
  {
    old: "Reports you read once a month",
    next: "Intelligence that updates as operations run",
  },
  {
    old: "Software built from a distance",
    next: "Systems shaped on your factory floor",
  },
  {
    old: "Data locked in siloed tools",
    next: "A unified layer that connects every signal",
  },
];

export const WHY_WE_WIN_OUTCOMES = [
  {
    title: "Decisions at operational speed",
    body: "Leaders see plant health, project risk, and cash pulse in real time - not thirty days later in a static deck.",
  },
  {
    title: "Waste surfaced early",
    body: "Downtime, rework, and material variance flagged before they compound into margin erosion.",
  },
  {
    title: "Intelligence that compounds",
    body: "Each cycle of capture and analysis makes the next recommendation sharper - efficiency builds on itself.",
  },
];

export const APPROACH_STEPS = [
  {
    num: "01",
    title: "Understand",
    body: "We study your operations, workflows, challenges, and growth goals on the ground.",
    detail:
      "Forward-deployed discovery sessions with operators, managers, and leadership - mapping how work really flows before we design anything.",
  },
  {
    num: "02",
    title: "Capture",
    body: "Operational data is captured across systems, machines, and teams.",
    detail:
      "We instrument the right signals - from ERP transactions to IoT sensors - without drowning you in noise.",
  },
  {
    num: "03",
    title: "Connect",
    body: "We integrate systems, software, and IoT devices into a unified intelligence layer.",
    detail:
      "Your existing stack stays in place. We build the connective tissue that makes data usable across the business.",
  },
  {
    num: "04",
    title: "Analyze",
    body: "AI analyzes data to identify bottlenecks, inefficiencies, and growth opportunities.",
    detail:
      "Models tuned to your industry context - not generic analytics that ignore how your business actually runs.",
  },
  {
    num: "05",
    title: "Improve",
    body: "Actionable insights empower leaders to make better decisions and drive results.",
    detail:
      "Intelligence that loops back into operations - compounding efficiency, performance, and growth over time.",
  },
];

export const CONTACT_PROCESS = [
  {
    num: "01",
    title: "Reach out",
    body: "Share your operations, software stack, and where you want to grow.",
    detail:
      "A short note is enough to start - we read every message and respond with a clear next step.",
  },
  {
    num: "02",
    title: "Discovery conversation",
    body: "A focused call with our founders to understand fit, scope, and constraints.",
    detail:
      "No sales script. We ask about workflows, data sources, and outcomes - not feature checklists.",
  },
  {
    num: "03",
    title: "On-site assessment",
    body: "Forward-deployed visit to your factory, site, or office when there is mutual fit.",
    detail:
      "We map how work actually moves before proposing architecture, timelines, or investment.",
  },
  {
    num: "04",
    title: "Proposal and partnership",
    body: "A clear plan - full AI-native system, intelligence layer, or an honest redirect.",
    detail:
      "Phased engagements with defined discovery deliverables, depending on complexity and readiness.",
  },
];

export const CONTACT_PREP = [
  "Your industry, scale, and number of operational sites",
  "Current software stack - ERP, CRM, spreadsheets, or custom tools",
  "The operational challenge or growth goal you want to solve",
  "Timeline, budget range, and any constraints we should know upfront",
];

export const CONTACT_EXPECT = [
  {
    title: "Reply within one business day",
    body: "We respond to every serious inquiry - typically within 24 hours on working days.",
  },
  {
    title: "Honest fit assessment",
    body: "If we are not the right partner, we say so directly and suggest a better path forward.",
  },
  {
    title: "Founders and engineers involved",
    body: "Early conversations are with the people who build - not a sales handoff chain.",
  },
];

export const CONTACT_FIT = [
  {
    title: "Manufacturing and chemicals",
    body: "Plants where production flow, batch traceability, and downtime directly impact margin.",
  },
  {
    title: "Real estate and construction",
    body: "Developers and builders coordinating projects, procurement, and sales across sites.",
  },
  {
    title: "Mature software stacks",
    body: "Enterprises on SAP, Oracle, Tally, Odoo, or Zoho seeking an intelligence layer - not replacement.",
  },
  {
    title: "Greenfield operations",
    body: "Businesses without a mature operational OS ready for a full AI-native system from the ground up.",
  },
];

export const CONTACT_FAQ = [
  {
    q: "Who is Prime Meridian built for?",
    a: "Bharat's operationally complex businesses - from manufacturers and builders to enterprises running mature ERP stacks - who want intelligence, not just digitization.",
  },
  {
    q: "Do you replace our existing ERP?",
    a: "Only when you need a full AI-native operating system. Our Operational Intelligence Layer enhances SAP, Oracle, Tally, Odoo, Zoho, and custom systems without replacement.",
  },
  {
    q: "How does forward deployed engineering work?",
    a: "Our team embeds on-site to understand workflows firsthand, then co-builds solutions with your operators so adoption is natural and outcomes are real.",
  },
  {
    q: "What does a first conversation look like?",
    a: "A 30-minute call with our founders covering your operations, current stack, and goals. We listen first, then outline whether a discovery visit, technical assessment, or different path makes sense.",
  },
  {
    q: "How long before we can start?",
    a: "Discovery calls are typically scheduled within a week of first contact. On-site assessments follow once there is clear mutual fit - usually within two to three weeks, depending on location and scope.",
  },
  {
    q: "What regions do you serve?",
    a: "We are Bharat-first, working with businesses across India. Engagements are designed around on-site presence - factories, construction sites, and offices where operations actually run.",
  },
];

import { LayoutGrid, Users, BarChart2, Zap } from "lucide-react";

// ── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

// ── LOGOS ────────────────────────────────────────────────────────────────────
export const LOGOS = [
  "Acme Corp",
  "Vertix",
  "NovaBuild",
  "Streamline",
  "Pixelate",
  "Crestwave",
];

// ── FEATURES ─────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: LayoutGrid,
    iconBg: "bg-[rgba(108,99,255,0.12)]",
    iconColor: "text-[#6c63ff]",
    title: "Task Management",
    description:
      "Create, assign, and track tasks with priorities, due dates, and subtasks. Visualize work as boards, lists, or timelines.",
    tags: ["Kanban", "Subtasks", "Deadlines"],
  },
  {
    icon: Users,
    iconBg: "bg-[rgba(56,217,169,0.12)]",
    iconColor: "text-[#38d9a9]",
    title: "Team Collaboration",
    description:
      "Comment, mention teammates, share files, and get real-time updates on anything that matters to your team.",
    tags: ["@Mentions", "Comments", "File sharing"],
  },
  {
    icon: BarChart2,
    iconBg: "bg-[rgba(250,204,21,0.12)]",
    iconColor: "text-[#facc15]",
    title: "Analytics",
    description:
      "Understand your team's performance with velocity charts, burndown graphs, and completion trends.",
    tags: ["Velocity", "Burndown", "Reports"],
  },
  {
    icon: Zap,
    iconBg: "bg-[rgba(255,101,132,0.12)]",
    iconColor: "text-[#ff6584]",
    title: "Automation",
    description:
      "Set triggers and actions to automate repetitive work. Let TaskFlow handle the routine so your team can focus on what counts.",
    tags: ["Triggers", "Workflows", "Integrations"],
  },
];

// ── HOW IT WORKS ─────────────────────────────────────────────────────────────
export const STEPS = [
  {
    num: "01",
    title: "Create your workspace",
    description:
      "Sign up and set up your workspace in seconds. Name it, pick a color, invite collaborators — done.",
  },
  {
    num: "02",
    title: "Add your team",
    description:
      "Invite teammates via email or a shareable link. Assign roles, set permissions, and get everyone on board instantly.",
  },
  {
    num: "03",
    title: "Track progress",
    description:
      'Watch tasks move from "To Do" to "Done." Get notified on updates and never miss a deadline.',
  },
];

// ── PRICING ───────────────────────────────────────────────────────────────────
export const PLANS = [
  {
    name: "Free",
    description: "Perfect for individuals and small side projects.",
    price: 0,
    period: "forever free",
    featured: false,
    badge: null,
    features: [
      { label: "Up to 3 projects", included: true },
      { label: "5 team members", included: true },
      { label: "Basic task management", included: true },
      { label: "Community support", included: true },
      { label: "Analytics dashboard", included: false },
      { label: "Automation workflows", included: false },
      { label: "Priority support", included: false },
    ],
    cta: "Get started free",
    ctaVariant: "outline" as const,
  },
  {
    name: "Pro",
    description: "For growing teams who need more power and flexibility.",
    price: 18,
    period: "per user / month",
    featured: true,
    badge: "Most Popular",
    features: [
      { label: "Unlimited projects", included: true },
      { label: "Up to 25 team members", included: true },
      { label: "Advanced task management", included: true },
      { label: "Analytics dashboard", included: true },
      { label: "Basic automations (50/mo)", included: true },
      { label: "Integrations (Slack, GitHub…)", included: true },
      { label: "Dedicated account manager", included: false },
    ],
    cta: "Start 14-day trial",
    ctaVariant: "primary" as const,
  },
  {
    name: "Business",
    description: "For organizations that need full control and compliance.",
    price: 42,
    period: "per user / month",
    featured: false,
    badge: null,
    features: [
      { label: "Everything in Pro", included: true },
      { label: "Unlimited team members", included: true },
      { label: "Unlimited automations", included: true },
      { label: "Advanced analytics & reports", included: true },
      { label: "SSO & SAML", included: true },
      { label: "Audit logs & compliance", included: true },
      { label: "Dedicated account manager", included: true },
    ],
    cta: "Contact sales",
    ctaVariant: "outline" as const,
  },
];

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    stars: 5,
    quote:
      "We replaced three different tools with TaskFlow. Our onboarding time dropped by half and the team actually enjoys using it — which never happened before.",
    name: "Sofia R.",
    role: "Head of Product, Vertix",
    initials: "SR",
    avatarGrad: "from-[#6c63ff] to-[#a78bfa]",
  },
  {
    stars: 5,
    quote:
      "The automation features alone save us at least 4 hours a week. Setting up recurring tasks and status updates is so smooth. Genuinely impressive.",
    name: "James M.",
    role: "CTO, NovaBuild",
    initials: "JM",
    avatarGrad: "from-[#38d9a9] to-[#0ea5e9]",
  },
  {
    stars: 5,
    quote:
      "Finally a task tool that doesn't feel like it was designed for enterprise robots. Clean, fast, and my small team of 6 was fully onboarded in a single afternoon.",
    name: "Laura P.",
    role: "Founder, Pixelate Studio",
    initials: "LP",
    avatarGrad: "from-[#ff6584] to-[#fb923c]",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: "Is there really a free plan with no credit card required?",
    answer:
      "Absolutely. The Free plan is free forever with no credit card needed. You can use it for up to 3 projects and 5 team members with no strings attached.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel at any time from your account settings. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Does TaskFlow integrate with tools like Slack or GitHub?",
    answer:
      "Yes — Pro and Business plans include integrations with Slack, GitHub, Figma, Google Drive, Zapier, and more. We're adding new integrations every month.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take security seriously. All data is encrypted in transit and at rest. Business plans include SSO, SAML, and audit logs for full compliance coverage.",
  },
  {
    question: 'What does "unlimited automations" mean on Business?',
    answer:
      "On the Business plan, you can create as many automation rules as you need — no monthly cap. Build complex multi-step workflows without worrying about limits.",
  },
];

export type ServiceDetail = {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  countries: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "company-formation",
    title: "Company Formation & Structuring",
    shortDesc:
      "Holding setups, international branch creation, and full legal compliance. We establish your corporate entity in the optimal jurisdiction for tax efficiency and operational freedom.",
    fullDesc:
      "Keystone Partners guides entrepreneurs and established businesses through every stage of international company formation. From selecting the optimal jurisdiction to final registration, our multilingual team ensures a seamless process. We handle holding structures, branch office registrations, subsidiary formations, and ensure full compliance with national and EU regulations. Whether you are setting up a GmbH in Germany, a Kft in Hungary, a Free Zone entity in Dubai, or a branch in Switzerland, our local presence and deep legal expertise eliminate delays and reduce risk.",
    benefits: [
      "Jurisdiction analysis tailored to your business model and tax objectives",
      "Holding company structures for asset protection and tax optimization",
      "International branch and subsidiary creation",
      "Full documentation preparation and notarization",
      "Registration with commercial courts, tax authorities, and social security",
      "Registered office and legal representation in-country",
    ],
    countries: [
      "Hungary",
      "Germany",
      "Czech Republic",
      "Poland",
      "Serbia",
      "Estonia",
      "Malta",
      "Switzerland",
      "UAE",
      "USA",
    ],
  },
  {
    slug: "tax-consulting",
    title: "Tax & Financial Planning",
    shortDesc:
      "Double taxation avoidance, corporate tax optimization, and audit-ready accounting. Strategic tax planning across jurisdictions to minimize your global tax burden.",
    fullDesc:
      "Navigating international tax obligations requires specialized knowledge of local regulations, double taxation treaties, and cross-border structures. Keystone Partners provides comprehensive tax advisory including corporate tax planning, VAT registration and filing, transfer pricing, withholding tax optimization, and relocation-related tax matters. Our team stays current with evolving EU directives and bilateral treaty networks to identify savings opportunities and ensure timely compliance across all jurisdictions where you operate.",
    benefits: [
      "Double taxation treaty analysis and application",
      "Corporate and personal income tax planning across jurisdictions",
      "VAT registration, filing, and reclaim services",
      "Transfer pricing documentation and compliance",
      "Tax-efficient holding and royalty structures",
      "Annual tax returns and ongoing compliance management",
    ],
    countries: [
      "Hungary",
      "Germany",
      "Poland",
      "Czech Republic",
      "Serbia",
      "Malta",
      "Switzerland",
      "UAE",
      "Estonia",
    ],
  },
  {
    slug: "immigration",
    title: "Residence & Citizenship Solutions",
    shortDesc:
      "Global mobility, investor residency, and citizenship through investment pathways. We simplify immigration for individuals, families, and corporate transferees.",
    fullDesc:
      "Relocating to a new country involves complex legal and administrative procedures. Keystone Partners assists individuals, families, and corporate transferees with residency permits, work visas, and citizenship applications. Whether you need an EU Blue Card, a Golden Visa, a digital nomad visa, or citizenship through investment, our experienced team prepares all documentation, liaises with immigration authorities, and ensures a smooth transition. We provide end-to-end support for global mobility planning.",
    benefits: [
      "Residence and work permit applications across 10+ jurisdictions",
      "EU Blue Card and highly skilled worker visas",
      "Golden Visa and investment-based residency programs",
      "Digital nomad visa programs",
      "Citizenship through investment pathways",
      "Family reunification permits",
    ],
    countries: [
      "Hungary",
      "Germany",
      "Poland",
      "Czech Republic",
      "Serbia",
      "Estonia",
      "Malta",
      "UAE",
    ],
  },
  {
    slug: "corporate-ma",
    title: "Corporate Support & M&A",
    shortDesc:
      "Mergers, acquisitions, bank account opening support, and operational management. Comprehensive corporate services to sustain and scale your international operations.",
    fullDesc:
      "Keystone Partners delivers end-to-end corporate support services for businesses operating across borders. Our M&A team guides you through due diligence, deal structuring, negotiation, and post-merger integration. We also assist with corporate bank account opening across multiple jurisdictions, operational management, regulatory compliance, and ongoing corporate secretarial services. Our integrated approach ensures your business operations run smoothly while you focus on growth.",
    benefits: [
      "Mergers and acquisitions advisory and due diligence",
      "Deal structuring and negotiation support",
      "Post-merger integration services",
      "International bank account opening assistance",
      "Corporate secretarial and compliance management",
      "Operational management and administrative support",
    ],
    countries: [
      "Hungary",
      "Germany",
      "Poland",
      "Czech Republic",
      "Serbia",
      "Malta",
      "Switzerland",
      "UAE",
      "Estonia",
      "USA",
    ],
  },
];

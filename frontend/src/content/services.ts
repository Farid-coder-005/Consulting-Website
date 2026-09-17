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
    title: "International Company Formation",
    shortDesc:
      "End-to-end company incorporation services across 10+ jurisdictions. We handle the legal, tax, and administrative requirements so you can focus on growing your business.",
    fullDesc:
      "Keystone Partners guides entrepreneurs and established businesses through every stage of international company formation. From selecting the optimal jurisdiction to final registration, our multilingual team ensures a seamless process. We manage all documentation, liaise with local authorities, and ensure full compliance with national and EU regulations. Whether you are setting up a GmbH in Germany, a Kft in Hungary, or a Free Zone entity in Dubai, our local presence and deep legal expertise eliminate delays and reduce risk.",
    benefits: [
      "Jurisdiction analysis tailored to your business model and tax objectives",
      "Full documentation preparation and notarization",
      "Registration with commercial courts, tax authorities, and social security systems",
      "Registered office and legal representation in-country",
      "Bank account opening assistance",
      "Ongoing compliance and annual reporting support",
    ],
    countries: [
      "Hungary",
      "Germany",
      "Czech Republic",
      "Poland",
      "Serbia",
      "Estonia",
      "Malta",
      "UAE",
      "USA",
      "Singapore",
    ],
  },
  {
    slug: "tax-consulting",
    title: "International Tax Consulting",
    shortDesc:
      "Strategic tax planning and compliance across multiple jurisdictions. Minimize your global tax burden while staying fully compliant with local and international regulations.",
    fullDesc:
      "Navigating international tax obligations requires specialized knowledge of local regulations, double taxation treaties, and cross-border structures. Keystone Partners provides comprehensive tax advisory services for businesses and individuals operating across multiple countries. We assist with corporate tax planning, VAT registration and filing, transfer pricing, withholding tax optimization, and relocation-related tax matters. Our team stays current with evolving EU directives and bilateral treaty networks to identify savings opportunities and ensure timely compliance.",
    benefits: [
      "Corporate and personal income tax planning across jurisdictions",
      "VAT registration, filing, and reclaim services",
      "Transfer pricing documentation and compliance",
      "Double taxation treaty analysis and application",
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
      "UAE",
      "Switzerland",
      "Estonia",
    ],
  },
  {
    slug: "accounting",
    title: "Accounting & Bookkeeping",
    shortDesc:
      "Full-cycle accounting, bookkeeping, and financial reporting services delivered by experienced professionals who understand international standards.",
    fullDesc:
      "Keystone Partners offers comprehensive accounting solutions through our affiliated consulting arm. From daily bookkeeping to complex financial reporting, we ensure your records are accurate, timely, and compliant with local GAAP or IFRS standards. Our services include accounts payable and receivable management, bank reconciliation, payroll processing, monthly and annual closings, and preparation of statutory financial statements. We leverage modern accounting software to provide real-time visibility into your financial position.",
    benefits: [
      "Monthly and annual bookkeeping and reconciliation",
      "Preparation of statutory financial statements",
      "Payroll administration and social security filings",
      "Management reporting and budgeting support",
      "Audit preparation and coordination",
      "IFRS and local GAAP compliance",
    ],
    countries: [
      "Hungary",
      "Germany",
      "Poland",
      "Czech Republic",
      "Serbia",
      "Malta",
      "Estonia",
    ],
  },
  {
    slug: "legal",
    title: "Legal Advisory",
    shortDesc:
      "Expert legal counsel for corporate, commercial, and cross-border matters. Our team handles contracts, compliance, and dispute resolution with precision.",
    fullDesc:
      "Keystone Partners provides a full spectrum of legal services through our international law office. We advise on corporate governance, commercial contracts, mergers and acquisitions, intellectual property, data protection (GDPR), and real estate transactions. Our attorneys work across jurisdictions, ensuring your legal strategy aligns with both local requirements and your broader business objectives. We also assist with regulatory compliance, employment law, and cross-border dispute resolution through arbitration and mediation.",
    benefits: [
      "Contract drafting, review, and negotiation",
      "Corporate governance and compliance advisory",
      "Mergers, acquisitions, and restructuring support",
      "GDPR and data protection compliance",
      "Intellectual property registration and protection",
      "Dispute resolution and arbitration",
    ],
    countries: [
      "Hungary",
      "Germany",
      "Poland",
      "Czech Republic",
      "Serbia",
      "Malta",
      "Estonia",
      "UAE",
    ],
  },
  {
    slug: "immigration",
    title: "Immigration & Residency",
    shortDesc:
      "Visa, residence permit, and citizenship application support across Europe and beyond. We simplify the immigration process for individuals and families.",
    fullDesc:
      "Relocating to a new country involves complex legal and administrative procedures. Keystone Partners assists individuals, families, and corporate transferees with residency permits, work visas, and citizenship applications across our jurisdictions. We prepare all required documentation, liaise with immigration authorities, and guide you through each step. Whether you need an EU Blue Card, a Golden Visa, a digital nomad visa, or a family reunification permit, our experienced team ensures a smooth transition.",
    benefits: [
      "Residence and work permit applications",
      "EU Blue Card and highly skilled worker visas",
      "Golden Visa and investment-based residency",
      "Digital nomad visa programs",
      "Family reunification permits",
      "Citizenship application support",
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
    slug: "real-estate",
    title: "Real Estate & Investment",
    shortDesc:
      "Secure property acquisition and investment advisory in European markets. We handle due diligence, legal review, and transaction management for international buyers.",
    fullDesc:
      "Investing in foreign real estate requires careful legal and tax planning. Keystone Partners supports international investors through the entire acquisition process—from property search and due diligence to contract negotiation and title registration. We ensure that transactions comply with local regulations, advise on holding structures to optimize tax outcomes, and coordinate with notaries, banks, and local authorities. Our services extend to commercial leases, property management setup, and ongoing compliance.",
    benefits: [
      "Property due diligence and legal review",
      "Contract negotiation and drafting",
      "Title registration and notarization",
      "Tax-efficient ownership structures",
      "Commercial lease agreements",
      "Coordination with local notaries and authorities",
    ],
    countries: ["Hungary", "Germany", "Poland", "Czech Republic", "Malta", "UAE"],
  },
];

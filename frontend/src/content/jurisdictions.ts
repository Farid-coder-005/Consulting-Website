export type JurisdictionContent = {
  slug: string;
  country: string;
  flag: string;
  heroImage: string;
  overview: string;
  advantages: string[];
  process: string[];
  requirements: string[];
  taxInfo: string;
  timeline: string;
  costs: string;
  faqItems: { q: string; a: string }[];
};

export const jurisdictions: JurisdictionContent[] = [
  {
    slug: "malta",
    country: "Malta",
    flag: "https://flagcdn.com/w240/mt.png",
    heroImage: "/Malta.jpg",
    overview:
      "Malta is a respected EU member state with a robust legal framework based on British common law and continental civil law traditions. Its strategic Mediterranean location, bilingual workforce, and favorable corporate tax regime make it a prime destination for international businesses, particularly in the iGaming, fintech, shipping, and aviation sectors.",
    advantages: [
      "EU and Schengen member with full access to the single market",
      "Effective corporate tax rate of approximately 5% through a full imputation refund system",
      "No withholding tax on dividends distributed to non-resident shareholders",
      "No capital gains tax on the sale of shares or securities",
      "Network of over 70 double taxation treaties",
      "English is an official language, simplifying business operations",
      "Well-regulated financial services and iGaming industries",
      "Competitive personal tax rates for relocating professionals",
    ],
    process: [
      "Select the appropriate company type (Ltd, PLC, or branch of a foreign company)",
      "Reserve the company name with the Malta Financial Services Authority (MFSA)",
      "Prepare the memorandum and articles of association",
      "Appoint at least one director and a company secretary",
      "Establish a registered office address in Malta",
      "Deposit the share capital with a Maltese bank",
      "Submit the incorporation documents to the MFSA",
      "Register for VAT and income tax with the Inland Revenue Department",
      "Register with social security for employee contributions",
      "Open a corporate bank account with a Maltese financial institution",
    ],
    requirements: [
      "Minimum one director (can be of any nationality)",
      "Company secretary must be a resident of Malta",
      "Minimum share capital of €1,200 for a private limited company (at least 20% paid up)",
      "Registered office address must be located in Malta",
      "Annual audited financial statements required",
      "VAT registration mandatory if annual turnover exceeds €35,000",
      "Beneficial ownership registration with the MFSA",
    ],
    taxInfo:
      "Malta operates a full imputation system. The standard corporate tax rate is 35%, but through a shareholder refund mechanism, the effective rate for foreign shareholders is approximately 5%. There is no withholding tax on dividends, no capital gains tax on securities, and no inheritance or wealth taxes. Malta has an extensive double taxation treaty network covering over 70 countries.",
    timeline:
      "Company registration in Malta typically takes 3-4 business days once all documentation is in order. Bank account opening may require an additional 1-2 weeks. VAT registration is usually completed within 5-10 business days.",
    costs:
      "Government registration fees, notary and legal costs, registered office rental, and our professional service fees. Contact us for a detailed quote tailored to your specific requirements.",
    faqItems: [
      {
        q: "Can a foreigner own 100% of a Maltese company?",
        a: "Yes, there are no restrictions on foreign ownership of Maltese companies. A single shareholder of any nationality can incorporate and fully own a private limited company.",
      },
      {
        q: "Do I need to be a resident of Malta to open a company?",
        a: "No, physical residency is not required for company ownership. However, a local company secretary and registered office must be maintained in Malta.",
      },
      {
        q: "What is the minimum share capital for a Maltese Ltd?",
        a: "The minimum share capital for a private limited company is €1,200, of which at least 20% (€240) must be paid up at the time of incorporation.",
      },
      {
        q: "Is Malta part of the EU and Schengen?",
        a: "Yes, Malta has been a full member of the European Union since 2004 and a member of the Schengen Area since 2007.",
      },
      {
        q: "How long does it take to register a company in Malta?",
        a: "The registration process typically takes 3-4 business days once all documents are properly prepared and submitted to the MFSA.",
      },
    ],
  },
  {
    slug: "switzerland",
    country: "Switzerland",
    flag: "https://flagcdn.com/w240/ch.png",
    heroImage:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80",
    overview:
      "Switzerland is one of the world's most stable and prosperous economies, offering a highly skilled workforce, excellent infrastructure, and a business-friendly regulatory environment. With 26 cantons each setting their own tax rates, companies can optimize their tax position based on their specific circumstances. Switzerland maintains over 85 double taxation treaties and is a gateway to European markets without being an EU member.",
    advantages: [
      "One of the lowest corporate tax rates in Europe (12-24% depending on canton)",
      "Political and economic stability with a AAA credit rating",
      "No capital gains tax for private investors",
      "85+ double taxation treaties providing extensive global coverage",
      "World-class banking and financial services infrastructure",
      "Highly educated, multilingual workforce",
      "Strong intellectual property protections",
      "Strategic location at the crossroads of Europe",
    ],
    process: [
      "Choose the appropriate legal form (GmbH/Sarl, AG/Sa, branch, or representative office)",
      "Draft and notarize the articles of association",
      "Deposit the minimum share capital in a Swiss bank account",
      "Register the company with the commercial register of the relevant canton",
      "Register for VAT with the Federal Tax Administration if turnover exceeds CHF 100,000",
      "Register with the cantonal social security office (AHV/IV/EO)",
      "Obtain any required cantonal business licenses",
      "Open the corporate bank account (timeline varies: 0-3 weeks)",
    ],
    requirements: [
      "GmbH (Sarl): minimum share capital CHF 20,000; at least one partner required",
      "AG (Sa): minimum share capital CHF 100,000; at least one shareholder required",
      "At least one director must be resident in Switzerland",
      "Registered office address must be in Switzerland",
      "Annual audited financial statements required for AG; simplified for GmbH below thresholds",
      "VAT registration mandatory if annual turnover exceeds CHF 100,000",
    ],
    taxInfo:
      "Switzerland has no single national corporate tax rate. Each of the 26 cantons sets its own rates, resulting in effective corporate tax rates ranging from approximately 12% to 24%. Personal income tax ranges from 0% to 45% depending on canton and income level. Switzerland levies no capital gains tax on the sale of private assets and no inheritance tax at the federal level.",
    timeline:
      "Company registration in Switzerland typically takes 2-4 weeks from document submission. Bank account opening can take from same-day (some cantons) to 3 weeks depending on the bank and canton. VAT registration is usually completed within 2-4 weeks.",
    costs:
      "Notary fees, commercial register fees, minimum share capital deposit, cantonal licenses, and our professional advisory fees. Costs vary by canton and company type. Contact us for a jurisdiction-specific quote.",
    faqItems: [
      {
        q: "Do I need to live in Switzerland to open a company?",
        a: "At least one director must be resident in Switzerland. However, Keystone Partners can provide nominee director services to fulfill this requirement.",
      },
      {
        q: "Which canton has the lowest taxes?",
        a: "Tax rates vary by canton. Zug, Schwyz, and Nidwalden are known for competitive rates. The optimal canton depends on your business type and personal circumstances.",
      },
      {
        q: "Can I open a Swiss bank account remotely?",
        a: "Some Swiss banks allow remote account opening, while others require an in-person visit. We can advise on banks that accommodate your situation.",
      },
      {
        q: "Is Switzerland an EU member?",
        a: "No, Switzerland is not an EU member but has extensive bilateral agreements granting access to the European single market in specific sectors.",
      },
    ],
  },
  {
    slug: "uae",
    country: "United Arab Emirates",
    flag: "https://flagcdn.com/w240/ae.png",
    heroImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    overview:
      "The United Arab Emirates is a global business hub offering a tax-efficient environment, world-class infrastructure, and strategic access to markets across the Middle East, Africa, and Asia. With zero personal income tax, a competitive corporate tax regime, and numerous free zones offering 100% foreign ownership, the UAE is an attractive destination for startups, SMEs, and multinational corporations alike.",
    advantages: [
      "Zero personal income tax on salaries and earnings",
      "Corporate tax of 9% only on taxable business profits exceeding AED 375,000",
      "100% foreign ownership in free zones",
      "No foreign exchange controls or restrictions on capital repatriation",
      "Extensive double taxation treaty network",
      "World-class infrastructure and logistics",
      "Strategic geographic position bridging Europe, Asia, and Africa",
      "No withholding tax on dividends or interest payments",
    ],
    process: [
      "Determine the appropriate jurisdiction: mainland, free zone, or offshore",
      "Select the business activity and obtain initial approval",
      "Choose a trade name and reserve it with the relevant authority",
      "Prepare and submit incorporation documents",
      "Obtain the trade license from the Department of Economic Development (mainland) or free zone authority",
      "Register with the Federal Tax Authority for VAT if applicable",
      "Open a corporate bank account with a UAE bank",
      "Register for immigration and labor cards for employees",
    ],
    requirements: [
      "Mainland LLC: local service agent (for certain activities) or 100% ownership for most activities since 2021",
      "Free Zone: 100% foreign ownership permitted; no local sponsor required",
      "Minimum share capital varies: LLC generally AED 1,000+; free zones may have lower or no minimum",
      "A physical office address (or virtual office in some free zones) is mandatory",
      "Annual license renewal required",
      "VAT registration mandatory if annual turnover exceeds AED 375,000",
    ],
    taxInfo:
      "The UAE introduced a federal corporate tax of 9% on taxable business profits exceeding AED 375,000, effective from June 2023. Free zone companies may benefit from a 0% corporate tax rate on qualifying income. There is zero personal income tax, no capital gains tax, and no withholding tax. The standard VAT rate is 5%, with registration required for businesses exceeding AED 375,000 in annual revenue.",
    timeline:
      "Company formation in the UAE typically takes 3-7 business days depending on the jurisdiction and activity type. Free zone companies can often be registered within 1-3 days. Bank account opening may take an additional 1-2 weeks.",
    costs:
      "Trade license fees, visa costs, office space lease, registration fees, and our professional service fees. Costs vary significantly between mainland, free zones, and offshore structures. Contact us for a detailed breakdown.",
    faqItems: [
      {
        q: "Can I own 100% of a company in the UAE?",
        a: "Yes, since recent reforms, most business activities allow 100% foreign ownership on the mainland. Free zones have always permitted full foreign ownership.",
      },
      {
        q: "Do I need to live in the UAE to have a company?",
        a: "No, you do not need to reside in the UAE to own a company. However, certain activities or visa types may require physical presence for specific procedures.",
      },
      {
        q: "What is the difference between mainland and free zone?",
        a: "Mainland companies can trade directly within the UAE market. Free zone companies enjoy tax benefits and simplified setup but may need a local distributor to sell within the UAE.",
      },
      {
        q: "Is there personal income tax in the UAE?",
        a: "No, the UAE levies zero personal income tax on salaries, wages, and most forms of personal income.",
      },
    ],
  },
  {
    slug: "slovakia",
    country: "Slovakia",
    flag: "https://flagcdn.com/w240/sk.png",
    heroImage:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1200&q=80",
    overview:
      "Slovakia offers one of the most competitive business environments in the European Union, combining low corporate tax rates, an affordable and skilled workforce, and central European location. As an EU and Eurozone member, Slovakia provides seamless access to the single market with straightforward regulatory requirements for company formation.",
    advantages: [
      "Flat 21% corporate income tax rate (15% for small companies under certain thresholds)",
      "EU and Eurozone member with access to the single market",
      "Lowest corporate tax rate among Visegrad countries",
      "No withholding tax on dividends paid to EU companies",
      "200+ double taxation treaties",
      "Competitive labor costs with a highly educated workforce",
      "Simple and fast company registration process",
      "Central European location with excellent logistics connections",
    ],
    process: [
      "Select the legal form (s.r.o. or a.s.)",
      "Prepare the founding documents and have them notarized",
      "Deposit the minimum share capital in a bank account",
      "Submit the registration application to the Commercial Register",
      "Register for corporate income tax with the tax authority",
      "Register for VAT if turnover will exceed €49,790",
      "Register with the social security agency",
      "Open a corporate bank account",
    ],
    requirements: [
      "s.r.o. (LLC): minimum share capital €5,000 (can be paid in over 12 months)",
      "a.s. (JSC): minimum share capital €25,000",
      "At least one shareholder (individual or legal entity, any nationality)",
      "A registered office address in Slovakia",
      "A statutory director who is a resident of the EU/EEA",
      "Annual financial statements must be filed",
    ],
    taxInfo:
      "Slovakia applies a flat corporate income tax rate of 21%. Small and medium enterprises may qualify for a reduced rate of 15% on profits up to €49,790. There is no withholding tax on dividends distributed between EU companies. Personal income tax follows a flat rate of 19% (25% for income exceeding €36,256). Slovakia has an extensive network of over 200 double taxation treaties.",
    timeline:
      "Company registration in Slovakia takes approximately 5-10 business days from submission of complete documentation. Bank account opening typically takes 1-2 weeks. VAT registration is usually completed within 2-4 weeks.",
    costs:
      "Court registration fees, notary fees, minimum share capital, registered office rental, and our professional service fees. Contact us for a detailed cost estimate based on your specific requirements.",
    faqItems: [
      {
        q: "Can I open a Slovak company remotely?",
        a: "Yes, the process can be handled remotely through a power of attorney. Keystone Partners manages all filings and registrations on your behalf.",
      },
      {
        q: "Is a local director required?",
        a: "The statutory director must be an EU/EEA resident. If you do not have an EU-resident director, we can provide nominee director services.",
      },
      {
        q: "What is the minimum share capital for an s.r.o.?",
        a: "The minimum share capital for an s.r.o. (equivalent to a German GmbH or Hungarian Kft) is €5,000, which can be paid in installments over 12 months.",
      },
    ],
  },
  {
    slug: "estonia",
    country: "Estonia",
    flag: "https://flagcdn.com/w240/ee.png",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    overview:
      "Estonia is a pioneer in digital governance, offering a fully online company formation and management process through its e-Residency program. The country's unique 0% corporate tax on retained profits, combined with its EU membership and digital infrastructure, makes it an ideal choice for digital entrepreneurs, freelancers, and location-independent businesses.",
    advantages: [
      "0% corporate tax on retained and reinvested profits (tax only on distributed profits)",
      "e-Residency program allows 100% online company formation and management",
      "EU member with access to the single market",
      "Fully digital business environment — signatures, banking, and accounting online",
      "Low administrative burden and minimal bureaucracy",
      "No minimum share capital required for an OÜ (private limited company)",
      "Transparent and predictable tax system",
      "Strong digital infrastructure and cybersecurity",
    ],
    process: [
      "Apply for e-Residency (if not an EU/EEA citizen) or proceed directly",
      "Reserve a company name through the e-Business Register",
      "Prepare the articles of association online",
      "Submit the registration application via the e-Business Register",
      "Pay the state fee and registration costs",
      "Register for VAT if turnover exceeds €40,000",
      "Open a corporate bank account (Estonian or international fintech)",
      "Start managing your company entirely online",
    ],
    requirements: [
      "No minimum share capital required for an OÜ",
      "At least one shareholder (any nationality)",
      "At least one management board member (EU/EEA resident recommended for banking)",
      "A registered legal address in Estonia (virtual office available)",
      "Annual report filing required (simplified for small companies)",
      "VAT registration mandatory if annual turnover exceeds €40,000",
    ],
    taxInfo:
      "Estonia's unique tax system imposes 0% corporate income tax on retained and reinvested profits. Corporate tax of 20% is only levied when profits are distributed as dividends. Small distributions (up to €250,000 cumulative) benefit from a reduced rate of 14%. There is no capital gains tax on the sale of shares. Personal income tax is a flat 20%. Estonia has an extensive double taxation treaty network.",
    timeline:
      "e-Residency card issuance takes approximately 3-8 weeks. Company registration itself can be completed in 1-3 business days once you have e-Residency. Bank account opening typically takes 1-2 weeks, though some fintech accounts can be opened within days.",
    costs:
      "e-Residency application fee (€120), state registration fee (€265), registered address service, and our professional formation and ongoing compliance fees. Contact us for a complete cost breakdown.",
    faqItems: [
      {
        q: "What is e-Residency?",
        a: "e-Residency is a government-issued digital identity that allows anyone in the world to establish and manage an EU-based company fully online. It provides access to Estonia's digital business environment.",
      },
      {
        q: "Do I need to live in Estonia?",
        a: "No, physical residency is not required. You can manage your Estonian company from anywhere in the world using your e-Residency digital ID.",
      },
      {
        q: "When do I pay corporate tax?",
        a: "Corporate tax is only due when you distribute profits as dividends. Retained and reinvested profits are taxed at 0%, making Estonia ideal for growing businesses.",
      },
      {
        q: "Can I open a bank account remotely?",
        a: "Traditional Estonian banks may require an in-person visit. However, several EU-licensed fintech services (such as Wise, Revolut, or Payoneer) allow remote account opening for Estonian companies.",
      },
    ],
  },
  {
    slug: "hungary",
    country: "Hungary",
    flag: "https://flagcdn.com/w240/hu.png",
    heroImage:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=1200&q=80",
    overview:
      "Hungary offers one of the lowest corporate tax rates in the European Union at just 9%, making it an attractive destination for businesses seeking tax efficiency within the EU. With a strategic central European location, well-developed infrastructure, and a straightforward company formation process, Hungary is a popular choice for startups, SMEs, and international holding structures.",
    advantages: [
      "Flat 9% corporate income tax rate — the lowest in the EU",
      "No withholding tax on dividends distributed to EU residents",
      "No capital gains tax on the sale of qualifying shareholdings",
      "Extensive double taxation treaty network",
      "EU and Schengen member with access to the single market",
      "Fast and straightforward company formation process",
      "Competitive labor costs and a skilled, multilingual workforce",
      "No minimum share capital requirement for Kft (effective from 2016 reforms)",
    ],
    process: [
      "Select the legal form (typically Kft for a private limited company)",
      "Reserve the company name with the Court of Registration",
      "Prepare and notarize the founding deed and articles of association",
      "Deposit the share capital in a Hungarian bank account",
      "Submit the registration application to the Court of Registration",
      "Register for corporate income tax and VAT with the National Tax Authority",
      "Register with the social security authority",
      "Open the corporate bank account (1-3 business days)",
    ],
    requirements: [
      "Kft: minimum registered capital of HUF 3,000,000 (approximately €8,000), fully payable at incorporation",
      "At least one member (shareholder) — individual or legal entity, any nationality",
      "At least one managing director — can be of any nationality",
      "A registered office address in Hungary",
      "Annual financial statements must be filed",
      "VAT registration mandatory if annual turnover exceeds HUF 12 million (approximately €32,000)",
    ],
    taxInfo:
      "Hungary levies a flat 9% corporate income tax rate, the lowest in the EU. There is no withholding tax on dividends paid to EU-resident companies or individuals. Capital gains from the sale of qualifying shareholdings are exempt from corporate tax. Personal income tax is a flat 15%. Social security contributions total approximately 22.5% (employer and employee combined).",
    timeline:
      "Company registration in Hungary typically takes 3-5 business days once the bank account is opened and documents are submitted. Bank account opening can take 1-3 business days. VAT registration is usually completed within 2-4 weeks.",
    costs:
      "Court registration fees, notary fees, share capital deposit, registered office rental, and our professional service fees. Contact us for a detailed cost estimate.",
    faqItems: [
      {
        q: "What is the lowest corporate tax in the EU?",
        a: "Hungary has the lowest corporate tax rate in the European Union at just 9% on taxable profits.",
      },
      {
        q: "Can a foreigner own 100% of a Hungarian Kft?",
        a: "Yes, there are no restrictions on foreign ownership. A single foreign individual or company can fully own a Hungarian Kft.",
      },
      {
        q: "Do I need to visit Hungary to open a company?",
        a: "A personal visit is not required if you grant a power of attorney to our team. We can handle the entire incorporation process on your behalf.",
      },
    ],
  },
];

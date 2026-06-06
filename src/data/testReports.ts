export type TestParameter = {
  parameter: string;
  specification: string;
  result: string;
  status: "Pass" | "Fail";
};

export type TestReport = {
  batchNumber: string;
  productName: string;
  category: string;
  manufacturingDate: string;
  expiryDate: string;
  testDate: string;
  labName: string;
  reportNumber: string;
  conclusion: string;
  parameters: TestParameter[];
};

export const TEST_REPORTS: TestReport[] = [
  {
    batchNumber: "ELV-ASH-2026-001",
    productName: "Ashwagandha Root Extract Capsules",
    category: "Wellness",
    manufacturingDate: "2026-01-12",
    expiryDate: "2028-01-11",
    testDate: "2026-01-18",
    labName: "Ellivion Quality Assurance Lab, Mumbai",
    reportNumber: "QA/2026/0112",
    conclusion:
      "The batch complies with internal Ellivion specifications and AYUSH guidelines. Approved for release.",
    parameters: [
      { parameter: "Withanolides content", specification: "≥ 5.0% w/w", result: "5.42% w/w", status: "Pass" },
      { parameter: "Moisture content", specification: "≤ 5.0%", result: "3.8%", status: "Pass" },
      { parameter: "Total heavy metals", specification: "≤ 10 ppm", result: "2.1 ppm", status: "Pass" },
      { parameter: "Microbial load (TPC)", specification: "≤ 10^5 CFU/g", result: "1.2 × 10^3 CFU/g", status: "Pass" },
      { parameter: "Pesticide residue", specification: "Within IP limits", result: "Not detected", status: "Pass" },
    ],
  },
  {
    batchNumber: "ELV-TRI-2026-014",
    productName: "Triphala Wellness Tablets",
    category: "Digestive",
    manufacturingDate: "2026-02-04",
    expiryDate: "2028-02-03",
    testDate: "2026-02-09",
    labName: "Ellivion Quality Assurance Lab, Mumbai",
    reportNumber: "QA/2026/0214",
    conclusion: "Batch passes all parameters and is released for distribution.",
    parameters: [
      { parameter: "Tannins content", specification: "≥ 3.0%", result: "3.6%", status: "Pass" },
      { parameter: "Disintegration time", specification: "≤ 30 min", result: "18 min", status: "Pass" },
      { parameter: "Hardness", specification: "4–8 kg/cm²", result: "6.2 kg/cm²", status: "Pass" },
      { parameter: "Heavy metals", specification: "≤ 10 ppm", result: "1.8 ppm", status: "Pass" },
      { parameter: "Microbial load", specification: "≤ 10^5 CFU/g", result: "8.0 × 10^2 CFU/g", status: "Pass" },
    ],
  },
  {
    batchNumber: "ELV-CHY-2026-022",
    productName: "Premium Chyawanprash",
    category: "Immunity",
    manufacturingDate: "2026-03-01",
    expiryDate: "2027-08-31",
    testDate: "2026-03-06",
    labName: "Ellivion Quality Assurance Lab, Mumbai",
    reportNumber: "QA/2026/0322",
    conclusion: "Conforms to all release specifications.",
    parameters: [
      { parameter: "Vitamin C content", specification: "≥ 4 mg/g", result: "5.1 mg/g", status: "Pass" },
      { parameter: "Total sugars", specification: "55–70%", result: "62.4%", status: "Pass" },
      { parameter: "Moisture", specification: "≤ 25%", result: "21.7%", status: "Pass" },
      { parameter: "Heavy metals", specification: "≤ 10 ppm", result: "1.4 ppm", status: "Pass" },
      { parameter: "Yeast & mould", specification: "≤ 100 CFU/g", result: "< 10 CFU/g", status: "Pass" },
    ],
  },
  {
    batchNumber: "ELV-IMM-2026-031",
    productName: "Immunity Booster Syrup",
    category: "Nutraceutical",
    manufacturingDate: "2026-03-20",
    expiryDate: "2027-09-19",
    testDate: "2026-03-25",
    labName: "Ellivion Quality Assurance Lab, Mumbai",
    reportNumber: "QA/2026/0331",
    conclusion: "Batch complies with internal and regulatory specifications.",
    parameters: [
      { parameter: "pH", specification: "4.0 – 5.5", result: "4.6", status: "Pass" },
      { parameter: "Specific gravity", specification: "1.30 – 1.40", result: "1.34", status: "Pass" },
      { parameter: "Assay (Vitamin C)", specification: "≥ 40 mg / 10 ml", result: "46 mg / 10 ml", status: "Pass" },
      { parameter: "Microbial load", specification: "≤ 10^3 CFU/ml", result: "< 10 CFU/ml", status: "Pass" },
      { parameter: "Heavy metals", specification: "≤ 10 ppm", result: "1.0 ppm", status: "Pass" },
    ],
  },
];

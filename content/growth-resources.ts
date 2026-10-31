export type GrowthResource = {
  id: string;
  title: string;
  category: string;
  audience: string[];
  problem: string;
  url: string;
  objectives: string[];
  description: string;
  notes: string;
  attributionSupported: boolean;
  status: "available";
};

// Destinations here come from the current public site route map or the verified
// public destination registry. Only the canonical application accepts attribution.
export const growthResources: GrowthResource[] = [
  { id: "funding-guide", title: "Public funding information", category: "Funding education", audience: ["Business owners", "Referral professionals"], problem: "Understanding general funding paths", url: "https://www.distilledfunding.com/lending", objectives: ["Promote an educational resource", "Acquire business-owner conversations"], description: "Public education about business funding paths.", notes: "Share as general education. Provider availability, eligibility, and terms vary.", attributionSupported: false, status: "available" },
  { id: "partner-education", title: "Partner education", category: "Partner education", audience: ["Prospective agents", "Referral professionals"], problem: "Understanding the partner and agent model", url: "https://www.distilledfunding.com/partners", objectives: ["Recruit prospective funding agents", "Develop professional referral relationships"], description: "Existing public partner education page.", notes: "Use for role and relationship context; do not imply a partnership is already approved.", attributionSupported: false, status: "available" },
  { id: "discovery-workbench", title: "Funding Discovery Workbench", category: "Interactive worksheet", audience: ["Business owners", "Prospective agents"], problem: "Organizing goals, timing, and questions", url: "/toolkit/discovery", objectives: ["Promote an educational resource", "Acquire business-owner conversations", "Re-engage existing contacts"], description: "Browser-local worksheet for organizing an educational funding conversation.", notes: "Does not collect or transmit applicant details.", attributionSupported: false, status: "available" },
  { id: "field-academy", title: "Agent Field Academy", category: "Training", audience: ["Prospective agents", "Referral professionals"], problem: "Practicing permission-based outreach and discovery", url: "/toolkit/academy", objectives: ["Recruit prospective funding agents", "Develop professional referral relationships"], description: "Short lessons and worksheets for public preparation.", notes: "Training is not a certification or program designation.", attributionSupported: false, status: "available" },
  { id: "first-30-days", title: "First 30 days plan", category: "Planning guide", audience: ["Prospective agents"], problem: "Building a practical weekly operating rhythm", url: "/start", objectives: ["Recruit prospective funding agents"], description: "Readiness and first-month preparation guidance.", notes: "A planning aid; participation and current program requirements are handled separately.", attributionSupported: false, status: "available" },
  { id: "public-tools", title: "Public funding tools", category: "Tools", audience: ["Business owners", "Referral professionals"], problem: "Exploring existing funding tools", url: "https://tools.distilledfunding.com", objectives: ["Promote an educational resource", "Acquire business-owner conversations"], description: "Existing public Funding Tools destination.", notes: "Check each tool's own terms and supported tracking before sharing a specific link.", attributionSupported: false, status: "available" },
];

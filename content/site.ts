export const destinations = {
  brokerEducation: {
    current: "https://www.distilledfunding.com/partners",
    future: "https://agency.distilledfunding.com",
  },
  partnerCommand: {
    current: "/system",
    future: "https://app.distilledfunding.com",
    available: false,
  },
  capitalPages: {
    current: null,
    future: "https://capital.distilledfunding.com",
    available: false,
  },
  publicFundingInfo: {
    current: "https://www.distilledfunding.com/lending",
  },
  publicTools: {
    current: "https://tools.distilledfunding.com",
  },
  application: {
    current: "https://tally.so/r/rjM6do",
  },
} as const;

export const site = {
  name: "Moonshine Capital",
  productName: "Funding Agency",
  shortName: "Moonshine Capital",
  tagline: "Build a funding business. The infrastructure is already built.",
  description:
    "Build an independent funding practice with client-facing pages, Partner Command, product pathways, training, and business development infrastructure.",
  url: "https://moonshine-broker.vercel.app",
} as const;

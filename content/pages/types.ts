export type AgencySectionContent = {
  eyebrow?: string;
  title: string;
  body?: string;
  items?: readonly string[];
  callout?: string;
};

export type AgencyPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: readonly AgencySectionContent[];
  nextAction: { label: string; href: string };
};

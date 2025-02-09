export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "Feb. 2025",
    title: "Talk circuit",
    description: "Talking about Building the learning-from-interaction pipeline for LLMs at Together AI, MIT, Harvard, and Brown.",
  },
  {
    date: "Dec. 2024",
    title: "System-2 Generalization at Scale",
    description: "We organized a workshop at NeurIPS 2024 on 'System-2 Generalization at Scale' with talks from Josh Tenenbaum, Melanie Mitchell, and others.",
    link: "https://s2r-at-scale-workshop.github.io"
  },
  {
    date: "Nov. 2024",
    title: "Session on Intelligent Agents",
    description: "Invited to lead a session on 'Intelligent Agents' at Foundation Capital AI Unconference, 2024 in San Francisco",
    link: "https://foundationcapital.com/ai-unconference/"
  },
  // {
  //   date: "March 2024",
  //   title: "Invited Talks",
  //   description: "Talks in NYC (NYU / Columbia / Cornell) on 'Improving the Structure and Interpretation of Language in Modern Sequence Models'",
  // }
];

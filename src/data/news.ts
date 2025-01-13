export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "Dec. 2024",
    title: "System-2 Generalization at Scale",
    description: "We organized a workshop at NeurIPS 2024 on 'System-2 Generalization at Scale' with talks from Josh Tenenbaum, Melanie Mitchell, and others.",
    link: "https://s2r-at-scale-workshop.github.io"
  },
  {
    date: "March 2024",
    title: "Invited Talks",
    description: "Talks in NYC (NYU / Columbia / Cornell) on 'Improving the Structure and Interpretation of Language in Modern Sequence Models'",
  }
];

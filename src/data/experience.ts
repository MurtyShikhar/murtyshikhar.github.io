export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Oct 2024 to Dec 2024",
    title: "Part-time visitor",
    company: "ServiceNow Research",
    description: "Post-training for LLM browser agents",
    advisor: "Alexandre Lacoste, Dzmitry Bahdanau",
    companyUrl: "https://www.servicenow.com/",
  },
  {
    date: "June 2023 to Feb 2024",
    title: "Research Intern",
    company: "DeepMind",
    description: "Unsupervised browser control with LLMs",
    advisor: "Mandar Joshi, Kenton Lee",
    companyUrl: "http://deepmind.google/",
  },
  {
    date: "Summer 2022",
    title: "Research Intern",
    company: "Microsoft Research",
    description:
      "Fixing model bugs with language feedback",
    advisor: "Marco Tulio Ribiero, Scott Lundberg",
    companyUrl: "https://www.microsoft.com/en-us/research/",
  },
];

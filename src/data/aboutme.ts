export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Shikhar J. Murty",
  title: "Ph.D. Candidate",
  institution: "Stanford University",
  // Note that links work in the description
  description:
    "I'm a final-year <a href='https://www.stanford.edu'>PhD candidate</a> working on Deep Learning and NLP. My research focuses on building LLMs that can generalize out-of-distribution, either through structured inductive biases, or by interacting with their environments.\n\nThese days, I'm working on building robust LLM assistants that can translate language commands to actions on digital environments like web browsers.",
  email: "js[lastname]@stanford.edu",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.ca/citations?user=ubAcojQAAAAJ&hl=en",
  githubUsername: "MurtyShikhar",
  twitterUsername: "ShikharMurty",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};

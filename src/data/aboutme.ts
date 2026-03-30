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
  title: "Senior Research Scientist",
  institution: "Google DeepMind",
  // Note that links work in the description
  description:
    "I'm a Senior Research Scientist at <a href='https://deepmind.google/'>Google DeepMind</a> working on <a href='https://deepmind.google/technologies/gemini/'>Gemini</a>. My research focuses on long-horizon RL for multi-step tool use and computer use.<br><br>I completed my CS PhD at <a href='https://www.cs.stanford.edu'>Stanford University</a> in 2025, advised by <a href='https://nlp.stanford.edu/~manning/'>Prof. Chris Manning</a>, where I worked on building LLMs that can generalize out-of-distribution through structured inductive biases and environment interaction.",
  email: "smurty@google.com",
  imageUrl:
    "/images/me.jpg",
  googleScholarUrl: "https://scholar.google.ca/citations?user=ubAcojQAAAAJ&hl=en",
  githubUsername: "MurtyShikhar",
  twitterUsername: "ShikharMurty",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://deepmind.google/",
  // altName: "",
  // secretDescription: "I like dogs.",
};

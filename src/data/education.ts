export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2019—Present",
    institution: "Stanford University",
    degree: "Ph.D. in Computer Science",
    advisor: "Prof. Christopher D. Manning",
  },
  {
    year: "2013—2017",
    institution: "Indian Institute of Technology, New Delhi",
    degree: "B.Tech in Electrical Engineering",
    thesis: "Inference over Knowledge Bases with Deep Learning",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];

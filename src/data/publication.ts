export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  webURL?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "Pre-print",
    title: "NNetNav: Unsupervised Learning of Browser Agents Through Environment Interaction in the Wild",
    authors: "Shikhar Murty, Hao Zhu, Dzmitry Bahdanau, Christopher D. Manning",
    paperUrl: "https://arxiv.org/abs/2410.02907",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "An unsupervised approach for training LLM web-agents, through open-ended exploration of live websites",
    codeUrl: "https://github.com/MurtyShikhar/NNetnav/tree/main",
    webURL: "https://nnetnav.dev/",
    //imageUrl:
    //"https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
  },
  {
    year: "2024",
    conference: "ICML",
    title: "Bootstrapping Agents by Guiding Exploration with Language",
    authors: "Shikhar Murty, Christopher D. Manning, Peter Shaw, Mandar Joshi, Kenton Lee",
    paperUrl: "https://proceedings.mlr.press/v235/murty24a.html",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "A back-translation inspired method to automatically induce synthetic demonstrations for an LLM agent for browser control and multi-step tool use.",
    //imageUrl:
    //"https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "EMNLP",
    title: "Pushdown layers: Encoding Recursive structure in transformer language models",
    authors: "Shikhar Murty, Pratyusha Sharma, Jacob Andreas, Christopher D. Manning",
    paperUrl: "https://aclanthology.org/2023.emnlp-main.195/",
    tldr: "A stack-augmented self-attention layer that can be trained in parallel, that helps transformers generalize better on tasks that require recursive reasoning.",
    codeUrl: "https://github.com/MurtyShikhar/Pushdown-Layers",
    webURL: "https://shikharmurty.com/pushdown"
    //imageUrl:
    //"https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
  {
    year: "2023",
    conference: "ACL",
    title: "Grokking of Hierarchical Structure in Vanilla Transformers",
    authors: "Shikhar Murty, Pratyusha Sharma, Jacob Andreas, Christopher D. Manning",
    paperUrl: "https://aclanthology.org/2023.acl-short.38/",
    tldr: "We discover a new kind of grokking behavior where stanford transformers sometimes learn the underlying hierarchical structure of natural language.",
    codeUrl: "https://github.com/MurtyShikhar/structural-grokking",
    //imageUrl:
    //"https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "2023",
    conference: "ICLR",
    title: "Characterizing Intrinsic Compositionality in Transformers with Tree Projections",
    authors: "Shikhar Murty, Pratyusha Sharma, Jacob Andreas, Christopher D. Manning",
    paperUrl: "https://arxiv.org/abs/2211.01288",
    tldr: "We propose a method to functionally approximate transformers with tree-structures, and find correlation between generalization and emergent tree-structuredness.",
    codeUrl: "https://github.com/MurtyShikhar/TreeProjections",
    //imageUrl:
    //"https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "2022",
    conference: "EMNLP",
    title: "Fixing Model Bugs with Natural Language Patches",
    authors: "Shikhar Murty, Christopher D. Manning, Scott M. Lundberg, and Marco Tulio Ribeiro",
    paperUrl: "https://aclanthology.org/2022.emnlp-main.797",
    codeUrl: "https://github.com/MurtyShikhar/LanguagePatching",
    //imageUrl:
    //"https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

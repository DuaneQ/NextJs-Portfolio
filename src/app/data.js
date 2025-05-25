/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "NextJs-Portfolio",
    description:
      "Next.js Creative Portfolio: Portfolio Website with Next.js, Three.js, and Tailwind CSS 🔥",
    date: "2025-03-1",
    demoLink: "https://duaneq.github.io/NextJs-Portfolio/",
  },
  {
    id: 2,
    name: "Terraform Azure Linux VM Project",
    description:
      "This project provisions a complete Azure environment using Terraform to automate the deployment of a Linux Virtual Machine (VM) with networking, security, and Docker installation. ",
    date: "2025-04-1",
    demoLink: "https://github.com/DuaneQ/TerraformAzureDemo",
  },
  {
    id: 3,
    name: "AI Book Recommender System",
    description:
      "I developed an intelligent book recommendation system that combines emotional analysis and machine learning to understand and categorize books in a unique way. The system analyzes book descriptions to",
    date: "2025-05-1",
    demoLink: "https://github.com/DuaneQ/ai_book_recommender",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/DuaneQ",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/duane-hodges-904a3968/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Duane.Hodges_Resume.pdf",
    icon: "resume",
    newTab: true,
  },
];

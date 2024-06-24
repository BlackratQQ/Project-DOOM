export interface ResponsiveValue {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface ObrazekData {
  src: string;
  speed: ResponsiveValue;
  scale: ResponsiveValue;
  left: ResponsiveValue;
  top: ResponsiveValue;
  index: number;
}

export interface ProjektData {
  id: number;
  projectNumber: number;
  title: string;
  techStack: string;
  whatIsIt: string;
  text: string;
  obrazky: ObrazekData[];
}

export const projektyData: ProjektData[] = [
  {
    id: 0,
    projectNumber: 1,
    title: "Nubis.cz",
    techStack: "HTML | CSS | Node.js | OpenAI API",
    whatIsIt: "Aplikace pro generování SEO Obsahu",
    text: "Informace o Projektu 1...",
    obrazky: [
      {
        src: "/Mocups/Nubis/Nubis-3.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.3 },
        left: { sm: 0, md: 5, lg: 5, xl: 5 },
        top: { sm: 0, md: 20, lg: 25, xl: 0 },
        scale: { sm: 1, md: 1, lg: 1, xl: 0.9 },
        index: 11,
      },
      {
        src: "/Mocups/Nubis/Nubis-2.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1 },
        left: { sm: 0, md: 2.2, lg: 2, xl: 0 },
        top: { sm: 0, md: 15, lg: 20, xl: -20 },
        scale: { sm: 1, md: 0.7, lg: 0.8, xl: 0.7 },
        index: 11,
      },
      {
        src: "/Mocups/Nubis/Nubis-1.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.5 },
        left: { sm: 0, md: 0, lg: 2, xl: 20 },
        top: { sm: 0, md: 0, lg: 0, xl: 0 },
        scale: { sm: 1, md: 0.7, lg: 0.7, xl: 0.9 },
        index: 11,
      },
    ],
  },
  {
    id: 1,
    projectNumber: 2,
    title: "RPGMMA.cz",
    techStack: "React.js | Styled Components",
    whatIsIt: "Třeba domyslet...",
    text: "Informace o Projektu 2...",
    obrazky: [
      {
        src: "/Mocups/RPGMMA/RPGMMA-2.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1 },
        left: { sm: 0, md: 2.2, lg: 0, xl: 2 },
        top: { sm: 0, md: 15, lg: 20, xl: -20 },
        scale: { sm: 1, md: 0.7, lg: 0.8, xl: 0.55 },
        index: 11,
      },
      {
        src: "/Mocups/RPGMMA/RPGMMA-4.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.3 },
        left: { sm: 0, md: 5, lg: 5, xl: 0 },
        top: { sm: 0, md: 20, lg: 25, xl: 0 },
        scale: { sm: 1, md: 1, lg: 1, xl: 0.7 },
        index: 11,
      },
      {
        src: "/Mocups/RPGMMA/RPGMMA-3.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.1 },
        left: { sm: 0, md: 0, lg: 0, xl: 0 },
        top: { sm: 0, md: 0, lg: 0, xl: -10 },
        scale: { sm: 1, md: 1, lg: 1, xl: 0.9 },
        index: 10,
      },
      {
        src: "/Mocups/RPGMMA/RPGMMA-1.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.5 },
        left: { sm: 0, md: 0, lg: 2, xl: 0 },
        top: { sm: 0, md: 0, lg: 0, xl: -10 },
        scale: { sm: 1, md: 0.7, lg: 0.7, xl: 0.9 },
        index: 11,
      },
    ],
  },
  {
    id: 2,
    projectNumber: 3,
    title: "Fenster.cz",
    techStack: "Wordpress, Vanilla CSS",
    whatIsIt: "Třeba domyslet",
    text: "Informace o Projektu 3...",
    obrazky: [
      {
        src: "/Mocups/Fenster/Fenster-2.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.3 },
        left: { sm: 0, md: 5, lg: 5, xl: 5 },
        top: { sm: 0, md: 20, lg: 25, xl: 0 },
        scale: { sm: 1, md: 1, lg: 1, xl: 0.55 },
        index: 11,
      },
      {
        src: "/Mocups/Fenster/Fenster-3.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1 },
        left: { sm: 0, md: 2.2, lg: 2, xl: 0 },
        top: { sm: 0, md: 15, lg: 20, xl: -20 },
        scale: { sm: 1, md: 0.7, lg: 0.8, xl: 1 },
        index: 11,
      },
      {
        src: "/Mocups/Fenster/Fenster-1.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.5 },
        left: { sm: 0, md: 0, lg: 2, xl: 0 },
        top: { sm: 0, md: 0, lg: 0, xl: -10 },
        scale: { sm: 1, md: 0.7, lg: 0.7, xl: 1 },
        index: 11,
      },
      {
        src: "/Mocups/Fenster/Fenster-3.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 0.8 },
        left: { sm: 0, md: 0, lg: 0, xl: 0 },
        top: { sm: 0, md: 0, lg: 0, xl: -10 },
        scale: { sm: 1, md: 1, lg: 1, xl: 1 },
        index: 10,
      },
    ],
  },
  {
    id: 3,
    projectNumber: 4,
    title: "ToraAcademy.cz",
    techStack: "Wordpress, Vanilla CSS",
    whatIsIt: "Třeba domyslet123",
    text: "Informace o Projektu 4...",
    obrazky: [
      {
        src: "/Mocups/Tora Academy/Tora Academy-3.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.3 },
        left: { sm: 0, md: 5, lg: 5, xl: 8 },
        top: { sm: 0, md: 20, lg: 25, xl: 0 },
        scale: { sm: 1, md: 1, lg: 1, xl: 1 },
        index: 10,
      },
      {
        src: "/Mocups/Tora Academy/Tora Academy-2.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1 },
        left: { sm: 0, md: 2.2, lg: 2, xl: 0 },
        top: { sm: 0, md: 15, lg: 20, xl: -20 },
        scale: { sm: 1, md: 0.7, lg: 0.8, xl: 0.75 },
        index: 11,
      },
      {
        src: "/Mocups/Tora Academy/Tora Academy-1.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.5 },
        left: { sm: 0, md: 0, lg: 2, xl: 5 },
        top: { sm: 0, md: 0, lg: 0, xl: -10 },
        scale: { sm: 1, md: 0.7, lg: 0.7, xl: 0.7 },
        index: 11,
      },
      {
        src: "/Mocups/Tora Academy/Tora Academy-3.webp",
        speed: { sm: 1, md: 1, lg: 1, xl: 1.1 },
        left: { sm: 0, md: 0, lg: 0, xl: 0 },
        top: { sm: 0, md: 0, lg: 0, xl: -10 },
        scale: { sm: 1, md: 1, lg: 1, xl: 0.9 },
        index: 10,
      },
    ],
  },
];

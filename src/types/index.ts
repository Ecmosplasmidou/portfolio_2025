export interface Project {
  id: number;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  image: string;
  technologies: string[];
  githubLink?: string;
  websiteLink?: string;
  socialLink?: string;
}

export type Language = 'fr' | 'en';
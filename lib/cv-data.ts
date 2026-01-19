export type Language = "en" | "pl";

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  location: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  year: string;
  institution: string;
  degree: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface CVData {
  name: string;
  title: string;
  contact: ContactInfo;
  about: string;
  sections: {
    about: string;
    experience: string;
    education: string;
    skills: string;
  };
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
}

export const cvData: Record<Language, CVData> = {
  en: {
    name: "Kamil Orlowski",
    title: "Full Stack Developer",
    contact: {
      email: "info.kamilorlowski@icloud.com",
      phone: "+48 515-444-404",
      github: "github.com/orlovvvv",
      location: "Lublin, Poland",
    },
    sections: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
    },
    about:
      "Full Stack Developer with 4+ years of experience building web and mobile applications. I combine startup agility with enterprise-grade IT infrastructure management in healthcare. Specializing in TypeScript and modern JavaScript frameworks.",
    experience: [
      {
        title: "Full Stack Developer",
        company: "Banieczka S.A.",
        period: "2023 — Sep 2025",
        highlights: [
          "Architected and shipped the **'Banieczka'** mobile app from scratch using TypeScript, Capacitor, Ionic, and Angular — from system design to App Store deployment.",
          "Built a scalable **Customer Portal** (Next.js, TypeScript) now serving nearly 3,000 active monthly users.",
          "Developed a comprehensive **Admin Panel** (Angular, TypeScript) — the central tool powering daily business operations.",
        ],
      },
      {
        title: "Senior IT Specialist",
        company: "SPZOZ Hospital, Parczew",
        period: "2020 — Present",
        highlights: [
          "Ensure high availability of mission-critical hospital systems supporting **500+ medical and administrative staff**.",
          "Administer and optimize **Oracle** databases, safeguarding HR, payroll, and financial data integrity.",
          "Engineer custom tools for medical service validation and national health insurance (NFZ) reporting.",
        ],
      },
    ],
    education: [
      {
        year: "2025",
        institution: "WSEI Academy",
        degree: "M.Sc. Computer Science",
      },
      {
        year: "2023",
        institution: "WSEI Academy",
        degree: "B.Eng. Computer Science",
      },
    ],
    skills: [
      {
        category: "Languages",
        skills: [
          { name: "TypeScript", icon: "typescript.png" },
          { name: "JavaScript", icon: "javascript.png" },
          { name: "SQL", icon: "sql.png" },
        ],
      },
      {
        category: "Frontend",
        skills: [
          { name: "Angular", icon: "angular.png" },
          { name: "Angular Material", icon: "angular-material.png" },
          { name: "React", icon: "react.png" },
          { name: "Next.js", icon: "nextjs.png" },
          { name: "Ionic", icon: "ionic.png" },
          { name: "Tailwind", icon: "tailwind.png" },
        ],
      },
      {
        category: "Backend",
        skills: [
          { name: "NestJS", icon: "nestjs.png" },
          { name: "ElysiaJS", icon: "elysia.png" },
          { name: "Convex", icon: "convex.png" },
          { name: "Appwrite", icon: "appwrite.png" },
        ],
      },
      {
        category: "DevOps",
        skills: [
          { name: "Docker", icon: "docker.png" },
          { name: "Git", icon: "git.png" },
          { name: "Azure DevOps", icon: "azure.png" },
          { name: "PostgreSQL", icon: "postgresql.png" },
        ],
      },
    ],
  },
  pl: {
    name: "Kamil Orłowski",
    title: "Full Stack Developer",
    contact: {
      email: "info.kamilorlowski@icloud.com",
      phone: "+48 515-444-404",
      github: "github.com/orlovvvv",
      location: "Lublin, Polska",
    },
    sections: {
      about: "O mnie",
      experience: "Doświadczenie zawodowe",
      education: "Edukacja",
      skills: "Umiejętności",
    },
    about:
      "Programista z ponad 4-letnim doświadczeniem w tworzeniu aplikacji webowych i mobilnych. Łączę pracę w dynamicznym startupie z zarządzaniem infrastrukturą IT w sektorze medycznym. Specjalizuję się w TypeScript i nowoczesnych frameworkach JavaScript.",
    experience: [
      {
        title: "Programista Full Stack",
        company: "Banieczka S.A.",
        period: "2023 — 09.2025",
        highlights: [
          "Zaprojektowałem i zbudowałem od podstaw aplikację mobilną **'Banieczka'** w TypeScript, Capacitor, Ionic i Angular — od architektury po wdrożenie w sklepach.",
          "Stworzyłem skalowalny **Panel Klienta** (Next.js, TypeScript), który obsługuje blisko 3000 aktywnych użytkowników miesięcznie.",
          "Opracowałem **Panel Administratora** (Angular, TypeScript) — kluczowe narzędzie do zarządzania operacjami firmy.",
        ],
      },
      {
        title: "Starszy Informatyk",
        company: "SPZOZ w Parczewie",
        period: "2020 — obecnie",
        highlights: [
          "Zapewniam ciągłość działania systemów szpitalnych dla ponad **500 pracowników** medycznych i administracyjnych.",
          "Administruję i optymalizuję bazy danych **Oracle**, dbając o integralność danych kadrowo-płacowych i finansowych.",
          "Tworzę autorskie narzędzia informatyczne wspierające walidację i rozliczanie usług medycznych z NFZ.",
        ],
      },
    ],
    education: [
      {
        year: "2025",
        institution: "Akademia WSEI",
        degree: "Informatyka — magister",
      },
      {
        year: "2023",
        institution: "Akademia WSEI",
        degree: "Informatyka — inżynier",
      },
    ],
    skills: [
      {
        category: "Języki",
        skills: [
          { name: "TypeScript", icon: "typescript.png" },
          { name: "JavaScript", icon: "javascript.png" },
          { name: "SQL", icon: "sql.png" },
        ],
      },
      {
        category: "Frontend",
        skills: [
          { name: "Angular", icon: "angular.png" },
          { name: "Angular Material", icon: "angular-material.png" },
          { name: "React", icon: "react.png" },
          { name: "Next.js", icon: "nextjs.png" },
          { name: "Ionic", icon: "ionic.png" },
          { name: "Tailwind", icon: "tailwind.png" },
        ],
      },
      {
        category: "Backend",
        skills: [
          { name: "NestJS", icon: "nestjs.png" },
          { name: "ElysiaJS", icon: "elysia.png" },
          { name: "Convex", icon: "convex.png" },
          { name: "Appwrite", icon: "appwrite.png" },
        ],
      },
      {
        category: "DevOps",
        skills: [
          { name: "Docker", icon: "docker.png" },
          { name: "Git", icon: "git.png" },
          { name: "Azure DevOps", icon: "azure.png" },
          { name: "PostgreSQL", icon: "postgresql.png" },
        ],
      },
    ],
  },
};

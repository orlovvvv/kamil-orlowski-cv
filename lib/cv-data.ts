export type Language = "en" | "pl";

export type CVVariant = "programming" | "admin";

export interface ContactInfo {
  email: string;
  phone: string;
  website: string;
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

// Variant labels for the select dropdown
export const variantLabels: Record<Language, Record<CVVariant, string>> = {
  en: {
    programming: "Programming",
    admin: "Administrator",
  },
  pl: {
    programming: "Programowanie",
    admin: "Administrator",
  },
};

export const cvData: Record<Language, Record<CVVariant, CVData>> = {
  en: {
    programming: {
      name: "Kamil Orlowski",
      title: "Full Stack Developer",
      contact: {
        email: "info.kamilorlowski@icloud.com",
        phone: "+48 515-444-404",
        website: "ork.systems",
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
          degree: "M.Sc. Computer Science, Cybersecurity",
        },
        {
          year: "2023",
          institution: "WSEI Academy",
          degree: "B.Eng. Computer Science, Networks & Information Security",
        },
      ],
      skills: [
        {
          category: "Languages",
          skills: [
            { name: "TypeScript", icon: "typescript.png" },
            { name: "JavaScript", icon: "javascript.svg" },
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
            { name: "Azure DevOps", icon: "azuredevops.png" },
            { name: "PostgreSQL", icon: "postgresql.png" },
          ],
        },
        {
          category: "Tools",
          skills: [
            { name: "Git", icon: "git.png" },
            { name: "Jira", icon: "jira.svg" },
          ],
        },
      ],
    },
    admin: {
      name: "Kamil Orlowski",
      title: "Network and System Administrator",
      contact: {
        email: "info.kamilorlowski@icloud.com",
        phone: "+48 515-444-404",
        website: "ork.systems",
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
        "I've spent the last 5 years managing IT infrastructure in a hospital environment, where system reliability directly impacts patient care. My role covers everything from Windows Server and Active Directory to database administration and network security. I also bring a software development background, which allows me to build custom tools and automate processes when standard solutions don't meet our needs.",
      experience: [
        {
          title: "Senior IT Specialist",
          company: "SPZOZ Hospital, Parczew",
          period: "2020 — Present",
          highlights: [
            "Ensure high availability of mission-critical hospital systems supporting **500+ medical and administrative staff** across multiple departments.",
            "Administer and optimize **Oracle** databases, safeguarding HR, payroll, and financial data integrity with regular backups and performance tuning.",
            "Manage **Windows Server** infrastructure including **Active Directory**, Group Policy, DNS/DHCP services, and file server operations.",
            "Implement and maintain **backup systems** (Xopero) ensuring business continuity and disaster recovery compliance.",
            "Configure and maintain network infrastructure, VPNs, and firewall policies ensuring secure connectivity between departments and external systems.",
          ],
        },
        {
          title: "Full Stack Developer & DevOps Engineer",
          company: "Banieczka S.A.",
          period: "2023 — Sep 2025",
          highlights: [
            "Designed and deployed **Azure cloud infrastructure** for production workloads, including virtual machines, networking, and monitoring solutions.",
            "Implemented CI/CD pipelines using **Azure DevOps** for automated testing and deployment of containerized applications.",
            "Built and maintained internal tools and admin panels that serve as the backbone for daily business operations.",
          ],
        },
      ],
      education: [
        {
          year: "2025",
          institution: "WSEI Academy",
          degree: "M.Sc. Computer Science, Cybersecurity",
        },
        {
          year: "2023",
          institution: "WSEI Academy",
          degree: "B.Eng. Computer Science, Networks & Information Security",
        },
      ],
      skills: [
        {
          category: "Infrastructure & Networking",
          skills: [
            { name: "Windows Server", icon: "windows.png" },
            { name: "Linux Server", icon: "linux.png" },
            { name: "Active Directory", icon: "active-directory.png" },
            { name: "Networking", icon: "networking.png" },
            { name: "VPN & Firewalls", icon: "firewall.png" },
          ],
        },
        {
          category: "Cloud & DevOps",
          skills: [
            { name: "Azure", icon: "azure.png" },
            { name: "Docker", icon: "docker.png" },
            { name: "CI/CD", icon: "cicd.png" },
          ],
        },
        {
          category: "Databases",
          skills: [
            { name: "Oracle", icon: "oracle.png" },
            { name: "PostgreSQL", icon: "postgresql.png" },
            { name: "SQL Server", icon: "sql-server.png" },
          ],
        },
        {
          category: "Backup & Monitoring",
          skills: [
            { name: "Xopero", icon: "xopero.png" },
            { name: "Zabbix", icon: "zabbix.png" },
          ],
        },
        {
          category: "Programming & Scripting",
          skills: [
            { name: "TypeScript", icon: "typescript.png" },
            { name: "SQL", icon: "sql.png" },
            { name: "PowerShell", icon: "powershell.png" },
          ],
        },
        {
          category: "Tools",
          skills: [
            { name: "Git", icon: "git.png" },
            { name: "Jira", icon: "jira.svg" },
          ],
        },
      ],
    },
  },
  pl: {
    programming: {
      name: "Kamil Orłowski",
      title: "Full Stack Developer",
      contact: {
        email: "info.kamilorlowski@icloud.com",
        phone: "+48 515-444-404",
        website: "ork.systems",
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
          degree: "Informatyka — magister, Specjalizacja Cyberbezpieczeństwo",
        },
        {
          year: "2023",
          institution: "Akademia WSEI",
          degree: "Informatyka — inżynier, Sieci i Bezpieczeństwo Informacji",
        },
      ],
      skills: [
        {
          category: "Języki",
          skills: [
            { name: "TypeScript", icon: "typescript.png" },
            { name: "JavaScript", icon: "javascript.svg" },
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
            { name: "Azure DevOps", icon: "azuredevops.png" },
            { name: "PostgreSQL", icon: "postgresql.png" },
          ],
        },
        {
          category: "Narzędzia",
          skills: [
            { name: "Git", icon: "git.png" },
            { name: "Jira", icon: "jira.svg" },
          ],
        },
      ],
    },
    admin: {
      name: "Kamil Orłowski",
      title: "Network and System Administrator",
      contact: {
        email: "info.kamilorlowski@icloud.com",
        phone: "+48 515-444-404",
        website: "ork.systems",
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
        "Od ponad 5 lat zarządzam infrastrukturą IT w środowisku szpitalnym, gdzie niezawodność systemów ma bezpośredni wpływ na opiekę nad pacjentami. Moja rola obejmuje wszystko — od Windows Server i Active Directory po administrowanie bazami danych i bezpieczeństwo sieci. Posiadam również doświadczenie w programowaniu, co pozwala mi tworzyć autorskie narzędzia i automatyzować procesy, gdy gotowe rozwiązania nie spełniają naszych potrzeb.",
      experience: [
        {
          title: "Starszy Informatyk",
          company: "SPZOZ w Parczewie",
          period: "2020 — obecnie",
          highlights: [
            "Zapewniam ciągłość działania systemów szpitalnych dla ponad **500 pracowników** medycznych i administracyjnych w wielu oddziałach.",
            "Administruję i optymalizuję bazy danych **Oracle**, dbając o integralność danych kadrowo-płacowych i finansowych wraz z regularnym backupem i optymalizacją wydajności.",
            "Zarządzam infrastrukturą **Windows Server** obejmującą **Active Directory**, Group Policy, usługi DNS/DHCP oraz serwery plików.",
            "Wdrażam i utrzymuję **systemy kopii zapasowych** (Xopero), zapewniając zgodność z wymogami ciągłości działania i odzyskiwania po awarii.",
            "Konfiguruję i utrzymuję infrastrukturę sieciową, połączenia VPN oraz polityki firewalli, zapewniając bezpieczną łączność między oddziałami i systemami zewnętrznymi.",
          ],
        },
        {
          title: "Programista Full Stack & Inżynier DevOps",
          company: "Banieczka S.A.",
          period: "2023 — 09.2025",
          highlights: [
            "Zaprojektowałem i wdrożyłem **infrastrukturę chmurową Azure** dla środowisk produkcyjnych, obejmującą maszyny wirtualne, sieć i rozwiązania monitorujące.",
            "Wdrożyłem potoki CI/CD w **Azure DevOps** do automatycznego testowania i wdrażania aplikacji kontenerowych.",
            "Zbudowałem i utrzymuję wewnętrzne narzędzia i panele administracyjne stanowiące podstawę codziennych operacji biznesowych.",
          ],
        },
      ],
      education: [
        {
          year: "2025",
          institution: "Akademia WSEI",
          degree: "Informatyka — magister, Specjalizacja Cyberbezpieczeństwo",
        },
        {
          year: "2023",
          institution: "Akademia WSEI",
          degree: "Informatyka — inżynier, Sieci i Bezpieczeństwo Informacji",
        },
      ],
      skills: [
        {
          category: "Infrastruktura i Sieci",
          skills: [
            { name: "Windows Server", icon: "windows.png" },
            { name: "Linux Server", icon: "linux.png" },
            { name: "Active Directory", icon: "active-directory.png" },
            { name: "Sieci komputerowe", icon: "networking.png" },
            { name: "VPN i Firewalle", icon: "firewall.png" },
          ],
        },
        {
          category: "Chmura i DevOps",
          skills: [
            { name: "Azure", icon: "azure.png" },
            { name: "Docker", icon: "docker.png" },
            { name: "CI/CD", icon: "cicd.png" },
          ],
        },
        {
          category: "Bazy Danych",
          skills: [
            { name: "Oracle", icon: "oracle.png" },
            { name: "PostgreSQL", icon: "postgresql.png" },
            { name: "SQL Server", icon: "sql-server.png" },
          ],
        },
        {
          category: "Backup i Monitoring",
          skills: [
            { name: "Xopero", icon: "xopero.png" },
            { name: "Zabbix", icon: "zabbix.png" },
          ],
        },
        {
          category: "Programowanie i Skrypty",
          skills: [
            { name: "TypeScript", icon: "typescript.png" },
            { name: "SQL", icon: "sql.png" },
            { name: "PowerShell", icon: "powershell.png" },
          ],
        },
        {
          category: "Narzędzia",
          skills: [
            { name: "Git", icon: "git.png" },
            { name: "Jira", icon: "jira.svg" },
          ],
        },
      ],
    },
  },
};

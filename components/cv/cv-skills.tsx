import Image from "next/image";
import { type SkillCategory } from "@/lib/cv-data";

interface CVSkillsProps {
  skills: SkillCategory[];
}

export function CVSkills({ skills }: CVSkillsProps) {
  return (
    <div className="space-y-3 text-sm">
      {skills.map((category) => (
        <div key={category.category}>
          <span className="font-semibold text-foreground">
            {category.category}
          </span>
          <div className="flex flex-wrap gap-3 mt-1.5">
            {category.skills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-1.5 text-muted-foreground"
              >
                <Image
                  src={`/assets/icons/${skill.icon}`}
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

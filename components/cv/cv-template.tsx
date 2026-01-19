import { type CVData } from "@/lib/cv-data";
import { CVHeader } from "@/components/cv/cv-header";
import { CVSection } from "@/components/cv/cv-section";
import { CVSkills } from "@/components/cv/cv-skills";

interface CVTemplateProps {
  data: CVData;
}

function parseHighlight(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export function CVTemplate({ data }: CVTemplateProps) {
  return (
    <div className="py-8 px-4 md:px-8">
      {/* A4 Paper Container - 210mm x 297mm aspect ratio */}
      <div
        className="mx-auto bg-card shadow-xl border border-border"
        style={{
          width: "100%",
          maxWidth: "210mm",
          minHeight: "297mm",
        }}
      >
        <main className="px-10 py-8">
          <CVHeader data={data} />

          {/* About */}
          <CVSection title={data.sections.about}>
            <p className="text-sm leading-6 text-muted-foreground">
              {data.about}
            </p>
          </CVSection>

          {/* Experience */}
          <CVSection title={data.sections.experience} className="mb-6">
            <div className="space-y-5">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-base font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {exp.company}
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <span className="mr-2 text-muted-foreground">—</span>
                        <span>{parseHighlight(highlight)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CVSection>

          {/* Education */}
          <CVSection title={data.sections.education} className="mb-6">
            <div className="space-y-1.5 text-sm">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <span className="font-bold text-foreground">{edu.year}</span>
                  <span className="mx-2 text-muted-foreground">—</span>
                  <span className="text-muted-foreground">
                    {edu.institution}, {edu.degree}
                  </span>
                </div>
              ))}
            </div>
          </CVSection>

          {/* Skills */}
          <CVSection title={data.sections.skills} className="mb-0">
            <CVSkills skills={data.skills} />
          </CVSection>
        </main>
      </div>
    </div>
  );
}

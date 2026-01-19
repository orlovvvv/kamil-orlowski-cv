import { cvData, type Language } from "@/lib/cv-data";

interface CVPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function CVPage({ searchParams }: CVPageProps) {
  const params = await searchParams;
  const lang = (params.lang === "pl" ? "pl" : "en") as Language;
  const data = cvData[lang];

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{data.name} - CV</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              @page {
                size: A4;
                margin: 0;
              }
              html, body {
                width: 210mm;
                height: 297mm;
                margin: 0;
                padding: 0;
                background: white;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              body {
                font-family: 'Nunito Sans', sans-serif;
                color: #171717;
                font-size: 13px;
                line-height: 1.4;
              }
              main {
                width: 210mm;
                height: 297mm;
                padding: 12mm 14mm;
                overflow: hidden;
              }
              header { margin-bottom: 6mm; }
              .header-row { display: flex; align-items: center; gap: 4mm; margin-bottom: 3mm; }
              .avatar { width: 14mm; height: 14mm; border-radius: 50%; object-fit: cover; }
              h1 { font-size: 28px; font-weight: 400; letter-spacing: -0.025em; color: #171717; }
              .title { font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #737373; margin-top: 1mm; }
              .contact { font-size: 10px; color: #737373; }
              .contact a { color: #737373; text-decoration: none; }
              .contact span { margin: 0 2mm; }
              section { margin-bottom: 5mm; }
              h2 { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: #171717; margin-bottom: 2.5mm; }
              p.about { font-size: 12px; line-height: 1.5; color: #737373; }
              .exp-item { margin-bottom: 4mm; }
              .exp-item:last-child { margin-bottom: 0; }
              .exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5mm; }
              h3 { font-size: 13px; font-weight: 700; color: #171717; }
              .period { font-size: 10px; color: #737373; }
              .company { font-size: 10px; color: #737373; margin-bottom: 1.5mm; }
              ul { list-style: none; }
              li { display: flex; align-items: flex-start; font-size: 12px; color: #737373; margin-bottom: 1mm; line-height: 1.4; }
              li:last-child { margin-bottom: 0; }
              .dash { margin-right: 2mm; color: #737373; flex-shrink: 0; }
              strong { font-weight: 600; color: #171717; }
              .edu-item { margin-bottom: 1.5mm; font-size: 12px; }
              .edu-item:last-child { margin-bottom: 0; }
              .edu-year { font-weight: 700; color: #171717; }
              .edu-sep { margin: 0 2mm; color: #737373; }
              .edu-text { color: #737373; }
              .skills-section { margin-bottom: 0; }
              .skills-cat { margin-bottom: 2.5mm; }
              .skills-cat:last-child { margin-bottom: 0; }
              .skills-label { font-weight: 600; color: #171717; font-size: 12px; }
              .skills-list { display: flex; flex-wrap: wrap; gap: 3mm; margin-top: 1.5mm; }
              .skill { display: flex; align-items: center; gap: 1.5mm; font-size: 12px; color: #737373; }
              .skill img { width: 4mm; height: 4mm; }
            `,
          }}
        />
      </head>
      <body>
        <main>
          {/* Header */}
          <header>
            <div className="header-row">
              <img
                alt={data.name}
                className="avatar"
                src="/assets/image.png"
              />
              <div>
                <h1>{data.name}</h1>
                <p className="title">{data.title}</p>
              </div>
            </div>
            <div className="contact">
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
              <span>|</span>
              <a href={`tel:${data.contact.phone.replace(/\s/g, "")}`}>
                {data.contact.phone}
              </a>
              <span>|</span>
              <a
                href={`https://${data.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact.github}
              </a>
              <span>|</span>
              <span>{data.contact.location}</span>
            </div>
          </header>

          {/* About */}
          <section>
            <h2>{data.sections.about}</h2>
            <p className="about">{data.about}</p>
          </section>

          {/* Experience */}
          <section>
            <h2>{data.sections.experience}</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="exp-item">
                <div className="exp-header">
                  <h3>{exp.title}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="company">{exp.company}</p>
                <ul>
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>
                      <span className="dash">—</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlight.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section>
            <h2>{data.sections.education}</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="edu-item">
                <span className="edu-year">{edu.year}</span>
                <span className="edu-sep">—</span>
                <span className="edu-text">
                  {edu.institution}, {edu.degree}
                </span>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="skills-section">
            <h2>{data.sections.skills}</h2>
            {data.skills.map((category) => (
              <div key={category.category} className="skills-cat">
                <span className="skills-label">{category.category}</span>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="skill">
                      <img src={`/assets/icons/${skill.icon}`} alt="" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </main>
      </body>
    </html>
  );
}

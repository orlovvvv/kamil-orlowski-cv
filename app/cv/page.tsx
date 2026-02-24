import { cvData, type Language, type CVVariant } from "@/lib/cv-data";

interface CVPageProps {
  searchParams: Promise<{ lang?: string; variant?: string }>;
}

export default async function CVPage({ searchParams }: CVPageProps) {
  const params = await searchParams;
  const lang = (params.lang === "pl" ? "pl" : "en") as Language;
  const variant = (params.variant === "admin" ? "admin" : "programming") as CVVariant;
  const data = cvData[lang][variant];

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
              .contact { font-size: 10px; display: flex; flex-wrap: wrap; align-items: center; gap: 3mm 4mm; }
              .contact-item { display: inline-flex; align-items: center; gap: 1.5mm; color: #737373; text-decoration: none; }
              .contact-item.highlight { color: #171717; }
              .contact-item svg { width: 3.5mm; height: 3.5mm; flex-shrink: 0; }
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
              <a href={`mailto:${data.contact.email}`} className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
                {data.contact.email}
              </a>
              <a href={`tel:${data.contact.phone.replace(/\s/g, "")}`} className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                {data.contact.phone}
              </a>
              <a
                href={`https://${data.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item highlight"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
                {data.contact.website}
              </a>
              <a
                href={`https://${data.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item highlight"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                {data.contact.github}
              </a>
              <span className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
                </svg>
                {data.contact.location}
              </span>
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

import Image from "next/image";
import { type CVData } from "@/lib/cv-data";

interface CVHeaderProps {
  data: CVData;
}

export function CVHeader({ data }: CVHeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-5 mb-4">
        <Image
          alt={data.name}
          className="rounded-full object-cover"
          src="/assets/image.png"
          width={56}
          height={56}
        />
        <div>
          <h1 className="font-sans text-4xl font-normal tracking-tight text-foreground">
            {data.name}
          </h1>
          <p className="text-base uppercase tracking-[0.15em] text-muted-foreground mt-1">
            {data.title}
          </p>
        </div>
      </div>
      <div className="text-xs text-muted-foreground">
        <a
          href={`mailto:${data.contact.email}`}
          className="hover:text-primary transition-colors"
        >
          {data.contact.email}
        </a>
        <span className="mx-2">|</span>
        <a
          href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
          className="hover:text-primary transition-colors"
        >
          {data.contact.phone}
        </a>
        <span className="mx-2">|</span>
        <a
          href={`https://${data.contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          {data.contact.github}
        </a>
        <span className="mx-2">|</span>
        <span>{data.contact.location}</span>
      </div>
    </header>
  );
}

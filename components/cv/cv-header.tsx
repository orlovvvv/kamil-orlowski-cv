import Image from "next/image";
import {
  IconMail,
  IconPhone,
  IconWorld,
  IconBrandGithub,
  IconMapPin,
} from "@tabler/icons-react";
import { type CVData } from "@/lib/cv-data";

interface CVHeaderProps {
  data: CVData;
}

function ContactItem({
  href,
  icon: Icon,
  children,
  highlight,
  external,
}: {
  href?: string;
  icon: typeof IconMail;
  children: React.ReactNode;
  highlight?: boolean;
  external?: boolean;
}) {
  const baseStyles = "inline-flex items-center gap-1.5 transition-colors";
  const colorStyles = highlight
    ? "text-foreground hover:text-foreground/70"
    : "text-muted-foreground hover:text-foreground";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${colorStyles}`}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <Icon size={14} strokeWidth={1.5} />
        {children}
      </a>
    );
  }

  return (
    <span className={`${baseStyles} text-muted-foreground`}>
      <Icon size={14} strokeWidth={1.5} />
      {children}
    </span>
  );
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
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
        <ContactItem href={`mailto:${data.contact.email}`} icon={IconMail}>
          {data.contact.email}
        </ContactItem>
        <ContactItem
          href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
          icon={IconPhone}
        >
          {data.contact.phone}
        </ContactItem>
        <ContactItem
          href={`https://${data.contact.website}`}
          icon={IconWorld}
          highlight
          external
        >
          {data.contact.website}
        </ContactItem>
        <ContactItem
          href={`https://${data.contact.github}`}
          icon={IconBrandGithub}
          highlight
          external
        >
          {data.contact.github}
        </ContactItem>
        <ContactItem icon={IconMapPin}>{data.contact.location}</ContactItem>
      </div>
    </header>
  );
}

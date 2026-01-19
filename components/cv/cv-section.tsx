import { cn } from "@/lib/utils";

interface CVSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function CVSection({ title, children, className }: CVSectionProps) {
  return (
    <section className={cn("mb-8", className)}>
      <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

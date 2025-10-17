import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string; // Optional for additional custom classes
  id?: string; // Optional for custom styling via ID
}

export function ContentSection({ children, className, id }: ContentSectionProps) {
  return (
    <div className={cn("centered-content", className)} id={id}>
      <div className="responsive-flex">
        {children}
      </div>
    </div>
  );
}
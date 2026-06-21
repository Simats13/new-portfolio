import React from "react";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<Props> = ({ eyebrow, title, subtitle }) => (
  <div className="reveal mb-12">
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-ink" />
      <span className="eyebrow">{eyebrow}</span>
    </div>
    <h2 className="heading mt-3">{title}</h2>
    {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
  </div>
);

export default SectionHeading;

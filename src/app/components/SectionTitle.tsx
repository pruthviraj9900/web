import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  centered = false
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}
    >
      {subtitle && (
        <p className="text-sm font-medium text-primary mb-2">{subtitle}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}

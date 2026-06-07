import { ReactNode } from "react";
import { motion } from "motion/react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  variant?: "default" | "centered" | "gradient";
  backgroundImage?: string; // Added optional prop to pass custom images dynamically
}

export default function Hero({
  title,
  subtitle,
  description,
  children,
  variant = "default",
  backgroundImage = "/hero-bg.jpg" // Default fallback image from your public folder
}: HeroProps) {
  const isGradient = variant === "gradient";
  const isCentered = variant === "centered";

  return (
    <section 
      className={`relative py-20 md:py-32 overflow-hidden ${
        isGradient && !backgroundImage ? "bg-gradient-to-br from-primary/5 via-background to-accent/10" : "bg-zinc-950"
      }`}
    >
      {/* Background Image Layer */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-70" 
          />
          {/* Dark Overlay Layer to make text stand out beautifully */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-0 pointer-events-none" />
        </>
      )}

      {/* Content Container - Fixed with z-10 so it sits on top of the image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={isCentered ? "text-center max-w-4xl mx-auto" : "max-w-4xl"}
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-sm font-medium mb-4 ${backgroundImage ? "text-primary-foreground/90" : "text-primary"}`}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${backgroundImage ? "text-white" : ""}`}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-lg md:text-xl mb-8 ${backgroundImage ? "text-slate-300" : "text-muted-foreground"}`}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
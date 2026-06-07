import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { CheckCircle2, Building2, Factory, ShoppingCart, TrendingUp, Users, Briefcase } from "lucide-react";
import { motion } from "motion/react";

export default function CustomSoftware() {
  const benefits = [
    "Tailored to your exact business processes",
    "Eliminates manual work and reduces errors",
    "Integrates seamlessly with existing systems",
    "Scales as your business grows",
    "Competitive advantage through unique features",
    "Full ownership and control of your software",
    "Ongoing support and updates",
    "Training and documentation included"
  ];

  const industries = [
    {
      icon: Building2,
      name: "Professional Services",
      description: "Project management, time tracking, client portals"
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Production planning, inventory control, quality assurance"
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-commerce",
      description: "Order management, inventory sync, customer analytics"
    },
    {
      icon: TrendingUp,
      name: "Finance",
      description: "Financial reporting, compliance tracking, audit trails"
    },
    {
      icon: Users,
      name: "Healthcare",
      description: "Patient management, scheduling, HIPAA-compliant systems"
    },
    {
      icon: Briefcase,
      name: "Real Estate",
      description: "Property management, CRM, document management"
    }
  ];

  const examples = [
    {
      title: "Inventory Management System",
      description: "Track stock levels across multiple warehouses, automate reordering, and integrate with suppliers.",
      timeline: "8-12 weeks",
      features: ["Real-time stock tracking", "Automated alerts", "Supplier integration", "Multi-location support"]
    },
    {
      title: "Custom CRM",
      description: "Manage customer relationships with workflows tailored to your sales process.",
      timeline: "6-10 weeks",
      features: ["Lead tracking", "Email automation", "Custom pipelines", "Reporting dashboards"]
    },
    {
      title: "Employee Portal",
      description: "Internal platform for time tracking, leave requests, document sharing, and announcements.",
      timeline: "4-8 weeks",
      features: ["Time tracking", "Leave management", "Document library", "Team directory"]
    },
    {
      title: "Booking & Scheduling System",
      description: "Customer-facing booking system with calendar management and automated confirmations.",
      timeline: "6-10 weeks",
      features: ["Online booking", "Calendar sync", "Email notifications", "Payment integration"]
    }
  ];

  return (
    <div>
      <Hero
        subtitle="Custom Software Development"
        title="Software Built Around Your Business"
        description="Off-the-shelf solutions force you to adapt to them. Custom software adapts to you. We build applications that fit your unique processes, workflows, and requirements."
      >
        <Link to="/contact">
          <Button size="lg">Discuss Your Project</Button>
        </Link>
      </Hero>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Benefits"
            title="Why Custom Software?"
            description="Generic software can only take you so far. Here's why custom development makes sense."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Industries"
            title="Who We Serve"
            description="We've built custom solutions across multiple industries"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <industry.icon className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>{industry.name}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Examples"
            title="What We Build"
            description="Common custom software solutions we develop for clients"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{example.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{example.timeline}</span>
                    </div>
                    <CardDescription>{example.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {example.features.map((feature) => (
                        <li key={feature} className="text-sm flex items-start">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Unique Business Challenge?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We love solving complex problems. Tell us what you're trying to achieve, and we'll design a solution that works.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

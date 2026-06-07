import { Link } from "react-router";
import { Button } from "../components/ui/button";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Code2,
  Globe,
  Database,
  Smartphone,
  Cloud,
  Zap,
  CheckCircle2,
  ArrowRight,
  Users,
  Award,
  TrendingUp
} from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored solutions for your unique business needs",
      features: [
        "CRM & ERP Systems",
        "Business Automation",
        "Internal Tools",
        "API Integrations"
      ],
      href: "/custom-software"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that convert",
      features: [
        "Business Websites",
        "E-commerce Platforms",
        "Landing Pages",
        "Progressive Web Apps"
      ],
      href: "/web-development"
    },
    {
      icon: Database,
      title: "SaaS Development",
      description: "Scalable cloud-based applications",
      features: [
        "Multi-tenant Architecture",
        "Subscription Management",
        "Analytics Dashboards",
        "Third-party Integrations"
      ],
      href: "/services"
    },
    {
      icon: Smartphone,
      title: "Dashboard Development",
      description: "Data visualization and business intelligence",
      features: [
        "Real-time Analytics",
        "Custom Reports",
        "KPI Tracking",
        "Interactive Charts"
      ],
      href: "/services"
    },
    {
      icon: Cloud,
      title: "Hosting Services",
      description: "Reliable hosting with ongoing support",
      features: [
        "Shared Hosting",
        "Domain Setup",
        "SSL Configuration",
        "24/7 Monitoring"
      ],
      href: "/hosting"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications",
      features: [
        "Code Optimization",
        "Database Tuning",
        "CDN Integration",
        "Caching Strategies"
      ],
      href: "/services"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your business needs and goals" },
    { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
    { step: "03", title: "Development", description: "Building your solution with best practices" },
    { step: "04", title: "Launch & Support", description: "Deployment and ongoing maintenance" }
  ];

  const testimonials = [
    {
      name: "Ajit Patil",
      role: "Co-Founder",
      company: "Mahankali Abhyasika K-Mahankal",
      content: "The LiBy (Library Software) is Worth it at provided price! DevBro is Awesome For Low Price Softwares.",
      rating: 4
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "GrowthLabs",
      content: "Working with DevBros was a game-changer. They delivered a scalable SaaS platform that exceeded our expectations, on time and within budget.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "SmartLogistics",
      content: "The custom dashboard they built gives us real-time visibility into our operations. It's intuitive, fast, and has significantly improved our decision-making.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Award, value: "100+", label: "Projects Completed" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
    { icon: Zap, value: "5+", label: "Years Experience" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        subtitle="Custom Software & Web Development"
        title="Build Software That Grows With Your Business"
        description="We create custom solutions tailored to your needs. No templates, no shortcuts — just professional, scalable applications built by a dedicated team of experts."
        variant="gradient"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Our Work
            </Button>
          </Link>
        </div>
      </Hero>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What We Do"
            title="Comprehensive Development Services"
            description="From custom software to hosting, we handle every aspect of your digital presence"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Why DevBros"
            title="Why Choose Us"
            description="We're not just developers — we're your long-term technology partners"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Custom Solutions",
                description: "No templates or one-size-fits-all approaches. Every solution is built specifically for your needs."
              },
              {
                title: "Expert Team",
                description: "Founded by two brothers with a skilled development team. Years of experience across multiple industries."
              },
              {
                title: "Long-term Partnership",
                description: "We build relationships, not just projects. Ongoing support and maintenance included."
              },
              {
                title: "Transparent Process",
                description: "Clear communication at every step. You'll always know what we're working on and why."
              },
              {
                title: "Scalable Architecture",
                description: "Solutions built to grow with your business. No need to rebuild as you expand."
              },
              {
                title: "Competitive Pricing",
                description: "Fair, transparent and low pricing with no hidden fees. Quality work that fits your budget."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="How We Work"
            title="Our Development Process"
            description="A proven approach that delivers results"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 h-6 w-6 text-muted" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/process">
              <Button variant="outline">Learn More About Our Process</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Client Stories"
            title="What Our Clients Say"
            description="Don't just take our word for it"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Tech Stack"
            title="Technologies We Use"
            description="Modern tools for modern solutions"
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {[
              "React", "Python", "TypeScript", "PostgreSQL",
              "AWS", "SQL", "Flask", "Django", "React.js", "Tailwind CSS",
              "APIs", "Git"
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss your project and how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

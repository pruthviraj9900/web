import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { CheckCircle2, Smartphone, Zap, Search, Shield, Palette, Code } from "lucide-react";
import { motion } from "motion/react";

export default function WebDevelopment() {
  const features = [
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Perfect display on all devices from mobile to desktop"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for quick loading times"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built with search engine best practices"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "SSL certificates and security best practices"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Tailored to your brand and audience"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable, scalable codebase"
    }
  ];

  const packages = [
    {
      name: "Landing Page",
      description: "Perfect for product launches, campaigns, or lead generation",
      timeline: "2-3 weeks",
      features: [
        "Single page design",
        "Contact form",
        "Call-to-action sections",
        "Mobile responsive",
        "SEO basics",
        "Analytics integration"
      ],
      suitable: ["Startups", "Product Launches", "Marketing Campaigns"]
    },
    {
      name: "Business Website",
      description: "Professional multi-page website for your company",
      timeline: "4-6 weeks",
      features: [
        "5-10 pages",
        "Custom design",
        "Contact forms",
        "Blog functionality",
        "SEO optimization",
        "CMS integration",
        "Analytics",
        "Social media integration"
      ],
      suitable: ["Small Businesses", "Professional Services", "Agencies"]
    },
    {
      name: "E-commerce Platform",
      description: "Full-featured online store with payment processing",
      timeline: "8-12 weeks",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment gateway",
        "Inventory management",
        "Order tracking",
        "Customer accounts",
        "Admin dashboard",
        "Email notifications"
      ],
      suitable: ["Retail", "Wholesale", "Digital Products"]
    },
    {
      name: "Web Application",
      description: "Complex interactive applications with advanced features",
      timeline: "12+ weeks",
      features: [
        "Custom functionality",
        "User authentication",
        "Database integration",
        "API development",
        "Real-time features",
        "Admin panel",
        "Third-party integrations",
        "Scalable architecture"
      ],
      suitable: ["SaaS", "Platforms", "Enterprise"]
    }
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "TypeScript", "Node.js",
    "Python", "PostgreSQL", "MongoDB", "Tailwind CSS", "REST APIs",
    "GraphQL", "AWS", "Vercel", "Docker"
  ];

  return (
    <div>
      <Hero
        subtitle="Web Development"
        title="Modern Websites That Convert Visitors Into Customers"
        description="We build responsive, fast, and SEO-friendly websites tailored to your business goals. No templates — every site is custom-designed for you."
      >
        <Link to="/contact">
          <Button size="lg">Start Your Project</Button>
        </Link>
      </Hero>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Features"
            title="What You Get"
            description="Every website we build includes these essential features"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Packages"
            title="Website Development Packages"
            description="Choose the package that fits your needs, or we can create a custom solution"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <Badge variant="secondary">{pkg.timeline}</Badge>
                    </div>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="text-sm flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Best For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.suitable.map((item) => (
                          <Badge key={item} variant="outline">{item}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/pricing">
              <Button size="lg" variant="outline">View Detailed Pricing</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Technology"
            title="Built With Modern Tools"
            description="We use the latest technologies to ensure your website is fast, secure, and maintainable"
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </motion.div>
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
              Ready to Launch Your Website?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss your vision and create a website that helps your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

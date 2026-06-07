import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { ExternalLink, Code, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { api } from "../lib/api";

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to fetch from backend API, fallback to demo data
    api.getPortfolio()
      .then(data => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch(() => {
        // Fallback demo data
        setProjects(demoProjects);
        setLoading(false);
      });
  }, []);

  const demoProjects = [
    {
      id: 1,
      title: "SmartInventory - Warehouse Management System",
      client: "LogiTech Solutions",
      category: "Custom Software",
      description: "Custom inventory management system for multi-warehouse operations",
      problem: "Client was managing inventory across 5 warehouses using spreadsheets, leading to stock discrepancies and fulfillment delays.",
      solution: "Built a real-time inventory tracking system with automated reordering, supplier integration, and barcode scanning.",
      features: [
        "Real-time stock tracking across locations",
        "Automated low-stock alerts",
        "Supplier portal integration",
        "Mobile app for warehouse staff",
        "Advanced reporting and analytics"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Mobile App"],
      results: [
        "95% reduction in stock discrepancies",
        "40% faster order fulfillment",
        "60% reduction in manual data entry",
        "ROI achieved in 6 months"
      ]
    },
    {
      id: 2,
      title: "MediConnect - Patient Management Portal",
      client: "HealthFirst Clinic",
      category: "Web Application",
      description: "HIPAA-compliant patient portal and scheduling system",
      problem: "Clinic was handling appointments via phone calls, leading to double bookings and patient frustration.",
      solution: "Developed a patient portal with online booking, medical records access, and secure messaging.",
      features: [
        "Online appointment scheduling",
        "Patient medical records access",
        "Secure doctor-patient messaging",
        "Prescription refill requests",
        "Automated appointment reminders"
      ],
      technologies: ["React", "Python", "MongoDB", "HIPAA Compliance"],
      results: [
        "70% reduction in phone call volume",
        "30% increase in appointment bookings",
        "Improved patient satisfaction scores",
        "Complete HIPAA compliance"
      ]
    },
    {
      id: 3,
      title: "PropertyHub - Real Estate CRM",
      client: "Metro Realty Group",
      category: "Custom CRM",
      description: "Custom CRM tailored for real estate sales processes",
      problem: "Generic CRM couldn't handle unique real estate workflows like property matching and viewing scheduling.",
      solution: "Built a specialized CRM with property matching algorithms, automated viewing scheduling, and client communication tools.",
      features: [
        "Intelligent property matching",
        "Automated viewing schedules",
        "Client preference tracking",
        "Document management",
        "Commission tracking",
        "Mobile access for agents"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Google Maps API"],
      results: [
        "50% faster property matching",
        "3x increase in viewing bookings",
        "40% improvement in agent productivity",
        "Seamless integration with existing tools"
      ]
    },
    {
      id: 4,
      title: "EcoProducts - E-commerce Platform",
      client: "Green Living Co",
      category: "E-commerce",
      description: "Sustainable products marketplace with subscription model",
      problem: "Client wanted to sell eco-friendly products with both one-time and subscription options.",
      solution: "Created a modern e-commerce platform with flexible subscription management and eco-impact tracking.",
      features: [
        "Product catalog with 1000+ items",
        "Flexible subscription plans",
        "Eco-impact calculator",
        "Customer reviews and ratings",
        "Loyalty rewards program",
        "Admin inventory management"
      ],
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
      results: [
        "45% of customers choose subscriptions",
        "$2M+ in first year revenue",
        "4.8/5 average customer rating",
        "Mobile-first design increased conversions 35%"
      ]
    }
  ];

  return (
    <div>
      <Hero
        subtitle="Our Work"
        title="Case Studies & Success Stories"
        description="Real projects, real results. See how we've helped businesses solve complex challenges with custom software solutions."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center">Loading projects...</div>
          ) : (
            <div className="space-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                > 
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <Badge>{project.category}</Badge>
                            <span className="text-sm text-muted-foreground">{project.client}</span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h2>
                          <p className="text-lg text-muted-foreground">{project.description}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-1 w-8 bg-destructive rounded" />
                            <h3 className="font-semibold">The Challenge</h3>
                          </div>
                          <p className="text-muted-foreground">{project.problem}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-1 w-8 bg-primary rounded" />
                            <h3 className="font-semibold">Our Solution</h3>
                          </div>
                          <p className="text-muted-foreground mb-3">{project.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Code className="h-4 w-4" />
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.features.map((feature: string) => (
                              <li key={feature} className="text-sm flex items-start">
                                <span className="mr-2 text-primary">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Technology Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string) => (
                              <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-muted/50 rounded-lg p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold">Results</h4>
                          </div>
                          <ul className="space-y-3">
                            {project.results.map((result: string) => (
                              <li key={result} className="flex items-start">
                                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{result}</span>
                              </li>
                            ))}
                          </ul> 
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-3">Similar project in mind?</p>
                          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                            <Button className="w-full">
                              Start Your Project
                              <ExternalLink className="ml-2 h-4 w-4" />
                              
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
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
              Your Project Could Be Next
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Every successful project starts with a conversation. Let's discuss how we can help your business.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}> 
              <Button size="lg" variant="secondary">
                Let's Talk
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { CheckCircle2, Server, Shield, Zap, HeadphonesIcon, Globe, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Hosting() {
  const plans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      description: "Perfect for small business websites",
      features: [
        "5 GB SSD Storage",
        "50 GB Bandwidth",
        "1 Website",
        "Free SSL Certificate",
        "Daily Backups",
        "Email Support",
        "99.9% Uptime"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$19.99",
      period: "/month",
      description: "For growing businesses",
      features: [
        "20 GB SSD Storage",
        "200 GB Bandwidth",
        "5 Websites",
        "Free SSL Certificate",
        "Daily Backups",
        "Priority Support",
        "99.9% Uptime",
        "Free Domain (1 year)",
        "Advanced Analytics"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$39.99",
      period: "/month",
      description: "For high-traffic websites",
      features: [
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Websites",
        "Free SSL Certificate",
        "Hourly Backups",
        "24/7 Priority Support",
        "99.99% Uptime",
        "Free Domain (1 year)",
        "Advanced Analytics",
        "CDN Integration",
        "Staging Environment"
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: Server,
      title: "Reliable Infrastructure",
      description: "Enterprise-grade servers with 99.9% uptime guarantee"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Free SSL, DDoS protection, and regular security updates"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "SSD storage and optimized caching for lightning-fast load times"
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description: "Our team is here to help when you need us"
    },
    {
      icon: Globe,
      title: "Easy Domain Setup",
      description: "We handle domain registration and DNS configuration"
    },
    {
      icon: Mail,
      title: "Professional Email",
      description: "Custom email addresses for your domain"
    }
  ];

  const included = [
    "Website deployment and setup",
    "SSL certificate installation",
    "Domain DNS configuration",
    "Email account setup",
    "WordPress installation (if needed)",
    "Regular backups",
    "Security monitoring",
    "Performance optimization",
    "Technical support"
  ];

  return (
    <div>
      <Hero
        subtitle="Hosting Services"
        title="Reliable Hosting With Professional Support"
        description="Affordable, secure hosting with everything you need. We handle the technical details so you can focus on your business."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Pricing Plans"
            title="Choose Your Hosting Plan"
            description="All plans include professional setup and ongoing support"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={plan.popular ? "md:-mt-4" : ""}
              >
                <Card className={`h-full ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  <CardHeader>
                    {plan.popular && (
                      <Badge className="w-fit mb-2">Most Popular</Badge>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to="/contact" className="w-full">
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        Get Started
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Features"
            title="Why Choose Our Hosting?"
            description="Everything you need for a successful online presence"
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

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What's Included"
            title="Professional Setup & Support"
            description="We handle all the technical details"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {included.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
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
              Need Custom Hosting?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Have specific requirements? We can create a custom hosting solution tailored to your needs.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

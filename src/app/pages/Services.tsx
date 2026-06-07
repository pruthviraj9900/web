import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import {
  Code2,
  Globe,
  Database,
  Smartphone,
  BarChart3,
  Cog,
  Layers,
  Zap,
  Shield,
  RefreshCw,
  Cloud,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Business Websites",
      description: "Professional websites tailored to your brand and business needs",
      features: [
        "Responsive design for all devices",
        "SEO optimization",
        "Content management system",
        "Contact forms and lead capture",
        "Analytics integration",
        "Fast loading speeds"
      ],
      href: "/web-development"
    },
    {
      icon: Database,
      title: "Custom B2B Software",
      description: "Enterprise solutions built specifically for your operations",
      features: [
        "Business process automation",
        "Workflow optimization",
        "Role-based access control",
        "Data migration and integration",
        "Custom reporting",
        "Scalable architecture"
      ],
      href: "/custom-software"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Interactive web apps that deliver exceptional user experiences",
      features: [
        "Single-page applications",
        "Progressive web apps",
        "Real-time features",
        "Offline functionality",
        "Cross-browser compatibility",
        "API integrations"
      ],
      href: "/contact"
    },
    {
      icon: Layers,
      title: "SaaS Development",
      description: "Cloud-based software solutions with subscription models",
      features: [
        "Multi-tenant architecture",
        "Subscription management",
        "Payment gateway integration",
        "User authentication",
        "Admin dashboards",
        "Analytics and reporting"
      ],
      href: "/contact"
    },
    {
      icon: Cog,
      title: "CRM Systems",
      description: "Customer relationship management tailored to your sales process",
      features: [
        "Contact management",
        "Sales pipeline tracking",
        "Email integration",
        "Task automation",
        "Custom fields and workflows",
        "Mobile access"
      ],
      href: "/contact"
    },
    {
      icon: BarChart3,
      title: "ERP Solutions",
      description: "Enterprise resource planning for streamlined operations",
      features: [
        "Inventory management",
        "Order processing",
        "Financial tracking",
        "Supply chain management",
        "HR management",
        "Multi-location support"
      ],
      href: "/contact"
    },
    {
      icon: Smartphone,
      title: "Dashboard Development",
      description: "Data visualization and business intelligence tools",
      features: [
        "Real-time data updates",
        "Interactive charts and graphs",
        "Custom KPI tracking",
        "Export functionality",
        "Role-based views",
        "Mobile-responsive design"
      ],
      href: "/contact"
    },
    {
      icon: Shield,
      title: "Internal Business Tools",
      description: "Custom applications for internal workflows and processes",
      features: [
        "Employee portals",
        "Document management",
        "Project tracking",
        "Time and attendance",
        "Approval workflows",
        "Notifications and alerts"
      ],
      href: "/contact"
    },
    {
      icon: RefreshCw,
      title: "API Integrations",
      description: "Connect your systems and automate data flow",
      features: [
        "Third-party API integration",
        "Custom API development",
        "Data synchronization",
        "Webhook setup",
        "Legacy system integration",
        "API documentation"
      ],
      href: "/contact"
    },
    {
      icon: Cloud,
      title: "Hosting Services",
      description: "Reliable hosting with professional support",
      features: [
        "Shared hosting plans",
        "Domain registration",
        "SSL certificates",
        "Email hosting",
        "Regular backups",
        "24/7 monitoring"
      ],
      href: "/hosting"
    },
    {
      icon: Cog,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly",
      features: [
        "Security updates",
        "Content updates",
        "Plugin management",
        "Performance monitoring",
        "Backup management",
        "Uptime monitoring"
      ],
      href: "/contact"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications and websites",
      features: [
        "Code optimization",
        "Database tuning",
        "Caching implementation",
        "CDN setup",
        "Image optimization",
        "Load testing"
      ],
      href: "/contact"
    }
  ];

  return (
    <div>
      <Hero
        subtitle="Our Services"
        title="Comprehensive Development Solutions"
        description="From custom software to ongoing support, we provide everything you need to build and maintain your digital presence."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Not Sure What You Need?"
            description="Let's discuss your business challenges and find the right solution together."
            centered
          />
          <Link to="/contact">
            <Button size="lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

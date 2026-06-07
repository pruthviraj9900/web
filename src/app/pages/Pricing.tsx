import { useState } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Link } from "react-router";
import { CheckCircle2, DollarSign, Clock, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { api } from "../lib/api";

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    budget: "",
    description: ""
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await api.submitQuote(formData);
      toast.success("Quote request submitted! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        budget: "",
        description: ""
      });
    } catch (error) {
      toast.error("Failed to submit. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const pricingFactors = [
    {
      icon: Clock,
      title: "Project Complexity",
      description: "The scope, features, and technical requirements affect timeline and cost."
    },
    {
      icon: TrendingUp,
      title: "Business Value",
      description: "We price based on the value delivered, not just hours worked."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Fixed-price quotes with no hidden fees or surprises."
    }
  ];

  const ranges = [
    {
      title: "Landing Pages",
      range: "$2,000 - $5,000",
      timeline: "2-3 weeks",
      description: "Single-page websites for campaigns or lead generation"
    },
    {
      title: "Business Websites",
      range: "$5,000 - $15,000",
      timeline: "4-6 weeks",
      description: "Professional multi-page websites with CMS"
    },
    {
      title: "E-commerce Platforms",
      range: "$10,000 - $30,000",
      timeline: "8-12 weeks",
      description: "Full online stores with payment processing"
    },
    {
      title: "Custom Software",
      range: "$15,000 - $100,000+",
      timeline: "8-24 weeks",
      description: "CRM, ERP, SaaS, and custom business applications"
    },
    {
      title: "Hosting Services",
      range: "$10 - $40/month",
      timeline: "Ongoing",
      description: "Managed hosting with support and maintenance"
    }
  ];

  const whatsIncluded = [
    "Detailed project scoping and planning",
    "Custom design tailored to your brand",
    "Clean, maintainable code",
    "Responsive mobile-first development",
    "SEO optimization",
    "Security best practices",
    "Testing and quality assurance",
    "User training and documentation",
    "30 days post-launch support",
    "Source code ownership"
  ];

  return (
    <div>
      <Hero
        subtitle="Pricing"
        title="Transparent, Value-Based Pricing"
        description="We believe in fair pricing based on the value we deliver. Every project is unique, so we provide custom quotes tailored to your specific needs."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Pricing Approach"
            title="How We Price Projects"
            description="Our pricing philosophy"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingFactors.map((factor) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="pt-6 text-center">
                    <factor.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{factor.title}</h3>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Price Ranges"
            title="Typical Project Costs"
            description="Ballpark estimates to help you plan your budget"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ranges.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">{item.range}</div>
                      <div className="text-sm text-muted-foreground mt-1">Timeline: {item.timeline}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-muted-foreground"
          >
            <p>* Prices vary based on specific requirements. All projects include detailed scoping before commitment.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What's Included"
            title="Every Project Includes"
            description="Standard features in all our projects"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whatsIncluded.map((item, index) => (
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Request a Custom Quote"
            description="Tell us about your project and we'll provide a detailed proposal"
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Business Website</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                        <SelectItem value="custom-software">Custom Software</SelectItem>
                        <SelectItem value="crm">CRM System</SelectItem>
                        <SelectItem value="saas">SaaS Development</SelectItem>
                        <SelectItem value="hosting">Hosting Services</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">$50,000+</SelectItem>
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? "Submitting..." : "Request Quote"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Prefer to Talk First?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're happy to discuss your project before providing a formal quote.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Schedule a Call
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

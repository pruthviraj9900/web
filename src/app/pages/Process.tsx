import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import {
  MessageSquare,
  FileText,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
  CheckCircle2,
  Clock,
  Users,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

export default function Process() {
  const phases = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Discovery & Consultation",
      duration: "1-2 weeks",
      description: "We start by understanding your business, challenges, and goals",
      activities: [
        "Initial consultation call",
        "Business process analysis",
        "Requirements gathering",
        "Stakeholder interviews",
        "Current system review",
        "Goal definition"
      ]
    },
    {
      icon: FileText,
      number: "02",
      title: "Planning & Design",
      duration: "1-2 weeks",
      description: "Detailed planning and design of your solution",
      activities: [
        "Technical specification document",
        "System architecture design",
        "Database schema planning",
        "UI/UX wireframes",
        "Project timeline creation",
        "Budget finalization"
      ]
    },
    {
      icon: Code,
      number: "03",
      title: "Development",
      duration: "4-12 weeks",
      description: "Building your solution with best practices and clean code",
      activities: [
        "Agile sprint-based development",
        "Weekly progress updates",
        "Continuous integration",
        "Code reviews",
        "Security implementation",
        "Performance optimization"
      ]
    },
    {
      icon: TestTube,
      number: "04",
      title: "Testing & QA",
      duration: "1-2 weeks",
      description: "Rigorous testing to ensure everything works perfectly",
      activities: [
        "Functionality testing",
        "Security testing",
        "Performance testing",
        "Cross-browser/device testing",
        "User acceptance testing",
        "Bug fixes and refinements"
      ]
    },
    {
      icon: Rocket,
      number: "05",
      title: "Launch",
      duration: "1 week",
      description: "Deploying your solution and going live",
      activities: [
        "Production environment setup",
        "Data migration",
        "Final deployment",
        "Monitoring setup",
        "User training",
        "Documentation delivery"
      ]
    },
    {
      icon: HeadphonesIcon,
      number: "06",
      title: "Support & Maintenance",
      duration: "Ongoing",
      description: "Continuous support to keep your solution running smoothly",
      activities: [
        "Bug fixes and updates",
        "Performance monitoring",
        "Security patches",
        "Feature enhancements",
        "Technical support",
        "Regular backups"
      ]
    }
  ];

  const principles = [
    {
      icon: Users,
      title: "Collaborative",
      description: "You're involved throughout the process. We work with you, not in isolation."
    },
    {
      icon: CheckCircle2,
      title: "Transparent",
      description: "Regular updates, clear communication, and no surprises."
    },
    {
      icon: Clock,
      title: "Predictable",
      description: "Realistic timelines and deadlines we actually meet."
    }
  ];

  return (
    <div>
      <Hero
        subtitle="Our Process"
        title="How We Build Your Solution"
        description="A proven, transparent process that delivers results. From initial consultation to ongoing support, we're with you every step of the way."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                          <phase.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-4xl font-bold text-primary/20">{phase.number}</span>
                          <div className="flex-1">
                            <CardTitle className="text-2xl">{phase.title}</CardTitle>
                            <CardDescription className="text-sm mt-1">
                              Duration: {phase.duration}
                            </CardDescription>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{phase.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="ml-22">
                      <h4 className="font-semibold mb-3">What happens in this phase:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {phase.activities.map((activity) => (
                          <div key={activity} className="flex items-start text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < phases.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="h-6 w-6 text-muted rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Principles"
            title="How We Work"
            description="The values that guide our development process"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {principles.map((principle) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="pt-6 text-center">
                    <principle.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Frequently Asked Questions"
              centered
            />
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How long does a typical project take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    It depends on the complexity and scope. Simple websites take 4-6 weeks, while custom software
                    projects typically range from 8-16 weeks. We'll give you a detailed timeline during the planning phase.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Will I be involved in the development process?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! We provide weekly updates and demos. You'll have opportunities to provide feedback
                    at key milestones, ensuring the final product matches your vision.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What happens after launch?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide ongoing support and maintenance. This includes bug fixes, security updates, and
                    performance monitoring. We're also available for future feature additions and enhancements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you work with clients remotely?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We work with clients worldwide. We use video calls, project management tools, and
                    collaborative platforms to ensure seamless communication regardless of location.
                  </p>
                </CardContent>
              </Card>
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              The first step is a conversation. Let's discuss your project and how we can help.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Heart, Target, Lightbulb, Users, Code, Handshake } from "lucide-react";
import { motion } from "motion/react";


export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Your success is our success. We build long-term relationships, not just one-off projects."
    },
    {
      icon: Target,
      title: "Quality Over Quantity",
      description: "We take on projects we can deliver exceptionally well, not everything that comes our way."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay current with technology trends to deliver modern, future-proof solutions."
    },
    {
      icon: Users,
      title: "Transparency",
      description: "Clear communication, honest timelines, and no hidden fees. You always know where you stand."
    },
    {
      icon: Code,
      title: "Code Excellence",
      description: "Clean, maintainable code that's built to last and easy to extend."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We're invested in your long-term success with ongoing support and guidance."
    }
  ];

  const team = [
    {
      name: "Pruthviraj Patil",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 6+ years of experience building scalable web applications and softwares. Specializes in Python and cloud architecture."
    },
    {
      name: "Kanhaiya Patil",
      role: "Co-Founder & Technical Director",
      bio: "Backend specialist with expertise in database design, API development, frontend developement and system architecture. 4+ years in enterprise software."
    }
  ];

  const milestones = [
    { year: "2019", event: "DevBros Founded", description: "Two brothers started with a vision to build better software" },
    { year: "2020", event: "First 10 Clients", description: "Built custom solutions for local businesses" },
    { year: "2022", event: "Expanded Team", description: "Grew to a team of skilled developers" },
    { year: "2024", event: "50+ Projects", description: "Delivered successful solutions across multiple industries" },
    { year: "2026", event: "Industry Recognition", description: "Known for quality custom software and long-term partnerships" }
  ];

  return (
    <div>
      <Hero
        subtitle="About DevBros"
        title="Building Software That Actually Worthy"
        description="Founded by two brothers who believed businesses deserved better than generic software. Today, we're a team of experts dedicated to creating custom solutions that solve real problems."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  DevBros started in 2019 when two brothers, frustrated with seeing businesses struggle with
                  ill-fitting software, decided to do something about it.
                </p>
                <p>
                  We noticed a pattern: companies were either stuck with expensive enterprise software that
                  didn't fit their needs, or cheap templates that couldn't grow with them. There had to be a better way.
                </p>
                <p>
                  Today, we're a small but highly skilled team specializing in custom software development.
                  We don't use templates or one-size-fits-all solutions. Every project is built from the ground up
                  to match your unique business processes.
                </p>
                <p>
                  Our clients stay with us because we're not just developers — we're long-term technology partners
                  invested in their success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg p-8">
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="text-2xl font-bold text-primary min-w-[60px]">{milestone.year}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{milestone.event}</h4>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Values"
            title="What Drives Us"
            description="The principles that guide everything we do"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <value.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Meet the Team"
            title="The People Behind DevBros"
            description="A small, dedicated team of experts who care about your success"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={`/team/${member.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}.jpg`}
                          alt={member.name}
                        />
                        <AvatarFallback className="text-lg">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{member.name}</h3>
                        <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                        <p className="text-sm text-muted-foreground">{member.bio}</p>
                      </div>
                    </div>
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
              Want to Work With Us?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We're selective about the projects we take on, so we can deliver exceptional results for every client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Start a Project
                </Button>
              </Link>
              <Link to="/process">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  See How We Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
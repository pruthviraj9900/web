import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";
import { api } from "../lib/api";

export default function FAQ() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getFAQs()
      .then(data => {
        setFaqs(data.faqs);
        setLoading(false);
      })
      .catch(() => {
        setFaqs(demoFaqs);
        setLoading(false);
      });
  }, []);

  const demoFaqs = [
    {
      category: "General",
      questions: [
        {
          q: "What types of projects do you work on?",
          a: "We specialize in custom software development, including business websites, web applications, SaaS platforms, CRM systems, ERP solutions, and custom business tools. We also offer hosting services and ongoing maintenance."
        },
        {
          q: "Do you work with startups or only established businesses?",
          a: "We work with both! Whether you're a startup with a new idea or an established business looking to improve your operations, we can help. We tailor our approach and pricing to fit different stages of business growth."
        },
        {
          q: "What industries do you serve?",
          a: "We've worked with clients across various industries including professional services, manufacturing, retail, healthcare, finance, and real estate. Our custom approach means we can adapt to any industry's specific needs."
        }
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          q: "How long does a typical project take?",
          a: "Timeline varies by project complexity. Simple websites take 4-6 weeks, while custom software projects typically range from 8-24 weeks. We provide a detailed timeline during the planning phase based on your specific requirements."
        },
        {
          q: "Can you work with tight deadlines?",
          a: "We're flexible and can accommodate urgent projects when possible. However, we believe in delivering quality work, so we'll be honest if a timeline is unrealistic. Rush projects may incur additional costs."
        },
        {
          q: "What's your development process?",
          a: "We follow a structured process: Discovery & Consultation, Planning & Design, Development, Testing & QA, Launch, and ongoing Support & Maintenance. You're involved throughout with regular updates and feedback opportunities."
        },
        {
          q: "Will I be able to provide feedback during development?",
          a: "Absolutely! We provide weekly progress updates and demos. You'll have opportunities to provide feedback at key milestones, ensuring the final product matches your vision."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "How much does a custom software project cost?",
          a: "Pricing varies based on complexity, features, and timeline. Simple websites start around $5,000, while custom software projects range from $15,000 to $100,000+. We provide detailed quotes after understanding your requirements."
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes, we typically structure payments in milestones: deposit at project start, progress payments during development, and final payment upon completion. We can discuss flexible arrangements for larger projects."
        },
        {
          q: "Are there any hidden fees?",
          a: "No. We provide transparent, fixed-price quotes that include all development costs. Any potential additional costs (like third-party services) are discussed upfront."
        },
        {
          q: "What's included in the quoted price?",
          a: "Our quotes include project planning, custom design, development, testing, deployment, training, documentation, and 30 days of post-launch support. You also get full source code ownership."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "What technologies do you use?",
          a: "We use modern, proven technologies including React, Next.js, Python, Node.js, PostgreSQL, MongoDB, AWS, and more. We choose the best tech stack for each project's specific requirements."
        },
        {
          q: "Will I own the source code?",
          a: "Yes! You receive full ownership of all source code, designs, and intellectual property created for your project. No vendor lock-in."
        },
        {
          q: "Can you integrate with our existing systems?",
          a: "Yes, we specialize in integrations. We can connect your new solution with existing CRM, accounting software, payment processors, APIs, and other business tools."
        },
        {
          q: "Is the software scalable?",
          a: "Absolutely. We build with scalability in mind, so your software can grow as your business grows. We use best practices and modern architecture patterns to ensure long-term viability."
        },
        {
          q: "How do you handle security?",
          a: "Security is a top priority. We implement industry best practices including data encryption, secure authentication, regular security updates, and compliance with relevant standards (GDPR, HIPAA, etc.)."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          q: "What happens after the project launches?",
          a: "We provide 30 days of post-launch support included in the project cost. After that, we offer ongoing maintenance packages or per-incident support, depending on your needs."
        },
        {
          q: "Do you offer ongoing maintenance?",
          a: "Yes! We offer monthly maintenance packages that include bug fixes, security updates, performance monitoring, and technical support. We're here for the long term."
        },
        {
          q: "Can you add new features later?",
          a: "Definitely. We build software that's easy to extend. When you need new features, we can add them efficiently because we know the codebase inside and out."
        },
        {
          q: "What if something breaks?",
          a: "If you're on a maintenance plan, we'll fix it quickly at no additional cost. Even without a maintenance plan, we're available for urgent fixes and will prioritize getting you back online."
        }
      ]
    },
    {
      category: "Working Together",
      questions: [
        {
          q: "Do you work remotely or on-site?",
          a: "We work remotely with clients worldwide using video calls, project management tools, and collaborative platforms. For local clients, we can arrange in-person meetings when beneficial."
        },
        {
          q: "How do we communicate during the project?",
          a: "We use a combination of email, video calls, project management tools (like Trello or Asana), and shared documents. We provide weekly updates and are available for questions anytime."
        },
        {
          q: "What do you need from us to get started?",
          a: "Initially, just a description of your project goals and challenges. We'll guide you through gathering detailed requirements during the discovery phase. The more context you can provide, the better!"
        }
      ]
    }
  ];

  return (
    <div>
      <Hero
        subtitle="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services, process, and pricing."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {loading ? (
            <div className="text-center">Loading FAQs...</div>
          ) : (
            <div className="space-y-12">
              {faqs.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SectionTitle title={category.category} />
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((item: any, qIndex: number) => (
                      <AccordionItem key={qIndex} value={`${category.category}-${qIndex}`}>
                        <AccordionTrigger className="text-left">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're happy to answer any other questions you might have about our services.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

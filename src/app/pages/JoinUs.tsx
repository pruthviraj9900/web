import React, { useState } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { 
  Briefcase, 
  Upload, 
  Send, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Sparkles 
} from "lucide-react";
import { motion } from "motion/react";

export default function JoinUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Full Stack Developer",
    experience: "1-3 years",
    portfolio: "",
    coverLetter: ""
  });

  const perks = [
    {
      icon: Code2,
      title: "Modern Stack",
      description: "We ship clean code using Next.js, React, Tailwind, and scalable backend infrastructures."
    },
    {
      icon: Layers,
      title: "End-to-End Ownership",
      description: "Own features from initial design discussions up to real production deployment cycles."
    },
    {
      icon: Sparkles,
      title: "Remote & Flexible",
      description: "Work comfortably from your ideal setup with structured, predictable communication loops."
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect this to your backend system later
    console.log("Application data submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div>
      <Hero
        subtitle="Careers"
        title="Join the DevBros Team"
        description="We are always looking for passionate software developers, designers, and builders who care deeply about shipping clean, maintainable software."
      />

      {/* Main Core Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Hand: Quick Job Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" /> Application Form
                    </CardTitle>
                    <CardDescription>
                      Fill out your details below and we will get back to you within 3-5 business days.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12 space-y-4"
                      >
                        <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto" />
                        <h3 className="text-xl font-bold">Application Received!</h3>
                        <p className="text-muted-foreground text-sm max-w-md mx-auto">
                          Thanks for applying, {formData.name}. Our core engineering team will look through your profile and portfolio shortly.
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={() => setSubmitted(false)}
                          className="mt-4"
                        >
                          Submit Another Application
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="role" className="block text-sm font-medium mb-2">Target Role</label>
                            <select
                              id="role"
                              name="role"
                              value={formData.role}
                              onChange={handleChange}
                              className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option>Full Stack Developer</option>
                              <option>Frontend Specialist</option>
                              <option>Backend Engineer</option>
                              <option>UI/UX Designer</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="experience" className="block text-sm font-medium mb-2">Experience</label>
                            <select
                              id="experience"
                              name="experience"
                              value={formData.experience}
                              onChange={handleChange}
                              className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option>Junior (0-1 years)</option>
                              <option>Mid-Level (1-3 years)</option>
                              <option>Senior (3+ years)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="portfolio" className="block text-sm font-medium mb-2">Portfolio or GitHub URL</label>
                          <Input
                            type="url"
                            id="portfolio"
                            name="portfolio"
                            required
                            value={formData.portfolio}
                            onChange={handleChange}
                            placeholder="https://github.com/yourusername"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Resume Upload (PDF)</label>
                          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/20 hover:bg-muted/40 transition-colors relative cursor-pointer">
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              required
                              accept=".pdf"
                              className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <Upload className="h-8 w-8 text-primary mb-2" />
                            <p className="text-sm font-medium">Click to upload alternative file</p>
                            <p className="text-xs text-muted-foreground mt-1">PDF format limit up to 5MB</p>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">Tell us about yourself</label>
                          <Textarea
                            id="coverLetter"
                            name="coverLetter"
                            rows={4}
                            value={formData.coverLetter}
                            onChange={handleChange}
                            placeholder="Share what makes you an exceptional software teammate..."
                            className="resize-none"
                          />
                        </div>

                        <Button type="submit" className="w-full flex items-center justify-center gap-2">
                          <span>Submit Application</span>
                          <Send className="h-4 w-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Hand: Core Work Culture Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="lg:sticky lg:top-8">
                <SectionTitle
                  subtitle="Why DevBros?"
                  title="Our Engineering Culture"
                  description="We avoid bureaucracy, run tight feedback iterations, and focus entirely on engineering excellence."
                />
                
                <div className="mt-8 space-y-4">
                  {perks.map((perk, index) => (
                    <motion.div
                      key={perk.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-5 flex gap-4 items-start">
                          <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                            <perk.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">{perk.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{perk.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
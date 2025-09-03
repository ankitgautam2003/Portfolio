import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "ankitgautam6835@gmail.com",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+92 9889524500",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Uttar Pradesh, India",
    },
  ];

  const socialLinks = [
    {
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/ankit-gautam-85a807259/",
      testId: "social-linkedin",
    },
    {
      icon: "fab fa-github",
      href: "https://github.com/ankitgautam2003",
      testId: "social-github",
    },
    {
      icon: "fab fa-twitter",
      href: "https://x.com/ankit_gautam_03",
      testId: "social-twitter",
    },
    // { icon: "fab fa-dribbble", href: "#", testId: "social-dribbble" },
    {
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/ankit_gautam_03/",
      testId: "social-instagram",
    },
    // { icon: "fab fa-facebook", href: "#", testId: "social-facebook" },
    // { icon: "reddit fa-reddit", href: "#", testId: "social-reddit" },
    // { icon: "email fa-envelope", href: "#", testId: "social-email" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 section-fade ${hasIntersected ? "visible" : ""}`}
      data-testid="contact-section"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          data-testid="contact-title"
        >
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-semibold mb-4"
                data-testid="contact-subtitle"
              >
                Let's Work Together
              </h3>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                data-testid="contact-description"
              >
                I'm always interested in new opportunities and exciting
                projects. Whether you have a specific project in mind or just
                want to chat about technology and design, I'd love to hear from
                you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4"
                  data-testid={`contact-info-${index}`}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <i className={`${info.icon} text-primary text-xl`}></i>
                  </div>
                  <div>
                    <h4
                      className="font-medium"
                      data-testid={`contact-info-title-${index}`}
                    >
                      {info.title}
                    </h4>
                    <p
                      className="text-muted-foreground"
                      data-testid={`contact-info-value-${index}`}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-6 pt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  data-testid={social.testId}
                >
                  <i
                    className={`${social.icon} text-xl group-hover:text-white`}
                  ></i>
                </a>
              ))}
            </div>
          </div>

          <div className="glass dark:glass-dark rounded-xl p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-testid="contact-form"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  data-testid="input-subject"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full px-8 py-4 font-medium hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                disabled={contactMutation.isPending}
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

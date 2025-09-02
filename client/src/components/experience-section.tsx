import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  position: "left" | "right";
}

export function ExperienceSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  const experiences: ExperienceItem[] = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures with TypeScript and Next.js.",
      position: "right",
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed end-to-end web applications using React, Node.js, and PostgreSQL. Collaborated with design team to implement pixel-perfect UI components and RESTful APIs.",
      position: "left",
    },
    {
      title: "Frontend Developer",
      company: "WebAgency Pro",
      period: "2019 - 2020",
      description: "Built responsive websites and web applications for various clients using modern JavaScript frameworks, focusing on performance optimization and cross-browser compatibility.",
      position: "right",
    },
    {
      title: "Junior Web Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2019",
      description: "Started my professional journey developing WordPress themes and custom JavaScript solutions. Gained experience in HTML, CSS, and PHP while working on client projects.",
      position: "left",
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 section-fade ${hasIntersected ? "visible" : ""}`}
      data-testid="experience-section"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text" data-testid="experience-title">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent" data-testid="timeline-line"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-center" data-testid={`experience-item-${index}`}>
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background" data-testid={`timeline-dot-${index}`}></div>
                  <div
                    className={`ml-16 md:ml-0 ${
                      experience.position === "right"
                        ? "md:w-1/2 md:pr-8 md:text-right"
                        : "md:w-1/2 md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="glass dark:glass-dark rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-2" data-testid={`experience-title-${index}`}>
                        {experience.title}
                      </h3>
                      <p className="text-primary font-medium mb-2" data-testid={`experience-company-${index}`}>
                        {experience.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4" data-testid={`experience-period-${index}`}>
                        {experience.period}
                      </p>
                      <p className="text-muted-foreground" data-testid={`experience-description-${index}`}>
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

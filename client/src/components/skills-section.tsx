import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export function SkillsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [animatedSkills, setAnimatedSkills] = useState(false);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: "fab fa-react",
      skills: [
        { name: "React / Next.js", percentage: 95 },
        { name: "TypeScript", percentage: 90 },
        { name: "Tailwind CSS", percentage: 88 },
      ],
    },
    {
      title: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js / Express", percentage: 85 },
        { name: "PostgreSQL / MongoDB", percentage: 80 },
        { name: "GraphQL / REST APIs", percentage: 83 },
      ],
    },
    {
      title: "Design & Tools",
      icon: "fas fa-paint-brush",
      skills: [
        { name: "Figma / Adobe XD", percentage: 92 },
        { name: "Git / GitHub", percentage: 95 },
        { name: "AWS / Vercel", percentage: 78 },
      ],
    },
  ];

  useEffect(() => {
    if (hasIntersected && !animatedSkills) {
      setTimeout(() => setAnimatedSkills(true), 500);
    }
  }, [hasIntersected, animatedSkills]);

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 bg-secondary/30 section-fade ${hasIntersected ? "visible" : ""}`}
      data-testid="skills-section"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text" data-testid="skills-title">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass dark:glass-dark rounded-xl p-6 hover:scale-105 transition-all duration-300"
              data-testid={`skill-category-${categoryIndex}`}
            >
              <div className="flex items-center mb-4">
                <i className={`${category.icon} text-3xl text-primary mr-3`}></i>
                <h3 className="text-xl font-semibold" data-testid={`skill-category-title-${categoryIndex}`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item" data-testid={`skill-item-${categoryIndex}-${skillIndex}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium" data-testid={`skill-name-${categoryIndex}-${skillIndex}`}>
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground" data-testid={`skill-percentage-${categoryIndex}-${skillIndex}`}>
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="skill-bar bg-muted rounded-full h-2">
                      <div
                        className="skill-progress bg-gradient-to-r from-primary to-accent h-full rounded-full"
                        style={{
                          width: animatedSkills ? `${skill.percentage}%` : "0%",
                        }}
                        data-testid={`skill-progress-${categoryIndex}-${skillIndex}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

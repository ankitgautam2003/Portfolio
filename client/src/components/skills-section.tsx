import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export function SkillsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: [
        "C",
        "C++",
        "Dart",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "LaTeX",
      ],
    },
    {
      title: "Frameworks",
      icon: "fas fa-rocket",
      skills: [
        "Flutter",
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "TailwindCSS",
        "Vite",
      ],
    },
    // {
    //   title: "Libraries",
    //   icon: "fas fa-book",
    //   skills: [
    //     "Redux",
    //     "React Router",
    //     "React Hook Form",
    //     "JWT",
    //     "Nodemon",
    //     "NPM",
    //   ],
    // },
    {
      title: "Databases & Hosting",
      icon: "fas fa-database",
      skills: ["MySQL", "Firebase", "Heroku", "Netlify", "Vercel", "WordPress"],
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      skills: ["Git", "GitHub", "Postman"],
    },
    {
      title: "Design",
      icon: "fas fa-paint-brush",
      skills: ["Figma", "Canva"],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 bg-secondary/30 section-fade ${
        hasIntersected ? "visible" : ""
      }`}
      data-testid="skills-section"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          data-testid="skills-title"
        >
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
                <i
                  className={`${category.icon} text-3xl text-primary mr-3`}
                ></i>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

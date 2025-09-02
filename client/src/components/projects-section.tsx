import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export function ProjectsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, product management, and payment processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "E-commerce Platform - Modern online store interface",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Manager App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Task Manager App - Kanban board project management interface",
      technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reports for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Analytics Dashboard - Data visualization and reporting interface",
      technologies: ["React", "D3.js", "Express", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Social Media App",
      description: "A mobile-first social media application with real-time messaging, photo sharing, and social networking features built with React Native.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Social Media App - Mobile-first social networking interface",
      technologies: ["React Native", "Firebase", "GraphQL", "Apollo"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by AI with natural language processing, context awareness, and multi-language support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "AI Chat Assistant - Intelligent chatbot conversation interface",
      technologies: ["Vue.js", "Python", "OpenAI", "FastAPI"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Creative Portfolio",
      description: "A stunning portfolio website for creative professionals with advanced animations, 3D elements, and interactive showcases.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Creative Portfolio - Modern designer portfolio website interface",
      technologies: ["Three.js", "GSAP", "Nuxt.js", "WebGL"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-secondary/30 section-fade ${hasIntersected ? "visible" : ""}`}
      data-testid="projects-section"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text" data-testid="projects-title">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass dark:glass-dark rounded-xl overflow-hidden group"
              data-testid={`project-card-${index}`}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="text-primary hover:text-primary/80 transition-colors"
                    data-testid={`project-github-${index}`}
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-primary hover:text-primary/80 transition-colors"
                    data-testid={`project-live-${index}`}
                  >
                    <i className="fas fa-external-link-alt text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 section-fade ${hasIntersected ? "visible" : ""}`}
      data-testid="about-section"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text" data-testid="about-title">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold" data-testid="about-subtitle">
              Creative Developer & Design Enthusiast
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description-1">
              With over 5 years of experience in web development and design, I specialize in creating intuitive and visually stunning digital experiences. My passion lies in transforming ideas into reality through code and creativity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description-2">
              I believe in the power of clean code, thoughtful design, and user-centered solutions. When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium" data-testid="skill-tag-frontend">
                Frontend Development
              </span>
              <span className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium" data-testid="skill-tag-design">
                UI/UX Design
              </span>
              <span className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium" data-testid="skill-tag-fullstack">
                Full-Stack Development
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500"
              alt="John Doe - Professional Developer Portrait"
              className="w-80 h-80 object-cover rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

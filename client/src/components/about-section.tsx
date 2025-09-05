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
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          data-testid="about-title"
        >
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3
              className="text-2xl md:text-3xl font-semibold"
              data-testid="about-subtitle"
            >
              Creative Developer & Design Enthusiast
            </h3>
            <p
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="about-description-1"
            >
              {/* With over 5 years of experience in web development and design, I specialize in creating intuitive and visually stunning digital experiences. My passion lies in transforming ideas into reality through code and creativity. */}
              I’m Ankit Gautam, a software developer and B.Tech student at IIIT
              Vadodara, focused on building digital experiences that feel
              seamless and meaningful. With a foundation in web and app
              development, I enjoy creating responsive and visually engaging
              applications that connect design with functionality.
            </p>
            <p
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="about-description-2"
            >
              Over the past year, I’ve gained hands-on experience through
              real-world projects and internships, where I collaborated with
              teams to deliver reliable products and improve performance. I
              believe in writing clean code, approaching design thoughtfully,
              and keeping users at the center of every solution.
            </p>

            <p
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="about-description-2"
            >
              Beyond coding, I like exploring new design ideas, contributing to
              open-source projects, and taking a pause with a good cup of
              coffee.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span
                className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium"
                data-testid="skill-tag-frontend"
              >
                Software Developer
              </span>
              <span
                className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium"
                data-testid="skill-tag-fullstack"
              >
                Full-Stack Developer
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/131913423?v=4"
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

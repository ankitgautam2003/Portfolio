import { useState, useEffect } from "react";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Software Developer",
    "Mobile App Developer",
    "Full-Stack Developer",
    "Software Engineer",
  ];

  useEffect(() => {
    const typeWriter = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    };

    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(typeWriter, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  useEffect(() => {
    // Create particles
    const particlesContainer = document.querySelector(".particles");
    if (!particlesContainer) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 3 + "s";
      particle.style.animationDuration = Math.random() * 3 + 2 + "s";
      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-testid="hero-section"
    >
      <div className="particles"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <h1
            className="text-5xl md:text-7xl font-bold"
            data-testid="hero-title"
          >
            <span className="gradient-text">Ankit Gautam</span>
          </h1>
          <div
            className="text-xl md:text-2xl text-muted-foreground"
            data-testid="hero-subtitle"
          >
            <span>{typedText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground"
            data-testid="hero-description"
          >
            Creative developer passionate about building exceptional digital
            experiences with modern technologies and innovative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary transition-all duration-300 hover:scale-105"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-testid="scroll-indicator"
      >
        <i className="fas fa-chevron-down text-2xl text-muted-foreground"></i>
      </div>
    </section>
  );
}

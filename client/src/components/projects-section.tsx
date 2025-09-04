import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export function ProjectsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [veiwall, setveiwall] = useState(false);

  const projects: Project[] = [
    {
      title: "Pixgen",
      description:
        "PixGen is a full-stack text-to-image generation platform built with React and Node.js. It features a React-based frontend for entering text prompts and a Node.js/Express backend that processes these inputs to generate AI-powered images, providing users with an interactive and seamless image creation experience.",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.OYb4TdSkIqicCI0gVeLPHAHaH1?cb=thfc1&w=745&h=789&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Pixgen - Text-to-image AI platform",
      technologies: ["React", "Node.js", "Express"],
      githubUrl: "https://github.com/ankitgautam2003/pixgen.git",
      // liveUrl: "",
    },
    {
      title: "Ride_IO",
      description:
        "Ride_IO is a full-stack ride-sharing platform built with React and Node.js. It features a React-based frontend for users to book rides, view available drivers, and manage ride details, while the Node.js/Express backend handles data management, ride processing, and server-side logic to provide a seamless ride-booking experience.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.bPo8o02r3QqUk6trAqGXAAHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "E-commerce Platform - Modern online store interface",
      technologies: ["React", "Node.js", "MongoDB", "JawaScript", "jwt"],
      githubUrl: "https://github.com/ankitgautam2003/Ride_IO.git",
      // liveUrl: "#",
    },
    {
      title: "Voxa",
      description:
        "Voxa is a Node.js framework that helps you build chat and voice apps for platforms like Alexa, Google Assistant, Messenger, and Telegram. It uses a simple structure to manage conversations, making it easy to create smart, interactive apps that work across different platforms.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/021/626/268/small_2x/system-artificial-intelligence-chatgpt-chat-bot-ai-technology-smart-robot-ai-chat-gpt-application-software-photo.jpg",
      alt: "AI Chat Assistant - Intelligent chatbot conversation interface",
      technologies: ["Node.js", "JavaScript", "React"],
      githubUrl: "https://github.com/ankitgautam2003/voxa.git",
      // liveUrl: "#",
    },
    {
      title: "TribeTalk",
      description:
        "TribeTalk is a full-stack Reddit-style discussion platform built with Flutter and Firebase. It features a responsive Flutter frontend for creating and managing communities, sharing posts in multiple formats, and engaging with others through voting and commenting, while Firebase powers authentication, user profiles, and theme customization to deliver a seamless interactive experience.",
      image:
        "https://thumbs.dreamstime.com/b/chat-logo-design-chatting-app-icon-bubble-speech-symbol-line-art-style-illustration-vector-226585557.jpg",
      alt: "Task Manager App - Kanban board project management interface",
      technologies: ["Dart", "Flutter", "Firebase", "Riverpod"],
      githubUrl: "https://github.com/ankitgautam2003/TribeTalk.git",
      // liveUrl: "#",
    },
    {
      title: "Weather_App",
      description:
        "Weather_App is a cross-platform weather application built with Flutter. It features a Flutter-based responsive interface for Android, iOS, web, and desktop platforms, providing users with a seamless foundation to display real-time weather data and interactive forecasts.",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.NbjnwMg18cby6dPXfW3rQgHaFj?cb=thfc1&w=1080&h=810&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Analytics Dashboard - Data visualization and reporting interface",
      technologies: ["Dart", "Flutter"],
      githubUrl: "https://github.com/ankitgautam2003/Weather_App.git",
      // liveUrl: "#",
    },
    {
      title: "FoodApp",
      description:
        "FoodApp is a cross-platform food application built with Flutter. It provides a responsive foundation for Android, iOS, web, and desktop platforms, serving as a starting point to build features like food browsing, ordering, and recipe management.",
      image:
        "https://shef.com/homemade-food/wp-content/uploads/filipino-food-philippines-history-homemade.jpeg",
      alt: "Social Media App - Mobile-first social networking interface",
      technologies: ["Dart", "Flutter"],
      githubUrl: "https://github.com/ankitgautam2003/FoodApp.git",
      // liveUrl: "#",
    },
    {
      title: "License-Plate-Detection-and-Validation",
      description:
        "Automatic-License-Plate-Detection-and-Validation is a Python-based computer vision project that leverages YOLOv5 for detecting vehicle license plates and Tesseract OCR for extracting plate numbers. Optimized for Google Colab, it supports custom datasets with automated train, validation, and test splits, providing an end-to-end solution for real-time license plate recognition and validation.",
      image:
        "https://s3.amazonaws.com/cms.iterate.ai/img_drive_thru_0dff0702e8.jpg",
      alt: "AI Chat Assistant - Intelligent chatbot conversation interface",
      technologies: [
        "python",
        "PyTorch",
        "YoloV5",
        "Tesseract",
        "OpenCV",
        "Numpy",
        "Pandas",
      ],
      githubUrl:
        "https://github.com/ankitgautam2003/Automatic-License-Plate-Detection-and-Validation.git",
      // liveUrl: "#",
    },
    {
      title: "Disease-prediction",
      description:
        "Disease-prediction is a personalized disease prediction platform built using AI. It features a Flask-based web interface that employs both environmental and genetic data models (via pre-trained classifiers like SVC, Random Forest, etc.) to predict medical conditions, offering a customized and data-driven diagnostic experience.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.p2GIZKc0TCHUj5eres2IuwHaEq?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Creative Portfolio - Modern designer portfolio website interface",
      technologies: [
        "Python",
        "TensorFlow / Keras",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "Jupyter Notebook",
      ],

      githubUrl: "https://github.com/ankitgautam2003/Disease-prediction.git",
      // liveUrl: "#",
    },
    {
      title: "Image-Forgery-Detection-and-Validation",
      description:
        "Image Forgery Detection and Validation is a Python-based project that uses Error Level Analysis and deep learning to detect and validate manipulated images through both Jupyter workflows and a simple GUI.",
      image:
        "https://c8.alamy.com/comp/2C2MCTT/magnifying-glass-with-id-card-icon-on-old-paper-with-red-vertical-line-background-identification-concept-2C2MCTT.jpg",
      alt: "Creative Portfolio - Modern designer portfolio website interface",
      technologies: ["Three.js", "GSAP", "Nuxt.js", "WebGL"],
      githubUrl:
        "https://github.com/ankitgautam2003/Image-Forgery-Detection-and-Validation.git",
      // liveUrl: "#",
    },
  ];

  // Only show first 3 projects if veiwall is false
  const displayedProjects = veiwall ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-secondary/30 section-fade ${
        hasIntersected ? "visible" : ""
      }`}
      data-testid="projects-section"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          data-testid="projects-title"
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
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
                <h3
                  className="text-xl font-semibold mb-2 gradient-text"
                  data-testid={`project-title-${index}`}
                >
                  {project.title}
                </h3>
                <p
                  className="text-muted-foreground mb-4"
                  data-testid={`project-description-${index}`}
                >
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
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`project-github-${index}`}
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "" && (
                    <a
                      href={project.liveUrl}
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`project-live-${index}`}
                    >
                      <i className="fas fa-external-link-alt text-lg"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 3 && (
          <div className="text-right mt-10">
            <button
              onClick={() => setveiwall(!veiwall)}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
            >
              {veiwall ? "Get back" : "Veiw all"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

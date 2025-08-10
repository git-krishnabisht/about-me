import { useEffect, useState } from "react";
import { QuoteSection } from "./components/QuoteSection";
import { DetailsSection } from "./components/DetailsSection";
import { NavBarSection } from "./components/NavbarSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { BlogSection } from "./components/BlogSection";
import { Footer } from "./components/FooterSection";

function AnimatedBackground({ theme }) {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < 120; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.2 + 0.3,
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 1.5 + 0.5,
        });
      }
      setDots(newDots);
    };

    generateDots();

    const interval = setInterval(() => {
      setDots(prevDots =>
        prevDots.map(dot => ({
          ...dot,
          x: (dot.x + dot.speedX + 100) % 100,
          y: (dot.y + dot.speedY + 100) % 100,
          opacity:
            Math.abs(Math.sin(Date.now() * 0.001 * dot.twinkleSpeed)) * 0.7 +
            0.3,
        }))
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const getBackgroundGradient = () => {
    return theme === "green"
      ? "bg-gradient-to-br from-black via-gray-950 to-slate-950"
      : "bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950";
  };

  const getOverlayGradient = () => {
    return theme === "green"
      ? "bg-gradient-to-tr from-emerald-950/15 via-transparent to-green-950/10"
      : "bg-gradient-to-tr from-blue-950/15 via-transparent to-indigo-950/10";
  };

  const getDotColor = () => {
    return theme === "green"
      ? { rgb: "34, 197, 94", color: "rgba(34, 197, 94, 1)" }
      : { rgb: "59, 130, 246", color: "rgba(59, 130, 246, 1)" };
  };

  const dotColor = getDotColor();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className={`absolute inset-0 ${getBackgroundGradient()}`}></div>
      <div className={`absolute inset-0 ${getOverlayGradient()}`}></div>

      {dots.map(dot => (
        <div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            background: `radial-gradient(circle, ${dotColor.color} 0%, ${dotColor.color.replace(
              "1)",
              "0.8)"
            )} 30%, transparent 70%)`,
            boxShadow: `
              0 0 ${dot.size * 3}px rgba(${dotColor.rgb}, 0.9),
              0 0 ${dot.size * 6}px rgba(${dotColor.rgb}, 0.4),
              0 0 ${dot.size * 12}px rgba(${dotColor.rgb}, 0.1)
            `,
            filter: "blur(0.2px)",
          }}
        />
      ))}

      <div
        className={`absolute top-1/4 right-1/3 w-96 h-96 ${theme === "green" ? "bg-green-500/2" : "bg-blue-500/2"
          } rounded-full blur-3xl`}
      ></div>
      <div
        className={`absolute bottom-1/3 left-1/4 w-64 h-64 ${theme === "green" ? "bg-emerald-400/2" : "bg-indigo-400/2"
          } rounded-full blur-2xl`}
      ></div>
    </div>
  );
}

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Load theme from localStorage on first render
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "green";
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "green" ? "blue" : "green";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Sync theme if changed from another tab
  useEffect(() => {
    const handleStorage = event => {
      if (event.key === "theme" && event.newValue) {
        setTheme(event.newValue);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground theme={theme} />
      <div className="relative z-10">
        {isDesktop && <QuoteSection theme={theme} />}
        <DetailsSection theme={theme} />
        <NavBarSection theme={theme} toggleTheme={toggleTheme} />
        <main>
          <AboutSection theme={theme} />
          <ProjectsSection theme={theme} />
          <SkillsSection theme={theme} />
          <BlogSection theme={theme} />
          <ContactSection theme={theme} />
        </main>
        <Footer theme={theme} />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;


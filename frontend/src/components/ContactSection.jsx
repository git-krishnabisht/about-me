import { useEffect, useRef } from "react";
import { useState } from "react";


function BlackHoleAnimation({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let time = 0;
    const particles = [];
    const particleCount = 150;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 150 + 50,
        speed: Math.random() * 0.02 + 0.005,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        spiralSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    const getParticleColors = () => {
      if (theme === 'green') {
        return {
          primary: "34, 197, 94",
          secondary: "52, 211, 153",
          tertiary: "167, 243, 208"
        };
      } else {
        return {
          primary: "59, 130, 246",
          secondary: "99, 102, 241",
          tertiary: "147, 197, 253"
        };
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const colors = getParticleColors();

      // Draw event horizon (black hole center)
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.5, 'rgba(0, 20, 10, 0.9)');
      gradient.addColorStop(1, 'rgba(0, 40, 20, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      // Draw accretion disk rings
      for (let ring = 0; ring < 3; ring++) {
        ctx.strokeStyle = `rgba(${colors.primary}, ${0.15 - ring * 0.04})`;
        ctx.lineWidth = 2 - ring * 0.5;
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          80 + ring * 40 + Math.sin(time * 0.5 + ring) * 10,
          (80 + ring * 40 + Math.sin(time * 0.5 + ring) * 10) * 0.3,
          Math.sin(time * 0.1) * 0.1,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      // Draw spiraling particles
      particles.forEach((particle, index) => {
        particle.angle += particle.spiralSpeed;
        particle.radius -= particle.speed * particle.radius * 0.02;

        if (particle.radius < 5) {
          // Reset particle
          particle.radius = Math.random() * 150 + 100;
          particle.angle = Math.random() * Math.PI * 2;
        }

        const x = centerX + Math.cos(particle.angle) * particle.radius;
        const y = centerY + Math.sin(particle.angle) * particle.radius * 0.3;

        // Particle glow
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 3);
        particleGradient.addColorStop(0, `rgba(${colors.primary}, ${particle.opacity})`);
        particleGradient.addColorStop(0.5, `rgba(${colors.secondary}, ${particle.opacity * 0.5})`);
        particleGradient.addColorStop(1, `rgba(${colors.primary}, 0)`);

        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(x, y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Particle core
        ctx.fillStyle = `rgba(${colors.tertiary}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw gravitational lensing effect
      ctx.strokeStyle = `rgba(${colors.primary}, 0.1)`;
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(
          centerX,
          centerY,
          50 + i * 30 + Math.sin(time + i) * 5,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      time += 0.01;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: '250px' }}
    />
  );
}

export function ContactSection({ theme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (req.ok) {
        console.log("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
        return;
      } else {
        console.error("Failed to send the message");
        return;
      }
    } catch (err) {
      console.log("Unexpected error occurred:", err);
    }
  };

  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        gradient: "bg-gradient-to-r from-green-400 to-emerald-300",
        border: "border-green-400/30",
        bgGradient: "from-transparent via-green-950/10 to-transparent",
        text: "text-green-200/90",
        cardBg: "bg-white/5 border-green-400/20",
        icon: "text-green-400",
        link: "text-green-400 hover:text-green-300",
        input: "border-green-400/30 text-green-100 placeholder-green-300/50 focus:border-green-400/60",
        button: "bg-green-500/30 border-green-400/40 text-green-100 hover:bg-green-500/40 hover:shadow-green-400/25"
      };
    } else {
      return {
        gradient: "bg-gradient-to-r from-blue-400 to-indigo-300",
        border: "border-blue-400/30",
        bgGradient: "from-transparent via-blue-950/10 to-transparent",
        text: "text-blue-200/90",
        cardBg: "bg-white/5 border-blue-400/20",
        icon: "text-blue-400",
        link: "text-blue-400 hover:text-blue-300",
        input: "border-blue-400/30 text-blue-100 placeholder-blue-300/50 focus:border-blue-400/60",
        button: "bg-blue-500/30 border-blue-400/40 text-blue-100 hover:bg-blue-500/40 hover:shadow-blue-400/25"
      };
    }
  };

  const classes = getThemeClasses();




  return (
    <section id="contact" className={`relative z-10 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 bg-gradient-to-b ${classes.bgGradient}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 border-b-2 ${classes.border} pb-3 sm:pb-4 ${classes.gradient} bg-clip-text text-transparent`}>
          Get In Touch
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch">
          <div className="lg:w-1/2 flex">
            <div className={`backdrop-blur-md ${classes.cardBg} border p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl flex-1 flex flex-col`}>
              <p className={`${classes.text} mb-6 text-sm sm:text-base leading-relaxed`}>
                Contact me if you think we can do better.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 ${classes.icon}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <a
                    href="mailto:krishnaasinghbisht@gmail.com"
                    className={`${classes.link} transition-colors text-sm sm:text-base`}
                  >
                    krishnaasinghbisht@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 ${classes.icon}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <a
                    href="https://github.com/git-krishnabisht"
                    className={`${classes.link} transition-colors text-sm sm:text-base`}
                  >
                    github.com/git-krishnabisht
                  </a>
                </div>
              </div>

              <div className={`relative overflow-hidden rounded-xl border ${theme === 'green' ? 'border-green-400/10' : 'border-blue-400/10'} bg-black/50 flex-1 min-h-[250px]`}>
                <BlackHoleAnimation theme={theme} />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex">
            <div className={`backdrop-blur-md ${classes.cardBg} border p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl flex-1`}>
              <form className="space-y-4 h-full flex flex-col" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="name" className={`block ${classes.text} mb-2 text-sm sm:text-base font-medium`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className={`w-full backdrop-blur-md bg-white/5 border ${classes.input} rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:bg-white/10 transition-all duration-300 text-sm sm:text-base`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block ${classes.text} mb-2 text-sm sm:text-base font-medium`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className={`w-full backdrop-blur-md bg-white/5 border ${classes.input} rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:bg-white/10 transition-all duration-300 text-sm sm:text-base`}
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className={`block ${classes.text} mb-2 text-sm sm:text-base font-medium`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleFormChange}
                    className={`w-full backdrop-blur-md bg-white/5 border ${classes.input} rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:bg-white/10 transition-all duration-300 text-sm sm:text-base resize-none flex-1`}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full backdrop-blur-md ${classes.button} border rounded-lg sm:rounded-xl px-4 py-3 font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm sm:text-base`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



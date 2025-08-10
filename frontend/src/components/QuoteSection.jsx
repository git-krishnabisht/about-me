export function QuoteSection({ theme }) {
  const getThemeClasses = () => {
    if (theme === "green") {
      return {
        border: "border-green-400/20",
        bg: "bg-gradient-to-r from-green-950/30 via-emerald-950/20 to-green-950/30",
        text: "text-green-200/90",
      };
    } else {
      return {
        border: "border-blue-400/20",
        bg: "bg-gradient-to-r from-blue-950/30 via-indigo-950/20 to-blue-950/30",
        text: "text-blue-200/90",
      };
    }
  };

  const classes = getThemeClasses();

  const quote =
    `"Behind it all is surely an idea so simple, so beautiful, that when we ` +
    `grasp it – in a decade, a century, or a millennium – we will all say to ` +
    `each other, how could it have been otherwise?" - John Archibald Wheeler, ` +
    `Annals of the New York Academy of Sciences, 480 (1986)`;

  return (
    <div className={`relative z-10 w-full overflow-hidden border-b ${classes.border}`}>
      <div
        className={`absolute inset-0 ${classes.bg} backdrop-blur-sm`}
        style={{ willChange: "transform" }}
      ></div>

      <div className="marquee-wrapper py-3 sm:py-4">
        <div className={`marquee-content ${classes.text}`}>
          <span className="marquee-text">{quote}</span>
          <span className="marquee-text">{quote}</span>
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: flex;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }

        .marquee-text {
          flex: 0 0 auto;
          padding: 0 2rem;
          font-size: clamp(0.875rem, 2vw, 1.5rem); /* matches your old text scaling */
          font-weight: 500;
        }

        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @media (max-width: 640px) {
          .marquee-content {
            animation-duration: 10s;
          }
        }

        @media (min-width: 1024px) {
          .marquee-content {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
}


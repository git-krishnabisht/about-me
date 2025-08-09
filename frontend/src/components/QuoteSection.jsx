export function QuoteSection({ theme }) {
  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        border: "border-green-400/20",
        bg: "bg-gradient-to-r from-green-950/30 via-emerald-950/20 to-green-950/30",
        text: "text-green-200/90"
      };
    } else {
      return {
        border: "border-blue-400/20",
        bg: "bg-gradient-to-r from-blue-950/30 via-indigo-950/20 to-blue-950/30",
        text: "text-blue-200/90"
      };
    }
  };

  const classes = getThemeClasses();

  return (
    <div className={`relative z-10 w-full overflow-hidden border-b ${classes.border} ${classes.bg} backdrop-blur-sm`}>
      <div className={`w-max animate-marquee text-sm sm:text-base md:text-xl lg:text-2xl px-4 sm:px-6 py-3 sm:py-4 font-medium ${classes.text}`}>
        "Behind it all is surely an idea so simple, so beautiful, that when we
        grasp it – in a decade, a century, or a millennium – we will all say to
        each other, how could it have been otherwise?" - John Archibald Wheeler,
        Annals of the New York Academy of Sciences, 480 (1986)
      </div>
    </div>
  );
}



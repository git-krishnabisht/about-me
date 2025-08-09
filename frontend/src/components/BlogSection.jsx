export function BlogSection({ theme }) {
  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        gradient: "bg-gradient-to-r from-green-400 to-emerald-300",
        border: "border-green-400/30",
        cardBg: "bg-white/5 border-green-400/20",
        title: "text-green-300",
        text: "text-green-200/70"
      };
    } else {
      return {
        gradient: "bg-gradient-to-r from-blue-400 to-indigo-300",
        border: "border-blue-400/30",
        cardBg: "bg-white/5 border-blue-400/20",
        title: "text-blue-300",
        text: "text-blue-200/70"
      };
    }
  };

  const classes = getThemeClasses();

  return (
    <section id="blog" className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 border-b-2 ${classes.border} pb-3 sm:pb-4 ${classes.gradient} bg-clip-text text-transparent`}>
          Blogs
        </h2>
        <div className={`backdrop-blur-md ${classes.cardBg} border p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl text-center`}>
          <h3 className={`text-xl sm:text-2xl ${classes.title} font-semibold`}>Cooking 🍲 . . . .</h3>
          {/* <p className={`${classes.text} mt-4 text-sm sm:text-base`}> */}
          {/* </p> */}
        </div>
      </div>
    </section>
  );
}

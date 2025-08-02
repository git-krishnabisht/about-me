import "./App.css";
import { QuoteSection } from "./components/QuoteSection";
import { DetailsSection } from "./components/DetailsSection";
import { NavBarSection } from "./components/NavbarSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { BlogSection } from "./components/BlogSection";
import { FooterSection } from "./components/FooterSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <QuoteSection />
      <DetailsSection />
      <NavBarSection />
      <main>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <ExperienceSection /> */}
        {/* { <Testing/> } */}
        <BlogSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;

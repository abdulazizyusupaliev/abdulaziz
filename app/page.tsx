import { Contact } from "@/components/sections/contact/Contact";
import { Education } from "@/components/sections/education/Education";
import { Experience } from "@/components/sections/experience/Experience";
import { Hero } from "@/components/sections/hero/Hero";
import { WelcomeIntro } from "@/components/sections/hero/WelcomeIntro";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Projects } from "@/components/sections/projects/Projects";
import { Skills } from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#161616] text-white">
      <WelcomeIntro />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

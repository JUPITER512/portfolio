import ContactForm from "@pages/Form/ContactForm";
import Experience from "@pages/Experience/Experience";
import Hero from "@pages/Hero/Hero";
import About from "@pages/About/About";
import Projects from "@pages/Projects/Projects";
import Skills from "@pages/Skills/Skills";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import Seo from "@components/Seo";

const Home = () => {
  return (
    <>
      <Seo />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;

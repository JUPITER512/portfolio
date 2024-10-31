  import ContactForm from "@pages/Form/ContactForm";
  import Experience from "@pages/Experience/Experience";
  import Hero from "@pages/Hero/Hero";
  import Projects from "@pages/Projects/Projects";
  import Skills from "@pages/Skills/Skills";
  import { Header } from "@components/Header";
  
  const Home = () => {
    return (
      <>
          <Header/>
          <Hero/>
          <Experience/>
          <Projects/>
          <Skills/>
          <ContactForm/>
      </>
    )
  }

  export default Home
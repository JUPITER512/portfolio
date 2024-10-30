  import ContactForm from "@pages/Form/ContactForm";
  import Experience from "@pages/Experience/Experience";
  import Hero from "@pages/Hero/Hero";
  import Projects from "@pages/Projects/Projects";
  import Skills from "@pages/Skills/Skills";
  import { Header } from "@components/Header";
  
  const Home = () => {
    return (
      <>
          <img src="./favicon.png" alt="ali-murtaza-portfolio" className="fixed h-20 w-20 rounded-full right-2 top-2 z-[2222222222222222]"/>
          <div className="fixed top-[55%] md:top-[60%] z-50 left-[50%] translate-x-[-50%]" >
          <Header/>
          </div>
          <Hero/>
          <Experience/>
          <Projects/>
          <Skills/>
          <ContactForm/>
      </>
    )
  }

  export default Home
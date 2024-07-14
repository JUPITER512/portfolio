import Aboutme from "../../Components/Aboutme";
import ContactMe from "../../Components/ContactMe";
import Hero from "../../Components/Hero";
import PreviousProjects from "../../Components/PreviousProjects";
import Sidebar from "../../Components/Sidebar";
import Techstack from "../../Components/Techstack";
import ThemeSwitcher from "../../Components/ThemeSwitcher";

const Home = () => {
  const {SwitcherComponent } = ThemeSwitcher();

  return (
    <div className=" h-screen w-[100%]">
      {SwitcherComponent}
      <Sidebar />
      <Hero/>
      <Aboutme/>
      
      {/* <Techstack/> */}
      <PreviousProjects/>
      <ContactMe/>
    </div>
  );
};

export default Home;

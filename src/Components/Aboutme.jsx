import { motion } from "framer-motion";
import Slider from "./Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faPython, faNodeJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faWind } from "@fortawesome/free-solid-svg-icons";

const images1 = [
  { src: "./js.png", alt: "JavaScript" },
  { src: "./react.png", alt: "React" },
  { src: "./recoil.svg", alt: "Recoil" },
  { src: "./node-js.png", alt: "Node" },
  { src: "./express.png", alt: "Express" },
  { src: "./mysql.png", alt: "MySql" },
  { src: "./redux.png", alt: "Redux" },
  { src: "./next.png", alt: "Next" },
  { src: "./mongodb.png", alt: "Mongo" },
];
const images2 = [
  { src: "./tailwind.png", alt: "tailwind" },
  { src: "./prisma.webp", alt: "prisma" },
  { src: "./postger.png", alt: "postger" },
  { src: "./mui.png", alt: "mui" },
  { src: "./docker.webp", alt: "Docker" },
  { src: "./ts.png", alt: "TS" },
  { src: "./css.png", alt: "CSS" },
  { src: "./Firebase.png", alt: "Next" },
  { src: "./mongodb.png", alt: "Mongo" },
];
const Aboutme = () => {
  return (
    <motion.div
      className="bg-blue-300/55 dark:bg-gray-950 flex flex-col items-center px-4 md:py-8 md:px-8 text-white "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="AboutMe"
    >
      <div
        className="  w-full text-center
       items-center justify-between md:px-20"
      >
        <h2 className="text-4xl font-OpenSans italic dark:text-white text-black">
          About Me
        </h2>
        <p className=" font-OpenSans  py-10 text-center leading-8 dark:text-white text-black">
          Innovative and detail-oriented Software Engineer with over a year of
          hands-on experience in developing full-stack applications using the
          MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled in
          creating web automation, and data scraping solutions. Proficient in
          JavaScript, TailwindCss, and Python for web automation. Demonstrated
          ability to lead and collaborate on diverse projects, developing
          user-friendly interfaces. Strong problem-solving skills, with a focus
          on delivering high-quality, user-centric solutions. Adept at working
          in fast-paced environments and committed to continuous learning and
          improvement.
        </p>
        <div className="space-y-8">
          <div className="space-y-8">
            <div className="flex justify-center items-center">
              <Slider
                animation="animate-infinite-scroll-rtl"
                images={images1}
              />
            </div>
            <div className="flex justify-center items-center">
              <Slider
                animation="animate-infinite-scroll-ltr"
                images={images2}
              />
            </div>
          </div>

          <div className="my-5 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl md:text-2xl lg:text-4xl my-4">Education/Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-gray-700">Bachelor of Science in Computer Science<br />University of Lahore</p>
              </div>

              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none px-4 py-2">
                  <li className="flex items-center justify-center py-2 px-3 bg-blue-500 text-white rounded-lg"><FontAwesomeIcon icon={faHtml5} className="mr-2" /> HTML</li>
                  <li className="flex items-center justify-center py-2 px-3 bg-purple-500 text-white rounded-lg"><FontAwesomeIcon icon={faCss3} className="mr-2" /> CSS</li>
                  <li className="flex items-center justify-center py-2 px-3 bg-yellow-500 text-white rounded-lg"><FontAwesomeIcon icon={faJs} className="mr-2" /> JavaScript</li>
                  <li className="flex items-center justify-center py-2 px-3 bg-green-500 text-white rounded-lg"><FontAwesomeIcon icon={faPython} className="mr-2" /> Python</li>
                  <li className="flex items-center justify-center py-2 px-3 bg-indigo-500 text-white rounded-lg"><FontAwesomeIcon icon={faNodeJs} className="mr-2" /> Node.js</li>
                  <li className="flex items-center justify-center py-2 px-3 bg-pink-500 text-white rounded-lg"><FontAwesomeIcon icon={faReact} className="mr-2" /> React.js</li>
                  <li className="flex items-center justify-center py-2 px-3 bg-red-500 text-white rounded-lg"><FontAwesomeIcon icon={faDatabase} className="mr-2" /> MySQL</li>
                  <li className="flex items-center justify-center py-2 px-3 bg-teal-500 text-white rounded-lg"><FontAwesomeIcon icon={faWind} className="mr-2" /> Tailwind CSS</li>
                  <li className="flex items-center justify-center py-2 px-3 bg-orange-500 text-white rounded-lg"><FontAwesomeIcon icon={faNode} className="mr-2" /> Next.js</li>
                  <li className="flex items-center justify-center py-2 px-3 bg-gray-500 text-white rounded-lg"><FontAwesomeIcon icon={faNodeJs} className="mr-2" /> Express.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      

      </div>
    </motion.div>
  );
};

export default Aboutme;

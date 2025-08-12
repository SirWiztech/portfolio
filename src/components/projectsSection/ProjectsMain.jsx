import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Bank App",
    year: "Jan2024",
    align: "left",
    image: "../../public/images/BANK.png",
    link: "https://nova.karamelscript.com.ng/",
  },
  {
    name: "Quizify App",
    year: "Mar2025",
    align: "right",
    image: "../../public/images/quizify.png",
    link: "https://quizzify2025.netlify.app/",
  },
  {
    name: "GIFT CARD App",
    year: "Sept2024",
    align: "left",
    image: "../../public/images/giftcard.png",
    link: "https://webtechs.com.ng/bitbounty/",
  },
  {
    name: "Ethereal landing Page",
    year: "May2025",
    align: "right",
    image: "../../public/images/ethereal.png",
    link: "https://ethereal-book-slot.netlify.app/",
  },
  {
    name: "Investment App",
    year: "March2025",
    align: "left",
    image: "../../public/images/investment.png",
    link: "https://rankhyip.webblog.top/",
  },
  {
    name: "Web3 App",
    year: "Aug2025",
    align: "right",
    image: "../../public/images/web3.png",
    link: "https://bitweb.karamelscript.com.ng/",
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} // <-- This is the added line
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;  
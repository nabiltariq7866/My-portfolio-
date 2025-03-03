import React from "react";
import Heading from "../components/Heading";
import FunFects from "./FunFects";
import Achivements from "./Achivements";
import ScrollingText from "../components/ScrollingText";
import MySkill from "./MySkill";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import HeptaImage from "../assets/Hepta.png"; // Adjust path based on your file structure
import Experiences from "./WorkExperience";

const data = [
  {
    id: 1,
    category: "Web Design",
    title: "Hepta : Travel & Tours",
    img: HeptaImage, // Correct way to import image
    isFirst: true,
    description: [
      "Thrilled to unveil my latest front-end project: HEPTA - TRAVEL AND TOUR! 🌍",
      "This website is crafted to elevate the travel planning experience with a seamless, intuitive design.",
      "From exploring destinations to booking the perfect getaway, HEPTA makes it effortless and enjoyable.",
    ],
    client: "MST",
    duration: "2 weeks",
    task: "UI/UX Frontend",
    budget: "$2000",
    link: "https://nabiltariq7866.github.io/Hepta/",
    code: "https://github.com/nabiltariq7866/Hepta",
  },
  {
    id: 2,
    category: "Web Design",
    title: "Hepta : Travel & Tours",
    img: HeptaImage, // Correct way to import image
    isFirst: false,
    description: [
      "Thrilled to unveil my latest front-end project: HEPTA - TRAVEL AND TOUR! 🌍",
      "This website is crafted to elevate the travel planning experience with a seamless, intuitive design.",
      "From exploring destinations to booking the perfect getaway, HEPTA makes it effortless and enjoyable.",
    ],
    client: "MST",
    duration: "2 weeks",
    task: "UI/UX Frontend",
    budget: "$2000",
    link: "https://nabiltariq7866.github.io/Hepta/",
    code: "https://github.com/nabiltariq7866/Hepta",
  },
];
const workData = [
  {
    id: 1,
    category: "Software Engineering Intern",
    company: "MilrostarTech",
    duration: "Oct 2024 - Feb 2025",
    description:
      "I contributed to the development of dynamic and responsive web applications using React.js, TypeScript, and Material-UI (MUI)",
  },
  {
    id: 2,
    category: "Frontend Developer Intern",
    company: "EcodeCamp",
    duration: "Sep 2024 - Oct 2024",
    description:
      "I gained hands-on experience in JavaScript and React.js, building dynamic web applications. Real-world projects enhanced my technical skills and prepared me for frontend development challenges.",
  },
  {
    id: 3,
    category: "Frontend Developer Intern",
    company: "Eziline Software House Pvt Ltd",
    duration: "Mar 2024 - Aug 2024",
    description:
      "I gained hands-on experience in JavaScript, building dynamic and responsive web applications. Contributing to real-world projects deepened my technical expertise and prepared me for future challenges in frontend development.",
  },
];
const educationData = [
  {
    id: 1,
    category: "BS Information Technology",
    company: "Punjab University",
    duration: "2020 - 2024",
    description:
      "I gained a strong foundation in software development, database management, networking, and system analysis during my BS IT degree. Through hands-on projects, I developed skills in React, DSA, JavaScript, MySQL, Git, and cloud platforms, enhancing my technical expertise and problem-solving abilities for a career in tech.",
  },
  {
    id: 2,
    category: "Basic IT & Graphic Design",
    company: "ILM-O-HUNHAR Fundation",
    duration: "Jan 2015 - Jul 2015",
    description:
      "I gained hands-on experience in JavaScript and React.js, building dynamic and responsive web applications. Contributing to real-world projects deepened my technical expertise and prepared me for future challenges in frontend development.",
  },
];
const Work = () => {
  return (
    <>
      <section
        id="Work"
        className="max-w-[1350px] mx:px-4 h-full mx-auto mt-40"
      >
        <Heading subHeading={"Portfolio"} heading={"My Recent Works"} />
        <div className=" w-full h-full mt-20">
          {data.map((project) => (
            <Projects key={project.id} project={project} isFirst={true} />
          ))}
        </div>
      </section>
      <FunFects />
      <div className="max-w-[1350px] mx:px-4 h-full mx-auto">
        <Achivements />
        <Experiences
          heading={"Work Experience"}
          subHeading={"My Experience"}
          workData={workData}
          desri={
            "I specialize in React.js, TypeScript, Redux, and MUI, building interactive, user-friendly web applications. My focus is on seamless UI/UX, performance optimization, and responsiveness, delivering high-quality digital experiences that engage users. 🚀"
          }
        />
        <Experiences
          heading={"Education"}
          subHeading={"My Education"}
          rowReverse={true}
          desri={
            "Education has been the foundation of my growth, equipping me with the knowledge and skills to excel in the ever-evolving field of technology. Each milestone has deepened my understanding and fueled my passion for innovation. Below is a summary of my educational journey."
          }
          workData={educationData}
        />
      </div>
      <ScrollingText />
      <div className=" min-h-screen flex items-center justify-center relative overflow-hidden">
        <MySkill />
        <p
          className="hidden md:block text-[200px] lg:text-[300px] font-jost text-[#e2ecf6] absolute bottom-[-10%]
        md:bottom-[-19%] left-0  z-0"
        >
          Skills
        </p>
      </div>
    </>
  );
};

export default Work;

import React from "react";
import Heading from "../components/Heading";
import AchiedTasks from "./AchiedTasks";
import mstLogo from "../assets/mst.png";
import AchivedTasks from "./AchiedTasks";
const data = [
  {
    id: 1,
    category: "Software Engineering intern",
    location: "Lahore, Pakistan",
    img: mstLogo, // Correct way to import image
    isFirst: true,
    description:
      "I contributed to the development of dynamic and responsive web applications using React.js, TypeScript, and Material-UI (MUI)",
    company: "MikrostarTech",
    duration: "4 month",
  },
];

const Achivements = () => {
  console.log(data);
  return (
    <div className="my-36">
      <Heading
        subHeading={"Success Stories"}
        heading={"Awards & Achivements"}
      />
      <div className=" w-full h-full mt-20">
        {data.map((goal) => (
          <AchivedTasks key={goal.id} achivement={goal} />
        ))}
      </div>
    </div>
  );
};

export default Achivements;

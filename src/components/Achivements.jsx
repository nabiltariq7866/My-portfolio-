import React from "react";
import Heading from "./Heading";
import AchiedTasks from "./AchiedTasks";

const Achivements = () => {
  return (
    <div className="my-36">
      <Heading subHeading={"Success Stories"} heading={"Awards & Achivements"}/>
      <div className=' w-full h-full mt-20'>
      <AchiedTasks isFirst={true}/>
      <AchiedTasks />
      <AchiedTasks />
      <AchiedTasks />
      </div>
    </div>
  );
};

export default Achivements;

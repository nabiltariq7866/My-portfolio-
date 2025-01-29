import React from "react";
const ServiceCard = ({title,description,icon}) => {
  return (
    <div className="p-3 flex-shrink-0 flex-grow-0 basis-full md:basis-1/2">
      <div className="bg-white px-5 pt-11 pb-7 lg:px-[50px] lg:pt-[65px] lg:pb-[55px] rounded-xl">
        <div className="flex flex-col lg:flex-row">
          <div className="px-3 mb-7 lg:basis-1/4 ml-2 lg:mb-0 lg:ml-0 flex-shrink-0 flex-grow-0 basis-1/3 max-w-[34%]">
            <img src={icon} alt="Services" className=""/>
          </div>
          <div className="px-3 ml-2">
            <h1 className="text-[#2e2e37] text-2xl md:text-3xl flex-shrink-0 font-jost font-medium hover:text-[#80DB66] transition duration-200 cursor-pointer">
              {title}
            </h1>
            <p className="text-[#4d4d5c] mt-4 text-[17px] md:text-[19px] font-OpenSans leading-7">
             {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

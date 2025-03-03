import React from "react";

const Button = ({ children, mt, px }) => {
  return (
    <button
      type="button"
      className={`
        btn-4 uppercase overflow-hidden text-white 
        py-2 md:py-[10px] lg:py-3 
        ${px ? "px-4" : "px-6 md:px-[35px]"} 
        rounded text-base md:text-lg lg:text-xl 
        font-medium cursor-pointer 
        ${mt ? "mt-0" : "mt-4 md:mt-6"} 
        btn relative bg-[#80DB66] 
        hover:bg-[#6cc355] transition-colors duration-300
      `}
    >
      <span className="z-20">{children}</span>
    </button>
  );
};

export default Button;

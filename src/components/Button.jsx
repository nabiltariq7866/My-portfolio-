import React from "react";

const Button = ({ children, mt }) => {
  return (
    <button
      type="button"
      className={`btn-4 uppercase overflow-hidden text-white py-[10px] px-[35px] rounded text-xl font-medium cursor-pointer ${
        mt ? "mt-0" : "mt-6"
      } btn  relative bg-[#80DB66]`}
    >
      <span className="z-20">{children}</span>
    </button>
  );
};

export default Button;

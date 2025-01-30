import React from "react";

const Input = ({ type, name, placeholder }) => {
  return (
    <div class="xl:w-[48.9%] lg:w-1/2 md:w-1/2 sm:w-1/2 w-full  ">
      <input
        id="inputName"
        type={type}
        name={name}
        placeholder={placeholder}
        maxlength="400"
        class="w-full border border-[#c8ccd4] text-[#9b9db1] text-lg font-OpenSans rounded-md px-5 py-4 focus:outline-none focus:ring-[1px] focus:ring-[#80DB66]"
      />
    </div>
  );
};

export default Input;

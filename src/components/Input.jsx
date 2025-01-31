import React from "react";

const Input = ({ type, name, placeholder }) => {
  return (
    <div class="md:basis-[48.9%] xl:basis-[49%] lg:basis-[48.6%]  w-full ">
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

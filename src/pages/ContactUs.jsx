import React from "react";
import Heading from "../components/Heading";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Input from "../components/Input";
import Button from "../components/Button";
import ScrollingText from "../components/ScrollingText";
const contactInfo = [
  {
    heading: "Location",
    value: "35km SKB, Lahore, Pakistan",
    icon: <FaLocationDot />, // Replace with an actual icon component if using a UI library
  },
  {
    heading: "Phone",
    value: "+923034474859",
    icon: <FaPhoneAlt />,
  },
  {
    heading: "Email",
    value: "nabiltariq7866@gmail.com",
    icon: <MdEmail />,
  },
];
const ContactUs = () => {
  return (
    <div className="my-40 w-screen ">
      <div className="max-w-[1350px] md:px-4  mx-auto">
        <Heading
          subHeading={"Contact Me"}
          heading={"Let's Start A New Project"}
        />
        <div className="flex flex-wrap justify-between">
          <div className="flex-shrink-0 px-3 flex-grow-0 lg:basis-2/5 h-full">
            <div className="mt-[70px] ">
              {contactInfo.map(({ heading, value, icon }) => (
                <div key={heading} className="flex mt-5">
                  <div className="w-[72px] flex items-center justify-center mr-8 h-[72px] rounded-full bg-[#80DB66]">
                    <span className="text-white text-2xl">{icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl  md:text-3xl mb-2 text-[#2e2e37] font-jost font-medium">
                      {heading}
                    </h3>
                    <h4 className="text-[18px] md:text-xl mb-2 text-[#4d4d5c] font-jost">
                      {value}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 px-3 flex-grow-0  lg:basis-1/2 h-full">
            <div className="mt-[70px]">
              <form className="flex flex-wrap gap-3 ">
                <Input type={"text"} name={"name"} placeholder={"Your Name"} />
                <Input
                  type={"email"}
                  name={"email"}
                  placeholder={"Your Email"}
                />
                <Input type={"tel"} name={"phone"} placeholder={"Your Phone"} />
                <Input
                  type={"text"}
                  name={"subject"}
                  placeholder={"Your Subject"}
                />
                <div class="w-full">
                  <textarea
                    id="inputMessage"
                    name="your-message"
                    placeholder="Start writing message here"
                    maxlength="2000"
                    rows="6"
                    class="w-full h-[148px] border border-[#c8ccd4] text-[#9b9db1] text-lg font-[Open_Sans] rounded-md px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <Button mt={true}>Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import img from "../assets/testimonial-icon.png";
import img1 from "../assets/authorimg.jpg";
function CardTestimonial({ avatar, name, message, designation, location }) {
  return (
    <div className="flex mt-10 pb-[52px] px-3">
      <div>
        <img src={img} alt="" className="w-40" />
      </div>
      <div className="ml-10">
        <p className="text-[#4d4d5c] italic -mt-2 font-normal text-[17px] md:text-[24px] font-OpenSans leading-[39px]">
          {message}
        </p>
        <div className="mt-10 flex">
          <img src={img1} alt="" className="w-16 h-16 rounded-full  " />
          <div className="ml-6">
            <h3 className="text-2xl  md:text-3xl mb-2 text-[#2e2e37] font-jost font-medium">
              {name}
            </h3>
            <h4 className="text-[18px] md:text-xl mb-2 text-[#9B9DB1] font-jost">
              {designation}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTestimonial;
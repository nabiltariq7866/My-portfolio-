import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const socialIcons = [
  { id: "facebook", icon: <FaFacebookF />, color: "bg-blue-600" },
  { id: "twitter", icon: <FaTwitter />, color: "bg-blue-400" },
  { id: "linkedin", icon: <FaLinkedinIn />, color: "bg-blue-700" },
  { id: "youtube", icon: <FaYoutube />, color: "bg-pink-600" },
];
const Footer = () => {
  return (
    <footer className="overflow-hidden  text-black ">
      <div className="max-w-[1350px] md:px-4 pt-28 pb-20  mx-auto border-t border-[#c8ccd4]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Copyright */}
          <div>
            <div className="mb-6">
              <a href="">
                <div className="flex h-full px-1">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-8 mr-1 mt-[-8px] xl:w-12"
                  />
                  <div className="text-3xl text-black font-kiwi mt-[-10px] xl:text-5xl">
                    abil
                  </div>
                </div>
              </a>
            </div>
            <p className="text-sm">
              All rights reserved &copy; {new Date().getFullYear()}
            </p>
          </div>
          {/* Newsletter */}
          <div className="w-[70%]">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="relative">
              <input
                type="email"
                placeholder="Submit your email"
                className="w-full px-4 py-3 rounded-md border border-gray-600 bg-white text-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#80DB66]"
              >
                <MdOutlineEmail />
              </button>
            </form>
          </div>
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <ul className="pr-3 md:pr-9 lg:pr-3 xl:pr-16 flex gap-2">
              {socialIcons.map(({ id, icon, color }) => (
                <li
                  key={id}
                  className={`w-10 h-10 my-[10px]  rounded-full text-white text-xl flex items-center justify-center cursor-pointer transition-transform duration-500  ease-in-out liRotates ${color}`}
                >
                  <span className={`fbrotate`}>{icon}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

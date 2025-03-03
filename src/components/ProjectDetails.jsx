import React from "react";

import Button from "../components/Button";
import {
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const socialIcons = [
  {
    id: "facebook",
    icon: <FaFacebookF />,
    color: "bg-blue-600",
    link: "https://www.facebook.com/",
  },
  {
    id: "twitter",
    icon: <FaTwitter />,
    color: "bg-blue-400",
    link: "https://twitter.com/",
  },
  {
    id: "linkedin",
    icon: <FaLinkedinIn />,
    color: "bg-blue-700",
    link: "https://www.linkedin.com/",
  },
  {
    id: "youtube",
    icon: <FaYoutube />,
    color: "bg-pink-600",
    link: "https://www.youtube.com/",
  },
];

const ProjectDetails = ({ data, setModal }) => {
  return (
    <div className="h-screen w-full sm:w-[1100px] bg-white mx-auto overflow-hidden">
      <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
        {/* Close Icon */}
        <div className="flex justify-end pt-3 pr-4 sm:pr-6 md:pr-10">
          <button
            type="button"
            className="inline-block p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
            onClick={() => setModal(false)}
          >
            <span aria-hidden="true">
              <FaTimes className="text-xl" />
            </span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="border-0 flex-1 overflow-auto">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
            {/* Blog Modal Image */}
            <div className="blog-modal-img mb-6 sm:mb-8">
              <img
                decoding="async"
                className="w-full rounded-lg"
                src={data.img}
                alt="Project Image"
              />
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Left Column (Content) */}
              <div className="w-full lg:w-7/12">
                <div className="content-wrapper">
                  <h2 className="modal-title text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    {data.title}
                  </h2>
                  {data.description.map((descri) => (
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      {descri}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Column (Meta Information) */}
              <div className="w-full lg:w-5/12">
                <div className="meta-wrapper bg-gray-100 rounded-lg p-6 sm:p-8">
                  <ul className="item-meta space-y-3 sm:space-y-4">
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        Project Type :
                      </span>
                      <span className="pl-2 text-gray-600 text-sm sm:text-base">
                        {data.category}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        Client :
                      </span>
                      <span className="pl-2 text-gray-600 text-sm sm:text-base">
                        {data.client}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        Duration :
                      </span>
                      <span className="pl-2 text-gray-600 text-sm sm:text-base">
                        {data.duration}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        Task :
                      </span>
                      <span className="pl-2 text-gray-600 text-sm sm:text-base">
                        {data.task}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        Budget :
                      </span>
                      <span className="pl-2 text-gray-600 text-sm sm:text-base">
                        {data.budget}
                      </span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <a href={data.link} target="_blank">
                      <Button className="mt-6 w-full sm:w-auto" px={true}>
                        View Live
                      </Button>
                    </a>
                    <a href={data.code} target="_blank">
                      <Button className="mt-6 w-full sm:w-auto" px={true}>
                        View Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="pro-modal-footer mt-6 sm:mt-8 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
                {/* Tags */}
                <div className="w-full sm:w-7/12">
                  <div className="modal-tags flex flex-wrap items-center pt-4 sm:pt-6">
                    <h6 className="mb-0 pr-4 text-gray-800 text-sm sm:text-base">
                      Tags :
                    </h6>
                    <ul className="tag-list flex flex-wrap">
                      <li className="pr-3 sm:pr-4">
                        <span className="text-gray-600 text-sm sm:text-base">
                          Web Design
                        </span>
                      </li>
                      <li className="pr-3 sm:pr-4">
                        <span className="text-gray-600 text-sm sm:text-base">
                          Social Media
                        </span>
                      </li>
                      <li className="pr-3 sm:pr-4">
                        <span className="text-gray-600 text-sm sm:text-base">
                          Product
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Social Links */}
                <div className="w-full sm:w-5/12">
                  <div className="pro-modal-social-link flex items-center justify-start sm:justify-end pt-4 sm:pt-6">
                    <h6 className="pr-3 font-semibold text-gray-700 text-sm sm:text-base">
                      Share this product :
                    </h6>
                    <ul className="pr-3 md:pr-9 lg:pr-3  xl:pr-16 flex gap-2">
                      {socialIcons.map(({ id, icon, color, link }) => (
                        <a
                          target="_blank"
                          href={link}
                          key={id}
                          className={`w-10 h-10 my-[10px]  rounded-full text-white text-xl flex items-center justify-center cursor-pointer transition-transform duration-500  ease-in-out liRotates ${color}`}
                        >
                          <span className={`fbrotate`}>{icon}</span>
                        </a>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

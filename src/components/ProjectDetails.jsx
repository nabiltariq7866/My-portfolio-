import React from 'react'

import Button from "../components/Button"
import { FaTimes, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
const ProjectDetails = () => {
  return (
    <div className="h-screen w-full sm:w-[1100px] bg-white mx-auto overflow-hidden">
    <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
      {/* Close Icon */}
      <div className="flex justify-end pt-3 pr-4 sm:pr-6 md:pr-10">
        <button
          type="button"
          className="inline-block p-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
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
              src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/port-img1-large.jpg"
              alt="Project Image"
            />
          </div>

          {/* Content Wrapper */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Left Column (Content) */}
            <div className="w-full lg:w-7/12">
              <div className="content-wrapper">
                <h2 className="modal-title text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  eThemeStudio Custom CMS
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium
                  fuga molestiae, aut eius minus reprehenderit.
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-0">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
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
                    <span className="pl-2 text-gray-600 text-sm sm:text-base">Graphic Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">Client :</span>
                    <span className="pl-2 text-gray-600 text-sm sm:text-base">Juwel Khan</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">
                      Duration :
                    </span>
                    <span className="pl-2 text-gray-600 text-sm sm:text-base">2 Weeks</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">Task :</span>
                    <span className="pl-2 text-gray-600 text-sm sm:text-base">UI/UX, Frontend</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">Budget :</span>
                    <span className="pl-2 text-gray-600 text-sm sm:text-base">$2000</span>
                  </li>
                </ul>
                <a href="?project=connect-craft-reading-the-smart-experience">
                  <Button className="mt-6 w-full sm:w-auto">View Live</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="pro-modal-footer mt-6 sm:mt-8 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
              {/* Tags */}
              <div className="w-full sm:w-7/12">
                <div className="modal-tags flex flex-wrap items-center pt-4 sm:pt-6">
                  <h6 className="mb-0 pr-4 text-gray-800 text-sm sm:text-base">Tags :</h6>
                  <ul className="tag-list flex flex-wrap">
                    <li className="pr-3 sm:pr-4">
                      <span className="text-gray-600 text-sm sm:text-base">Web Design</span>
                    </li>
                    <li className="pr-3 sm:pr-4">
                      <span className="text-gray-600 text-sm sm:text-base">Social Media</span>
                    </li>
                    <li className="pr-3 sm:pr-4">
                      <span className="text-gray-600 text-sm sm:text-base">Product</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Links */}
              <div className="w-full sm:w-5/12">
                <div className="pro-modal-social-link flex items-center justify-start sm:justify-end pt-4 sm:pt-6">
                  <h6 className="pr-4 mb-0 text-blue-500 text-sm sm:text-base">
                    Share this product :
                  </h6>
                  <ul className="social-link flex space-x-3 sm:space-x-4">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="text-blue-600 hover:text-blue-800 transition duration-300"
                      >
                        <FaFacebookF className="text-lg sm:text-xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="text-blue-400 hover:text-blue-600 transition duration-300"
                      >
                        <FaTwitter className="text-lg sm:text-xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://google.com/"
                        className="text-red-500 hover:text-red-700 transition duration-300"
                      >
                        <FaGooglePlusG className="text-lg sm:text-xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="text-blue-700 hover:text-blue-900 transition duration-300"
                      >
                        <FaLinkedinIn className="text-lg sm:text-xl" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectDetails

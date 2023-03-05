import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 ">
      <hr className="my-6 border-blueGray-300" />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 ">
              <button
                className="bg-white shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                type="button"
              >
                <a className="text-blue-400 " href="https://twitter.com">
                  <TwitterIcon />
                </a>
              </button>
              <button
                className="bg-white shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                type="button"
              >
                <a className="text-blue-800" href="https://he-il.facebook.com/">
                  <FacebookIcon />
                </a>
              </button>
              <button
                className="bg-white shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                type="button"
              >
                <a href="https://github.com/">
                  <GitHubIcon />
                </a>
              </button>
              <button
                className="bg-white shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                type="button"
              >
                <a className="text-blue-900" href="https://www.linkedin.com/">
                  <LinkedInIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blue-600 hover:underline font-semibold block pb-2 text-sm"
                      href=""
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blue-600 hover:underline font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blue-600 hover:underline font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Our team
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blue-600 hover:underline font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Free consultation{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blue-600 hover:underline font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Business License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blue-600 hover:underline font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blue-600 hover:underline font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blue-600 hover:underline font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span> belongs to the
              authors
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

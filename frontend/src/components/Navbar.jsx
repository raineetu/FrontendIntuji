import React, { useEffect } from "react";
import { FaPlay, FaBars, FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200,    
      easing: "ease-in-out",
      once: false,    
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="px-4 md:px-24 w-full h-[85vh] md:h-[103vh]"
        data-aos="fade-right"
        style={{
          background:
            "linear-gradient(292.12deg, #62BADA -35.02%, #C9E7F2 78.96%)",
        }}
      >
        <div className="flex items-center justify-between p-6 font-roboto mx-9">
          {/* Left Section */}
          <h2 className="font-bold text-lg">AR SHAKIR</h2>

          {/* Middle Section */}
          <div className="hidden md:flex w-1/3">
            <ul className="flex justify-center space-x-8">
              <li className="cursor-pointer" data-aos="fade-down">
                Product
              </li>
              <li className="cursor-pointer" data-aos="fade-down">
                Template
              </li>
              <li className="cursor-pointer" data-aos="fade-down">
                Blog
              </li>
              <li className="cursor-pointer" data-aos="fade-down">
                Pricing
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-8">
            <p className="cursor-pointer" data-aos="fade-left">
              Sign In
            </p>
            <button
              className="bg-blue-800 text-white px-4 py-2 hover:bg-blue-700"
              data-aos="fade-left"
            >
              Start Free
            </button>
          </div>

          {/* Mobile view */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <FaBars className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            className="md:hidden flex flex-col items-center space-y-4 mt-4"
            data-aos="fade-in"
          >
            <ul>
              <li className="cursor-pointer">Product</li>
              <li className="cursor-pointer">Template</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Pricing</li>
            </ul>
          </div>
        )}

        {/* Home section */}
        <div
          className="w-full h-screen md:flex mt-[3vh] md:mt-[6vh] font-semibold ml-4 sm:ml-16"
          data-aos="fade-up"
        >
          {/* Description left part */}
          <div className="text-center md:text-left md:w-[60%]">
            <div className="md:w-[60%]">
              <p
                className="text-[4vh] md:text-[6vh] md:mt-24 font-bold"
                data-aos="fade-right"
              >
                Managing freelance payments has never been easier
              </p>
              <p className="text-gray-400" data-aos="fade-right">
                Yet bed any for travelling assistance indulgence unpleasing.
                Not though all exercise blessing
              </p>
            </div>

            {/* Button part */}
            <div
              className="md:mt-[5vh] flex items-center space-x-8 justify-center md:justify-start"
              data-aos="fade-up"
            >
              {/* Get Started Button */}
              <button className="bg-blue-800 text-white p-4 rounded-[4vh] hover:bg-blue-700">
                Get Started
              </button>

              {/* Play button and text */}
              <div className="flex items-center space-x-4">
                <button className="bg-green-500 text-white flex items-center justify-center p-4 rounded-full w-[7vh] h-[7vh] hover:bg-green-400">
                  <FaPlay />
                </button>
                <p className="text-blue-800 text-xl">See How It Works</p>
              </div>
            </div>

            {/* Tick part */}
            <div
              className="md:mt-[5vh] flex space-x-4 justify-center md:justify-start"
              data-aos="fade-up"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 text-white p-2 rounded-full flex items-center justify-center w-[3vh] h-[3vh]">
                  <FaCheck />
                </div>
                <p className="text-gray-500">Free Register </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 text-white p-2 rounded-full flex items-center justify-center w-[3vh] h-[3vh]">
                  <FaCheck />
                </div>
                <p className="text-gray-500">Great Services </p>
              </div>
            </div>
          </div>

          {/* Image part */}
          <div className="mt-6 md:mt-0" data-aos="fade-left">
            <img
              src="/handw.png"
              className="w-[28vh] h-[37vh] md:w-[55vh] md:h-[82vh] md:mr-[40vh] mx-auto sm:mt-6"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;

function Footer() {
    return (
      <>
        <div className="bg-blue-800 rounded-lg md:w-[1440px] h-[40vh] mx-auto flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold text-center">
            Discover a better way to <br /> manage spendings
          </h1>
          <button className="bg-orange-600 text-white font-semibold px-6 py-3 mt-8 rounded-lg hover:bg-orange-700 transition duration-300">
            Get started now
          </button>
        </div>
        {/* Footer Section */}
        <div className="bg-[#FAFBFF] py-8 mt-8 text-gray-800">
          <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h2 className="text-xl font-semibold">AR Shakir</h2>
              <p className="mt-4 text-gray-600">
                Finance helps companies manage payments easily.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-blue-800">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-blue-800">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-800">
                  More
                </a>
              </div>
            </div>
            {/* Column 2 */}
            <div>
              <h2 className="text-xl font-semibold">Company</h2>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Pricing</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h2 className="text-xl font-semibold">Resources</h2>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>Proposal Template</li>
                <li>Invoice Template</li>
                <li>Tutorial</li>
                <li>How to write a contract</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h2 className="text-xl font-semibold">Join Our Newsletter</h2>
              <div className="flex">
                <input
                  type="email"
                  className="mt-4 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Your email address"
                />
                <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-800 transition duration-300">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-gray-600">
                * Will send you weekly updates for better finance management.
              </p>
            </div>
          </div>
          <div className="border-t-2 border-gray-200 m-6"></div>
          <div className="text-center mt-8 text-gray-600">
            Copyright @ AR Shakir 2022. All Rights Reserved.
          </div>
        </div>
      </>
    );
  }  
export default Footer;
  
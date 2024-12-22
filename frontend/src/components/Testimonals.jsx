import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  const testmonalData = [
    {
      des: "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows. Blessing welcomed ladyship.",
      quotedBy: "- Mike Taylor, Web Designer",
      pic: "https://img.freepik.com/free-photo/joyful-young-pretty-girl-doing-yes-gesture_141793-117025.jpg",
    },
    {
      des: "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows. Blessing welcomed ladyship.",
      quotedBy: "- Mike Taylor, Web Designer",
      pic: "https://img.freepik.com/free-photo/joyful-young-pretty-girl-doing-yes-gesture_141793-117025.jpg",
    },
  ];

  return (
    <>
      <div className="px-4 md:px-24 py-2 md:py-12 font-roboto bg-[#FAFBFF]">
        {/* Heading Section */}
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
          Testimonials
        </h1>
        <p className="text-center md:text-left p-4 font-semibold text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          omnis explicabo
          <br className="hidden md:block" /> ipsa illum illo corrupti, nihil id
          a error iste!
        </p>

        {/* Map Loop */}
        <div className="flex space-x-9">
          {testmonalData.map((testimonal, index) => (
            // Testimonial Box
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg py-8 md:py-12 px-6 mt-6 md:mt-8 md:flex md:w-[70vh] md:h-[40vh] relative"
            >
              {/* Quotation Icon */}
              <div className="w-[57px] h-[57px] bg-black text-white flex items-center justify-center rounded-full absolute -top-8">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl" />
              </div>

              {/* Description Section */}
              <div className="flex-1 text-black text-sm md:text-base mt-12 md:mt-0">
                <p className="mt-4 md:w-[40vh]">{testimonal.des}</p>
                <p className="mt-4 font-semibold text-black">
                  {testimonal.quotedBy}
                </p>
              </div>

              {/* Image Section */}
              <div className="mt-6 md:mt-0 md:ml-6">
                <img
                  src={testimonal.pic}
                  alt="Mike Taylor"
                  className="w-full h-full object-cover md:w-[25vh] md:h-[32vh] rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <p className="text-lg text-center md:text-left md:mr-6">
          We speak with our powerful statistics
        </p>

        {/* Vertical Line */}
        <div className="hidden md:block border-l-2 border-white h-12 mx-6"></div>

        <div className="flex flex-col md:flex-row justify-around w-full md:w-auto space-y-6 md:space-y-0 md:space-x-32">
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-5xl font-bold">1M+</p>
            <span className="flex items-center mt-2 md:mt-4">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-lg md:text-xl text-green-600"
              />
              <p className="text-sm md:text-xl ml-2">Active Users</p>
            </span>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-5xl font-bold">30K+</p>
            <span className="flex items-center mt-2 md:mt-4">
              <FontAwesomeIcon
                icon={faStar}
                className="text-lg md:text-xl text-green-600"
              />
              <p className="text-sm md:text-xl ml-2">5-Star Reviews</p>
            </span>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-5xl font-bold">$525M+</p>
            <span className="flex items-center mt-2 md:mt-4">
              <FontAwesomeIcon
                icon={faStar}
                className="text-lg md:text-xl text-green-600"
              />
              <p className="text-sm md:text-xl ml-2">Transactions</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonials;

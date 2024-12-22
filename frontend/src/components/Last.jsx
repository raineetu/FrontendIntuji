import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Last() {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-4  md:mt-0 md:px-32">
          <p className="text-blue-800 font-semibold">Why Choose Us?</p>
          <p className="text-2xl md:text-4xl font-bold mb-4">
            Save money with
            <br /> Proper transaction
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            cumque ipsu omnis porro reiciendis suscipit tenecusantium quae?
          </p>

          {/* Quotation Section */}
          <div className="bg-[#FAFBFF] rounded-lg shadow-lg py-4 md:py-6 px-6 mt-6 md:mt-8 flex items-center relative my-8">
            {/* Quotation Icon */}
            <div className="w-[57px] h-[57px] bg-black text-white flex items-center justify-center rounded-full absolute -top-8">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl" />
            </div>

            <div className="flex-1 text-black text-sm md:text-base mt-8 md:mt-0">
              <p className="md:w-[40vh]">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows. Blessing
                welcomed ladyship.
              </p>
              <p className="mt-4 font-semibold text-black">
                - Mike Taylor, Web Designer
              </p>
            </div>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className="relative w-full md:w-[50vh] ml-0 md:ml-20 rounded-lg my-8">
          {/* First Image */}
          <div className="absolute w-[40vh] h-[30vh] -left-[-1vh] -bottom-[-3vh] z-10 md:w-[40vh] md:h-[30vh] md:left-[-14vh] md:-bottom-[-5vh]">
            <img src="/stat.png" className="w-full h-full rounded-lg" />
          </div>

          {/* Second Image with Background */}
          <div
            className="w-full md:w-[50vh] h-[50vh] relative z-0 rounded-lg"
            style={{
              background:
                "linear-gradient(292.12deg, #62BADA -35.02%, #C9E7F2 78.96%)",
            }}
          >
            <img
              src="/de.png"
              className="w-full h-[60vh] absolute -top-[10vh]"
              alt="Decorative"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Last;

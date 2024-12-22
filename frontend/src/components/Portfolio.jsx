import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
function Portfolio() {
  const featureData = [
    {
      title: "Connect wallets and memories.",
      description: "We tend to provide the best product worldwide.",
      iconColor1: "bg-black",
      iconColor2: "bg-blue-800",
    },
    {
      title: "Review Transactions.",
      description:
        "Discover content you love with our powerful AI recommendations.",
      iconColor1: "bg-black",
      iconColor2: "bg-orange-600",
    },
    {
      title: "Get Income insights.",
      description:
        "Discover content you love with our powerful AI recommendations.",
      iconColor1: "bg-black",
      iconColor2: "bg-yellow-200",
    },
  ];
  return (
    <>
      <div className="my-12 px-4 md:px-32">
        <div className="flex ">
          <div className="flex flex-col">
            <h1 className="font-semibold text-5xl">
              Automated <br /> portfoili tracking
            </h1>
            <p className="py-8">
              Yet bed any fro travellinng and assisteance indulging unplesainf
              <br /> No thoughts all exercisinf blessing
            </p>
          </div>
          <div className="bg-[#FAFBFF] rounded-lg shadow-lg py-4 md:py-6 px-6 mt-6 md:mt-8 md:flex md:w-[50vh] md:h-[30vh] relative md:ml-40">
            {/* Quotation Icon */}
            <div className="w-[57px] h-[57px] bg-black text-white flex items-center justify-center rounded-full absolute -top-8">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl" />
            </div>

            {/* Description Section */}
            <div className="flex-1 text-black text-sm md:text-base mt-12 md:mt-0">
              <p className="mt-4 md:w-[40vh]">
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

        {/* box */}
        <div className="flex flex-col md:flex-row md:space-x-3 space-y-6 md:space-y-0 mt-8  ">
          {featureData.map((feature, index) => (
            <div
            key={index}
            className="w-full md:w-[55vh] h-[40vh] bg-white text-black rounded-[1vh] shadow-lg px-8 py-10 flex flex-col items-center justify-center"
          >
            <div className={`w-12 h-3 ${feature.iconColor1} my-2`}></div>
            <div className={`w-16 h-8 ${feature.iconColor2}`}></div>
            <h2 className="font-bold pt-6 text-2xl text-center">{feature.title}</h2>
            <p className="py-6 text-center">{feature.description}</p>
          </div>
          
          ))}
        </div>
      </div>
    </>
  );
}
export default Portfolio;
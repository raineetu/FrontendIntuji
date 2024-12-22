import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Track() {
  const transactions = [
    {
      id: 1,
      amount: "+ $28,900",
      description: "Received from Michael V",
      image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
      margin: "mb-4",
      dta: "Get Overview at the glance"
    },
    {
      id: 2,
      amount: "+ $28,900",
      description: "Received from Michael V",
      image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
      margin: "ml-40 mb-4",
      dta: "Deposit funds easily, securely",
    },
    {
      id: 3,
      amount: "+ $28,900",
      description: "Received from Michael V",
      image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
      margin: "ml-28 mb-4",
      dta: "Get Live Support"
    },
    {
      id: 4,
      amount: "+ $28,900",
      description: "Received from Michael V",
      image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
      margin: "mb-4",
      dta: "Get Live"
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <>
      <div className="flex flex-wrap my-8" data-aos="fade-right">
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-4 md:px-32">
          <div
            className="flex flex-col w-full md:w-[80vh] px-4 py-4 rounded-lg"
            style={{
              background:
                "linear-gradient(292.12deg, #62BADA -35.02%, #C9E7F2 78.96%)",
            }}
          >
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className={`flex items-center p-2 rounded-lg shadow-md bg-gray-100 w-full md:w-[60vh] mx-10 ${transaction.margin}`}
              >
                <img
                  src={transaction.image}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-blue-500">
                    {transaction.amount}
                  </h3>
                  <p className="text-gray-600">{transaction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
          <p className="text-blue-800 font-semibold">Why Choose Us?</p>
          <p className="text-2xl md:text-4xl font-bold mb-4">
            Track your payments <br /> on the way with the dsf<br />
            best way possible
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            cumque ipsu omnis porro reiciendis suscipit tenecusantium quae?
          </p>
          <div className="border-t-2 border-gray-200 my-4"></div>
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center space-x-4 mb-2">
              <div className="bg-yellow-500 text-white p-2 rounded-full flex items-center justify-center w-[3vh] h-[3vh]">
                <FaCheck />
              </div>
              <p className="text-gray-500">{transaction.dta}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Track;

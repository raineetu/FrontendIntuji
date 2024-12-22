
const boxData = [
    {
      title: "Best Practices",
      description: "Partiality on or continuing particular principles as.",
      img: "https://img.freepik.com/free-vector/illustration-people-avatar-business-plan-concept_53876-37211.jpg",
    },
    {
      title: "Effective Strategies",
      description: "Strategies to ensure consistent growth and success.",
      img: "https://img.freepik.com/free-vector/illustration-people-avatar-business-plan-concept_53876-37204.jpg",
    },
    {
      title: "Best Practices",
      description: "Partiality on or continuing particular principles as.",
      img: "https://img.freepik.com/free-vector/illustration-people-avatar-business-plan-concept_53876-37211.jpg",
    },
  ];
  
  function Blogs() {
    return (
      <>
        <div className="px-4 md:px-24 font-roboto">
          {/* Section Title */}
          <h1 className="text-3xl md:text-5xl font-bold pt-8">Recent Blogs</h1>
  
          <div className="md:flex items-center my-8">
            {/* Description */}
            <div className="bg-[#FAFBFF] md:w-[70%] my-4 md:my-0 md:mr-4 rounded-lg shadow-lg">
              <div className="p-6 md:p-8">
                <p className="py-2 font-semibold text-lg md:text-xl">
                  Best Practices
                </p>
                <p className="font-bold text-2xl md:text-3xl font-serif leading-relaxed">
                  In design active temper be uneasy.
                  <br /> Thirty for remove plenty regard.
                </p>
                <p className="pt-6 text-blue-600 font-medium cursor-pointer hover:underline">
                  Read More
                </p>
              </div>
            </div>
  
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://w7.pngwing.com/pngs/546/858/png-transparent-small-business-corporation-management-small-and-medium-sized-enterprises-business-company-service-people-thumbnail.png"
                alt="Blog Thumbnail"
              />
            </div>
          </div>
  
          {/* Secondary Blog Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {boxData.map((data, index) => (
              <div
                key={index}
                className="bg-[#FAFBFF] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[40vh]"
              >
                <div className="p-6">
                  <p className=" text-lg text-gray-800">
                    {data.title}
                  </p>
                  <p className="text-xl text-black font-bold pt-4">{data.description}</p>
                </div>
                <img
                  className="w-full h-48 object-cover rounded-b-lg"
                  src={data.img}
                  alt={`Blog ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } 
export default Blogs;
  
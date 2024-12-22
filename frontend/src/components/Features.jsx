function Features() {
    const featureData = [
      {
        title:
          "Delivers highly tailored experiences by learning user preferences and behaviors.",
        description: "We tend to provide the best product worldwide.",
        iconColor: "bg-orange-500",
        tit: "efgege",
      },
      {
        title: "AI-driven recommendations for personalized content.",
        description:
          "Discover content you love with our powerful AI recommendations.",
        iconColor: "bg-blue-800",
        tit: "dsfwef",
      },
    ];
  
    return (
      <>
        <div
          className="px-4 md:px-24 w-full min-h-screen pb-16 md:pb-20 font-roboto"
          style={{
            background:
              "linear-gradient(292.12deg, #62BADA -35.02%, #C9E7F2 78.96%)",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold pt-16 md:pt-[17vh] text-center md:text-left">
            Features that blow your mind
          </h1>
          <p className="py-6 text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
            nisi fugit dolores ea eos nesciunt veniam te est impedit.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-3 space-y-6 md:space-y-0">
            {featureData.map((feature, index) => (
              <div
                key={index}
                className="w-full md:w-[50vh] h-[40vh] bg-white text-black rounded-[1vh] shadow-lg px-8 py-10"
              >
                <div className="w-12 h-3 bg-black my-2"></div>
                <div className={`w-16 h-8 ${feature.iconColor}`}></div>
                <h2 className="font-bold pt-6">{feature.title}</h2>
                <p className="py-6">{feature.description}</p>
              </div>
            ))}
            <div className="flex flex-col space-y-6">
              {featureData.map((feature, index) => (
                <div
                  key={index}
                  className="w-full md:w-[50vh] h-[18vh] bg-white text-black rounded-[1vh] shadow-lg px-8 py-10"
                >
                  <h2>{feature.tit}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
export default Features;
  
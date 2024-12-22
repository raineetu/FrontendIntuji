import { useState } from "react";
import { FaComment } from 'react-icons/fa'; 


function FrequentlyAsked() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "The expense windows adapted sir. Wrong widen drawn",
      answer:
        "Detailed answer for this question goes here. You can add more information and explanation.",
    },
    {
      question: "How to manage multiple queries effectively?",
      answer:
        "Here we explain how to handle multiple queries in an efficient manner, including best practices and examples.",
    },
    {
      question: "What are the advantages of using React?",
      answer:
        "React offers several advantages including component-based architecture, virtual DOM, and easy state management.",
    },
    {
      question: "Can I use Tailwind CSS in React?",
      answer:
        "Yes, you can easily integrate Tailwind CSS into a React project by installing it and configuring it in your build setup.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-4 md:px-24">
      <h1 className="text-5xl font-bold">
        Frequently <br /> asked questions
      </h1>
      <div className="flex flex-col md:flex-row mt-8" data-aos="fade-up">
        {/* FAQs Section */}
        <div className="flex flex-col  space-y-4 w-full md:w-3/5">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFBFF] text-black p-6 cursor-pointer rounded-lg w-full"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-xl">{item.question}</p>
                <span className="text-blue-600 font-semibold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* More Questions Section */}
        <div className="bg-[#FAFBFF] text-black p-6 cursor-pointer rounded-lg w-full md:w-[30%] flex flex-col items-center justify-between mt-8 md:mt-0 ml-6">
          {/* Message Icon */}
          <FaComment className="h-12 w-12 text-black mb-4" />

          <h2 className="font-semibold text-lg md:text-xl text-center md:text-left">Do you have more questions?</h2>
          <p className="text-gray-600 text-center md:text-left mt-2">
            End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
          </p>
          <button className="bg-orange-600 text-white font-semibold p-4 mt-4 rounded-lg">
            Shoot a direct mail
          </button>
        </div>
      </div>
    </div>
  );
}
export default FrequentlyAsked;

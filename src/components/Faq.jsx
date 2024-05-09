import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  const [faqArrData, setFaqArrData] = useState([
    {
      id: 1,
      question: "Can education flashcards be used for all age groups?",
      ans: "Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.",
      open: false,
    },
    {
      id: 2,
      question: "How do education flashcards work?",
      ans: "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.",
      open: false,
    },
    {
      id: 3,
      question: "Can education flashcards be used for test preparation?",
      ans: "Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.",
      open: false,
    },
  ]);

  const handleClick = (id) => {
    setFaqArrData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <div className="w-[90%] m-auto my-[154px] flex flex-col gap-10 ">
      <p className="text-[48px] bg-gradient-to-r from-[#06286E] via-[#164Ec0] to-blue-100 text-transparent bg-clip-text font-bold">
        FAQ
      </p>
      <div className="max-w-[848px] flex flex-col gap-8">
        {faqArrData.map((el) => (
          <div
            key={el.id}
            onClick={() => handleClick(el.id)}
            className={` ${
              !el.open && "closeAnimation"
            } h-[58px] flex items-center gap-3 text-[16px] font-semibold  flex-col w-full border-2  border-blue-400 rounded-xl px-[23px] py-[18px] ${
              el.open && "addTransition"
            } cursor-pointer `}
          >
            <div className="w-full flex justify-between">
              <p>{el.question}</p>
              {el.open ? (
                <IoIosArrowUp className="text-2xl font-thin" />
              ) : (
                <IoIosArrowDown className="text-2xl font-thin" />
              )}
            </div>
            {el.open && <p className="font-normal ansAnimation">{el.ans}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

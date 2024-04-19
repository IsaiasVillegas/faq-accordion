import { star } from "../assets";
import { fags } from "../constants";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="w-full bg-white p-6 md:p-10 rounded-lg md:rounded-2xl flex flex-col gap-6 md:gap-8 max-w-[600px] shadow-cardShadow">
      <div className="flex items-center gap-6">
        <img src={star} className="w-6 h-6 md:w-10 md:h-10" alt="icon star" />
        <h1 className="font-workSans font-bold text-3xl md:text-[56px] md:leading-tight text-dark-purple">
          FAQs
        </h1>
      </div>

      <div>
        {fags.map((fag, index, arr) => (
          <AccordionItem
            key={index}
            {...fag}
            index={index}
            arr={arr}
            isOpenFaq={index === isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;

import { minus, plus } from "../assets";

const AccordionItem = ({
  question,
  answer,
  index,
  arr,
  isOpenFaq,
  setIsOpen,
}) => {
  const toggleQuestion = () => {
    const active = isOpenFaq ? null : index;
    setIsOpen(active);
  };

  return (
    <div
      className={`${
        index !== 0 ? "border-t border-t-light-pink" : ""
      } py-5 md:py-6 ${index === 0 ? "pt-0 md:pt-0" : ""} ${
        index === arr.length - 1 ? "pb-0 md:pb-0" : ""
      } `}
    >
      <div
        className="flex items-center justify-between gap-6 cursor-pointer"
        onClick={toggleQuestion}
      >
        <p className="font-workSans font-semibold text-base md:text-lg text-dark-purple transition-colors duration-200 ease-out hover:text-pink">
          {question}
        </p>

        <div>
          {isOpenFaq ? (
            <img
              src={minus}
              width={30}
              height={30}
              className="max-w-[30px] h-[30px]"
              alt="icon minus"
            />
          ) : (
            <img
              src={plus}
              width={30}
              height={30}
              className="max-w-[30px] h-[30px]"
              alt="icon plus"
            />
          )}
        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-200 ease-linear ${
          isOpenFaq
            ? "grid-rows-[1fr] opacity-100 mt-6"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden font-workSans font-normal text-sm md:text-base text-pale-purple">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;

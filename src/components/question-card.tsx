import { ReactNode } from "react"

type props = {
   question: string;
   current: number;
   options: string[];
   onSelect: (index: number) => void;
   selectedOptionIndex: number | null;
   isAnswerCorrect: boolean | null;
}
export const QuestionCard = ({ question, current, options, onSelect, selectedOptionIndex, isAnswerCorrect }: props) => {

   return (
      <div className="relative max-w-[500px] w-full bg-gray-800 p-6 rounded-xl mb-12 text-center">
         <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 size-12 flex justify-center items-center
            rounded-full border-4 border-gray-800 text-lg font-bold">
            {current}
         </div>
         <p className="text-lg my-4">{question}</p>
         <div className="w-full flex flex-col gap-2">
            {options.map((option, index) => {
               let bgColor = "bg-gray-600";

               if (selectedOptionIndex !== null) {
                  if (index === selectedOptionIndex) {
                     bgColor = isAnswerCorrect ? 'bg-green-600' : 'bg-red-600';
                  } else if (isAnswerCorrect === false && index === options.findIndex((_, i) => i === selectedOptionIndex && !isAnswerCorrect)) {
                     bgColor = "bg-gray-600";
                  }
               }
               if (
                  selectedOptionIndex !== null &&
                  index !== selectedOptionIndex &&
                  options.indexOf(options[selectedOptionIndex]) !== -1 &&
                  selectedOptionIndex !== -1 &&
                  index === options.findIndex((_, i) => i === selectedOptionIndex && isAnswerCorrect)
               ) {
                  bgColor = "bg-green-700";
               }

               return (
                  <button key={index}
                     className={`flex items-center gap-4 w-full  px-4 py-2 rounded-xl cursor-pointer border-4
                     border-transparent hover:border-[var(--primary-color)] transition text-start ${bgColor}`}
                     onClick={() => onSelect(index)}
                     disabled={selectedOptionIndex !== null}
                  >
                     <span className="flex justify-center items-center size-10 min-w-10 bg-[var(--primary-color)] rounded-full text-lg font-bold">
                        {index + 1}
                     </span>
                     {option}
                  </button>
               )
            })}
         </div>
      </div>
   )
}
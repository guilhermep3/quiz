"use client"
import { QuestionCard } from "@/components/question-card";
import { question } from "@/types/question";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
   const [questions, setQuestions] = useState<question[]>([]);
   const [questionsByCategory, setQuestionsByCategory] = useState<question[]>([])
   const params = useParams();
   const [categoria, setCategoria] = useState<string | null>(null);
   const [categoryFormatted, setCategoryFormatted] = useState<string>('');
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
   const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
   const [correctAnswers, setCorrectAnswers] = useState(0);
   const [finished, setFinished] = useState(false);

   useEffect(() => {
      if (params?.categoria) {
         setCategoria(params.categoria as string);
      }
   }, [params]);

   useEffect(() => {
      async function fetchData() {
         const res = await fetch('/questions.json');
         const data = await res.json();
         setQuestions(data);
      }
      fetchData();
   }, []);

   useEffect(() => {
      if (categoria) {
         const filteredQ = questions.filter((q) => q.category === categoria);
         setQuestionsByCategory(filteredQ);
         setCategoryFormatted(handleFormatCategory(categoria));
      }
   }, [categoria, questions]);

   useEffect(() => {
      setSelectedOptionIndex(null);
      setIsAnswerCorrect(null);
   }, [currentQuestionIndex]);

   function handleOptionSelected(optionIndex: number, q: question) {
      console.log(`Selecionou opção ${optionIndex + 1} da pergunta ${q.id}`);
      setSelectedOptionIndex(optionIndex);
      const isCorrect = optionIndex === q.correctIndex;
      setIsAnswerCorrect(isCorrect);
      if (isCorrect) {
         setCorrectAnswers(prev => prev + 1);
      }

      setTimeout(() => {
         if (currentQuestionIndex + 1 < questionsByCategory.length) {
            setCurrentQuestionIndex(prev => prev + 1);
         } else {
            console.log("Quiz finalizado!");
            setFinished(true);
         }
      }, 2000);
   }

   function handleFormatCategory(categoria: string | null) {
      switch (categoria) {
         case 'htmlcss':
            return 'HTML e CSS';
         case 'javascripttypescript':
            return 'Javascript e Typescript';
         case 'reacttailwind':
            return 'React e Tailwind';
         default:
            return 'Categoria';
      }
   }

   return (
      <div className="bg-[var(--bg-color)] text-white">
         <div className="container mx-auto min-h-screen flex justify-center items-center flex-col gap-6 p-4">
            <h1 className="text-2xl mt-20 mb-10">Quiz {categoryFormatted}</h1>
            {finished ?
               <div>{correctAnswers} / {questionsByCategory.length}</div>
            :
               <div>
                  {questionsByCategory.length > 0 &&
                     <QuestionCard
                        question={questionsByCategory[currentQuestionIndex].question}
                        current={questionsByCategory[currentQuestionIndex].id}
                        options={questionsByCategory[currentQuestionIndex].options}
                        onSelect={(optionIndex) => handleOptionSelected(optionIndex, questionsByCategory[currentQuestionIndex])}
                        selectedOptionIndex={selectedOptionIndex}
                        isAnswerCorrect={isAnswerCorrect}
                     />
                  }
               </div>
            }
         </div>
      </div>
   );
}

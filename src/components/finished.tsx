import Link from "next/link";

type props = {
   correctAnswers: number;
   lengthQuestions: number;
   categoria: string;
}
export const Finished = ({ correctAnswers, lengthQuestions, categoria }: props) => {
   const bad = correctAnswers >= 0 && correctAnswers <= 3;
   const medium = correctAnswers >= 4 && correctAnswers <= 7;
   const good = correctAnswers >= 8 && correctAnswers <= 10;

   return (
      <section>
         <div className="text-lg text-center">
            Você acertou <span className="text-xl font-bold">{correctAnswers}</span> de
            <span className="text-xl font-bold"> {lengthQuestions} </span>
            perguntas.
            {bad && (
               <div className="text-center mt-4">
                  <div>
                     <span className="font-bold text-red-600">Nota ruim</span>
                     <p>não desanime! Reveja os conceitos e tente novamente.</p>
                  </div>
               </div>
            )}
            {medium && (
               <div className="text-center mt-4">
                  <div>
                     <span className="font-bold text-yellow-600">Nota média</span>
                     <p>você está no caminho certo! Com mais prática, vai melhorar ainda mais.</p>
                  </div>
               </div>
            )}
            {good && (
               <div className="text-center mt-4">
                  <div>
                     <span className="font-bold text-green-600">Nota boa</span>
                     <p>ótimo desempenho! Continue assim e se desafie cada vez mais.</p>
                  </div>
               </div>
            )}
         </div>
         <div className="w-full flex flex-col sm:flex-row justify-center mt-6">
            <Link href={`/`}>
               <button
                  className="py-2 px-6 text-lg font-semibold bg-white text-black rounded-xl cursor-pointer shadow-lg hover:bg-[var(--primary-color-2)] transition w-full md:w-fit">
                  Voltar ao menu
               </button>
            </Link>
         </div>
      </section>
   )
}
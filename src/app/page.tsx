import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <div className="bg-[var(--bg-color)] text-white">
         <div className="container mx-auto min-h-screen flex justify-center items-center flex-col gap-6 p-4">
            <Image src={'/q-logo.png'} alt="q-logo"
               width={128} height={150} className="w-32 sm:w-36" />
            <h1 className="text-3xl font-bold">Hello World!</h1>
            <h2 className="text-xl text-center">Bem vindo(a) ao DevQuiz! escolha qual categoria jogar</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
               <Link href={`/quiz/htmlcss`}>
                  <button
                     className="py-2 px-6 text-lg font-semibold bg-white text-black rounded-xl cursor-pointer shadow-lg hover:bg-[var(--primary-color-2)] transition w-full md:w-fit">
                     HTML e CSS
                  </button>
               </Link>
               <Link href={`/quiz/javascripttypescript`}>
                  <button
                     className="py-2 px-6 text-lg font-semibold bg-white text-black rounded-xl cursor-pointer shadow-lg hover:bg-[var(--primary-color-2)] transition w-full md:w-fit">
                     Javascript e Typescript
                  </button>
               </Link>
               <Link href={`/quiz/reacttailwind`}>
                  <button
                     className="py-2 px-6 text-lg font-semibold bg-white text-black rounded-xl cursor-pointer shadow-lg hover:bg-[var(--primary-color-2)] transition w-full md:w-fit">
                     React e Tailwind
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
}
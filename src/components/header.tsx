import Image from "next/image"
import Link from "next/link"

export const Header = () => {

   return (
      <header className="fixed top-0 left-0 right-0 w-full px-6 py-4 sm:px-20 lg:px-40 flex justify-between items-center
         border-b-2 border-[var(--primary-color)] bg-[var(--primary-color)]">
         <Link href={'/'}>
            <Image src={'/q-logo-white.png'} alt="logo"
               width={40} height={40} />
         </Link>
         <p className="text-2xl font-bold text-white">DevQuiz</p>
      </header>
   )
}
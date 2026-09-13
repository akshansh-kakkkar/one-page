import { ChevronRight } from 'lucide-react';
import { Crimson_Pro, Plus_Jakarta_Sans } from 'next/font/google';
const CrimsonFont = Crimson_Pro({
  subsets: ['latin']
})
const jakartaSans = Plus_Jakarta_Sans({
  subsets : ['latin']
})
export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center gap-4 items-center text-center">
      <div className="bg-[#FFDCBD]/80 hidden sm:block right-4 top-4 blur-2xl absolute w-100 h-100 rounded-full" />
      <div className="bg-[#FFDCBD]/80 left-4 hidden sm:block  top-80 blur-2xl absolute w-100 h-100 rounded-full" />
      <h1 className={`${CrimsonFont.className} text-6xl uppercase font-bold text-[#A23E18]`}>One Page.</h1>
      <p className={`text-2xl font-medium ${CrimsonFont.className} uppercase text-[#1C1C18]`}>
        Tell me the Story.
        I'll make the change.
      </p>
        <button className='flex gap-1 items-center justify-center rounded-xl text-center bg-[#A23E18] px-4 py-2 text-[#FCF9F3] cursor-pointer transition-all duration-300 hover:scale-[90%]'>
          <span className={`uppercase text-4xl ${CrimsonFont.className} `}>Start</span>
          <span >
            <ChevronRight size={40} />
          </span>
        </button>
        <div className={`flex gap-4 uppercase ${jakartaSans.className} text-md text-[#4D4540] font-bold`}>
          <span>A year.</span>
          <span>A trip.</span>
          <span>A chapter.</span>
        </div>
        <div className={`uppercase gap-2 ${CrimsonFont.className} text-lg text-[#1C1C18]`}>
          Something worth keeping :D
        </div>
    </div>
  );
}

import { ChevronRight } from 'lucide-react'
import { Crimson_Pro, Plus_Jakarta_Sans } from 'next/font/google'
const CrimsonPro = Crimson_Pro({
    subsets: ['latin']
})

const plusJakarta = Plus_Jakarta_Sans({
    subsets : ['latin']
})

const cards = [
    {
        id : 1, 
        title : "My Year",
        description : "A year in one beautiful page.",
    },
    {
        id : 2, 
        title : "A trip",
        description : "Remember somewhere you went.",
    },
    {
        id : 3,
        title : "A chapter",
        description : "A period of your life worth keeping"
    }
]

export default function page() {
    return (
        <div className="my-4 mx-4 h-[80vh] relative">
            <div className="bg-[#FFDCBD]/80 hidden sm:block right-4 top-4 blur-2xl absolute w-100 h-100 rounded-full" />
            <div className="bg-[#FFDCBD]/80 left-4 hidden sm:block  top-80 blur-2xl absolute w-100 h-100 rounded-full" />
            <div className={`text-4xl border-b-2 uppercase text-[#A23E18] ${CrimsonPro.className} font-bold`}>
                One Page.
            </div>

            <div className={`mt-12 text-4xl z-500 flex justify-center items-center text-center ${CrimsonPro.className} font-medium text-[#1C1C18]`}>
               What are you Making ? 
            </div>
            <div className=' w-full flex md:flex-row flex-col mt-8 md:mt-0 h-full justify-center items-center text-center gap-8'>
            {
                cards.map((item)=>(
                    <div key={item.id} className='bg-white w-80 md:w-120 group relative hover:border-[#A23E18] h-80 gap-8 flex flex-col items-center justify-center z-50 py-8 px-12 rounded-xl shadow-lg hover:scale-[105%] hover:border-2  cursor-pointer duration-300'>
                        <div className={`text-4xl text-[#A23E18] capitalize  ${CrimsonPro.className}`}>
                            {item.title}
                        </div>
                        <div className={` text-lg text-[#4D4540] capitalize font-medium`}>
                            {item.description}
                        </div>
                        <div className='absolute bottom-8 right-8 bg-[#A23E18] transition-all duration-300 group-hover:translate-x-2 py-2 px-2 text-white rounded-full'>
                            <ChevronRight />
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
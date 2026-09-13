'use client'
import { Crimson_Pro, Plus_Jakarta_Sans } from "next/font/google"
import { useState } from "react";

const CrimsonPro = Crimson_Pro({
    subsets: ['latin']
})
const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin']
})

export default function page() {
    const [myYear, setMyYear] = useState('');
    const [about, setAbout] = useState('');
    const [moment, setMoment] = useState<File | null>(null);
    const handleSubmit = () => {
        if (!myYear || !about || !moment) return;
        const reader = new FileReader();
        reader.onload = () => {
            sessionStorage.setItem(
                "one-page-year",
                JSON.stringify({
                    title: myYear,
                    about: about,
                    image: reader.result,
                    year: new Date().getFullYear(),
                })
            );
            window.location.href = `/my-year`;
        }
        reader.readAsDataURL(moment)

    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="my-4 mx-4 h-[80vh] relative">
                <div className={`text-4xl border-b-2 uppercase text-[#A23E18] ${CrimsonPro.className} font-bold`}>
                    One Page.
                </div>

                <div className="bg-white  py-4 px-4 md:mx-12 my-8 rounded-xl shadow-sm z-400">
                    <div className="flex flex-col my-4 gap-2">
                        <div className={`uppercase text-2xl ${CrimsonPro.className} text-[#A23E18] font-bold`}>
                            My Year.
                        </div>
                        <input
                            onChange={(e) => setMyYear(e.target.value)}
                            type="text"
                            required
                            placeholder="Add a one liner about your whole year here.."
                            className={`${plusJakarta.className} outline-[#A23E18] w-full py-4 px-2 bg-[#A23E18]/10 text-[#A23E18] rounded-lg `} />
                    </div>
                </div>

                <div className="bg-white  py-4 px-4 md:mx-12 my-8 rounded-xl shadow-sm z-400">
                    <div className="flex flex-col my-4 gap-2">
                        <div className={`uppercase text-2xl ${CrimsonPro.className} text-[#A23E18] font-bold`}>
                            What was this year about ?
                        </div>
                        <input
                            onChange={(e) => setAbout(e.target.value)}
                            required
                            type="text" placeholder="eg. fun" className={`${plusJakarta.className} outline-[#A23E18] w-full py-4 px-2 bg-[#A23E18]/10 text-[#A23E18] rounded-lg `} />
                    </div>
                </div>

                <div className="bg-white  py-4 px-4 md:mx-12 my-8 rounded-xl shadow-sm z-400">
                    <div className="flex flex-col my-4 gap-2">
                        <div className={`uppercase text-2xl ${CrimsonPro.className} text-[#A23E18] font-bold`}>
                            A moment from this year.
                        </div>
                        <input
                            accept="image/*"
                            required
                            onChange={(e) => setMoment(e.target.files?.[0] ?? null)}
                            type="file" placeholder="eg. fun" className={`${plusJakarta.className} outline-[#A23E18] w-full py-4 px-2 bg-[#A23E18]/10 text-[#A23E18] rounded-lg `} />
                    </div>
                </div>
                <div className="flex justify-center   items-center w-full ">
                    <button type="submit" className={`bg-[#A23E18] font-bold ${CrimsonPro.className} text-white text-4xl w-full py-2 rounded-xl scale-[95%] hover:scale-[94%] cursor-pointer duration-300`} >
                        Make My Page
                    </button>
                </div>

            </div>
        </form>
    )
}
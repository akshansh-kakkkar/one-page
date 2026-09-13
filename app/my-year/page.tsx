"use client";

import { Crimson_Pro, Plus_Jakarta_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const crimsonPro = Crimson_Pro({
    subsets: ['latin'],
})
const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
})

type YearData = {
    title: string,
    about: string,
    image: string,
    year: number,
}
export default function page() {
    const [data, setData] = useState<YearData | null>(null);
    useEffect(() => {
        const saved = sessionStorage.getItem("one-page-year");
        if (saved) {
            setData(JSON.parse(saved));
        }
    }, []);

    if (!data) {
        return <div>Loading...</div>
    }
    return (
        <div className="my-4 mx-4 h-[80vh] relative">
            <div className={`text-4xl border-b-2 uppercase text-[#A23E18] ${crimsonPro.className} font-bold`}>
                One Page.
            </div>
            <div className=" min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
                <div className={`
                    ${plusJakarta.className} text-sm tracking-[0.3em] uppercase text-[#A23E18] mb-8`}>
                        {data.year}
                </div>
                <div className={`${crimsonPro.className} text-6xl md:text-8xl max-w-xl leading-[0.95] font-medium`}>
                    {data.title}
                </div>
                <div className={`${plusJakarta.className} mt-8 text-lg md:text-xl text-[#4D4540]`}>
                    {data.about}
                </div>
            </div>
            <div className="px-6 pb-24">
                <div className="max-w-4xl mx-auto">
                    <img src={data.image} alt="A moment from the year" className="w-full max-h-[700px] object-cover rounded-sm" />
                </div>
            </div>
            <div className="border- border-[#A23E18]/20 border-2 py-16 text-center">
            <div className={`${crimsonPro.className} text-3xl text-[#A23E18]`}>
                A year worth keeping
            </div>
            </div>
        </div>
    )
}
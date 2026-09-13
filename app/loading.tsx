import { Loader2 } from "lucide-react";

export default function Loading(){
    return(
        <div className="flex justify-center items-center min-h-screen text-center">
            <Loader2 className="text-[#A23E18] animate-spin" size={32} />
        </div>
    )
}
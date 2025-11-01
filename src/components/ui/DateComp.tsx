import { useEffect, useState } from "react";

export default function DateComp(){

    // const [actualDate, setActualDate] = useState(new Date())

    // useEffect(()=> {
    //     const updDate = () => {
    //         const today = new Date()
    //         if(today.toDateString() !== actualDate.toDateString()){
    //             setActualDate(today)
    //         }
    //     }

    //     const interval = setInterval(updDate, 3600000);

    //     updDate();

    //     return () => clearInterval(interval);

    // }, [actualDate])

    // const formattedDate = actualDate.toLocaleDateString();

    return(
        <div className="w-full flex justify-center"> 
            <p className="text-center text-white font-['Inter'] text-sm leading-[14px] flex-none order-1">1-7 September 2025</p>
        </div>
    )
}

// обязательно учитывать что тут не день и учитывать марджины
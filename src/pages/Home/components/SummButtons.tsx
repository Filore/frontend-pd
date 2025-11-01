import { useState } from "react";

const bets = ["1,000 T", "2,000 T", "5,000 T", "All In!"]

export default function SummButtons() {
    const [selected, setSelected] = useState(bets[0])
    return (
        <div className="flex w-full justify-start gap-[clamp(8px,2.5vw,20px)] mt-[clamp(10px,2.3vh,30px)]">
            {
                bets.map((bet) => (
                <button 
                key = {bet}
                onClick={()=> setSelected(bet)}
                className={`flex  items-center gap-[clamp(7px,2.5vw,13px)] px-[clamp(7px,2.5vw,13px)] py-[clamp(6px,1vh,12px)] rounded-full backdrop-blur-sm justify-center whitespace-nowrap transition ${bet === selected ? 
                    "bg-white text-black "
                    : "bg-white/10 text-gray-300 hover:bg-white/20"}`}>
                    <p className="font-inter font-normal text-xs leading-[1]  whitespace-nowrap">{bet}</p>
                    </button>
                ))}
        </div>
    )
}
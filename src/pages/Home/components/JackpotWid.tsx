// import { useState, } from "react";

export default function JackpotWid(){
    
    // const [prize, setPrize] = useState("10,000")

    return (
    <div className="inline-flex  items-center justify-center px-[clamp(10px,3vw,14px)] py-[clamp(6px,2vh,8px)] max-w-full gap-[clamp(8px,2.4vw,12px)] bg-white/10 rounded-full">
      <div className="flex items-center justify-center w-[clamp(200px,63vw,280px)] h-[22px] gap-2.5">
        <img src="/icons/Vector-16.svg" alt="gifts" className="w-4 h-4" />
        <p
          className="
            font-['Inter'] font-medium
            text-[clamp(14px,3.8vw,16px)] leading-[clamp(18px,4.5vw,22px)] max-w-[min(82vw,520px)]
            text-center text-[#ACEB36]
          "
        >
          Grand Prize — 10,000 USDT!
        </p>
      </div>
    </div>
  );
}
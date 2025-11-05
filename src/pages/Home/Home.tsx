import ActionButtons from "./components/ActionButtons";
import SummButtons from "./components/SummButtons";
import LiveChart from "./components/LiveChart";
import JackpotWid from "./components/JackpotWid";
import ChartBtns from "./components/ChartBtns";
import NaviPanel from "@/components/ui/NaviPanel";
import { useState } from "react";
import ResultDrawer from "./homeDrawers/ResultDrawer";
import AchieveDrawer from "./homeDrawers/AchieveDrawer";
import type { AchieveDrawerType} from "@/types.ts"

  const achieveObj: AchieveDrawerType = {
    pic:"/icons/Illustration-2.svg", name: "Bitcoin Guru", desc:"Make an accurate prediction for an unpopular (low-cap) coin.", act:["Guess the movement 3 times in a row", "3/3"] 
  }

export default function Home() {

  const [resDrawOpen, setresDrawOpen] = useState(false)
  const [sumDrawOpen, setsumDrawOpen] = useState([2.814, 1.115, 256])

  const [achDrawOpen, setachDrawOpen] = useState(false)

  const [entryPrice, setEntryPrice] = useState<number | null>(null);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [mode, setMode] = useState<"pump" | "dump" | null>(null);

  const handleClick = (newMode: "pump" | "dump") => {
    setMode(newMode);
    setEntryPrice(currentPrice ?? null);
  };

  return (

      <div className="relative h-dvh overflow-hidden ">
         <div className="mx-auto w-full max-w-[560px] h-full flex flex-col items-center">
        <h1 className=" not-italic font-bold  text-[clamp(26px,7.6vw,36px)] leading-[0.95] font-['Grtsk_Giga'] text-[#ACEB36] text-center pt-[clamp(20px,7.5vh,65px)]">
          Predict<br />the trend
        </h1>
        <p className=" font-['Inter'] not-italic font-normal text-[clamp(14px,4vw,16px)] leading-[clamp(18px,4.5vw,22px)] text-center text-white/60 mt-[clamp(8px,1.4vh,16px)] mb-[clamp(10px,1.8vh,20px)]">
          Make your move. Earn 100T if correct
        </p>

        
        
        <JackpotWid />
        
        <ChartBtns />

        <div className="w-full gap-[clamp(8px,2.5vw,12px)] px-4 mt-[clamp(6px,1.1vh,10px)] mb-[clamp(20px,5vh,50px)] flex items-start">
        <div className="flex flex-col justify-start items-start gap-[clamp(2px,0.8vw,6px)]">

            <span className="text-[clamp(24px,8vw,32px)]  font-['Inter'] font-semibold leading-[clamp(28px,9.4vw,39px)] inline-block max-w-full tracking-[-0.02em] text-white">
              {Math.round(currentPrice ?? 0)}
            </span>
          </div>
        </div>

        <LiveChart  entryPrice={entryPrice ?? undefined} onPriceChange={setCurrentPrice} mode={mode ?? "pump"}/>
        <SummButtons />
        
          <ActionButtons onPrimaryClick={[() => handleClick("pump"), () => handleClick("dump")]}/>



        
      <div aria-hidden className="h-[clamp(90px,7vh,120px)] md:h-[clamp(100px,8vh,140px)]" />


<div className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)]">
          <div className="mx-auto w-full max-w-[560px] px-4 flex justify-center mb-[clamp(20px,4.69vw,60px)]">
            <NaviPanel />
          </div>
        </div>

        <ResultDrawer isOpen={resDrawOpen} changeOpen={setresDrawOpen} summ={sumDrawOpen}/>

        <AchieveDrawer isOpen={achDrawOpen} changeOpen={setachDrawOpen} achieve={achieveObj}/>

      </div>
    </div>
  )
}

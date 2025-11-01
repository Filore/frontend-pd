import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const prize = location.state?.prize ?? "Nothing";
  const pic = location.state?.pict ?? "";

  const cleanSvg = pic
  ?.replace(/width="[^"]*"/, 'width="100%"')
  ?.replace(/height="[^"]*"/, 'height="100%"');


  return (
    <div className="flex flex-col justify-center items-center h-[100svh] bg-[#3F20A8] text-white font-['Inter']">
        
        <div className="w-full justify-end flex">
            <button className="px-[clamp(1px,2.3vw,13px)] py-[clamp(1px,1.1vh,13px)] rounded-3xl bg-white/10 font-['Inter'] font-normal text-base mt-2 mr-2">
            11 V
            </button>
        </div>

        <div className="mt-[clamp(200px,41.3vh,400px)] mb-[clamp(2px,0.7vh,10px)] ">
            <div 
            className="w-[clamp(20px,19.7vw,90px)] h-[clamp(20px,19.7wh,90px)]"
            dangerouslySetInnerHTML={{ __html: cleanSvg }} />
            
        </div>

        <h1 className="font-['Grtsk_Giga'] font-bold text-4xl text-white mb-[clamp(2px,0.7vh,10px)]">
            {prize}
        </h1>

        <Link to="/roulette">
        <button className=" mt-[clamp(10px,3.7vh,40px)] mb-[clamp(10px,3.7vh,40px)] px-[clamp(5px,3.5vw,20px)] py-[clamp(1px,1.1vh,13px)] rounded-3xl bg-white/10 font-['Inter'] font-normal text-base">
        V spin for luck
        </button>
        </Link>

         <p className="font-['Inter'] mb-[clamp(5px,13.6vw,70px)] text-center px-[clamp(10px,7.6vw,40px)] mt-[clamp(5px,2.6vh,20px)] font-normal text-sm text-white/40">
         Get free points for your initial deposit and start predicting with an advantage.</p>

        <div className="flex w-full  justify-end">
        <Link to="/home">
            <button className="px-[clamp(15px,5vw,30px)] py-[clamp(1px,2.8vh,30px)] mb-[clamp(5px,2.5svh,40px)] border-2 border-white/20 rounded-2xl text-xs text-white font-['Inter'] mr-2 font-normal">
            NEXT
            </button>
        </Link>
        </div>


    </div>
  );
}
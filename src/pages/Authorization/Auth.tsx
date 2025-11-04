import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <div className="flex-col relative h-[100svh] overflow-hidden justify-between flex items-center bg-[linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),linear-gradient(180deg,#16006C_0%,#0B0039_100%)]">

    <div
    className="absolute 
    pointer-events-none
             left-1/2 top-[49vh] 
             w-[125vw] h-[67vh] 
             -translate-x-1/2 
             rounded-[50%] 
             blur-[50px] 
             bg-[linear-gradient(78.6deg,rgba(55,210,99,0.55)_8.39%,rgba(84,252,242,0.55)_44.59%,rgba(38,0,255,0.55)_72.97%,rgba(0,63,244,0.55)_97.97%)]"
        />
        <div className="flex-col relative flex items-center">
        <div className="flex pt-[clamp(100px,30vh,400px)] pb-[clamp(100px,15vh,400px)]">
            <img src="/icons/Vector-14.svg" alt="logo" className="w-[clamp(200px,63vw,500px)] h-[clamp(80px,11.7vh,300px)]"/>
        </div>

        <div className="flex-col flex z-10 justify-center py-[clamp(10px,2.8vh,40px)] px-[clamp(10px,6.1vw,40px)]">

            <Link to="/home">
            <button className="border-2 flex  w-full border-white/10 py-[clamp(10px,2.4vh,30px)] px-[clamp(10px,9.4vw,40px)] mb-[clamp(10px,2.8vh,34px)] rounded-3xl">
                 <img src="/icons/Group 29.svg" alt="telegram" />
                <p className="pl-1">Continue with Telegram</p>
            </button>
            </Link>

            <div className="flex items-center ">
                <div className="w-[88px] h-0 border border-white/10 flex-none" />
                <p className="w-full flex justify-center text-xs font-['Inter'] font-normal text-white/20">Or login with</p>
                <div className="w-[88px] h-0 border border-white/10 flex-none " />
            </div>

            <Link to="/tutorchart">
            <button className="border-2 flex w-full border-white/10 py-[clamp(10px,2.4vh,30px)] px-[clamp(10px,9.4vw,40px)] mt-[clamp(10px,2.8vh,34px)] rounded-3xl">
                <img src="/icons/google.svg" alt="telegram" />
                <p className="pl-1">Continue with Google</p>
            </button>
            </Link>
        </div>
    
    </div>

        <p className="text-sm font-['Inter'] font-normal text-white/40 mb-[clamp(10px,4.7vh,50px)]">By signing up, you agree to the Terms of <br /> Service and Data Processing Agreement</p>

      </div>
  )
}
import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <div className="flex-col relative h-[100svh] overflow-hidden flex items-center bg-[linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),linear-gradient(180deg,#16006C_0%,#0B0039_100%)]">

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

        <div className="flex pt-[clamp(100px,30vh,400px)] pb-[clamp(100px,15vh,400px)]">
            <img src="/icons/Vector-14.svg" alt="logo" className="w-[clamp(200px,63vw,500px)] h-[clamp(80px,11.7vh,300px)]"/>
        </div>

        <div className="flex-col flex justify-center py-[clamp(10px,2.8vh,40px)] px-[clamp(10px,6.1vw,40px)]">

            <Link to="/home">
            <button className="border-2 border-white/10 py-[clamp(10px,2.4vh,30px)] px-[clamp(10px,9.4vw,40px)] mb-[clamp(10px,2.8vh,34px)] rounded-3xl">
                Continue with Telegram
            </button>
            </Link>

            <p className="w-full flex justify-center text-xs font-['Inter'] font-normal text-white/10">Or login with</p>

            <button className="border-2 border-white/10 py-[clamp(10px,2.4vh,30px)] px-[clamp(10px,9.4vw,40px)] mt-[clamp(10px,2.8vh,34px)] rounded-3xl">
                Continue with Google
            </button>
        </div>

        <p className="text-sm font-['Inter'] font-normal text-white/40 mb-[clamp(10px,4.7vh,50px)]">By signing up, you agree to the Terms of <br /> Service and Data Processing Agreement</p>

      </div>
  )
}

// надпись снизу должна быть к низу, исправить!!!
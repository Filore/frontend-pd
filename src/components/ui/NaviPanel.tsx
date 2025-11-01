import { Link, useLocation } from "react-router-dom";


export default function NaviPanel(){
    const location = useLocation();
    const current = location.pathname;

    return(
        <div className="flex bg-white/10 w-[clamp(300px,79vw,450px)] h-[clamp(20px,8.2vh,80px)] rounded-full px-12 py-6.5 backdrop-blur-sm backdrop-saturate-150"> 
            <div className="flex justify-between items-center w-full p-0">

                <Link to="/gifts">
                <img src="/icons/Vector-2.svg" alt="gifts" className="w-4 h-4" />
                </Link>

                <Link to="/home">
                <img src="/icons/Vector-3.svg" alt="home" className={`w-4 h-4 ${current === "/" ? "opacity-100" : "opacity-20"} `}/>
                </Link>
                
                <Link to="/leaderboard">
                <img src="/icons/Vector-4.svg" alt="Leaderboard" className={`w-4 h-4 ${current === "/leaderboard" ? "opacity-100 brightness-200" : ""} `}/>
                </Link>

                <Link to="/profile">
                <img src="/icons/Vector-5.svg" alt="profile" className="w-4 h-4" />
                </Link>
            </div>

        </div>
    )
}
    
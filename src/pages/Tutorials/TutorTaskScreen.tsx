import { Link } from "react-router-dom";
import TutorHead from "./components/TutorHead";
import AchievementCard from "../Gifts/components/cards/AchievementCard";

export default function TutorChartScreen(){
    return(
        <div className="flex flex-col items-center overflow-hidden h-dvh pb-[clamp(15px,3.55vh,40px)] items-between justify-between">
            
            <TutorHead title="Motivation and Call to Action" description="Complete daily challenges, improve your accuracy, and prove you're the top crypto market analyst."/>

            <div className="flex w-full h-[44vh] px-[clamp(4px,2.5vw,30px)]">
            
            <ul className="w-full space-y-3">

                <li> <AchievementCard  id="a1"
                                        badge="Weekly tasks"
                                        title="Guess Ethereum’s Move"
                                        desc="The price shifts every minute — pick your side first!"
                                        summ={0.01}
                                        claimed={true}
                                        progress={2}
                                        steps={3}
                                        stepDesc="Guess the movement 3 times in a row" /> 
                </li>

                <li> <AchievementCard  id="a2"
                                        badge="Weekly tasks"
                                        title="Guess Ethereum’s Move"
                                        desc="The price shifts every minute — pick your side first!"
                                        summ={0.0001}
                                        claimed={false}
                                        progress={2}
                                        steps={3}
                                        stepDesc="Guess the movement 3 times in a row" /> 
                </li>

                <li> <AchievementCard  id="a3"
                                        badge="Weekly tasks"
                                        title="Guess Ethereum’s Move"
                                        desc="The price shifts every minute — pick your side first!"
                                        summ={0.0001}
                                        claimed={false}
                                        progress={2}
                                        steps={3}
                                        stepDesc="Guess the movement 3 times in a row" /> 
                </li>

            </ul>

            </div>
            
            <div className="pointer-events-none fixed inset-x-0 bottom-0 h-40
                        bg-gradient-to-b from-black/0 to-black via-black/75" />

            <div className="flex w-full justify-between px-[clamp(1px,7.6vw,50px)] z-10">

                <div className="flex items-end">
                <img src="/icons/Group 83.svg" alt="" />
                </div>

                <Link to="/home">
                <button className="px-[clamp(15px,5vw,30px)] py-[clamp(1px,2.8vh,30px)] border-2 border-white/20 rounded-2xl text-xs text-white font-['Inter'] font-normal">
                    NEXT
                </button>
                </Link>

            </div>


        </div>
    )
}
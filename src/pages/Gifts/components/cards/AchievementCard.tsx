import { Progress } from "@/components/ui/progress";


export type AchievementItem = {
  id: string;
  badge: string;
  title: string;
  desc: string;
  summ: number;
  claimed: boolean;
  progress: number;
  steps: number;
  stepDesc: string;
};

export default function AchievementCard({ badge, title, desc, summ, claimed, progress, steps, stepDesc }: AchievementItem) {
  return (
    <article className="w-full relative border border-[rgba(255,255,255,0.06)]
                        rounded-[16px] p-4">
      <p className="font-['Inter'] font-normal not-italic
                   text-[clamp(10px,2.6vw,12px)] leading-[1.4] text-white/40 mb-2">
        {badge}
      </p>

    <p className="w-[min(60vw,240px)]
    text-[clamp(14px,4vw,16px)]
    font-['Inter'] font-semibold text-white leading-[1] mb-2">
    {title}
    </p>

    <p className="mt-1 font-['Inter'] not-italic
                   text-[clamp(12px,3.8vw,14px)] leading-[1.4] text-white/40
                   min-w-0 w-full max-w-[240px] line-clamp-2 break-words mb-2">
        {desc}
      </p>

    <div className="flex items-center">
        <img src="/icons/Vector-10.svg" alt="present" />
        
        <p className="w-[min(60vw,240px)]
        text-[clamp(14px,4vw,16px)]
        font-['Inter'] font-semibold text-white ml-1 leading-[1]">
        {summ} ETH
        </p>
    </div>



    <Progress value={Math.max(0, Math.min(100, (100 / steps * progress)))} className="mt-7 h-2 rounded-full bg-white/10" />

    <div className="flex justify-between">
        <p className="mt-1 font-['Inter'] not-italic
                   text-[clamp(10px,3.8vw,12px)] leading-[1.4] text-white/80
                   min-w-0 w-full max-w-[240px] line-clamp-2 break-words mb-2">{stepDesc}</p>
        <p className="mt-1 font-['Inter'] not-italic
                   text-[clamp(10px,3.8vw,12px)] leading-[1.4] text-white/80
                   min-w-0 max-w-[240px] mb-2">{progress}/{steps}</p>
    </div>

    <button
    className={`absolute flex top-4 justify-center items-center right-4 
        ${claimed? "bg-[linear-gradient(90deg,_#CFF7F0_0%,_#54FCF2_33%,_#ACEB36_66%,_#ACEB36_100%)] text-black" : "bg-white/10 text-white/20"} py-1.5 px-2.5 font-['Inter'] text-black font-normal text-sm rounded-3xl transition`}>
    
    {(claimed)&&(<img src="/icons/Vector-7.svg" alt="prize" className="pr-1"/>)}
    
    {(!claimed)&&(<img src="/icons/Vector-8.svg" alt="prize" className="pr-1"/>)}
    
    <p>Claim</p>
  </button>
    

    </article>
  );
}

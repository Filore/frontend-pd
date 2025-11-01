export type TaskItem = {
  id: string;
  badge: string;
  title: string;
  desc: string;
  summ: number;
  claimed: boolean;
};

export default function TaskCard({badge, title, desc, summ, claimed}: TaskItem) {
  return (
    <article className="w-full border border-[rgba(255,255,255,0.06)]
                        rounded-[16px] p-4 flex-col items-center gap-3 relative">
     
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
    <p className="w-[min(60vw,240px)] ml-1
    text-[clamp(14px,4vw,16px)]
    font-['Inter'] font-semibold text-white leading-[1]">
    {summ} ETH
    </p>
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

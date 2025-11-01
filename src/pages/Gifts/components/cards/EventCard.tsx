import { Progress } from "@/components/ui/progress";

type Reward = { place: string; value: string };

export type EventItem = {
  id: string;
  badge: string;
  title: string;
  desc: string;
  deadline: string;
  progress?: number;
  reward: Reward[]
  info: string
}

type Props = EventItem & {
  onOpen?: (item: EventItem) => void
}

export default function EventCard(props: Props) {

  const {badge, title, desc, deadline, progress = 0, onOpen} = props

  return (
    <article className="w-full relative h-[clamp(160px,28vh,260px)]
                        border border-[rgba(255,255,255,0.06)]
                        rounded-[20px] p-5 bg-white/0 ">
      <p className="font-['Inter'] font-normal not-italic
                   text-[clamp(8px,2.5vw,12px)] leading-[1.4] text-white/40">
        {badge}
      </p>

      <h2 className="mt-1 font-['Grtsk_Giga'] font-bold text-white
                     text-[clamp(12px,4vw,20px)] leading-[1.4]
                     max-w-[51vw] whitespace-normal break-words" title={title}>
        {title}
      </h2>

      <p className="mt-1 font-['Inter'] not-italic
                   text-[clamp(12px,3.5vw,15px)] leading-[1.4] text-white/40
                   min-w-0 w-full max-w-[240px] line-clamp-2 break-words">
        {desc}
      </p>

        <div className="flex items-center mt-2">
            <img src="/icons/Vector-9.svg" alt="clock" />
      <p className="ml-1 font-['Inter'] text-[clamp(10px,2.6vw,12px)] leading-[1.4] text-white/40">
        {deadline}
      </p>
      </div>

      <Progress value={Math.max(0, Math.min(100, progress))} className="mt-7 h-2 rounded-full bg-white/10" />


    <div className="absolute top-4 right-4 flex">
      <button onClick={() => onOpen?.(props)} className="mr-1 border-[1px] border-white/60 text-white/60 rounded-full h-8 w-8">i</button>
      
      <button
    className="flex  justify-center items-center
        bg-[linear-gradient(90deg,_#CFF7F0_0%,_#54FCF2_33%,_#ACEB36_66%,_#ACEB36_100%)]  py-1.5 px-2.5 font-['Inter'] text-black font-normal text-sm rounded-3xl transition">
    
    <p>Join</p>
  </button>

  </div>
    </article>
  );
}

import { useMemo, useState } from "react";
import NaviPanel from "@/components/ui/NaviPanel";
import ButtonGroup from "@/components/ui/ButtonGroup";
import TabButtons from "./components/TabButtons";
import EventCard, {type EventItem } from "./components/cards/EventCard";
import TaskCard, {type TaskItem } from "./components/cards/TaskCard";
import AchievementCard, {type AchievementItem } from "./components/cards/AchievementCard";
import EventInfoDrawer from "./EventInfoDrawer";



type Tab = "events" | "tasks" | "achievements";


const mockData: Record<Tab, Array<EventItem | TaskItem | AchievementItem>> = {
  events: [
    {
      id: "e1",
      badge: "Get 1000+ prizes.",
      title: "Ethereum Pump or Dump",
      desc: "Reward for 1st place, to the one who stays in the top for 7 days",
      deadline: "6 days 12 hours",
      progress: 100,
      reward: [{place: "1-3",value: "0.0006 ETH"}, {place:"4-5", value:"0.0003 ETH"},  {place:"6-7", value:"0.0003 ETH"},  {place:"8", value:"0.0003 ETH"},  {place:"9-10", value:"0.0001 ETH"}],
      info: "Your intuition and team spirit are what matter most. Join a squad or create your own, make predictions on the direction of cryptocurrency prices and earn points for accurate predictions. The higher your team's score, the closer you are to the top of the rankings and prizes. This is a game where trading becomes a competition and the market becomes an arena for squad battles. Rules: Participation is free of charge. Each player may only join one squad. Predictions are made on selected cryptocurrency pairs (up/down). Points are awarded for accurate predictions; incorrect predictions do not count. The number of predictions per day is limited by the contest rules. The squad that scores the most points over the entire period wins. Prizes are distributed among the participants of the top teams."
    } satisfies EventItem,
    {
      id: "e2",
      badge: "Get 1000+ prizes.",
      title: "Bitcoin Pump or Dump",
      desc: "Reward for 1st place, to the one who stays in the top for 7 days",
      deadline: "14 hours",
      progress: 100,
      reward: [{place: "1-3",value: "0.0006 ETH"}, {place:"4-5", value:"0.0003 ETH"}],
      info: "Your intuition and team spirit are what matter most. Join a squad or create your own, make predictions on the direction of cryptocurrency prices and earn points for accurate predictions. The higher your team's score, the closer you are to the top of the rankings and prizes. This is a game where trading becomes a competition and the market becomes an arena for squad battles."

    } satisfies EventItem,
    {
      id: "e3",
      badge: "Get 1000+ prizes.",
      title: "Bitcoin Pump or Dump",
      desc: "Reward for 1st place, to the one who stays in the top for 7 days",
      deadline: "14 hours",
      progress: 100,
      reward: [{place: "1-3",value: "0.0006 ETH"}, {place:"4-5", value:"0.0003 ETH"}],
      info: "Your intuition and team spirit are what matter most. Join a squad or create your own, make predictions on the direction of cryptocurrency prices and earn points for accurate predictions. The higher your team's score, the closer you are to the top of the rankings and prizes. This is a game where trading becomes a competition and the market becomes an arena for squad battles."

    } satisfies EventItem,
    {
      id: "e4",
      badge: "Get 1000+ prizes.",
      title: "Bitcoin Pump or Dump",
      desc: "Reward for 1st place, to the one who stays in the top for 7 days",
      deadline: "14 hours",
      progress: 100,
      reward: [{place: "1-3",value: "0.0006 ETH"}, {place:"4-5", value:"0.0003 ETH"}],
      info: "Your intuition and team spirit are what matter most. Join a squad or create your own, make predictions on the direction of cryptocurrency prices and earn points for accurate predictions. The higher your team's score, the closer you are to the top of the rankings and prizes. This is a game where trading becomes a competition and the market becomes an arena for squad battles."

    } satisfies EventItem,
  ],
  tasks: [
    {
      id: "t1",
      badge: "Weekly tasks",
      title: "Repost on Facebook",
      desc: "The price shifts every minute — pick your side first!",
      summ: 0.0001,
      claimed: true,
    } satisfies TaskItem,
    {
      id: "t2",
      badge: "Weekly tasks",
      title: "Repost on Facebook",
      desc: "Make your call and see how you stack up against others.",
      summ: 0.0001,
      claimed: false,
    } satisfies TaskItem,
  ],
  achievements: [
    {
      id: "a1",
      badge: "Weekly tasks",
      title: "Guess Ethereum’s Move",
      desc: "The price shifts every minute — pick your side first!",
      summ: 0.0001,
      claimed: false,
      progress: 2,
      steps: 3,
      stepDesc: "Guess the movement 3 times in a row"
    } satisfies AchievementItem,
    {
      id: "a2",
      badge: "Weekly tasks",
      title: "ETH Up or Down?",
      desc: "The price shifts every minute — pick your side first!",
      summ: 0.5567876,
      claimed: true,
      progress: 3,
      steps: 3,
      stepDesc: "Guess the movement 3 times in a row"
    } satisfies AchievementItem,
  ],
};


const CardByTab: Record<Tab, React.ComponentType<any>> = {
  events: EventCard,
  tasks: TaskCard,
  achievements: AchievementCard,
};

export default function Gifts() {
  const [active, setActive] = useState<Tab>("events");

  const items = useMemo(() => mockData[active], [active]);
  const Card = CardByTab[active];

  const [activeDraw, setActiveDraw] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const openEvent = (item:EventItem) => {
    setSelectedEvent(item)
    setActiveDraw(true)
  }

  return (
    <div className="relative h-dvh overflow-hidden px-4 sm:px-6">
      <div className="mx-auto max-w-[min(92vw,560px)] h-full flex flex-col ">

        <header className="shrink-0 pt-[clamp(16px,7.5vh,70px)]"> 
          <h1 className="text-xl font-bold not-italic text-white font-['Grtsk_Giga']
                         text-[clamp(18px,5.6vw,28px)] leading-[1.2] text-center pb-[clamp(7px,1.1vh,14px)]">
            Gifts
          </h1>

          <p className="mx-auto w-[clamp(260px,56vw,339px)] font-['Inter'] not-italic font-normal
                        text-[clamp(12px,4vw,18px)] leading-[1.4] text-center text-white/40 mb-3">
            Don’t miss your chance to get a gift today.
          </p>


          <ButtonGroup
            labels={["Events", "Tasks", "Achievements"]}
            onClicks={[
              () => setActive("events"),
              () => setActive("tasks"),
              () => setActive("achievements"),
            ]}
            onChange={(label) =>
              setActive(label.toLowerCase() as Tab)
            }
          />


          <div className="">
            <TabButtons />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 [scrollbar-width:none]                
        [-ms-overflow-style:none]              
        [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
 
            <ul className="space-y-3 pb-30">
              {items.map((item: any) => (
                <li key={item.id}>
                  {active === "achievements" ? (
                  <AchievementCard
                    {...(item as AchievementItem)}
                  />
                ) : active === "events" ? (
                  <EventCard {...item} 
                  onOpen={openEvent}/>
                ) : (
                  <TaskCard {...item} />
                )}
                </li>
              ))}
            </ul>
        </div>

        <div className="pointer-events-none fixed inset-x-0 bottom-0 h-30 z-30
                        bg-gradient-to-b from-black/0 to-black/100 via-black/75" />

        <div className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)]">
          <div className="mx-auto max-w-[480px] px-4">
            <div className="flex justify-center mb-[clamp(20px,4.69vw,60px)]">
            <NaviPanel />
            </div>
          </div>
        </div>


        <EventInfoDrawer isOpen={activeDraw} changeOpen={setActiveDraw} event={selectedEvent}/>
      </div>
    </div>
  );
}

import { Drawer } from 'vaul';
import type { EventItem } from './components/cards/EventCard';
import DateComp from '@/components/ui/DateComp';
import ButtonGroup from '@/components/ui/ButtonGroup';
import { useState } from 'react';

type drawerResProps = {
    isOpen: boolean;
    changeOpen: (v: boolean) => void;
    event: EventItem | null;
}

export default function EventInfoDrawer({isOpen, changeOpen, event}:drawerResProps){

    if (!isOpen || !event) return null;

    const { badge, title, desc, deadline, reward, info } = event;

    const [tabActive, setTabActive] = useState<"gifts" | "info">("gifts");

    return(
    <Drawer.Root open={isOpen} onOpenChange={changeOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 "/>
        <Drawer.Content className="
          fixed bottom-0 inset-x-2 overflow-hidden
          mt-24 rounded-2xl bg-[#3F20A8] outline-none
          flex flex-col
          ">
          
          <div className="relative flex flex-1 pb-[clamp(8px,2.3vh,26px)] pt-[clamp(20px,4.2vh,40px)] px-[clamp(8px,5vw,26px)] rounded-t-[10px] justify-center items-center">

            <div className="flex flex-col z-10 justify-center items-center max-w-md mx-auto">

             <Drawer.Title className=" flex text-white font-['Inter'] text-sm font-normal justify-center">{badge}</Drawer.Title>

              
              <p className="text-white mt-[clamp(20px,3.7vh,40px)] font-['Grtsk_Giga'] text-center font-bold text-4xl flex justify-center">
                {title}
              </p>

              <p className="flex text-white/60 font-['Inter'] text-base font-normal justify-center mt-[clamp(8px,1.9vh,20px)] text-center mb-[clamp(8px,3.8vh,40px)]">{desc}</p>

              <DateComp />

              <p className="ml-1 font-['Inter'] text-[clamp(10px,2.6vw,12px)] leading-[1.4] text-white/40">
                  {deadline}
                  </p>


             <ButtonGroup
                labels={["Gifts", "Info & Rules"]}
                onClicks={[
                () => setTabActive("gifts"),
                () => setTabActive("info"),
                  ]}
                onChange={(label) =>
                setTabActive(label.toLowerCase() as "gifts" | "info")
                }
                />

                {
                  (tabActive === "gifts") ? (
                    <ul>
                      {reward.map((rew, i) => (
                        <li key={i}>

                        <article className="w-full border border-[rgba(255,255,255,0.06)]
                        rounded-[16px] p-4 flex-col items-center gap-3 relative">
     
                            <p className="font-['Inter'] font-normal not-italic
                                          text-[clamp(10px,2.6vw,12px)] leading-[1.4] text-white/40 mb-2">
                                {rew.place}
                              </p>

                            <p className="w-[min(60vw,240px)]
                            text-[clamp(14px,4vw,16px)]
                            font-['Inter'] font-semibold text-white leading-[1] mb-2">
                              {rew.value}
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
                            {rew.value}
                            </p>
                            </div>
                            </article>

                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{info}</p>
                  )
                }

            </div>
          </div>

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

//поменять отступы

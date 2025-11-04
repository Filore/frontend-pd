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
          fixed bottom-0 inset-x-2 overflow-visible
          mt-24 rounded-2xl bg-[#3F20A8] outline-none
          flex flex-col
          ">

          <div
    aria-hidden
    className="
      absolute left-1/2 -translate-x-1/2
      -top-3
      w-25 h-1.5
      rounded-full
      bg-white/30
    "
  />

          
          
          <div className="relative overflow-hidden flex flex-1  pt-[clamp(20px,4.2vh,40px)] rounded-t-[10px] justify-center items-center">

          <div
      aria-hidden
      className="
        absolute
        -top-[clamp(24px,8vh,120px)]
        w-[clamp(260px,82vw,720px)]
        h-[clamp(140px,58vw,380px)]
        left-1/2 -translate-x-1/2

        rounded-[50%]
        z-0
        blur-[50px]
        pointer-events-none
        bg-[linear-gradient(78.6deg,rgba(172,235,54,1)_8%,rgba(166,255,0,1)_45%,rgba(172,235,54,1)_73%,rgba(166,235,0,1)_98%)]"
    />


            <div className="flex flex-col z-10 justify-center items-center max-w-md mx-auto">

             <Drawer.Title className=" flex text-white font-['Inter'] text-sm font-normal justify-center">{badge}</Drawer.Title>

              
              <p className="text-white mt-[clamp(6px,1.8vh,20px)] font-['Grtsk_Giga'] text-center font-bold text-[24px] flex justify-center max-w-[76vw]">
                {title}
              </p>

              <p className="flex text-white font-['Inter'] text-base font-normal justify-center mt-[clamp(6px,1.9vh,20px)] text-center px-[clamp(20px,16vw,70px)] mb-[clamp(2px,1.1vh,20px)]">{desc}</p>

              <DateComp />

              <p className="ml-1 font-['Inter'] mb-[clamp(6px,2.5vh,30px)] mt-[clamp(6px,1.1vh,20px)] text-[clamp(10px,2.6vw,12px)] leading-[1.4] text-white/90">
                  {deadline}
                  </p>

              <div className="w-full px-[clamp(10px,6.8vw,30px)]">
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
                </div>

                {
                  (tabActive === "gifts") ? (
                    <div className="w-full px-2.5 pb-4 mt-[clamp(10px,2.3vh,30px)] flex-1 overflow-y-auto max-h-[40vh]
                    [scrollbar-width:none]                
                    [-ms-overflow-style:none]              
                    [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
                    <ul className="w-full space-y-3">
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
                    </div>
                  ) : (
                    <div className="w-full px-2.5 pb-4 mt-[clamp(10px,2.3vh,30px)] flex-1 overflow-y-auto max-h-[40vh]
                    [scrollbar-width:none]                
                    [-ms-overflow-style:none]              
                    [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
                    <p className="font-['Inter'] font-normal px-[clamp(10px,6.8vw,30px)] text-base text-white/40 ">
                      {info}</p>
                     </div>
                  )
                }

            </div>
          </div>

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}


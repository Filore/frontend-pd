import { Progress } from '@/components/ui/progress';
import type { AchieveDrawerType } from '@/types';
import { Drawer } from 'vaul';

type drawerResProps = {
    isOpen: boolean;
    changeOpen: (v: boolean) => void;
    achieve: AchieveDrawerType
}

export default function AchieveDrawer({isOpen, changeOpen, achieve}:drawerResProps){

    const { pic, name, desc, act } = achieve

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
              
              <div className="flex flex-row justify-between gap-[clamp(10px,7.1vw,40px)]">
                  <img src={pic} alt="prizepic" className="w-[clamp(50px,25.3vh,400px)] h-[clamp(50px,54.2vw,400px)]"/>
              </div>
              
              <p className="text-white mt-[clamp(20px,3.7vh,40px)] font-['Grtsk_Giga'] text-center font-bold text-4xl flex justify-center">
                {name}
              </p>

              <p className="flex text-white/60 font-['Inter'] text-base font-normal justify-center mt-[clamp(8px,1.9vh,20px)] text-center mb-[clamp(8px,3.8vh,40px)]">{desc}</p>

              <div className='w-full'>
              <Progress value={100} className="h-2 rounded-full bg-white/10" />

                <div className="flex justify-between">
                <p className="mt-1 font-['Inter'] not-italic
                   text-[clamp(10px,3.8vw,12px)] leading-[1.4] text-white/80
                   min-w-0 w-full max-w-[240px] line-clamp-2 break-words mb-2">{act[0]}</p>
                  <p className="mt-1 font-['Inter'] not-italic
                   text-[clamp(10px,3.8vw,12px)] leading-[1.4] text-white/80
                   min-w-0 max-w-[240px] mb-2">{act[1]}</p>
                </div>
              </div>

              <div className="flex flex-row justify-between gap-[clamp(7px,2.5vw,20px)]">

                <button className="font-['Inter'] tracking-wider text-sm font-normal border-2 border-white/30 py-[clamp(8px,2.7vh,29px)] px-[clamp(10px,5vw,30px)] rounded-full text-white">
                   SHARE
                </button>

              </div>

            </div>
          </div>

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

//поменять отступы

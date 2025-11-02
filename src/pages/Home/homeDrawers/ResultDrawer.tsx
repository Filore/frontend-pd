import { Drawer } from 'vaul';

type drawerResProps = {
    isOpen: boolean;
    changeOpen: (v: boolean) => void;
    summ: readonly number[]
}

export default function ResultDrawer({isOpen, changeOpen, summ}:drawerResProps){
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
          
          <div className="relative flex overflow-hidden flex-1 pb-[clamp(8px,2.3vh,26px)] pt-[clamp(20px,4.2vh,40px)] px-[clamp(8px,5vw,26px)] rounded-t-[10px] justify-center items-center">

            <div
      aria-hidden
      className={`
        absolute
        -top-[clamp(24px,8vh,120px)]
        w-[clamp(260px,92vw,720px)]
        h-[clamp(140px,48vw,380px)]
        left-1/2 -translate-x-1/2

        rounded-[50%]
        z-0
        blur-[50px]
        pointer-events-none
        ${summ[2] > 0 ? "bg-[linear-gradient(78.6deg,rgba(172,235,54,1)_8%,rgba(166,255,0,1)_45%,rgba(172,235,54,1)_73%,rgba(166,235,0,1)_98%)]" : 
            "bg-[linear-gradient(78.6deg,rgba(255,0,4,0.9)_8.39%,rgba(255,0,55,0.9)_44.59%,rgba(255,0,0,0.9)_72.97%,rgba(244,175,0,0.9)_97.97%)]"}
      `}
    />

            <div className="flex flex-col z-10 justify-center items-center max-w-md mx-auto">
              
              <div className="flex flex-row justify-between gap-[clamp(10px,7.1vw,40px)]">
                    <p className="text-white font-['Inter'] text-sm font-normal text-center">
                        ENTRY PRICE<br />{summ[0]}
                    </p>

                    <p className="text-white font-['Inter'] text-sm font-normal text-center">
                        CURRENT PRICE<br />{summ[1]}
                    </p>
              </div>
              
              <p className="text-white mt-[clamp(20px,3.7vh,40px)] font-['Grtsk_Giga'] font-bold text-4xl flex justify-center">
               {summ[2] > 0 ? "+" : ""}
                {summ[2]} ₮
              </p>

              <p className="flex text-white/60 font-['Inter'] text-base font-normal justify-center mt-[clamp(8px,1.9vh,20px)] text-center mb-[clamp(8px,3.8vh,40px)]">You guessed the market move correctly! Your account has increased. Keep up the good work and top the rating!</p>

              <div className="flex flex-row justify-between gap-[clamp(7px,2.5vw,20px)]">

            {summ[2] > 0 ? (<button className="font-['Inter'] text-sm font-medium py-[clamp(8px,2.7vh,29px)] px-[clamp(30px,12.7vw,60px)] rounded-full bg-white text-[#3F20A8]">
                    Claim prize
                </button>) : ("")}

                <button className="font-['Inter'] text-sm font-normal border-2 border-white/30 py-[clamp(8px,2.7vh,29px)] px-[clamp(10px,5vw,30px)] rounded-full text-white">
                    {summ[2] > 0 ? "Share" : "OKAY"}
                </button>

              </div>

            </div>
          </div>

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}


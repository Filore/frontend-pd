import { Drawer } from 'vaul';

type drawerFriendProps = {
    isOpen: boolean;
    changeOpen: (v: boolean) => void;
    inviteCode: string

}

export default function InviteDrawer({isOpen, changeOpen, inviteCode}: drawerFriendProps){
    return(
    <Drawer.Root open={isOpen} onOpenChange={changeOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 "/>
        <Drawer.Content className="
          fixed bottom-0 inset-x-3 overflow-hidden
          mt-24 rounded-2xl bg-black outline-none
          flex flex-col
          ">
          
          <div className="relative flex flex-1 pb-[clamp(8px,2.3vh,26px)] pt-[clamp(8px,4vh,40px)] px-[clamp(8px,5vw,26px)] rounded-t-[10px] justify-center items-center">

                  <div
      aria-hidden
      className="
        absolute
        w-[340px] h-[248px]
        left-1/2 -translate-x-1/2
        -top-[80px]
        rounded-[50%]
        z-0
        blur-[50px]
        pointer-events-none
        bg-[linear-gradient(90deg,rgba(207,247,240,1)_0%,rgba(84,252,242,1)_33%,rgba(172,235,54,1)_66%,rgba(172,235,54,1)_100%)]
      "
    />

            <div className="flex flex-col z-10 justify-center items-center max-w-md mx-auto">
              

              <Drawer.Title className=" flex text-white font-['Inter'] text-sm font-normal justify-center">Invite a friend</Drawer.Title>
              <p className="text-white mt-[clamp(8px,1.2vh,16px)] font-['Grtsk_Giga'] font-bold text-4xl flex justify-center">
                {inviteCode}
              </p>

              <p className="flex text-white font-['Inter'] text-base font-normal justify-center mt-[clamp(8px,1.9vh,20px)] text-center">Invite a friend and compete with each other and in the overall global leaderboard.</p>

              <button className="w-[clamp(220px,85vw,393px)] h-[clamp(40px,7vh,100px)] bg-[linear-gradient(90deg,_#CFF7F0_0%,_#54FCF2_33%,_#ACEB36_66%,_#ACEB36_100%)] mt-[clamp(8px,3.4vh,40px)] rounded-xl">
                copy
              </button>

            </div>
          </div>

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
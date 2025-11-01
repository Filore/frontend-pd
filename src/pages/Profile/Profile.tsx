import NaviPanel from "@/components/ui/NaviPanel";
import UserAvatar from "./components/UserAvatar";
import { useMemo, useState } from "react";
import DateComp from "@/components/ui/DateComp";
import ButtonGroup from "@/components/ui/ButtonGroup";
import type { AchieveItem } from "./components/cards/AchieveCard";
import AchieveCard from "./components/cards/AchieveCard";
import type { FriendsItem } from "./components/cards/FriendsCard";
import FriendsCard from "./components/cards/FriendsCard";
import SettingsList from "./components/cards/SettingsList";
import InviteDrawer from "./friend-driver/InviteDrawer";

type Tabs = "achievements" | "friends" | "settings";

const mockData: Record<Exclude<Tabs, "settings">, any[]> = {
  achievements: [
    { id: "a1", name: "Bitcoin Guru", pic: "/icons/Illustration.svg" } satisfies AchieveItem,
    { id: "a2", name: "Bitcoin Guru", pic: "/icons/Illustration.svg" } satisfies AchieveItem,
    { id: "a3", name: "Bitcoin Guru", pic: "/icons/Illustration.svg" } satisfies AchieveItem,
    { id: "a4", name: "Bitcoin Guru", pic: "/icons/Illustration.svg" } satisfies AchieveItem,
    { id: "a5", name: "Bitcoin Guru", pic: "/icons/Illustration.svg" } satisfies AchieveItem,
    { id: "a6", name: "Bitcoin Guru", pic: "/icons/Illustration.svg" } satisfies AchieveItem,
  ],
  friends: [
    { id: "f1", name: "@maxim", balance: 5555, isFirst: true, place: 4 } satisfies FriendsItem,
    { id: "f2", name: "@maxim", balance: 555, isFirst: false, place: 14 } satisfies FriendsItem,
    { id: "f3", name: "@maxim", balance: 3555, isFirst: false, place: 114 } satisfies FriendsItem,
    { id: "f4", name: "@maxim", balance: 1555, isFirst: false, place: 34 } satisfies FriendsItem,
    { id: "f5", name: "@maxim", balance: 5545, isFirst: false, place: 454 } satisfies FriendsItem,
    { id: "f6", name: "@maxim", balance: 5055, isFirst: false, place: 444 } satisfies FriendsItem,
    { id: "f7", name: "@maxim", balance: 5155, isFirst: false, place: 74 } satisfies FriendsItem,
  ],
};

const cardTypes: Record<Tabs, React.ComponentType<any>> = {
  achievements: AchieveCard,
  friends: FriendsCard,
  settings: SettingsList,
};

export default function Profile() {
  const invCode = "0xbc1537"
  const [balanceValue] = useState(24910);
  const [inviteOpen, setInviteOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<Tabs>("achievements");

  const items = useMemo(
    () => (activeTab === "settings" ? [] : mockData[activeTab]),
    [activeTab]
  );

  const Card = cardTypes[activeTab];

  return (
    <div className="relative h-dvh overflow-hidden text-white px-4 sm:px-6">
      <div className="mx-auto max-w-[560px] h-full flex flex-col">
      <div className="flex-shrink-0">
        
        <div className="flex justify-center mt-[clamp(30px,7.5vh,80px)]">
          <UserAvatar src="/icons/Ellipse-5.png" initials="NW" size="clamp(40px,11.7vh,150px)" />
        </div>

        <p className="text-center font-['Inter'] text-base font-medium mt-clamp(12px,1.9vh,20px) ">@nicholaswill</p>
        <p className="text-center font-['Inter'] text-sm mt-clamp(6px,0.9vh,16px) text-white/60">0xbc1537</p>

        <h3 className="text-center font-['Grtsk_Giga'] text-[clamp(20px,5.6vw,24px)] font-bold text-[#ACEB36] mt-clamp(12px,1.9vh,20px)">
          {balanceValue} ₮
        </h3>

        <div className="flex justify-center gap-3">
          <button className="border border-white/10 rounded-3xl py-[clamp(10px,1.5vh,17px)] px-[clamp(10px,4vw,19px)] font-['Inter'] text-sm font-medium">
           V 1371 T
          </button> 
          <button className="border border-white/10 rounded-3xl py-[clamp(10px,1.5vh,17px)] px-[clamp(10px,4vw,19px)] font-['Inter'] text-sm font-medium">
           V 4144
          </button>
        </div>

        <div className="mt-[clamp(10px,1.4vh,16px)] mb-[clamp(25px,3.7vh,44px)]"> 
        <DateComp />
        </div>

        <ButtonGroup
          labels={["Achievements", "Friends", "Settings"]}
          onChange={(label) => setActiveTab(label.toLowerCase() as Tabs)}
        />
      </div>

      {activeTab === "settings" ? (
  <div className="flex-1 mt-[clamp(7px,1.2vh,12px)]">
    <SettingsList />
  </div>
) : (
  <div
    className="flex-1 overflow-y-auto overscroll-contain 
    pb-[calc(140px+env(safe-area-inset-bottom))] mt-[clamp(7px,1.2vh,12px)] no-scrollbar 
    [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0"
  >
    {activeTab === "achievements" ? (
      <div className="grid grid-cols-2 gap-2.5 ">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    ) : (
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    )}
  </div>
)}

      {activeTab !== "settings" && (
  <>
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 h-[clamp(80px,16vh,140px)] z-30
                 bg-gradient-to-b from-black/0 via-black/60 to-black/100"
    />

    <div className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-[480px] px-4">

        {activeTab === "friends" && (
          <div className="flex justify-center">

            <button
              onClick={() => setInviteOpen(true)}
              className="pointer-events-auto
                         bg-[linear-gradient(90deg,_#CFF7F0_0%,_#54FCF2_33%,_#ACEB36_66%,_#ACEB36_100%)]
                         text-black font-medium px-[clamp(12px,9.4vw,45px)] py-[clamp(12px,1.9vh,26px)] rounded-full shadow-lg
                         -translate-y-5 font-['Inter'] text-xs"
            >
              INVITE A FRIEND
            </button>
          </div>

        )}

        <div className="flex justify-center mb-[clamp(20px,4.69vw,60px)]">
          <NaviPanel />
        </div>
      </div>
    </div>
  </>
)}

  <InviteDrawer isOpen={inviteOpen} changeOpen={setInviteOpen} inviteCode={invCode}/>

    </div>
    </div>
  )
}

import { useState } from "react";
import ButtonGroup from "@/components/ui/ButtonGroup";
import NaviPanel from "@/components/ui/NaviPanel";
import DateComp from "@/components/ui/DateComp";
import { Link } from "react-router-dom";

type RatingItem = { name: string; money: number };
type Group = { name: "global" | "friends"; rating: RatingItem[] };

export default function Leaderboard() {
  const myName = "@matveytoporkov";

  const [leaderList] = useState<Group[]>([
    { name: "global", rating: [{ name: "@mariagonzalez", money: 1000 }] },
    {
      name: "friends",
      rating: [
        { name: "@maximmalyshev", money: 1000 },
        { name: "@matveytoporkov", money: 2000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 5000 },
        { name: "@vasyapupkin", money: 8000 },
        { name: "@vasyapupkin", money: 1001 },
      ],
    },
  ]);

  const [listCategory, setListCategory] = useState<"global" | "friends">("global");
  const actualList = leaderList.find((g) => g.name === listCategory)?.rating ?? [];

  return (
    <div className="relative h-dvh bg-transparent overflow-hidden px-4 sm:px-6">
      <div className="mx-auto max-w-[560px] h-full flex flex-col px-0 sm:px-0">

        <header className="shrink-0 pt-[clamp(40px,7.5vh,70px)]">
          <h1 className="text-xl font-bold not-italic text-white font-['Grtsk_Giga'] text-[clamp(18px,5.6vw,24px)] leading-[1.2] text-center pb-[clamp(8px,1.1vw,18px)]">
            Who's on Top?
          </h1>

          <p className="mx-auto w-[clamp(200px,75vw,300px)] h-[44px] font-['Inter'] not-italic font-normal text-[clamp(14px,4vw,16px)] leading-[1.4] text-center text-white/40 mb-[clamp(8px,2.5vh,27px)]">
            Positions change every minute. Keep up the pace — overtake the leader!
          </p>

          <ButtonGroup
            labels={["Global", "Friends"]}
            onClicks={[
              () => setListCategory("global"),
              () => setListCategory("friends"),
            ]}
            onChange={(label) =>
              setListCategory(label.toLowerCase() as "global" | "friends")
            }
          />
          <div className="my-[clamp(15px,3.6vh,30px)]">
            <DateComp />
          </div>
        </header>


        <section className="flex-1 overflow-y-auto
        [scrollbar-width:none]                
        [-ms-overflow-style:none]              
        [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0
        pb-[calc(140px+env(safe-area-inset-bottom))]
        "> 
          <ul>
            {actualList.map((user, index) => {
              const top3 = index < 3;
              return (
                <li key={`${user.name}-${index}`}>
                  <div className="h-[clamp(50px,5.9vh,59px)] w-full rounded-full border border-white/10 flex items-center justify-between p-3 mb-2.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-7 rounded-full px-3 items-center justify-center flex ${
                          index === 0
                            ? "bg-[linear-gradient(90deg,_#CFF7F0_0%,_#54FCF2_33%,_#ACEB36_66%,_#ACEB36_100%)]"
                            : "bg-white/10"
                        }`}
                      >
                        {top3 && (
                          <svg
                            className={`w-3 h-3 mr-1.5 ${index === 0 ? "text-black" : "text-white"}`}
                            viewBox="0 0 12 12"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M2 0.333333C2 0.244928 2.03512 0.160143 2.09763 0.0976311C2.16014 0.035119 2.24493 0 2.33333 0H9.66667C9.75507 0 9.83986 0.035119 9.90237 0.0976311C9.96488 0.160143 10 0.244928 10 0.333333V0.666667H11.6667C11.7551 0.666667 11.8399 0.701786 11.9024 0.764298C11.9649 0.82681 12 0.911595 12 1V3C12 3.44203 11.8244 3.86595 11.5118 4.17851C11.1993 4.49107 10.7754 4.66667 10.3333 4.66667H9.77233C9.53399 5.33898 9.12047 5.93548 8.5745 6.39454C8.02854 6.85361 7.36992 7.15859 6.66667 7.278V9.33333H8.66667C8.75507 9.33333 8.83986 9.36845 8.90237 9.43096C8.96488 9.49348 9 9.57826 9 9.66667V11.6667C9 11.7551 8.96488 11.8399 8.90237 11.9024C8.83986 11.9649 8.75507 12 8.66667 12H3.33333C3.24493 12 3.16014 11.9649 3.09763 11.9024C3.03512 11.8399 3 11.7551 3 11.6667V9.66667C3 9.57826 3.03512 9.49348 3.09763 9.43096C3.16014 9.36845 3.24493 9.33333 3.33333 9.33333H5.33333V7.278C4.63008 7.15859 3.97146 6.85361 3.4255 6.39454C2.87953 5.93548 2.46602 5.33898 2.22767 4.66667H1.66667C1.22464 4.66667 0.800716 4.49107 0.488155 4.17851C0.175595 3.86595 0 3.44203 0 3V1C0 0.911595 0.035119 0.82681 0.0976311 0.764298C0.160143 0.701786 0.244928 0.666667 0.333333 0.666667H2V0.333333ZM10 3.33333V1.33333H11.3333V3C11.3333 3.26522 11.228 3.51957 11.0404 3.70711C10.8529 3.89464 10.5985 4 10.3333 4H10V3.33333ZM2 1.33333H0.666667V3C0.666667 3.26522 0.772023 3.51957 0.95956 3.70711C1.1471 3.89464 1.40145 4 1.66667 4H2V1.33333Z" />
                          </svg>
                        )}
                        <p
                          className={`font-['Inter'] font-normal text-xs text-center leading-[1] ${
                            index === 0 ? "text-black" : top3 ? "text-white" : "text-white/60"
                          }`}
                        >
                          {index + 1}
                        </p>
                      </div>

                      <p
                        className={`font-['Inter'] font-normal text-sm leading-[1] ${
                          index === 0 ? "text-[#ACEB36]" : ""
                        }`}
                      >
                        {user.name}
                      </p>
                    </div>

                    <p
                      className={`font-['Inter'] font-normal text-sm leading-[1] ${
                        index === 0 ? "text-[#ACEB36]" : ""
                      }`}
                    >
                      {user.money} ₮
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>


      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-30 z-30
                        bg-gradient-to-b from-black/0 to-black/100 via-black/75" />


      <div className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-[480px] px-4">

          <div className="flex justify-center">
            <Link to="/roulette">
            <button
              className="pointer-events-auto
                         bg-[linear-gradient(90deg,_#CFF7F0_0%,_#54FCF2_33%,_#ACEB36_66%,_#ACEB36_100%)]
                         text-black font-medium px-[clamp(12px,9.4vw,45px)] py-[clamp(12px,1.9vh,26px)] rounded-full shadow-lg
                         -translate-y-5 font-['Inter'] text-xs"
            >
              SHOW ME
            </button>
            </Link>
          </div>


          

          <div className="flex justify-center mb-[clamp(20px,4.69vw,60px)]">
            <NaviPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

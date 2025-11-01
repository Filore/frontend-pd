export type FriendsItem = {
    id: string
    name: string
    balance: number
    isFirst: boolean
    place: number
}


export default function FriendsCard(
    {
        name,
        balance,
        isFirst,
        place
    }:FriendsItem){
    return(
        <div className="h-12 w-full rounded-full border border-white/10 flex items-center justify-between p-2.5 mb-2.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-7 rounded-full px-3 items-center justify-center flex ${
                          isFirst
                            ? "bg-[linear-gradient(90deg,_#CFF7F0_0%,_#54FCF2_33%,_#ACEB36_66%,_#ACEB36_100%)]"
                            : "bg-white/10"
                        }`}
                      >
                        {isFirst && (
                          <svg
                            className={`w-3 h-3 mr-1.5 ${isFirst ? "text-black" : "text-white"}`}
                            viewBox="0 0 12 12"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M2 0.333333C2 0.244928 2.03512 0.160143 2.09763 0.0976311C2.16014 0.035119 2.24493 0 2.33333 0H9.66667C9.75507 0 9.83986 0.035119 9.90237 0.0976311C9.96488 0.160143 10 0.244928 10 0.333333V0.666667H11.6667C11.7551 0.666667 11.8399 0.701786 11.9024 0.764298C11.9649 0.82681 12 0.911595 12 1V3C12 3.44203 11.8244 3.86595 11.5118 4.17851C11.1993 4.49107 10.7754 4.66667 10.3333 4.66667H9.77233C9.53399 5.33898 9.12047 5.93548 8.5745 6.39454C8.02854 6.85361 7.36992 7.15859 6.66667 7.278V9.33333H8.66667C8.75507 9.33333 8.83986 9.36845 8.90237 9.43096C8.96488 9.49348 9 9.57826 9 9.66667V11.6667C9 11.7551 8.96488 11.8399 8.90237 11.9024C8.83986 11.9649 8.75507 12 8.66667 12H3.33333C3.24493 12 3.16014 11.9649 3.09763 11.9024C3.03512 11.8399 3 11.7551 3 11.6667V9.66667C3 9.57826 3.03512 9.49348 3.09763 9.43096C3.16014 9.36845 3.24493 9.33333 3.33333 9.33333H5.33333V7.278C4.63008 7.15859 3.97146 6.85361 3.4255 6.39454C2.87953 5.93548 2.46602 5.33898 2.22767 4.66667H1.66667C1.22464 4.66667 0.800716 4.49107 0.488155 4.17851C0.175595 3.86595 0 3.44203 0 3V1C0 0.911595 0.035119 0.82681 0.0976311 0.764298C0.160143 0.701786 0.244928 0.666667 0.333333 0.666667H2V0.333333ZM10 3.33333V1.33333H11.3333V3C11.3333 3.26522 11.228 3.51957 11.0404 3.70711C10.8529 3.89464 10.5985 4 10.3333 4H10V3.33333ZM2 1.33333H0.666667V3C0.666667 3.26522 0.772023 3.51957 0.95956 3.70711C1.1471 3.89464 1.40145 4 1.66667 4H2V1.33333Z" />
                          </svg>
                        )}
                        <p
                          className={`font-['Inter'] font-normal text-xs text-center leading-[1] ${
                            isFirst ? "text-black" : isFirst ? "text-white" : "text-white/60"
                          }`}
                        >
                          {place}
                        </p>
                      </div>

                      <p
                        className={`font-['Inter'] font-normal text-xs leading-[1] ${
                          isFirst ? "text-[#ACEB36]" : ""
                        }`}
                      >
                        {name}
                      </p>
                    </div>

                    <p
                      className={`font-['Inter'] font-normal text-xs leading-[1] ${
                        isFirst ? "text-[#ACEB36]" : ""
                      }`}
                    >
                      {balance} ₮
                    </p>
                  </div>
    )
}
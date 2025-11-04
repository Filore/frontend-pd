export default function ChartBtns() {
  return (
    <div
      className="
        w-full flex items-center justify-between
        gap-[clamp(8px,2.8vw,16px)]
        mt-[clamp(12px,4vh,38px)]
        flex-wrap px-4
      "
    >
      <button
        type="button"
        className="
          inline-flex items-center justify-center
          gap-[clamp(6px,1.8vw,10px)]
          px-[clamp(9px,1.1vw,14px)] py-[clamp(4px,0.8vh,7px)]
          min-h-[clamp(25px,3.5vh,44px)]
          rounded-full bg-white/10 backdrop-blur-sm
          transition active:scale-95
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
          text-white
          max-w-full
        "
        aria-label="Trading pair ETH/USDT"
      >
        <img
          src="/icons/cryptocurrency-color_eth.svg"
          alt=""
          className="shrink-0 w-4 h-4"
        />
        <span
          className="
            font-inter font-medium
            text-xs
            leading-none
            whitespace-nowrap
          "
        >
          ETH/USDT
        </span>
        <img
          src="/icons/Vector.svg"
          alt=""
          className="shrink-0 ml-1.5 opacity-70 w-2.5 h-2.5"
        />
      </button>


      <button
        type="button"
        className="
          inline-flex items-center justify-center
          gap-[clamp(6px,1.8vw,10px)]
          px-[clamp(12px,3.4vw,16px)] py-[clamp(4px,0.8vh,7px)]
          min-h-[clamp(25px,3.5vh,44px)]
          rounded-full bg-white/10 backdrop-blur-sm
          transition active:scale-95
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
          text-white
        "
        aria-label="Timeframe 1 minute"
      >
        <span
          className="
            font-inter font-medium
            text-xs
            leading-none
            whitespace-nowrap
          "
        >
          1 min
        </span>
        <img
          src="/icons/Vector.svg"
          alt=""
          className="shrink-0 opacity-70 w-2.5 h-2.5"
        />
      </button>
    </div>
  );
}

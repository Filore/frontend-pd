type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={[

        "relative inline-flex items-center justify-center rounded-xl",
        "min-h-11",
        "mr-[clamp(10px,5vw,30px)]",
        "py-[clamp(8px,1.8vh,18px)]",


        "font-['Inter'] font-medium",
        "text-[clamp(12px,3.6vw,16px)] leading-5",


        isActive ? "text-[#ACEB36]" : "text-white/60",


        "transition duration-300 ease-in-out",
      ].join(" ")}
    >

      <span className="whitespace-nowrap">{label}</span>


      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ACEB36]" />
      )}
    </button>
  );
}

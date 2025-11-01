type ButtonProps = {
  label: string;
  onClickfun?: () => void;
  isActive: boolean;
};

export default function ButtonForGroup({ label, onClickfun, isActive }: ButtonProps) {
    return (
        <button
            className={`rounded-xl h-full w-full flex justify-center items-center ${
                isActive ? "bg-white/15 text-[#ACEB36]" : " text-[#FFFFFF]"
            } active:scale-[0.98] transition`}
            onClick={onClickfun}
        >
            <p className="text-center font-['Inter'] font-medium text-[clamp(12px,3.5vw,16px)] leading-[20px]">
                {label}
            </p>
        </button>
    )
}

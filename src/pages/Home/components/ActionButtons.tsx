import ButtonBuy from "@/components/ui/ButtonBuy";

type Props = {
  onPrimaryClick:  Array<() => void>
};

export default function ActionButtons({
  onPrimaryClick: [onPump, onDump],
}: Props) {

  return (
    <div
      className="
        flex justify-between items-center
        gap-[clamp(10px,3vw,16px)]
        mt-[clamp(7px,2.8vh,36px)]
        mb-[clamp(6px,2.4vh,32px)]
        w-full max-w-[min(90vw,560px)]
      "
    >
      <ButtonBuy
        variant="primary"
        className="
          flex-1
          px-[clamp(16px,14.5vw,60px)]
          py-[clamp(10px,2.8vh,28px)]
          text-[clamp(12px,3vw,16px)]
          font-normal rounded-[clamp(10px,4vw,25px)]
          shadow-[0_0_15px_#C6FF00]
          transition active:scale-95
          font-['Inter']
        "
        onClick={onPump}
      >
        PUMP
      </ButtonBuy>

      <ButtonBuy
        variant="danger"
        className="
          flex-1
          px-[clamp(16px,14.5vw,60px)]
          py-[clamp(10px,2.8vh,28px)]
          text-[clamp(12px,3vw,16px)]
          font-normal rounded-[clamp(10px,4vw,25px)]
          shadow-[0_0_15px_#FF0037]
          transition active:scale-95
          font-['Inter']
        "
        onClick={onDump}
      >
        DUMP
      </ButtonBuy>
    </div>
  );
}

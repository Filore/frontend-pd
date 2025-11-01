import ButtonForGroup from "@/components/ui/ButtonForGroup";
import { useState } from "react";

type ButtonGroupProps = {
    labels: string[]
    onClicks?: (() => void)[]
    onChange?: (label: string) => void;
};  

export default function ButtonGroup({ labels, onClicks, onChange }: ButtonGroupProps) {
    const [activeButton, setActiveButton] = useState(labels[0] ?? "");


    const handleButtonClick = (label: string, index: number) => {
        setActiveButton(label)
        onClicks?.[index]()
        onChange?.(label)
    };

    if (labels.length < 2) return null;

    return(

        <div className="bg-white/10 rounded-xl p-0.5 gap-1 flex w-full justify-between items-center relative h-[clamp(40px,4.7vh,50px)]">

            {labels.map((label, index) => (
        <>
          <ButtonForGroup
            key={label}
            label={label}
            onClickfun={() => handleButtonClick(label, index)}
            isActive={activeButton === label}
          />
          {index < labels.length - 1 && (
            <span
              aria-hidden
              className="pointer-events-none h-3 w-0.5 bg-white/20"
            />
          )}
        </>
      ))}

        </div>

    )


    // if (labels.length === 3) {
    //     return (
    //         <div className="bg-white/10 rounded-xl p-0.5 gap-1 flex w-full justify-between items-center relative h-[clamp(40px,4.7vh,50px)]">
    //             <ButtonForGroup
    //                 label={labels[0]}
    //                 onClickfun={() => handleButtonClick(labels[0], 0)}
    //                 isActive={activeButton === labels[0]} // передаем, активна ли кнопка
    //             />

    //             <span aria-hidden className="pointer-events-none h-3 w-0.5 bg-white/20" />

    //             <ButtonForGroup
    //                 label={labels[1]}
    //                 onClickfun={() => handleButtonClick(labels[1], 1)}
    //                 isActive={activeButton === labels[1]}
    //             />

    //             <span aria-hidden className="pointer-events-none h-3 w-0.5 bg-white/20" />

    //             <ButtonForGroup
    //                 label={labels[2]}
    //                 onClickfun={() => handleButtonClick(labels[2], 2)}
    //                 isActive={activeButton === labels[2]}
    //             />
    //         </div>
    //     );
    // } else if (labels.length === 2) {
    //     return (
    //         <div className="bg-white/10 rounded-xl p-0.5 gap-1 flex w-full justify-between items-center relative h-[clamp(40px,4.7vh,50px)]">
    //             <ButtonForGroup
    //                 label={labels[0]}
    //                 onClickfun={() => handleButtonClick(labels[0], 0)}
    //                 isActive={activeButton === labels[0]}
    //             />

    //             <span aria-hidden className="pointer-events-none h-3 w-0.5 bg-white/20" />

    //             <ButtonForGroup
    //                 label={labels[1]}
    //                 onClickfun={() => handleButtonClick(labels[1], 1)}
    //                 isActive={activeButton === labels[1]}
    //             />
    //         </div>
    //     );
    // }

    // return null;
}

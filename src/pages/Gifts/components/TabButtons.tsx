import {useState} from "react"
import TabButton from "./TabButton";

export default function TabButtons() {
  const [activeButton, setActiveButton] = useState<string>("All events");

  const buttons = ["All events", "Weekly events", "Global events", "Social events"];

  return (
    <div className=" overflow-hidden pl-[clamp(6px,4vw,12px)] mt-[clamp(8px,1.4vh,18px)] pb-[clamp(6px,1.2vh,14px)] no-scrollbar [-ms-overflow-style:none]              
        [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
      <div
        className="flex overflow-x-auto scroll-smooth no-scrollbar cursor-grab  [-ms-overflow-style:none]              
        [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {buttons.map((label) => (
          <TabButton
            key={label}
            label={label}
            isActive={activeButton === label}
            onClick={() => setActiveButton(label)}
          />
        ))}
      </div>
    </div>
  );
}

import { useRef, useState } from "react";
import FortuneWheel, { type WheelItem } from "./FortuneWheel";
import { Link, useNavigate } from "react-router-dom";

const items: WheelItem[] = [
  { id: "1", label: "0.01 ETH" , svgString: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_404_31507)">
<path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#627EEA"/>
<path d="M13.4045 3.25V10.4569L19.4959 13.1787L13.4045 3.25Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 3.25L7.3125 13.1787L13.4046 10.4569V3.25Z" fill="white"/>
<path d="M13.4045 17.849V22.7459L19.4999 14.313L13.4045 17.849Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 22.7459V17.8482L7.3125 14.313L13.4046 22.7459Z" fill="white"/>
<path d="M13.4045 16.7156L19.4959 13.1787L13.4045 10.4585V16.7156Z" fill="white" fill-opacity="0.2"/>
<path d="M7.3125 13.1787L13.4046 16.7156V10.4585L7.3125 13.1787Z" fill="white" fill-opacity="0.602"/>
</g>
<defs>
<clipPath id="clip0_404_31507">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
`},
  { id: "2", label: "000", svgString: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_404_31507)">
<path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#627EEA"/>
<path d="M13.4045 3.25V10.4569L19.4959 13.1787L13.4045 3.25Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 3.25L7.3125 13.1787L13.4046 10.4569V3.25Z" fill="white"/>
<path d="M13.4045 17.849V22.7459L19.4999 14.313L13.4045 17.849Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 22.7459V17.8482L7.3125 14.313L13.4046 22.7459Z" fill="white"/>
<path d="M13.4045 16.7156L19.4959 13.1787L13.4045 10.4585V16.7156Z" fill="white" fill-opacity="0.2"/>
<path d="M7.3125 13.1787L13.4046 16.7156V10.4585L7.3125 13.1787Z" fill="white" fill-opacity="0.602"/>
</g>
<defs>
<clipPath id="clip0_404_31507">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
` },
  { id: "3", label: "000", svgString: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_404_31507)">
<path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#627EEA"/>
<path d="M13.4045 3.25V10.4569L19.4959 13.1787L13.4045 3.25Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 3.25L7.3125 13.1787L13.4046 10.4569V3.25Z" fill="white"/>
<path d="M13.4045 17.849V22.7459L19.4999 14.313L13.4045 17.849Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 22.7459V17.8482L7.3125 14.313L13.4046 22.7459Z" fill="white"/>
<path d="M13.4045 16.7156L19.4959 13.1787L13.4045 10.4585V16.7156Z" fill="white" fill-opacity="0.2"/>
<path d="M7.3125 13.1787L13.4046 16.7156V10.4585L7.3125 13.1787Z" fill="white" fill-opacity="0.602"/>
</g>
<defs>
<clipPath id="clip0_404_31507">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
` },
  { id: "4", label: "000", svgString: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_404_31507)">
<path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#627EEA"/>
<path d="M13.4045 3.25V10.4569L19.4959 13.1787L13.4045 3.25Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 3.25L7.3125 13.1787L13.4046 10.4569V3.25Z" fill="white"/>
<path d="M13.4045 17.849V22.7459L19.4999 14.313L13.4045 17.849Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 22.7459V17.8482L7.3125 14.313L13.4046 22.7459Z" fill="white"/>
<path d="M13.4045 16.7156L19.4959 13.1787L13.4045 10.4585V16.7156Z" fill="white" fill-opacity="0.2"/>
<path d="M7.3125 13.1787L13.4046 16.7156V10.4585L7.3125 13.1787Z" fill="white" fill-opacity="0.602"/>
</g>
<defs>
<clipPath id="clip0_404_31507">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
` },
  { id: "5", label: "Nope", svgString: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_404_31507)">
<path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#627EEA"/>
<path d="M13.4045 3.25V10.4569L19.4959 13.1787L13.4045 3.25Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 3.25L7.3125 13.1787L13.4046 10.4569V3.25Z" fill="white"/>
<path d="M13.4045 17.849V22.7459L19.4999 14.313L13.4045 17.849Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 22.7459V17.8482L7.3125 14.313L13.4046 22.7459Z" fill="white"/>
<path d="M13.4045 16.7156L19.4959 13.1787L13.4045 10.4585V16.7156Z" fill="white" fill-opacity="0.2"/>
<path d="M7.3125 13.1787L13.4046 16.7156V10.4585L7.3125 13.1787Z" fill="white" fill-opacity="0.602"/>
</g>
<defs>
<clipPath id="clip0_404_31507">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
` },
  { id: "6", label: "Nope", svgString: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_404_31507)">
<path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#627EEA"/>
<path d="M13.4045 3.25V10.4569L19.4959 13.1787L13.4045 3.25Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 3.25L7.3125 13.1787L13.4046 10.4569V3.25Z" fill="white"/>
<path d="M13.4045 17.849V22.7459L19.4999 14.313L13.4045 17.849Z" fill="white" fill-opacity="0.602"/>
<path d="M13.4046 22.7459V17.8482L7.3125 14.313L13.4046 22.7459Z" fill="white"/>
<path d="M13.4045 16.7156L19.4959 13.1787L13.4045 10.4585V16.7156Z" fill="white" fill-opacity="0.2"/>
<path d="M7.3125 13.1787L13.4046 16.7156V10.4585L7.3125 13.1787Z" fill="white" fill-opacity="0.602"/>
</g>
<defs>
<clipPath id="clip0_404_31507">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
` },
]

const CENTER_DEG_BY_INDEX = [180, 240, 0, 60, 120, 300]

const normalize = (d: number) => {
  let x = d % 360
  if (x < 0) x += 360
  return x
}


export default function Roulette() {

 const [activeId, setActiveId] = useState<string | null>(null)
 const [rotation, setRotation] = useState(0)
 const [spinning, setSpinning] = useState(false)

const winnerIndexRef = useRef<number | null>(null)

const ANCHOR_DEG = 180

function deltaToAlign(currentDeg: number, targetCenterDeg: number) {
    const cur = normalize(currentDeg)
    const desired = normalize(ANCHOR_DEG -targetCenterDeg)
    let delta = desired - cur
    if (delta < 0) delta += 360
    return delta
  }


function spin() {
    if (spinning) return

    setActiveId(null)

    const winner = Math.floor(Math.random() * items.length)

    winnerIndexRef.current = winner

    const extraTurns = 3 + Math.floor(Math.random() * 2)
    const delta = deltaToAlign(rotation, CENTER_DEG_BY_INDEX[winner])
    const target = rotation + extraTurns * 360 + delta

    setSpinning(true);

    requestAnimationFrame(() => setRotation(target));
}

const navigate = useNavigate();

  function handleEnd() {
    setSpinning(false)
    const locked = normalize(rotation)
    setRotation(locked)

    const wi = winnerIndexRef.current
    if (wi != null) {
      setActiveId(items[wi].id);
      const prize = items[wi].label
      const pict = items[wi].svgString
      winnerIndexRef.current = null

      setTimeout(() => {
        navigate("/result", {state: {prize, pict}})
      }, 1000)
    }
  }

return (
    <div className="flex bg-[#3F20A8] flex-col items-center h-[100svh] overflow-hidden ">

    <div className="w-full justify-end flex">
        <button className="px-[clamp(1px,2.3vw,13px)] py-[clamp(1px,1.1vh,13px)] rounded-3xl bg-white/10 font-['Inter'] font-normal text-base mt-2 mr-2">
            11 V
        </button>
    </div>


    
    <button className=" mt-[clamp(10px,11.1vh,120px)] mb-[clamp(20px,3.6vh,40px)] px-[clamp(5px,3.5vw,20px)] py-[clamp(1px,1.1vh,13px)] rounded-3xl bg-white/10 font-['Inter'] font-normal text-base"
    onClick={() => spin()}
          disabled={spinning}>
        V Free spin for luck
    </button>


    <div className="relative flex mx-auto w-[84vw] h-[39vh]
    max-w-[430px]                      
    aspect-square">
  <div
    className="
      pointer-events-none absolute inset-0
      w-[85%] h-[85%] rounded-full
      left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      bg-[linear-gradient(194.95deg,rgba(55,210,99,0.63)_18.46%,rgba(84,252,242,0.63)_44.29%,rgba(38,0,255,0.63)_64.54%,rgba(0,63,244,0.63)_82.38%)]
      blur-[50px] rotate-[165deg]
    "
  />

      <FortuneWheel
        items={items}
        activeId={activeId}
        rotation={rotation}
        spinning={spinning}
        onTransitionEnd={handleEnd}
      />
      <img src="/icons/Vector-15.svg" alt="arrow"  className="pointer-events-none
      absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      z-10
      w-[calc(333px*min(100vw/393,100vh/852))]
      h-[calc(333px*min(100vw/393,100vh/852))]"/>
    </div>

    <p className="font-['Inter'] mb-[clamp(5px,13.6vw,70px)] text-center px-[clamp(10px,7.6vw,40px)] mt-[clamp(5px,2.6vh,20px)] font-normal text-sm text-white/40"
    >Get free points for your initial deposit and start predicting with an advantage.</p>

    <div className="flex w-full  justify-end">
    <Link to="/home">
    <button className="px-[clamp(15px,5vw,30px)] py-[clamp(1px,2.8vh,30px)] mb-[clamp(5px,2.5svh,40px)] border-2 border-white/20 rounded-2xl text-xs text-white font-['Inter'] mr-2 font-normal">
        LATER
    </button>
    </Link>
    </div>
    </div>
  )
}


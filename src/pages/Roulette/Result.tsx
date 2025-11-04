import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Result() {
  const location = useLocation();
  const prize = location.state?.prize ?? "Nothing";
  const pic = location.state?.pict ?? "";

  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const ribbon = confetti.shapeFromPath({
      path: "M17.4509 16.2625C17.2169 15.9675 17.0139 15.6135 16.7219 15.3655C16.2299 14.9485 15.6769 14.6045 15.1569 14.2205C11.7919 11.7325 9.36993 8.61746 8.55693 4.40546C8.37393 3.45546 8.07992 2.52546 7.80592 1.59546C7.37592 0.137458 6.46593 -0.342539 5.03193 0.243461C3.83793 0.731461 2.68392 1.32746 1.54292 1.93246C0.0829182 2.70546 -0.156078 3.22446 0.0779219 4.86546C0.134922 5.26446 0.212936 5.66446 0.329936 6.04946C1.08194 8.52946 2.01792 10.9385 3.28492 13.2015C4.87792 16.0465 6.99892 18.4845 9.34492 20.7285C9.86392 21.2255 10.4049 21.7525 11.4289 21.6265C13.2309 20.1515 15.1659 18.5775 17.0839 16.9825C17.2499 16.8425 17.3019 16.5645 17.4509 16.2625Z", 
    });

    const circle = confetti.shapeFromPath({
    path: "M9.76001 4.88C9.76001 2.185 7.575 0 4.88 0C2.185 0 0 2.185 0 4.88C0 7.575 2.185 9.76001 4.88 9.76001C7.575 9.76001 9.76001 7.575 9.76001 4.88Z",
  });

    const line = confetti.shapeFromPath({
    path: "M21.1227 87.898C20.7617 87.338 20.5097 86.727 20.2597 86.115C19.7357 84.832 19.3827 83.497 19.0667 82.153C18.4747 79.632 18.0967 77.075 17.8367 74.5C17.6367 72.514 17.7567 70.536 18.0317 68.567C18.2867 66.738 18.5707 64.912 18.8547 63.087C19.0817 61.627 19.2887 60.162 19.5717 58.712C20.2857 55.061 20.7237 51.375 21.0127 47.67C21.3847 42.888 20.5857 38.294 18.7557 33.87C18.2717 32.7 17.7037 31.572 17.1207 30.45C16.2147 28.704 15.1847 27.035 14.0497 25.429C12.7577 23.601 11.3247 21.885 9.8917 20.169C8.7447 18.796 7.61168 17.412 6.62168 15.919C5.66068 14.47 4.83867 12.956 4.36167 11.269C4.08167 10.279 3.96869 9.285 3.99369 8.286C4.00869 7.705 4.05769 7.123 4.17869 6.537C4.21569 6.357 4.28668 6.202 4.37968 6.061C4.97368 3.478 5.97267 1.457 6.92167 0C6.01967 0.861 5.26466 1.859 4.70066 3.029C4.23566 3.995 3.70766 4.922 3.13566 5.827C2.75166 6.435 2.38068 7.052 2.00468 7.665C1.32768 8.765 0.806667 9.934 0.442667 11.173C-0.072333 12.926 -0.156301 14.693 0.287699 16.474C0.623699 17.824 1.1807 19.083 1.8737 20.286C2.5547 21.468 3.33369 22.584 4.18669 23.646C5.18369 24.889 6.20066 26.116 7.21366 27.347C8.18966 28.533 9.1457 29.734 10.0377 30.986C11.5197 33.065 12.7957 35.264 13.9147 37.559C14.8897 39.56 15.6707 41.626 16.2227 43.782C16.9527 46.629 17.2527 49.518 17.0907 52.452C16.9447 55.094 16.6527 57.723 16.2687 60.34C16.0487 61.84 15.7377 63.326 15.4997 64.824C15.0027 67.954 14.5047 71.084 14.0507 74.221C13.7827 76.071 13.6707 77.937 13.8457 79.805C14.1537 83.082 14.6667 86.325 15.5487 89.501C15.8617 90.626 16.2367 91.731 16.7537 92.783C16.9757 93.235 17.2147 93.679 17.5027 94.055C17.7477 94.134 17.9507 94.199 18.1757 94.272C18.3607 93.412 18.7587 92.656 19.1867 91.916C19.5077 91.36 19.8537 90.819 20.1797 90.267C20.5167 89.697 20.8757 89.143 21.2917 88.627C21.3377 88.57 21.3627 88.495 21.4017 88.421C21.3057 88.238 21.2267 88.06 21.1227 87.898Z",
  });

  const ribbonS = confetti.shapeFromPath({
    path: "M16.631 1.852C13.317 4.946 9.81499 7.805 5.97899 10.235C4.40799 11.23 2.805 12.172 1.241 13.177C0.791997 13.466 0.429 13.889 0 14.274C0.817 16.492 1.40499 18.663 2.93399 20.247C3.91799 20.411 4.49499 19.899 5.09399 19.517C8.56799 17.299 12.043 15.082 15.482 12.81C17.031 11.787 18.532 10.682 19.988 9.531C21.125 8.632 22.169 7.612 23.236 6.626C23.727 6.172 24.022 5.607 23.947 4.655C22.879 2.919 21.702 1.018 19.458 0C18.185 0.446 17.404 1.131 16.631 1.852Z",
  });

    confetti({
      particleCount: 20,
      shapes: [ribbon],
      spread: 100,
      startVelocity: 45,
      gravity: 1.2,
      ticks: 130,
      origin: { x: 0.5, y: 0.2 },
      colors: ["#ffffff"],
      scalar: 2.4,
    });

    confetti({
      particleCount: 10,
      shapes: [circle],
      spread: 100,
      startVelocity: 45,
      gravity: 1.2,
      ticks: 130,
      origin: { x: 0.5, y: 0.2 },
      colors: ["#ffffff"],
      scalar: 1.4,
    });

    confetti({
      particleCount: 20,
      shapes: [line],
      spread: 100,
      startVelocity: 45,
      gravity: 1.2,
      ticks: 130,
      origin: { x: 0.5, y: 0.2 },
      colors: ["#ffffff"],
      scalar: 2.4,
    });

    confetti({
      particleCount: 20,
      shapes: [ribbonS],
      spread: 100,
      startVelocity: 45,
      gravity: 1.2,
      ticks: 180,
      origin: { x: 0.5, y: 0.2 },
      colors: ["#ffffff"],
      scalar: 2.4,
    });

    setTimeout(() => setShowConfetti(false), 2000);
  }, []);

  const cleanSvg = pic
  ?.replace(/width="[^"]*"/, 'width="100%"')
  ?.replace(/height="[^"]*"/, 'height="100%"');


  return (
    <div className="flex flex-col justify-between items-center h-[100svh] overflow-hidden bg-[#3F20A8] text-white font-['Inter'] px-[clamp(5px,2.5vh,40px)] py-[clamp(5px,2.5vh,40px)]">
        

        <div className="w-full justify-end flex m-0 ">
            <button className="px-[clamp(1px,2.3vw,13px)] justify-center flex py-[clamp(1px,1.1vh,13px)] rounded-3xl  bg-white/10 font-['Inter'] font-normal text-base ">
            <p className="mr-1">11</p>
            <img src="/icons/Vector-20.svg" alt="spiral" />
            </button>
        </div>

        <div className="flex-col items-center flex">
            <div className="mt-[clamp(120px,20.3svh,500px)] flex  w-full justify-center ">
                <div 
                className="w-[clamp(10px,19.7vw,90px)] h-[clamp(10px,19.7vh,90px)]"
                dangerouslySetInnerHTML={{ __html: cleanSvg }} />
            </div>

            <h1 className="font-['Grtsk_Giga'] font-bold text-4xl text-white">
                {prize}
            </h1>

            <Link to="/roulette">
            <button className="mt-[clamp(10px,3.7vh,40px)] mb-[clamp(10px,3.7vh,40px)] items-center flex px-[clamp(5px,3.5vw,20px)] py-[clamp(1px,1.1vh,13px)] rounded-3xl bg-white/10 font-['Inter'] font-normal text-base">
                <img src="/icons/Vector-20.svg" alt="spiral" />
                <p className="ml-1">spin for luck</p>
            </button>
            </Link>

            <p className="font-['Inter'] mb-[clamp(5px,13.6vw,70px)] text-center px-[clamp(10px,7.6vw,40px)] font-normal text-sm text-white/40">
            Get free points for your initial deposit and start predicting with an advantage.</p>
        </div>

        <div className="flex w-full justify-end ">
        <Link to="/home">
            <button className="px-[clamp(15px,5vw,30px)] py-[clamp(1px,2.8vh,30px)] border-2 border-white/20 rounded-2xl text-xs text-white font-['Inter']  font-normal">
            NEXT
            </button>
        </Link>
        </div>


    </div>
  );
}
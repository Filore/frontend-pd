interface TutorChartScreenProps {
  title: string;
  description: string;
}


export default function TutorChartScreen({ title, description }: TutorChartScreenProps){
    return(
        <div className="flex relative flex-col items-center">

            <div className="pointer-events-none fixed inset-x-0 h-40 z-10
                        bg-gradient-to-t from-black/0 to-black/100 via-black/50" />

            <div className="absolute w-screen opacity-50">
            <img src="/icons/Group 677.svg" alt="pdc"  className="absolute z-0"/>
            </div>
            
            <div className="flex relative flex-col items-center z-20">

            

            <img src="/icons/Vector-14.svg" alt="pd"  className="w-[clamp(100px,31vw,300px)] mb-[clamp(14px,2.5vh,40px)] mt-[clamp(50px,7.5vh,80px)]"/>

            <h1 className=" font-bold text-balance not-italic text-[#ACEB36] font-['Grtsk_Giga'] text-[clamp(20px,5.6vw,24px)] leading-[1.2] text-center px-[clamp(25px,7.6vw,60px)] pb-[clamp(8px,1.1vw,18px)] w-full">
            {title}
            </h1>

            <p className="mx-auto w-full px-[clamp(25px,7.6vw,60px)]  font-['Inter'] not-italic font-normal text-[clamp(14px,4vw,16px)] leading-[1.4] text-center text-white/60 mb-[clamp(8px,2.5vh,27px)]">
            {description}
            </p>

            </div>
        </div>
    )
}
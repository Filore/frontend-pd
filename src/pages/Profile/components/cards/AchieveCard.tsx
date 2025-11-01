export type AchieveItem = {
    id: string;
    name: string;
    pic: string;
}

export default function AchieveCard({
    name,
    pic,
}:AchieveItem){
    return(
        <div className="flex-col bg-white/10  rounded-lg flex items-center justify-center px-6 pt-7 pb-5 ">

        <img src={`${pic}`} alt="trophy" className="flex justify-center mb-4 items-center "/>

        <p className=" flex text-xs font-bold font-['Grtsk_Giga'] not-italic justify-center ">{name}</p>

        </div>
    )
}
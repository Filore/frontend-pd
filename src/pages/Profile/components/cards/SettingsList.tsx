export default function SettingsList() {
  const items = [
    { id: "s1", name: "FAQ", pic: "/icons/Vector-13.svg" },
    { id: "s2", name: "Language", pic: "/icons/Vector-21.svg" },
    { id: "s3", name: "Support", pic: "/icons/Vector-22.svg" },
    { id: "s4", name: "About Pump or Dump", pic: "/icons/Vector-23.svg" },
    { id: "s5", name: "Log out", pic: "/icons/Vector-24.svg" },
  ];

  return (
    <div className="space-y-2 mt-[clamp(5px,2.6vh,52px)] ml-8">
      {items.map((item) => (
        <button
          key={item.id}
          className="flex mb-[clamp(5px,4.6vh,52px)] justify-center "
        >
            <img src={`${item.pic}`} alt="trophy" className="flex justify-center  items-center p-1"/>
          <p className="text-center font-['Inter'] text-base font-medium w-full">{item.name}</p>
        </button>
      ))}
    </div>
  );
}
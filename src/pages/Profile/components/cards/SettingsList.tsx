export default function SettingsList() {
  const items = [
    { id: "s1", name: "FAQ" },
    { id: "s2", name: "Language" },
    { id: "s3", name: "Support" },
    { id: "s4", name: "About Pump or Dump" },
    { id: "s5", name: "Log out" },
  ];

  return (
    <div className="space-y-2 mt-[clamp(5px,2.6vh,52px)] ml-8">
      {items.map((item) => (
        <button
          key={item.id}
          className="flex mb-[clamp(5px,5.6vh,52px)] justify-center "
        >
            <img src="/icons/Vector-13.svg" alt="trophy" className="flex justify-center  items-center p-1"/>
          <p className="text-center font-['Inter'] text-base font-medium w-full">{item.name}</p>
        </button>
      ))}
    </div>
  );
}
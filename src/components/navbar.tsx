import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-grey-200">
      <ul className="flex gap-4 items-center max-w-[1200px] mx-auto py-6 ">
        <li className="pr-16">
          <Image src="/logo.png" height={41} width={144} alt="uc" />
        </li>
        <li>
          <input placeholder="Vittal Mallya Road, Bangalore" className="border-2 border-gray-200 rounded-md px-4 py-2"/>
        </li>
        <li>
          <input placeholder="Search in AC Repair & Service" className="border-2 border-gray-200 rounded-md px-4 py-2"/>
        </li>
      </ul>
    </nav>
  );
}

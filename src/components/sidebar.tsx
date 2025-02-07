"use client";
import { DataContext } from "@/components/context-wrapper";
import { useContext } from "react";

export default function Sidebar() {
  const { data, setData } = useContext(DataContext);

  return (
    <aside className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">AC Repair & Service</h1>
      <span className="flex gap-2 items-center">
        <div className="bg-[#3d1d8c] rounded-full size-4" />
        4.81 (9.0 M bookings)
      </span>
      <div className="bg-gray-200/60 p-6 rounded-md flex flex-col gap-1">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="bg-[#055535] rounded-full size-3" />
          UC COVER
        </div>
        <p>Upto 30 days warranty on repairs</p>
      </div>
      <div className="border border-gray-200 rounded-md px-4 py-6">
        <div className="grid grid-cols-2 gap-2 items-center">
          <p>Select a service</p>
          <hr className="w-full bg-grey-200" />
        </div>
        <div className="grid grid-cols-3 pt-4 gap-x-4 gap-y-8 justify-center">
          {data &&
            data.map((p) => (
              <div className="flex flex-col gap-1 items-center cursor-pointer" key={p.name} onClick={() => document.getElementById(p.name)?.scrollIntoView({behavior: "smooth"})}>
                <div className="bg-gray-200 size-16" />
                <p className="text-xs font-medium text-center">{p.name}</p>
              </div>
            ))}
        </div>
      </div>
    </aside>
  );
}

"use client";
import { DataContext } from "@/components/context-wrapper";
import { useContext } from "react";
import CartButton from "./cart-button";

export default function Packages() {
  const { data, setData } = useContext(DataContext);

  return (
    <div className="col-span-2 flex flex-col gap-4">
      {data &&
        data.map((s) => (
          <div
            className="border border-gray-200 rounded-md p-6"
            key={s.name}
            id={s.name}
          >
            <h2 className="text-2xl font-semibold pb-6">{s.name}</h2>
            <div className="bg-gray-200 w-full aspect-video" />
            <div>
              {s.packages.map((p) => (
                <div
                  className="grid grid-cols-4 py-4 items-center"
                  key={p.name}
                >
                  <div className="col-span-3 text-sm flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <span className="flex gap-2 items-center">
                      <div className="bg-[#3d1d8c] rounded-full size-4" />
                      {p.rating}
                    </span>
                    <div>Next at ₹{p.price}</div>
                  </div>
                  <div className="flex justify-end">
                    <CartButton packageName={p.name} cartVal={p.cartVal}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

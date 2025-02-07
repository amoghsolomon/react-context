"use client";
import { DataContext } from "@/components/context-wrapper";
import { useContext } from "react";

export default function CartButton({
  cartVal,
  packageName,
}: {
  cartVal: number;
  packageName: string;
}) {
  const { data, setData } = useContext(DataContext);

  function handleCart(remove: boolean) {
    if (setData) {
      setData((prevData) => {
        if (prevData) {
          return prevData.map((s) => {
            const modifiedPackage = s.packages.map((p) => {
              if (p.name === packageName) {
                return {
                  ...p,
                  cartVal: remove ? cartVal - 1 : cartVal + 1,
                };
              }
              return p;
            });
            return {
              name: s.name,
              packages: modifiedPackage,
            };
          });
        }
        return prevData;
      });
    }
  }
  if (cartVal === 0) {
    return (
      <button
        className="border border-[#3d1d8c] h-9 w-20 rounded-md"
        onClick={() => handleCart(false)}
      >
        Add
      </button>
    );
  }

  return (
    <div className="border border-[#3d1d8c] h-9 w-20 rounded-md flex justify-between items-center px-2">
      <button onClick={() => handleCart(true)}>-</button>
      {cartVal}
      <button onClick={() => handleCart(false)}>+</button>
    </div>
  );
}

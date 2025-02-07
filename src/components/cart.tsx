"use client";
import { DataContext } from "@/components/context-wrapper";
import { useContext } from "react";
import CartButton from "./cart-button";

export default function Cart() {
  const { data, setData } = useContext(DataContext);

  const totalCartItems = data?.reduce(
    (acc, cur) => cur.packages.reduce((acc, cur) => cur.cartVal + acc, 0) + acc,
    0
  );

  const cartTotalPrice = data?.reduce(
    (acc, cur) =>
      cur.packages.reduce((acc, cur) => {
        if (cur.cartVal > 0) {
          return cur.price * cur.cartVal + acc;
        }
        return acc;
      }, 0) + acc,
    0
  );

  return (
    <div className="border border-gray-200 rounded-md p-6 aspect-video grid place-content-center">
      {totalCartItems && totalCartItems > 0 ? (
        <div>
          {data?.map((s) =>
            s.packages.map(
              (p) =>
                p.cartVal > 0 && (
                  <div
                    className="flex py-4 items-center gap-2"
                    key={p.name}
                  >
                    <div className="col-span-3 text-sm flex flex-col gap-1">
                      <h3 className="font-semibold">{p.name}</h3>
                      <div>₹{p.price}</div>
                    </div>
                    <div className="flex justify-end">
                      <CartButton packageName={p.name} cartVal={p.cartVal} />
                    </div>
                  </div>
                )
            )
          )}
          <button className="bg-[#4d2ea1] text-white flex items-center justify-between py-2 px-4 w-full font-medium rounded-md">
            <div>₹{cartTotalPrice}</div>
            View Cart
          </button>
        </div>
      ) : (
        <div className="text-center">No items in your cart</div>
      )}
    </div>
  );
}

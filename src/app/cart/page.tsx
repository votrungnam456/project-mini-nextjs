"use client";
import { useState, useEffect } from "react";
import { localStorageHandle } from "@/common/function";
export default function Cart() {
  const [cartList, setCartList] = useState<TCartList[]>([]);

  useEffect(() => {
    setCartList(localStorageHandle("get", "cartList") ?? []);
  }, []);
  return (
    <div>
      <div className="text-center">CART</div>
      <div></div>
    </div>
  );
}

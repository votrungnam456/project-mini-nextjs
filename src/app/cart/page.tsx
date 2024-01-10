"use client";
import { useState, useEffect } from "react";
import { localStorageHandle } from "@/common/function";
import { useAppSelector } from "@/redux/hooks";
export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  useEffect(() => {
    // setCartList(localStorageHandle("get", "cartList") ?? []);
  }, []);
  return (
    <div>
      <div className="text-center">CART</div>
      <div></div>
    </div>
  );
}

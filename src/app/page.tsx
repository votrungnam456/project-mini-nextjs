"use client";
import { localStorageHandle } from "@/common/function";
import Header from "@/components/home/header";
import { useState, useEffect } from "react";
export default function Home() {
  const [cartList, setCartList] = useState<any>([]);
  useEffect(() => {
    setCartList(localStorageHandle("get", "cartList") ?? []);
  }, []);
  return (
    <div>
      <Header cartList={cartList} idMenu={1}></Header>
      <div className="">THIS IS HOMEPAGE</div>
    </div>
  );
}

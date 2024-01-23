"use client";
import { localStorageHandle } from "@/common/function";
import isAuth from "@/components/auth/isAuth";
import Header from "@/components/home/header";
import { useState, useEffect } from "react";
function Home() {
  const [cartList, setCartList] = useState<any>([]);
  useEffect(() => {
    setCartList(localStorageHandle("get", "cartList") ?? []);
  }, []);
  return (
    <div>
      <Header idMenu={1}></Header>
      <div className="">THIS IS HOMEPAGE</div>
    </div>
  );
}
export default Home;

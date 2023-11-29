"use client";
import CardProduct from "@/components/products/cardProduct";
import { useState, useEffect } from "react";
import Header from "@/components/home/header";
import { product } from "@/common/contants";
import { localStorageHandle } from "@/common/function";
export default function ListProduct() {
  const [listProduct, setListProduct] = useState<TProduct[]>(product);
  const [cartList, setCartList] = useState<TCartList[]>([]);

  useEffect(() => {
    setCartList(localStorageHandle("get", "cartList") ?? []);
  }, []);
  const renderListProduct = listProduct.map((item, index) => {
    return (
      <CardProduct
        setCartList={(data: TCartList[]) => setCartList(data)}
        key={index}
        product={item}
      ></CardProduct>
    );
  });
  return (
    <div>
      <Header cartList={cartList} idMenu={2}></Header>
      <div className=" flex justify-around flex-wrap">{renderListProduct}</div>
    </div>
  );
}

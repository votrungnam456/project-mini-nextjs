"use client";
import CardProduct from "@/components/products/cardProduct";
import { useState, useEffect } from "react";
import Header from "@/components/home/header";
import { product } from "@/common/contants";
import { localStorageHandle } from "@/common/function";
export default function ListProduct() {
  const [listProduct, setListProduct] = useState<TProduct[]>(product);

  const renderListProduct = listProduct.map((item, index) => {
    return <CardProduct key={index} product={item}></CardProduct>;
  });
  return (
    <div>
      <Header idMenu={2}></Header>
      <div className=" flex justify-around flex-wrap">{renderListProduct}</div>
    </div>
  );
}

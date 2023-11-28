"use client";
import Menu from "@/components/home/menu";
import CardProduct from "@/components/products/cardProduct";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/home/header";
import { product } from "@/common/contants";
export default function ListProduct() {
  const [listProduct, setListProduct] = useState(product);

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

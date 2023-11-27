"use client";
import Menu from "@/components/home/menu";
import CardProduct from "@/components/products/cardProduct";
import { useState } from "react";
import Link from "next/link";
export default function ListProduct() {
  const [listProduct, setListProduct] = useState([
    {
      id: 1,
      name: "product 1",
      price: "10000",
      image:
        "https://sanbox-integration.foloosi.com/wp-content/uploads/2022/12/istockphoto-491520707-612x612-1.jpeg",
    },
  ]);
  return (
    <div>
      <div>
        <Menu idMenu={2}></Menu>
      </div>
      <div className="">
        <CardProduct product={listProduct[0]}></CardProduct>
      </div>
    </div>
  );
}

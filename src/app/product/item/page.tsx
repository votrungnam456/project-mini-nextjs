"use client";
import Menu from "@/components/home/menu";
import CardProduct from "@/components/products/cardProduct";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/home/header";
import { product } from "@/common/contants";
import { useSearchParams } from "next/navigation";
export default function ItemProduct() {
  const [listProduct, setListProduct] = useState(product);
  const query = useSearchParams();
  const id = query.get("id");
  const [itemProduct, setItemProduct] = useState<any>({});
  useEffect(() => {
    const temp =
      listProduct.find((item) => item.id === parseInt(id ?? "")) ?? {};
    setItemProduct(temp);
  }, []);
  return (
    <div>
      <Header idMenu={2}></Header>
      <div>PRODUCT DETAIL</div>
      <div>name: {itemProduct.name}</div>
      <div>price: {itemProduct.price}</div>
    </div>
  );
}

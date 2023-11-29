"use client";
import Menu from "@/components/home/menu";
import CardProduct from "@/components/products/cardProduct";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/home/header";
import { product } from "@/common/contants";
import { useSearchParams } from "next/navigation";
import { localStorageHandle } from "@/common/function";
import { useRouter } from "next/navigation";
export default function ItemProduct() {
  const router = useRouter();
  const [listProduct, setListProduct] = useState(product);
  const [cartList, setCartList] = useState<any>([]);
  const query = useSearchParams();
  const id = query.get("id");
  const [itemProduct, setItemProduct] = useState<any>({});
  useEffect(() => {
    const temp =
      listProduct.find((item) => item.id === parseInt(id ?? "")) ?? {};
    setItemProduct(temp);
    setCartList(localStorageHandle("get", "cartList") ?? []);
  }, []);
  const handleClick = (type: string) => {
    switch (type) {
      case "GO_BACK":
        router.back();
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <Header idMenu={2} cartList={cartList}></Header>

      <button
        onClick={() => handleClick("GO_BACK")}
        className="p-[10px] border-[1px] border-solid border-black"
      >
        GO BACK
      </button>
      <div>PRODUCT DETAIL</div>
      <div>name: {itemProduct.name}</div>
      <div>price: {itemProduct.price}</div>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { localStorageHandle } from "@/common/function";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addItem } from "@/redux/feature/cartSlice";

export default function CardProduct(props: TCardProduct) {
  const dispatch = useAppDispatch();
  const { product } = props;
  const { name, price, image, id } = product;
  const router = useRouter();
  const handleClick = async (type: string) => {
    switch (type) {
      case "ITEM":
        router.push("/product/" + id);
        break;
      case "BUY":
        await dispatch(addItem(product));
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div>
        <div className="border-solid border-[0.0625rem] border-black w-[20rem] h-[20rem] cursor-pointer mb-[0.3125rem] flex flex-wrap justify-center">
          <div
            className="w-full text-center p-[0.5rem]"
            onClick={() => handleClick("ITEM")}
          >
            <div className="flex justify-center ">
              <Image
                src={image}
                alt="Vercel Logo"
                className="w-[12rem] h-[12rem]"
                width={500}
                height={500}
              />
            </div>
            <div>{name}</div>
            <div>{price}</div>
          </div>
          <button
            onClick={() => handleClick("BUY")}
            className="w-full border-t-[1px] border-solid border-black hover:bg-blue-400"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

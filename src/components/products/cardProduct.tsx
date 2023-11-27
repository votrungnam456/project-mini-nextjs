"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function CardProduct(props: TCardProduct) {
  const { name, price, redirect, image } = props.product;
  return (
    <Link href={redirect ?? ""}>
      <div className="p-[0.5rem] border-solid border-[0.0625rem] border-black w-[20rem] h-[20rem] text-center cursor-pointer">
        <div className="flex justify-center">
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
    </Link>
  );
}

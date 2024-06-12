"use client";
import { product } from "@/common/contants";
import Modal from "@/components/modal";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InterceptPhotos({
  params,
}: {
  params: {
    productItem: string;
    reviewId: string;
  };
}) {
  const [listProduct, setListProduct] = useState(product);
  const idProduct = params.productItem;
  const [itemProduct, setItemProduct] = useState<any>({});
  useEffect(() => {
    const temp = listProduct.find(
      (item) => item.id === parseInt(idProduct ?? "")
    );
    setItemProduct(temp);
    console.log(params);
  }, []);
  return (
    <Modal>
      <div>
        <Image src={itemProduct.image} alt="" width={500} height={500}></Image>
        <h1>Name: {itemProduct?.name}</h1>
        <h1>Price: {itemProduct?.price}</h1>
      </div>
    </Modal>
  );
}

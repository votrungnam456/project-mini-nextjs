"use client";

import { useEffect, useState } from "react";
import Header from "@/components/home/header";
import { product } from "@/common/contants";
import { localStorageHandle } from "@/common/function";
import { notFound, useRouter } from "next/navigation";
import isAuth from "@/components/auth/isAuth";
function ProductItem({ params }: { params: { productItem: string } }) {
  const router = useRouter();
  const [listProduct, setListProduct] = useState(product);
  const id = params.productItem;
  const [itemProduct, setItemProduct] = useState<any>({});
  useEffect(() => {
    const temp = listProduct.find((item) => item.id === parseInt(id ?? ""));
    if (!temp) {
      notFound();
    }
    setItemProduct(temp);
  }, []);
  const handleClick = (type: string, data?: any) => {
    switch (type) {
      case "GO_BACK":
        router.back();
        break;
      case "REVIEW":
        router.push(`/product/${id}/review/${data}`);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Header idMenu={2}></Header>

      <button
        onClick={() => handleClick("GO_BACK")}
        className="p-[10px] border-[1px] border-solid border-black"
      >
        GO BACK
      </button>
      <div>PRODUCT DETAIL</div>
      <div>name: {itemProduct.name}</div>
      <div>price: {itemProduct.price}</div>
      <div>
        review:{}
        {itemProduct.review?.map((item: any, index: number) => {
          return (
            <button
              key={index}
              onClick={() => handleClick("REVIEW", index)}
              className="p-[10px] border-[1px] border-solid border-black"
            >
              REVIEW {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProductItem;

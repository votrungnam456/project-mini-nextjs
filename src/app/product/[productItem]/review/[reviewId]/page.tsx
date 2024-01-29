"use client";

import { useEffect, useState } from "react";
import Header from "@/components/home/header";
import { product } from "@/common/contants";
import { isObjectEmpty, localStorageHandle } from "@/common/function";
import { notFound, useRouter } from "next/navigation";
import isAuth from "@/components/auth/isAuth";
function ReviewItemProduct({
  params,
}: {
  params: {
    productItem: string;
    reviewId: string;
  };
}) {
  const router = useRouter();
  const [listProduct, setListProduct] = useState(product);
  const idReview = params.reviewId;
  const idProduct = params.productItem;
  const [itemProduct, setItemProduct] = useState<any>({});
  const [review, setReview] = useState("");
  useEffect(() => {
    const temp = listProduct.find(
      (item) => item.id === parseInt(idProduct ?? "")
    );
    if (!temp || !temp.review[parseInt(idReview)]) {
      notFound();
    }
    setItemProduct(temp);

    console.log(temp);
    console.log(itemProduct);
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
      <Header idMenu={2}></Header>

      <button
        onClick={() => handleClick("GO_BACK")}
        className="p-[10px] border-[1px] border-solid border-black"
      >
        GO BACK
      </button>
      <div>REVIEW PRODUCT:</div>
      <div>name: {itemProduct.name}</div>
      <div>
        review: {itemProduct.review ? itemProduct.review[idReview] : ""}
      </div>
    </div>
  );
}

export default isAuth(ReviewItemProduct);

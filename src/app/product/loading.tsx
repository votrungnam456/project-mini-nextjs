"use client";
import CardProduct from "@/components/products/cardProduct";
import { useState, useEffect } from "react";
import Header from "@/components/home/header";
import { product } from "@/common/contants";
import { localStorageHandle } from "@/common/function";
import isAuth from "@/components/auth/isAuth";
function loadingProduct() {
  return <div>Loading</div>;
}
export default loadingProduct;

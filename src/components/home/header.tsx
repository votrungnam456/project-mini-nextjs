import Menu from "@/components/home/menu";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

export default function Header(props: THeader) {
  const { idMenu } = props;
  const cart = useAppSelector((state) => state.cart);
  const quantityProduct = () => {
    if (cart.items && cart.items.length > 0) {
      let sum = 0;
      cart.items.forEach((item) => {
        sum += item.quantity;
      });
      return sum;
    } else {
      return 0;
    }
  };
  return (
    <div className="mb-[0.625rem] flex justify-between">
      <div>
        <Menu idMenu={idMenu}></Menu>
      </div>
      <div>
        <div className="p-[0.625rem] border-[0.0625rem] border-black border-solid w-[12.5rem] text-center cursor-pointer hover:bg-blue-300">
          Cart ({quantityProduct()})
        </div>
      </div>
    </div>
  );
}

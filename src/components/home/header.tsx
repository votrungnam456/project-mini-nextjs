import Menu from "@/components/home/menu";
import { useEffect, useState } from "react";

export default function Header(props: THeader) {
  const { idMenu } = props;
  const [cartList, setCartList] = useState<any>([]);

  useEffect(() => {
    setCartList(localStorage.getItem("cardList"));
  }, []);
  return (
    <div className="mb-[0.625rem] flex justify-between">
      <div>
        <Menu idMenu={idMenu}></Menu>
      </div>
      <div>
        <div className="p-[0.625rem] border-[0.0625rem] border-black border-solid w-[12.5rem] text-center cursor-pointer hover:bg-blue-300">
          Cart ({cartList?.length ?? 0})
        </div>
      </div>
    </div>
  );
}

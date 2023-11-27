"use client";

import { useState } from "react";
import Link from "next/link";
export default function Menu(props: TPropsMenu) {
  const { idMenu } = props;
  const [listMenu, setListMenu] = useState([
    {
      id: 1,
      name: "HomePage",
      redirect: "/",
    },
    {
      id: 2,
      name: "Product",
      redirect: "/product/list",
    },
  ]);
  const renderListMenu = listMenu.map((item, index) => {
    return (
      <div
        className={
          "p-[0.625rem] border-[0.0625rem] border-black border-solid w-[12.5rem] text-center cursor-pointer hover:bg-blue-300" +
          (item.id === idMenu ? " bg-green-400" : "")
        }
        key={index}
      >
        <Link href={item.redirect}> {item.name}</Link>
      </div>
    );
  });
  return <div className="flex">{renderListMenu}</div>;
}

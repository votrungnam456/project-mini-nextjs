"use client";

import { useState } from "react";
import Link from "next/link";
import { menu } from "@/common/contants";
export default function Menu(props: TPropsMenu) {
  const { idMenu } = props;
  const [listMenu, setListMenu] = useState(menu);
  const renderListMenu = listMenu.map((item, index) => {
    return (
      <Link key={index} href={item.redirect}>
        <div
          className={
            "p-[0.625rem] border-[0.0625rem] border-black border-solid w-[12.5rem] text-center cursor-pointer hover:bg-blue-300" +
            (item.id === idMenu ? " bg-green-400" : "")
          }
        >
          {item.name}
        </div>
      </Link>
    );
  });
  return <div className="flex">{renderListMenu}</div>;
}

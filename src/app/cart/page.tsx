"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { localStorageHandle } from "@/common/function";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Header from "@/components/home/header";
import { changeQuantity } from "@/redux/feature/cartSlice";
export default function Cart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  useEffect(() => {
    // setCartList(localStorageHandle("get", "cartList") ?? []);
  }, []);
  const handleClick = async (type: string, data?: any) => {
    switch (type) {
      case "PLUS_QUANTITY": {
        const params = {
          id: data.id,
          quantity: 1,
          typeChange: 1,
        };
        await dispatch(changeQuantity(params));
        break;
      }
      case "MINUS_QUANTITY": {
        const params = {
          id: data.id,
          quantity: 1,
          typeChange: -1,
        };
        await dispatch(changeQuantity(params));
        break;
      }
      case "CHANGE_QUANTITY": {
        const params = {
          id: data.id,
          quantity: data.quantity,
          typeChange: 0,
        };
        await dispatch(changeQuantity(params));
        break;
      }
    }
  };
  const onChange = (ev:ChangeEvent)=>{
    console.log(ev.target);
  }
  const onInput = (ev:FormEvent)=>{
    console.log(ev.nativeEvent.data);
  }
  return (
    <div>
      <Header idMenu={3}></Header>
      <div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-1/3 text-left">Name</th>
              <th className="w-1/3 text-left">Quantity</th>
              <th className="w-1/3 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <div className="flex">
                      <button
                        onClick={() => handleClick("MINUS_QUANTITY", item)}
                        className="border-solid border-[1px] border-black px-[8px]"
                      >
                        -
                      </button>
                      <input
                        className="border-solid border-y-[1px] border-black pl-[5px]"
                        type="text"
                        value={item.quantity}
                        onChange={(ev)=>onChange(ev)}
                        onInput={(ev)=>onInput(ev)}
                      />
                      <button
                        onClick={() => handleClick("PLUS_QUANTITY", item)}
                        className="border-solid border-[1px] border-black px-[8px]"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

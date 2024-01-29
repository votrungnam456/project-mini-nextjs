"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { formatMoney, isNumber, localStorageHandle } from "@/common/function";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Header from "@/components/home/header";
import { changeQuantity } from "@/redux/feature/cartSlice";
import isAuth from "@/components/auth/isAuth";
function Cart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

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
      case "DELETE": {
        const params = {
          id: data.id,
          quantity: 0,
          typeChange: 0,
        };
        await dispatch(changeQuantity(params));
        break;
      }
    }
  };
  const onChange = (ev: ChangeEvent, item: TCartList) => {
    const dataInput = ev.target.value;
    if (isNumber(dataInput)) {
      console.log("a");
      handleClick("CHANGE_QUANTITY", {
        ...item,
        quantity: dataInput !== "" ? parseInt(dataInput) : 0,
      });
    }
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    cart.items.map((item) => {
      totalPrice += parseInt(item.price) * item.quantity;
    });
    return formatMoney(totalPrice);
  };
  return (
    <div>
      <Header idMenu={3}></Header>
      <div className="mx-[5px]">
        {cart.items.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-1/4 text-center">Name</th>
                <th className="w-1/4 text-center">Quantity</th>
                <th className="w-1/4 text-center">Price</th>
                <th className="w-1/4 text-center"></th>
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
                          className="border-solid border-y-[1px] border-black pl-[5px] w-[200px]"
                          type="text"
                          value={item.quantity}
                          onChange={(ev) => onChange(ev, item)}
                        />
                        <button
                          onClick={() => handleClick("PLUS_QUANTITY", item)}
                          className="border-solid border-[1px] border-black px-[8px]"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="ml-[5px]">
                      {formatMoney(parseInt(item.price) * item.quantity)}
                    </td>
                    <td>
                      <div className="flex">
                        <button
                          className="p-[5px] border-[1px] border-solid border-black hover:bg-black hover:text-white"
                          onClick={() => handleClick("DELETE", item)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p className="text-center">Bạn chưa mua hàng nào</p>
        )}
      </div>
      <div className="w-full border-[1px] border-solid border-black h-[1px] mt-[10px]"></div>
      <div className="flex justify-end mx-[5px]">
        <p>Total Price: {calculateTotal()}</p>
      </div>
    </div>
  );
}
export default isAuth(Cart);

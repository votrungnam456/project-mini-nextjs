"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const auth = useAppSelector((state) => state.auth).isLogin;

    useEffect(() => {
      if (!auth) {
        return redirect("/login");
      }
    }, []);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}

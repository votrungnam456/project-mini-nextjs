"use client";
import { login } from "@/redux/feature/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

const navLink = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];
const randomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const rand = randomInt(2);
  console.log(rand);
  if (rand === 0) {
    throw new Error("Error loading auth");
  }
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const pathName = usePathname();
  // change file name from layout.tsx to template.tsx make input will clear when click to nav link
  return (
    <div>
      <input value={input} onChange={handleInput}></input>
      <br></br>
      {navLink.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-400 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}

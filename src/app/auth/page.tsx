"use client";
import { login } from "@/redux/feature/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { redirect, useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const isErrorLogin = useAppSelector((state) => state.auth).isErrorLogin;
  const router = useRouter();
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const params = {
      username,
      password,
    };
    await dispatch(login(params));
    router.push("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            className="border-[1px] border-solid border-black"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="border-[1px] border-solid border-black"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="border-[1px] border-black border-solid p-[5px]"
          type="submit"
        >
          Login
        </button>
      </form>
      {isErrorLogin ? (
        <div className="text-red-600">
          <p>Wrong username/pasword, please try again</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

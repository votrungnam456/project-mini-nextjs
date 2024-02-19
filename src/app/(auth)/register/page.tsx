"use client";
import { login } from "@/redux/feature/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { redirect, useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async (e: FormEvent) => {
    // e.preventDefault();
    // const params = {
    //   username,
    //   password,
    // };
    // await dispatch(login(params));
    // router.push("/");
  };

  return (
    <div>
      <h1>Register</h1>
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
        <div>
          <label>Confirm Password:</label>
          <input
            className="border-[1px] border-solid border-black"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button
          className="border-[1px] border-black border-solid p-[5px]"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

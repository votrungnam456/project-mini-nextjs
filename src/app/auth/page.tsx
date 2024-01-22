"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Perform login logic here
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
    </div>
  );
}

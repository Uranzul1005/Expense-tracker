import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usersLogin = async () => {
    if (!email) {
      alert("Please enter email and password");
      return;
    }
    try {
      await axios
        .post("http://localhost:3000/login", {
          email,
          password,
        })
        .then(() => {
          localStorage.setItem("login", `${email}:${password}`);
          window.location = "/";
        });
    } catch (error) {
      console.error("Error:", error);
      alert("Email and password is incorrect");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container ml-52">
      <div className="flex mb-10 font-semibold text-2xl mt-72">
        <div>Geld</div>
      </div>
      <h2 className="mb-2 font-semibold text-2xl">Welcome Back</h2>
      <p>Welcome back, Please enter your details</p>
      <div className="flex flex-col gap-4 mt-10 mb-4">
        <input
          className="bg-slate-100 py-1 px-4 w-96"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-slate-100 py-1 px-4 w-96"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={usersLogin}
        className="rounded-2xl bg-blue-600 py-2 w-96 text-white mr-9 flex justify-center gap-1"
      >
        Log in
      </button>
      <div className="flex mt-10 gap-2">
        <p>Don't have account?</p>
        <Link className="text-blue-600" href={"http://localhost:3001/signup"}>
          Sign up
        </Link>
      </div>
    </div>
  );
}

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usersSignup = async () => {
    if (!name || !email || !password) {
      alert("Please enter email and password");
      return;
    }
    try {
      await axios
        .post("http://localhost:3000/users", {
          name,
          email,
          password,
        })
        .then(() => {
          window.location = "./loading";
        });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occured while creating the new user");
    }
  };

  return (
    <div className="flex">
      <div>
        <div className="flex mb-10 font-semibold text-2xl mt-72 gap-2">
          <Logo />
          <div>Geld</div>
        </div>
        <h2 className="mb-2 font-semibold text-2xl">Create Geld account</h2>
        <p>Sign up below to create your Wallet account</p>
        <div className="flex flex-col gap-4 mt-10 mb-4">
          <input
            className="bg-slate-100 py-1 px-4 w-96"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            className="bg-slate-100 py-1 px-4 w-96"
            type="password"
            placeholder="Re-password"
          />
        </div>
        <button
          onClick={usersSignup}
          className="rounded-2xl bg-blue-600 py-2 w-96 text-white mr-9 flex justify-center gap-1"
        >
          Sign up
        </button>
        <div className="flex mt-10 gap-2">
          <p>Already have account?</p>
          <Link className="text-blue-600" href={"http://localhost:3001/login"}>
            Log in
          </Link>
        </div>
      </div>
      <div className="bg-blue-600">hi</div>
    </div>
  );
}

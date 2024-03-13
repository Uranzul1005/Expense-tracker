import { Logo } from "@/components/icons/Logo";
import { Balance } from "@/components/icons/Balance";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");

  // const getEmail = async () => {
  //   if (!email) {
  //     alert("Please enter email");
  //     return;
  //   }
  //   try {
  //     await axios
  //       .post("http://localhost:3000/users", {
  //         email,
  //       })
  //       .then(() => {
  //         localStorage.setItem("mail", `${email}`);
  //         window.location = "./created";
  //       });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occured while creating the new user");
  //   }
  // };

  return (
    <div className="mx-auto">
      <div className="flex gap-2 justify-center mt-10 items-center">
        <Logo />
        <h2 className="font-semibold text-2xl">Geld</h2>
      </div>
      <div className="flex justify-center mt-[50px]">
        <ul className="steps">
          <li className="step step-primary">Currency</li>
          <li className="step step-primary">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="flex justify-center mt-[141px]">
        <Balance />
      </div>

      <h2 className=" flex justify-center font-semibold text-2xl mt-4">
        Set up your cash Balance
      </h2>
      <div className="flex justify-center">
        <input
          className="bg-slate-100 py-4 px-5 w-96 mt-6"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex justify-center ">
        <p className="text-xs w-96 mt-3 mb-8">
          How much cash do you have in your wallet?
        </p>
      </div>
      <div className="flex justify-center ">
        {/* <button
          onClick={getEmail} */}
        <Link
          href={"http://localhost:3001/created"}
          className="rounded-2xl bg-blue-600 py-2 w-96 text-white gap-1 flex justify-center"
        >
          Confirm
        </Link>
        {/* </button> */}
      </div>
    </div>
  );
}

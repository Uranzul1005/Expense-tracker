import { Logo } from "@/components/icons/Logo";
import { Correct } from "@/components/icons/Correct";
import Link from "next/link";

export default function Home() {
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
          <li className="step step-primary">Finish</li>
        </ul>
      </div>
      <div className="flex justify-center mt-[141px]">
        <Correct />
      </div>

      <h2 className=" flex justify-center font-semibold text-2xl mt-4">
        Good job
      </h2>
      <div className="flex justify-center text-center">
        <p className="text-xs w-96 mt-3 mb-8">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
      </div>
      <div className="flex justify-center ">
        <Link
          href={"http://localhost:3001/dashboard"}
          className="rounded-2xl bg-blue-600 py-2 w-96 text-white gap-1 text-center"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}

import { Logo } from "@/components/icons/Logo";
import { Currency } from "@/components/icons/Currency";
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
          <li className="step">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="flex justify-center mt-[141px]">
        <Currency />
      </div>

      <h2 className=" flex justify-center font-semibold text-2xl mt-4">
        Select base currency
      </h2>
      <div className="flex justify-center">
        <div className="bg-slate-100 px-4 py-5 w-96 mt-6">
          MNT - Mongolian Tugrik
        </div>
      </div>
      <div className="flex justify-center ">
        <p className="text-xs w-96 mt-3 mb-8">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>
      </div>
      <div className="flex justify-center ">
        <Link
          href={"http://localhost:3001/balance"}
          className="rounded-2xl bg-blue-600 py-2 w-96 text-white gap-1 text-center"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}

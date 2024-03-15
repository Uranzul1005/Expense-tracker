import { Logo } from "@/components/icons/Logo";
import { Plus } from "@/components/icons/Plus";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between bg-white mb-6">
      <div className="flex p-2 ml-[120px] my-[16px]">
        <Logo />
        <Link href={"http://localhost:3001/dashboard"} className="mx-6">
          Dashboard
        </Link>
        <Link href={"http://localhost:3001/"} className="font-semibold">
          Records
        </Link>
      </div>
      <div className="flex mr-[120px] my-[20px]">
        <button className="rounded-2xl bg-blue-600 p-2 text-white mr-9 flex items-center gap-1">
          <Plus />
          Record
        </button>
      </div>
    </header>
  );
}

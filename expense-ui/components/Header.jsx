import { Logo } from "@/components/icons/Logo";
import { Plus } from "@/components/icons/Plus";

export function Header() {
  return (
    <header className="flex justify-between bg-white mb-6">
      <div className="flex p-2 ml-[120px] my-[16px]">
        <Logo />
        <div className="mx-6">Dashboard</div>
        <div className="font-semibold">Records</div>
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

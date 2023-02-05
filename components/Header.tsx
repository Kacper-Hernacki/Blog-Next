import Link from "next/link";

function Header() {
  return (
    <header className="w-100 flex items-center justify-between font-bold px-10 py-5">
      <div className="flex justify-center items-center">
        <Link href={"/"}>Kacper's Blog</Link>
        <span className="ml-1 text-xs bg-blue-400 px-2 py-1 rounded-xl">Beta</span>
      </div>
      <div>See my courses</div>
    </header>
  );
};

export default Header;
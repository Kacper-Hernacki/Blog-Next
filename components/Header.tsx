import Link from "next/link";

function Header() {
  return (
    <header className="w-100 flex items-center justify-between font-bold px-10 py-5">
      <div><Link href={"/"}>Kacper's Blog</Link></div>
      <div>See my courses</div>
    </header>
  );
};

export default Header;
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/WhiteLogo.svg"

function Header() {
  return (
    <header className="w-100 flex items-center justify-between bg-gray-800 font-bold text-gray-50 px-10 py-5">
      <div className="flex justify-center items-center">
        <Link href={"/"}>
        <Image src={logo} alt="" width={250} height={100}/>
        </Link>
        <span className="ml-2 text-xs bg-blue-400 px-2 py-1 rounded-xl">Beta</span>
      </div>
      <div>See my courses</div>
    </header>
  );
};

export default Header;
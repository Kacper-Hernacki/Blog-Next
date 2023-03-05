import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/WhiteLogo.svg"
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper className="w-100 flex items-center justify-between bg-gray-800 font-bold text-gray-50 px-10 py-5 max-[800px]:px-2">
      <div className="flex justify-center items-center">
        <Link href={"/"}>
        <Image src={logo} alt="" width={250} height={100}/>
        </Link>
        <span className="ml-2 text-xs bg-blue-400 px-2 py-1 rounded-xl">Beta</span>
      </div>
      <p className='max-[800px]:hidden'>See my courses</p>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  @media (max-width: 500px) {
    padding-inline: 0.5rem !important;

    p {
      text-align: right;
      padding-right: 1rem;
    }
  }
`
"use client"
import logo from '../../public/images/logoTheDevs.svg'
import Image from "next/image";
import styled, {keyframes} from "styled-components";

export default function Loading() {
  return (
   <LoadingContainer>
     <Image src={logo} alt=""/>
   </LoadingContainer>
  )
}

const bounce = keyframes`
  0%,
  25% {
    transform: translateY(-12px);
  }
  50%,
  75% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-12px);
  }
`

const LoadingContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #111827;

  img, svg {
    animation: ${bounce} 5s linear infinite !important;
  }
`
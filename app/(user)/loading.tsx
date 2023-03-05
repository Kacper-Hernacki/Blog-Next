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
  position: absolute;
  width: 100vw !important;
  height: 100vh !important;
  display: grid;
  place-items: center;

  img,svg {
    animation: ${bounce} 5s linear infinite !important;
  }
`
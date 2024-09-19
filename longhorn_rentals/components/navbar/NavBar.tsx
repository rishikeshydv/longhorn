"use client"
import React from "react";
import Logo from "@/public/logo/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <header className="flex justify-between px-[30px] py-[30px] border-b-[1px] border-gray-500">
      <div >
        <Image src={Logo} alt="Longhorn Rentals Logo" className="h-[48px] w-[260px] hover:cursor-pointer" onClick={()=>router.push("/")}/>
      </div>
      <div className="text-[#FFFFFF] text-[22px] mt-3">
        <ul className="flex space-x-[50px] justify-center">
          <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/")}>HOME</li>
          <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/products")}>TRAILERS</li>
          <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/about")}>ABOUT US</li>
          <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/contact")}>CONTACT</li>
          {/* <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/news")}>NEWS</li> */}
        </ul>
      </div>
      <div className="flex space-x-4 mt-1">
        <Input placeholder="Find Our Search" className={`text-[18px] h-[44px] w-[300px]`} style={{fontFamily:"tungsten-medium"}} suffix={<CiSearch className="text-black w-[24px] h-[24px]"/>}/>
        <Button className="bg-[#FFD100] text-black text-[18px] h-[44px]"><FiPhoneCall />&nbsp;&nbsp;LET&apos;S TALK NOW</Button>
      </div>
    </header>
  );
}

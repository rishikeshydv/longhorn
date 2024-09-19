"use client"
import React, { useState } from "react";
import Logo from "@/public/logo/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NavBar() {
  const router = useRouter();
  return (
    <header className="flex justify-between px-[15px] py-[30px] md:px-[30px] md:py-[15px] border-b-[1px] border-gray-500">
      <div >
        <Image src={Logo} alt="Longhorn Rentals Logo" className="h-[40px] w-[200px] md:h-[48px] md:w-[260px] hover:cursor-pointer" onClick={()=>router.push("/")}/>
      </div>
      <div className="lg:hidden">
      <DropdownMenu>
  <DropdownMenuTrigger><RxHamburgerMenu className="w-[40px] h-[20px] text-white mt-2"/></DropdownMenuTrigger>
  <DropdownMenuContent className="bg-transparent w-[400px]">
    <DropdownMenuItem>Home</DropdownMenuItem>
    <DropdownMenuItem>Trailers</DropdownMenuItem>
    <DropdownMenuItem>About Us</DropdownMenuItem>
    <DropdownMenuItem>Contact</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      </div>


      <div className="hidden lg:flex lg:text-[#FFFFFF] lg:text-[22px] lg:mt-3">
        <ul className="flex space-x-[50px] justify-center">
          <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/")}>HOME</li>
          <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/products")}>TRAILERS</li>
          <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/about")}>ABOUT US</li>
          <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/contact")}>CONTACT</li>
          {/* <li className="hover:text-gray-300 hover:text-[20px] hover:cursor-pointer" onClick={()=>router.push("/news")}>NEWS</li> */}
        </ul>
      </div>
      <div className="hidden lg:flex lg:space-x-4 lg:mt-1">
        <Input placeholder="Find Our Search" className={`text-[18px] h-[44px] w-[300px]`} style={{fontFamily:"tungsten-medium"}} suffix={<CiSearch className="text-black w-[24px] h-[24px]"/>}/>
        <Button className="bg-[#FFD100] text-black text-[18px] h-[44px]"><FiPhoneCall />&nbsp;&nbsp;LET&apos;S TALK NOW</Button>
      </div>
    </header>
  );
}
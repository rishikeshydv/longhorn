"use client"
import React from "react";
import Logo from "@/public/logo/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NavBar() {
  const router = useRouter();
  return (
    <header className="flex justify-between px-[15px] py-[30px] md:px-[30px] md:py-[15px] border-b-[1px] border-gray-500">
      <div >
        <Image src={Logo} alt="Longhorn Rentals Logo" className="h-[40px] w-[200px] md:h-[48px] md:w-[260px] hover:cursor-pointer" onClick={()=>router.push("/")}/>
      </div>
      <div className="md:hidden">
      <DropdownMenu>
  <DropdownMenuTrigger><RxHamburgerMenu className="w-[40px] h-[20px] text-white mt-2"/></DropdownMenuTrigger>
  <DropdownMenuContent className="bg-[#0f0f0f] text-white border-none">
    <DropdownMenuItem className="text-[20px]" onClick={()=>router.push("/")}>Home</DropdownMenuItem>
    <DropdownMenuItem className="text-[20px]" onClick={()=>router.push("/products")}>Trailers</DropdownMenuItem>
    <DropdownMenuItem className="text-[20px]" onClick={()=>router.push("/about")}>About Us</DropdownMenuItem>
    <DropdownMenuItem className="text-[20px]" onClick={()=>router.push("/contact")}>Contact</DropdownMenuItem>
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
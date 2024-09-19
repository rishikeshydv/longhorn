"use client"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Individual() {
  const router = useRouter();
  return (
    <Card className=" bg-[#1a1a1a] text-white border-[#808080] border-[1px] hover:cursor-pointer" onClick={()=>router.push("details")}>
    <CardContent>
      <img
        src="/trailers/trailer1.png"
        alt="Trailer"
        className="rounded-md my-6"
        width="350"
        height="200"
        style={{ aspectRatio: "350/200", objectFit: "cover" }}
      />
      <div className="flex justify-start gap-2 mt-4">
        <Badge variant="default" className="bg-[#ffd100] text-black text-[16px] px-[18px]">
          $100 : 1DAY
        </Badge>
        <Badge variant="default" className="bg-[#333] text-white text-[16px] px-[18px]">
          $270 : 3DAYS
        </Badge>
        <Badge variant="default" className="bg-[#333] text-white text-[16px] px-[18px]">
          $550 : 1WEEK
        </Badge>
      </div>
      <h2 className="mt-4 text-[30px] font-bold border-t-[1px] border-b-[1px] border-[#808080] py-1">Tandem Axle Low Pro Dump Trailer</h2>
      <div className="flex justify-start space-x-[15px] mt-2 text-[24px]">
        <div>
          <p className="font-bold text-[#ffd100]">Width</p>
          <p>14&apos;x83&apos;x36&apos;</p>
        </div>
        <div>
          <p className="font-bold text-[#ffd100]">GVWR</p>
          <p>15,900 lbs</p>
        </div>
        <div>
          <p className="font-bold text-[#ffd100]">Cargo Capacity</p>
          <p>9,345 - 11,827 lbs</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <CarIcon className="w-4 h-4 mr-2 text-[#ffd100]" />
        <p className="text-[#808080] text-[18x]">Car Hauler</p>
        <LocateIcon className="w-4 h-4 mx-2 text-[#ffd100]" />
        <p className="text-[#808080] text-[18x]">Stephenville, TX</p>
      </div>
      <Button className=" mt-4 bg-[#ffd100] text-black text-[16px] hover:bg-yellow-500">MORE DETAILS</Button>
    </CardContent>
  </Card>
  )
}


function CarIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="4" height="4" x="2" y="9" />
      <rect width="4" height="10" x="10" y="9" />
      <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
      <circle cx="8" cy="19" r="2" />
      <path d="M10 19h12v-2" />
    </svg>
    )
  }
  
  
  function LocateIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>

    )
  }
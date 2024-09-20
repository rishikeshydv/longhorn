"use client"
import React from 'react'
import NavBar from "@/components/navbar/NavBar";
import { Button } from '@/components/ui/button';
import { Card } from "@/components/ui/card"
import ReviewCarousal from '@/components/carousal/ReviewCarousal';
import ReviewCarousalMobile from '@/components/carousal/ReviewCarousal_Mobile';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  return (
    <main>
    <section className="flex flex-col min-h-[30vh] md:min-h-[90vh] bg-about bg-no-repeat bg-cover bg-center">
     <NavBar />
      <div className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center space-y-4 lg:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white">
            ABOUT US
          </h1>
        </div>
      </div>
    </section>
    <section className="bg-[#FFD100] w-full h-[84px] hidden md:flex justify-center items-center">
        <span className="text-[22px] text-black py-2 uppercase">
        WE&apos;RE HERE TO HELP YOU CHOOSE THE RIGHT TRAILER FOR THE RIGHT JOB.
  
        </span>
        &nbsp;&nbsp;&nbsp;
        <Button className="bg-[#FFFFFF] text-black text-[22px] rounded-[50px] p-6 uppercase hover:bg-yellow-500" onClick={()=>router.push("/contact")}>
        CONTACT US NOW
        </Button>
      </section>
      <section className='px-[75px] md:px-[150px] pt-[60px] md:pt-[120px] pb-[50px] md:pb-[100px]'>
      <div className="flex flex-col space-y-8">
        <div className='grid md:grid-cols-2 md:items-center md:space-x-[60px]'>
        <div className='flex flex-col md:flex-[0.55]'>
        <p className="text-[15px] md:text-[25px] font-medium text-muted-foreground">ABOUT COMPANY FOR RELIABLE TRAILER RENTAL</p>
        <p className={`text-[35px] md:text-[80px] flex flex-col md:mt-[-25px]`} style={{fontFamily:"tungsten-semibold"}}>
            WHAT DO YOU GET WITH
          <span className={`text-[#ffd100] mt-[-15px] md:mt-[-40px]`} style={{fontFamily:"tungsten-medium"}}>LONGHORN RENTALS?</span>
        </p>
      </div>
      <p className="text-[18px] md:text-[24px] text-muted-foreground md:flex-[0.45]">
      Whether you&apos;re planning a weekend getaway, moving to a new home, or embarking on an adventurous road trip, our wide selection of meticulously maintained trailers, exceptional customer service, and flexible rental terms make us the top choice for all your hauling needs.
      </p>
        </div>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="py-[60px] px-[30px] text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-black rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
<path d="M11.9514 24.4998C11.628 26.7613 9.68302 28.4998 7.33203 28.4998C4.98104 28.4998 3.03611 26.7613 2.71262 24.4998H1.33203V8.49984C1.33203 7.76346 1.92899 7.1665 2.66536 7.1665H21.332C22.0684 7.1665 22.6654 7.76346 22.6654 8.49984V11.1665H26.6654L30.6654 16.5741V24.4998H27.9515C27.6279 26.7613 25.683 28.4998 23.332 28.4998C20.9811 28.4998 19.0362 26.7613 18.7126 24.4998H11.9514ZM19.9987 9.83317H3.9987V20.5672C4.84571 19.7028 6.02624 19.1665 7.33203 19.1665C9.19363 19.1665 10.8006 20.2565 11.5496 21.8332H19.1144C19.338 21.3625 19.6382 20.935 19.9987 20.5672V9.83317ZM22.6654 17.8332H27.9987V17.4532L25.321 13.8332H22.6654V17.8332ZM23.332 25.8332C24.2028 25.8332 24.9436 25.2766 25.2182 24.4998C25.2919 24.2913 25.332 24.0669 25.332 23.8332C25.332 22.7286 24.4366 21.8332 23.332 21.8332C22.2275 21.8332 21.332 22.7286 21.332 23.8332C21.332 24.0669 21.3722 24.2913 21.4459 24.4998C21.7204 25.2766 22.4612 25.8332 23.332 25.8332ZM9.33203 23.8332C9.33203 22.7286 8.4366 21.8332 7.33203 21.8332C6.22746 21.8332 5.33203 22.7286 5.33203 23.8332C5.33203 24.0669 5.37214 24.2913 5.44583 24.4998C5.72039 25.2766 6.46122 25.8332 7.33203 25.8332C8.20284 25.8332 8.94367 25.2766 9.21823 24.4998C9.29192 24.2913 9.33203 24.0669 9.33203 23.8332Z" fill="#FFD100"/>
</svg>
          </div>
          <h3 className="mb-2 text-[24px] font-semibold">Great Service Experience</h3>
          <p className="text-[20px] text-muted-foreground">
            We provide a wide range of trailers to suit your needs, whether you&apos;re moving, hauling equipment, or going on a road trip.
          </p>
        </Card>
        <Card className="py-[60px] px-[30px] text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-black rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
<path d="M13.4046 3.29197C14.8995 2.01792 17.0984 2.0179 18.5935 3.29198L20.3908 4.82365C20.6043 5.00564 20.8698 5.1156 21.1495 5.13792L23.5035 5.32577C25.4615 5.48201 27.0164 7.0369 27.1727 8.99492L27.3606 11.3489C27.3828 11.6286 27.4927 11.8941 27.6747 12.1076L29.2064 13.905C30.4806 15.4 30.4806 17.5989 29.2064 19.094L27.6747 20.8912C27.4928 21.1048 27.3827 21.3704 27.3604 21.6501L27.1727 24.004C27.0164 25.9621 25.4615 27.5169 23.5035 27.673L21.1495 27.8609C20.8698 27.8833 20.6043 27.9933 20.3908 28.1753L18.5935 29.7069C17.0984 30.981 14.8995 30.9809 13.4044 29.7069L11.6071 28.1753C11.3936 27.9933 11.1281 27.8833 10.8484 27.861L8.49448 27.673C6.53643 27.5168 4.98158 25.962 4.82532 24.004L4.63744 21.6501C4.61512 21.3704 4.50514 21.1049 4.32318 20.8913L2.7915 19.0938C1.51743 17.5989 1.51742 15.4001 2.79147 13.905L4.32315 12.1077C4.50514 11.8941 4.61515 11.6286 4.63746 11.3489L4.82531 8.9949C4.98155 7.03688 6.53639 5.48204 8.49443 5.32578L10.8484 5.13793C11.1281 5.11561 11.3936 5.00564 11.6072 4.82365L13.4046 3.29197ZM16.8638 5.3216C16.3655 4.89693 15.6324 4.89692 15.1342 5.3216L13.3368 6.85329C12.6962 7.39925 11.8996 7.72918 11.0605 7.79614L8.70656 7.984C8.05388 8.03609 7.5356 8.55436 7.48352 9.20705L7.29566 11.5611C7.2287 12.4001 6.89876 13.1966 6.35282 13.8373L4.82114 15.6346C4.39646 16.1329 4.39644 16.866 4.82114 17.3642L6.35282 19.1616C6.89878 19.8022 7.2287 20.5989 7.2957 21.4378L7.48354 23.7918C7.5356 24.4445 8.05388 24.9629 8.70659 25.0149L11.0605 25.2028C11.8995 25.2697 12.6962 25.5997 13.3368 26.1457L15.1342 27.6773C15.6326 28.102 16.3655 28.102 16.8638 27.6773L18.6612 26.1456C19.3018 25.5997 20.0983 25.2697 20.9374 25.2028L23.2914 25.0149C23.944 24.9628 24.4624 24.4445 24.5144 23.7918L24.7023 21.4378C24.7692 20.5988 25.0991 19.8022 25.6452 19.1617L27.1768 17.3642C27.6016 16.866 27.6015 16.133 27.1768 15.6346L25.6451 13.8373C25.0991 13.1966 24.7692 12.4001 24.7023 11.561L24.5144 9.20705C24.4624 8.55437 23.944 8.03609 23.2914 7.984L20.9374 7.79616C20.0984 7.72921 19.3018 7.39924 18.6611 6.85328L16.8638 5.3216ZM19.7699 10.8427L21.6555 12.7284L12.2274 22.1565L10.3418 20.2708L19.7699 10.8427ZM13.6416 14.1425C12.8606 14.9236 11.5943 14.9236 10.8132 14.1425C10.0321 13.3616 10.0321 12.0952 10.8132 11.3141C11.5943 10.5331 12.8606 10.5331 13.6416 11.3141C14.4227 12.0952 14.4227 13.3616 13.6416 14.1425ZM18.3556 21.685C19.1367 22.4661 20.403 22.4661 21.184 21.685C21.9651 20.904 21.9651 19.6377 21.184 18.8566C20.403 18.0756 19.1367 18.0756 18.3556 18.8566C17.5746 19.6377 17.5746 20.904 18.3556 21.685Z" fill="#FFD100"/>
</svg>
          </div>
          <h3 className="mb-2 text-[24px] font-semibold">Affordable & Discounts</h3>
          <p className="text-[20px] text-muted-foreground">
            We offer competitive pricing and discounts on our trailers to help you save money on your rental.
          </p>
        </Card>
        <Card className="py-[60px] px-[30px] text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-black rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
<path d="M18.8968 4.5C19.604 4.5 20.2822 4.78095 20.7824 5.28105L27.2202 11.7189C27.7204 12.2191 28.0013 12.8973 28.0013 13.6046V23.1667H30.668V25.8333L19.833 25.8344C19.2406 28.1341 17.1528 29.8333 14.668 29.8333C12.1832 29.8333 10.0953 28.1341 9.50292 25.8344L4.0013 25.8333C3.26493 25.8333 2.66797 25.2364 2.66797 24.5V7.16667C2.66797 5.69391 3.86188 4.5 5.33464 4.5H18.8968ZM14.668 21.8333C13.1952 21.8333 12.0013 23.0272 12.0013 24.5C12.0013 25.9728 13.1952 27.1667 14.668 27.1667C16.1408 27.1667 17.3346 25.9728 17.3346 24.5C17.3346 23.0272 16.1408 21.8333 14.668 21.8333ZM18.8968 7.16667H5.33464V23.1667L9.50257 23.1669C10.0945 20.8665 12.1827 19.1667 14.668 19.1667C17.1532 19.1667 19.2414 20.8665 19.8333 23.1669L25.3346 23.1667V13.6046L18.8968 7.16667ZM18.668 9.83333V17.8333H8.0013V9.83333H18.668ZM16.0013 12.5H10.668V15.1667H16.0013V12.5Z" fill="#FFD100"/>
</svg>
          </div>
          <h3 className="mb-2 text-[24px] font-semibold">Insuranced Vehicles</h3>
          <p className="text-[20px] text-muted-foreground">
            Our trailers are insured and come with a range of features to ensure the safety of your cargo.
          </p>
        </Card>
      </div>
    </div>
      </section>
      <section className='md:min-h-[100vh] bg-about-us md:px-[100px] px-[50px]'>
      <div className="flex md:flex-col items-center justify-center min-h-screen text-white">
      <div className="flex flex-col md:flex-row justify-center items-center p-4">
        <div className="">
          <img
            src="/trailers/trailer2.png"
            alt="Airstream Trailer"
            className="rounded-lg"
            width="1200"
            height="1000"
            style={{ aspectRatio: "1000/1000", objectFit: "cover" }}
          />
        </div>
        <div className="mt-8 md:mt-0 md:ml-12">
          <h2 className="text-[15px] md:text-[25px] font-semibold text-gray-400">CAMPING RV RENTALS</h2>
          <div className="text-[35px] md:text-[80px] tracking-wide md:mt-[-20px]">
            <span className={`text-white`} style={{fontFamily:"tungsten-semibold"}}>
              HAIL WITHOUT
            </span>
            &nbsp;
            <span className={`text-[#FFD100]`}>WORRYING</span>
          </div>
          <p className=" text-gray-300 text-[20px] md:text-[24px] mt-[-5px]">
            Longhorn Trailer Rentals is your go-to solution for reliable and convenient car hauler rentals. With a fleet
            of well-maintained trailers equipped with features like sturdy ramps and tie-down points, they ensure the
            safe and secure transportation of your vehicles.
          </p>
          <ul className="mt-4 space-y-2 text-[20px]">
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-yellow-500 mr-2" />
              Choose from our selection of trailers
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-yellow-500 mr-2" />
              Toolboxes & winches are standard
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-yellow-500 mr-2" />
              Offering daily & long term rental options
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-yellow-500 mr-2" />
              Book your trailer today!
            </li>
          </ul>
        </div>
      </div>
    </div>
      </section>
      <section className="md:min-h-[100vh]">
        <div className="py-[80px] md:pt-[150px] border-gray-500 border-b-[1px]">
          <div className="text-[35px] md:text-[70px] tracking-wide text-center">
            <span
              className={` text-black`}
              style={{ fontFamily: "tungsten-semibold" }}
            >
              HAPPY CUSTOMER
            </span>
            &nbsp;
            <span className="text-[#FFD100]">SAYING</span>
          </div>
          {/* <div className="grid grid-cols-3 gap-8 p-20">
            <Review
              img="/reviews/review2.jpg"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              name="Genene Bell"
              profession="Trailer Rental Customer"
            />
            <Review
              img="/reviews/review1.png"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              name="Genene Bell"
              profession="Trailer Rental Customer"
            />
            <Review
              img="/reviews/review3.png"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              name="Genene Bell"
              profession="Trailer Rental Customer"
            />
          </div> */}
          <div className="md:flex hidden">
          <ReviewCarousal/>
          </div>
          
          <div className="md:hidden pt-6">
            <ReviewCarousalMobile/>
          </div>
        </div>
      </section>
        {/* <section className="max-h-[110vh] w-[100vw] pt-8 bg-humberto">
        <div className="flex mx-20 justify-center text-[80px] tracking-tight py-[100px]">

          <span className={` text-white`} style={{fontFamily:"tungsten"}}>
              A MESSAGE FROM
            
            &nbsp;
            <span className={`text-[#FFD100]`} style={{fontFamily:"tungsten-medium"}}>OUR FOUNDER</span>
            </span>


        </div>
        <div className="grid grid-cols-2 w-full pr-24">
          <div className="ml-52">

            <Image
              src={LadyHero}
              alt="Hero home image"
              width={400}
              height={500}
            />
          </div>
          <div className=" text-white p-8 rounded-3xl max-w-3xl bg-[#171717] absolute right-20">
      <div className="text-[75px]">
            <span className={` text-white`} style={{fontFamily:"tungsten"}}>
              CREATED FOR
            </span>
            &nbsp;
            <span className={`text-[#FFD100]`} style={{fontFamily:"tungsten-medium"}}>THE RELENTLESS</span>
        </div>
      <p className="mt-4 text-[20px] text-gray-400 tracking-wide">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries.
      </p>
      <p className="mt-8 font-bold text-[30px]">
        ANN CHOVEY - <span className="text-yellow-500">CEO OF LONGHORN TRAILER RENTALS</span>
      </p>
        </div>
        </div>
      </section> */}
    </main>
  )
}

function CheckIcon(props:React.SVGProps<SVGSVGElement>) {
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
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }
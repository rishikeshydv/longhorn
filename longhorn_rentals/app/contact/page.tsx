import React from 'react'
import NavBar from "@/components/navbar/NavBar";
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
export default function Contact() {
  return (
    <main>
    <section className="flex flex-col min-h-[90vh] bg-about bg-no-repeat bg-cover bg-center">
     <NavBar />
      <div className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center space-y-4 lg:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white">
            CONTACT US
          </h1>
        </div>
      </div>
    </section>
    <section className='px-[150px] pt-[120px] pb-[100px]'>
      <div className="flex flex-col space-y-8">
        <div className='flex flex-col justify-center items-center'>
        <p className={`text-[80px]`} style={{fontFamily:"tungsten-semibold"}}>
            GET IN&nbsp;
          <span className={`text-[#ffd100]`} style={{fontFamily:"tungsten-medium"}}>TOUCH</span>
        </p>
        <p className='uppercase text-[24px] text-[#808080]'>
        We have made contacting us very easy, simple and hassle-free!
        </p>
        </div>
      <div className="grid gap-4 md:grid-cols-4 pt-[75px]">
        <Card className="py-[60px] px-[30px] text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-black rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M12.4874 14.7428C13.736 16.9384 15.5616 18.764 17.7572 20.0125L18.9365 18.3615C19.3287 17.8127 20.0688 17.6431 20.6608 17.9664C22.5365 18.9911 24.6095 19.6137 26.7719 19.7849C27.4653 19.8399 28 20.4185 28 21.1141V27.0645C28 27.7481 27.4829 28.3209 26.8029 28.3908C26.0964 28.4635 25.3836 28.5 24.6667 28.5C13.2528 28.5 4 19.2472 4 7.83333C4 7.11636 4.03656 6.40361 4.10919 5.69701C4.17907 5.017 4.75192 4.5 5.43553 4.5H11.3859C12.0815 4.5 12.6602 5.03472 12.7151 5.72812C12.8862 7.89051 13.5089 9.96352 14.5336 11.8393C14.8569 12.4312 14.6873 13.1714 14.1385 13.5634L12.4874 14.7428ZM9.12567 13.8669L11.6589 12.0575C10.9406 10.5069 10.4484 8.86244 10.1964 7.16667H6.67876C6.67071 7.38843 6.66667 7.61067 6.66667 7.83333C6.66667 17.7744 14.7256 25.8333 24.6667 25.8333C24.8893 25.8333 25.1116 25.8293 25.3333 25.8212V22.3036C23.6376 22.0516 21.9932 21.5593 20.4425 20.8411L18.6331 23.3744C17.9011 23.09 17.1941 22.7553 16.5165 22.3748L16.4391 22.3307C13.8263 20.8449 11.6551 18.6737 10.1693 16.0609L10.1253 15.9835C9.74465 15.3059 9.41005 14.5989 9.12567 13.8669Z" fill="#FFD100"/>
</svg>
          </div>
          <h3 className="mb-2 text-[24px] font-semibold">Call Us</h3>
          <p className="text-[20px] text-muted-foreground">
          Phone : +1 (254) 434-8519
          </p>
        </Card>
        <Card className="py-[60px] px-[30px] text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-black rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M2.98979 9.63891L15.3187 2.24457C15.7409 1.99131 16.2685 1.9914 16.6907 2.24481L29.0091 9.63888C29.2099 9.75937 29.3327 9.97635 29.3327 10.2105V27.1664C29.3327 27.9028 28.7357 28.4998 27.9993 28.4998H3.99935C3.26298 28.4998 2.66602 27.9028 2.66602 27.1664V10.2106C2.66602 9.97641 2.78892 9.75939 2.98979 9.63891ZM5.33268 11.3433V25.8331H26.666V11.3426L16.0043 4.94293L5.33268 11.3433ZM16.0789 18.7642L23.1402 12.8135L24.8585 14.8527L16.098 22.2354L7.15136 14.862L8.84734 12.8042L16.0789 18.7642Z" fill="#FFD100"/>
</svg>
          </div>
          <h3 className="mb-2 text-[24px] font-semibold">Email Us</h3>
          <p className="text-[20px] text-muted-foreground">
          longhorntrailrentalstx@gmail.com
          </p>
        </Card>
        <Card className="py-[60px] px-[30px] text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-black rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <g clip-path="url(#clip0_225_1070)">
    <path d="M16.8976 2.64899L27.7339 12.5002H23.7696L16.0007 5.43752L8.00065 12.7103V25.8336H14.6673V28.5003H6.66732C5.93094 28.5003 5.33398 27.9034 5.33398 27.167V15.167H1.33398L15.1037 2.64899C15.6123 2.18667 16.3891 2.18667 16.8976 2.64899ZM18.6673 15.1668H30.6673V24.5002H18.6673V15.1668ZM21.334 17.8335V21.8335H28.0007V17.8335H21.334ZM32.0007 28.5002H17.334V25.8335H32.0007V28.5002Z" fill="#FFD100"/>
  </g>
  <defs>
    <clipPath id="clip0_225_1070">
      <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
          </div>
          <h3 className="mb-2 text-[24px] font-semibold">Head Office</h3>
          <p className="text-[20px] text-muted-foreground">
          Co Rd 182, Stephenville, TX 76401
          </p>
        </Card>
        <Card className="py-[60px] px-[30px] text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-black rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M15.9993 29.8332C8.63555 29.8332 2.66602 23.8636 2.66602 16.4998C2.66602 9.13604 8.63555 3.1665 15.9993 3.1665C23.3631 3.1665 29.3327 9.13604 29.3327 16.4998C29.3327 23.8636 23.3631 29.8332 15.9993 29.8332ZM12.946 26.723C11.6626 24.001 10.8758 20.9988 10.7024 17.8332H5.4152C5.94335 22.0685 8.95454 25.5328 12.946 26.723ZM13.3736 17.8332C13.5741 21.0849 14.5031 24.1394 15.9993 26.8358C17.4956 24.1394 18.4245 21.0849 18.6251 17.8332H13.3736ZM26.5835 17.8332H21.2963C21.1229 20.9988 20.3361 24.001 19.0527 26.723C23.0441 25.5328 26.0554 22.0685 26.5835 17.8332ZM5.4152 15.1665H10.7024C10.8758 12.0009 11.6626 8.9986 12.946 6.27658C8.95454 7.46694 5.94335 10.9312 5.4152 15.1665ZM13.3736 15.1665H18.6251C18.4245 11.9148 17.4956 8.86017 15.9993 6.16382C14.5031 8.86017 13.5741 11.9148 13.3736 15.1665ZM19.0527 6.27658C20.3361 8.9986 21.1229 12.0009 21.2963 15.1665H26.5835C26.0554 10.9312 23.0441 7.46694 19.0527 6.27658Z" fill="#FFD100"/>
</svg>
          </div>
          <h3 className="mb-2 text-[24px] font-semibold">Connect with us</h3>
          <p className="text-[20px] text-muted-foreground flex gap-2 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className='bg-[#ffd100] p-2 rounded-full' width="50" height="50" viewBox="0 0 25 24" fill="none">
  <path d="M14.5 13.5H17L18 9.5H14.5V7.5C14.5 6.47062 14.5 5.5 16.5 5.5H18V2.1401C17.6743 2.09685 16.443 2 15.1429 2C12.4284 2 10.5 3.65686 10.5 6.69971V9.5H7.5V13.5H10.5V22H14.5V13.5Z" fill="black"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='border rounded-full p-2' width="50" height="50" viewBox="0 0 25 24" fill="none">
  <path d="M18.7048 2.25H22.0128L14.7858 10.51L23.2878 21.75H16.6308L11.4168 14.933L5.45084 21.75H2.14084L9.87084 12.915L1.71484 2.25H8.54084L13.2538 8.481L18.7048 2.25ZM17.5438 19.77H19.3768L7.54484 4.126H5.57784L17.5438 19.77Z" fill="black"/>
</svg>
          </p>
        </Card>
      </div>
    </div>
      </section>
      <section className='bg-home-section min-h-[100vh]'>
      <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center border-1 border-white"
    >
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.54)" }}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name" className='text-[22px]'>First Name</Label>
            <div className="relative">
              <Input id="first-name" placeholder="Enter your first name" className=' text-[16px]'/>
              <UserIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-black" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name" className='text-[22px]'>Last Name</Label>
            <div className="relative">
              <Input id="last-name" placeholder="Enter your last name" className=' text-[16px]'/>
              <UserIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-black" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className='text-[22px]'>Email Address</Label>
            <div className="relative">
              <Input id="email" placeholder="Enter your email address" type="email" className=' text-[16px]'/>
              <MailIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip-code" className='text-[22px]'>Zip Code</Label>
            <div className="relative">
              <Input id="zip-code" placeholder="Enter your zip code" className=' text-[16px]'/>
              <MapPinIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="phone-number" className='text-[22px]'>Phone Number</Label>
            <div className="relative">
              <Input id="phone-number" placeholder="Enter your phone number" className=' text-[16px]' />
              <PhoneIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message" className='text-[22px]'>Message</Label>
            <Textarea id="message" placeholder="Write Message" className="min-h-[100px] text-[16px]" />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button className="bg-[#ffd100] text-black hover:bg-yellow-500 w-[131px] h-[44px] text-[16px] uppercase">Send Message</Button>
        </div>
      </div>
    </div>
      </section>
    </main>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
  
  
  function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  
  
  function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
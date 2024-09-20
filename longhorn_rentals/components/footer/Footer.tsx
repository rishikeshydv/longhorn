/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0q1caE11pZK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full py-8 px-[100px] space-y-8 bg-white">
      <div className="flex md:flex-row flex-col items-center space-y-10 md:space-y-0 md:space-x-16 pt-[60px]">
        <img
          src="/logo/logo1.png"
          alt="Longhorn Trailer Rentals"
          className="mr-6 md:mr-0"
        />
        <p className="hidden md:flex max-w-2xl text-center text-muted-foreground text-[24px]">
        Welcome to Longhorn Trailer Rentals in Stephenville, TX! We are your premier destination for high-quality and reliable trailer rentals in Erath County and the surrounding areas. 
        </p>
        <div className="flex space-x-4">
          <Button variant="ghost" className="p-2 bg-black rounded-[10px]">
            <FacebookIcon className="w-6 h-6 text-[#FFD100]" />
          </Button>
          <Button variant="ghost" className="p-2 bg-black rounded-[10px]">
            <TwitterIcon className="w-6 h-6 text-[#FFD100]" />
          </Button>
          <Button variant="ghost" className="p-2 bg-black rounded-[10px]">
            <InstagramIcon className="w-6 h-6 text-[#FFD100]" />
          </Button>
          <Button variant="ghost" className="p-2 bg-black rounded-[10px]">
            <LinkedinIcon className="w-6 h-6 text-[#FFD100]" />
          </Button>
          <Button variant="ghost" className="p-2 bg-black rounded-[10px]">
            <YoutubeIcon className="w-6 h-6 text-[#FFD100]" />
          </Button>
        </div>
      </div>
      <div className="w-full border-t" />
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-4">
        <div className="hidden md:flex flex-col space-y-2">
          <h3 className="text-[24px] font-bold">BEST FEATURES</h3>
          <ul className="space-y-1 text-muted-foreground text-[18px]">
            <li>Career Management</li>
            <li>Contract Negotiation</li>
            <li>Brand Development</li>
            <li>Online Registration</li>
            <li>Scheduling</li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col space-y-2">
          <h3 className="text-[24px] font-bold">RESOURCES</h3>
          <ul className="space-y-1 text-muted-foreground text-[18px]">
            <li>Benefits</li>
            <li>Features</li>
            <li>Help Center</li>
            <li>FAQ</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col space-y-2">
          <h3 className="text-[24px] font-bold">USEFUL LINKS</h3>
          <ul className="space-y-1 text-muted-foreground text-[18px]">
            <li>Rent a Trailer</li>
            <li>View Listings</li>
            <li>How it works?</li>
            <li>Traveler Reviews</li>
            <li>About Longhorn Trailers</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-[24px] font-bold">CONTACT NOW</h3>
          <ul className="space-y-4 text-muted-foreground text-[18px]">
            <li className="flex items-center space-x-2">
              <Button variant="ghost" className="p-2 bg-black rounded-[5px] w-[40px] h-[40px]">
                <MailIcon className="w-6 h-6 text-[#FFD100]" />
              </Button>
              <span>longhorntrailrentalstx@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Button variant="ghost" className="p-2 bg-black rounded-[5px] w-[40px] h-[40px]">
                <PhoneIcon className="w-6 h-6 text-[#FFD100]" />
              </Button>
              <span> +1 (254) 434-8519</span>
            </li>
            <li className="flex items-center space-x-2">
              <Button variant="ghost" className="p-2 bg-black rounded-[5px] w-[40px] h-[40px]">
                <MapPinIcon className="w-6 h-6 text-[#FFD100]" />
              </Button>
              <span>
                Stephensville, TX
                <br />
                United States
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-t" />
      <div className="text-center text-muted-foreground text-[20px]">© 2024 Longhorn Trailer Rentals</div>
    </div>
  )
}
//specify the type of the props
function FacebookIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props:React.SVGProps<SVGSVGElement>) {
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


function MapPinIcon(props:React.SVGProps<SVGSVGElement>) {
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


function PhoneIcon(props:React.SVGProps<SVGSVGElement>) {
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


function TwitterIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function OrderSuccess() {

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto mt-10">
        <CardHeader className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <CardTitle className="text-4xl font-bold tracking-wide">Order Placed Successfully!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-xl tracking-wide">Thank you for your purchase. Your order has been confirmed.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <Button asChild className="text-lg">
            <Link href="/">Go to Home</Link>
          </Button>
          <Button variant="outline" asChild className="text-lg">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold mb-2">Need Help?</h3>
        <div className="flex items-center justify-center space-x-2">
          <Phone className="w-5 h-5" />
          <span className="text-xl">Contact our support team at +1 (254) 434-8519</span>
        </div>
      </div>
    </div>
  )
}
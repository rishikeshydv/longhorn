import React from 'react'

interface OrderDetails {
    email: string;
    name: string;
    product: string;
    days: number;
    date: string;
    total: number;
}

const EmailTemplate= ({order}:{order:OrderDetails}) => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-4xl bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-8">
        <div className="space-y-6">
          <p className='text-gray-700 leading-relaxed font-bold'>Dear {order.name},</p>
          <p className="text-gray-700 leading-relaxed">
            We wanted to take a moment to express our sincere gratitude for your support and trust in our trailer rentals. Your
            business means the world to us, and we are honored to have you as a valued customer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Thank you for choosing us, and we look forward to continuing to provide you with exceptional trailers and
            services.
          </p>
          <div className="flex items-center space-x-4">
            <p className="text-gray-700">Best regards,</p>
            <p className="text-gray-800 font-bold">Longhorn Trailer Rentals</p>
            <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl p-8 flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 underline">Order Details</h2>
          <div className="space-y-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Date:&nbsp;&nbsp;</span>
              <span className="font-bold text-gray-800">{order.date}</span>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 font-bold" style={{fontSize:"14px",textDecoration:"underline"}}>Items:</p>
                  <div className="flex justify-between" key={order.product} style={{marginTop:"-6px"}}>
                    <span className="text-gray-600">{order.product}</span>
                    <span className="font-bold text-gray-800">&nbsp;&nbsp;x&nbsp;{order.days}</span>
                  </div>

            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total:&nbsp;&nbsp;&nbsp;</span>
              <span className="font-bold text-gray-800">${order.total}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailTemplate
"use client";

declare global {
  interface Window {
    Razorpay: any;
  }
}


import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Button } from "@mui/material";
import axios from "axios";
import Script from "next/script";

const Summary = () => {

  const [loading,setLoading] = useState(false)
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment Successfull')
      removeAll()
    }
    if (searchParams.get('canceled')) {
      toast.error('Payment Failed')
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const onCheckout = async () => {

    try{
      setLoading(true);
      const res = await initializeRazorpay();
  
      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }
  
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
        productIds: items.map(item =>item.id)
      })
  
      // const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, { method: "POST" }).then((t) =>
      //   t.json()
      // );
      let options = {
        key: process.env.RAZORPAY_ID,
        name: "STORE",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        id: data.order_status,
        description: "Thankyou for ordering from our Store",
        image: "https://static.vecteezy.com/system/resources/thumbnails/002/195/266/small/footwear-store-logo-set-shoe-style-premium-quality-free-vector.jpg",
        handler: async function (response:Response) {
          await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,options.id)
        },
        prefill: {
          name: "",
          email: "",
          contact: "9999999999",
        },
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
    };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div
        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
      >
        <h2 className="text-lg font-medium text-gray-900">
          Order summary
        </h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">Order total</div>
            <Currency value={totalPrice} />
          </div>
        </div>
        <Button disabled={loading} className="w-full" color="inherit" onClick={onCheckout}>
          Checkout
        </Button>
      </div>
    </>
  );
}

export default Summary;
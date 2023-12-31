"use client"

import { Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import useCart from "@/hooks/use-cart";

interface Props{
    data:Product
}

const Info:React.FC<Props> = ({data}) => {

    const cart = useCart()
    
    const onAddToCart = () => {
        cart.addItem(data)
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{backgroundColor:data?.color?.value}}></div>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <button color="inherit" className="bg-black text-white flex items-center gap-x-2 py-2 px-3 rounded-md transition active:scale-95" onClick={onAddToCart}>
                    <AddShoppingCart className="h-4 w-4"/>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default Info;
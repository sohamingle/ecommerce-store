"use client"

import useCart from "@/hooks/use-cart";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {

    const [isMounted,setIsMounted] = useState(false)
    const cart = useCart()
    const router = useRouter()

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }


    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button color="inherit" onClick={()=>router.push('/cart')}>
                <ShoppingCartOutlined className="text-black"/>
                <span className="ml-1 text-black text-base">{cart.items.length}</span>
            </Button>
        </div>
    );
}

export default NavbarActions;
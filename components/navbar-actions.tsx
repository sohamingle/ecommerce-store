"use client"

import { ShoppingCartOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const NavbarActions = () => {

    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button color="inherit">
                <ShoppingCartOutlined className="text-black"/>
                <span className="ml-1 text-black text-base">0</span>
            </Button>
        </div>
    );
}

export default NavbarActions;
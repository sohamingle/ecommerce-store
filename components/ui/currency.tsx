"use client"
import { formatter } from "@/lib/util";
import { useEffect, useState } from "react";

interface Props{
    value?:string | number
}

const Currency:React.FC<Props> = ({value}) => {

    const [isMounted,setIsMounted]= useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;
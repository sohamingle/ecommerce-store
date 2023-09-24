"use client"

import { cn } from "@/lib/util";
import { Size,Color } from "@/types";
import { Button } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string"

interface Props{
    data:(Size | Color)[]
    name:string
    valueKey:string
}

const Filter:React.FC<Props> = ({data,name,valueKey}) => {

    const searchParams = useSearchParams()
    const router = useRouter()

    const selectedValue = searchParams.get(valueKey)

    const onClick = (id:string) =>{
        const current = qs.parse(searchParams.toString())
        const query = {
            ...current,
            [valueKey]: id
        }
        if (current[valueKey] === id){
            query[valueKey] = null
        }
        const url = qs.stringifyUrl({
            url:window.location.href,
            query
        },{skipNull:true})
        router.push(url)
    }

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4"/>
            <div className="flex flex-wrap gap-2">
                {data.map((filter)=>(
                    <div key={filter.id} className="flex items-center">
                        <Button variant="contained" color="inherit" className={cn(selectedValue === filter.id && "text-white bg-black hover:text-white hover:bg-black")} onClick={()=>onClick(filter.id)}>
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default Filter;
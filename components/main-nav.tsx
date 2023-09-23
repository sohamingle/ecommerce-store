"use client"

import { cn } from "@/lib/util"
import { Category } from "@/types"
import Link from "next/link"
import {usePathname} from "next/navigation"

interface Props{
    data:Category[]
}

const MainNav:React.FC<Props> = ({data}) => {

    const pathname = usePathname()

    const routes = data.map((route)=>({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route)=>(
                <Link href={route.href} key={route.href} className={cn("text-sm font-medium transition-colors hover:text-black" , route.active ? "text-black" : 'text-neutral-500')}>
                    {route.label}
                </Link>
            ))}
        </nav>
    );
}

export default MainNav;
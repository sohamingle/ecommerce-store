import { Product } from "@/types";
import { AddShoppingCart, ZoomOutMap } from "@mui/icons-material";
import Image from "next/image";
import PropButton from "./prop-button"
import Currency from "./currency";
interface Props{
    data:Product
}

const ProductCard:React.FC<Props> = ({data}) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image src={data?.images?.[0]?.url} alt="image" 
                fill 
                className="aspect-square object-cover rounded-md"/>
                <div className="opacity-0 group-hover:opacity-100 absolute top-3 right-3">
                    <div className="flex flex-col space-y-2 justify-end">
                        <PropButton icon={<ZoomOutMap className="h-4 w-4"/>}/>
                        <PropButton icon={<AddShoppingCart className="h-4 w-4"/>}/>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            <div className="flex items-center justify-between">
                <Currency value={data?.price}/>
            </div>
        </div>
    );
}

export default ProductCard;
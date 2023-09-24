import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

interface Props{
    title:string
    items:Product[]
}

const ProductList:React.FC<Props> = ({title,items}) => {
    return (
        <div className="space-y-4 ">
            <h3>{title}</h3>
            {items.length===0 && <NoResults/>}
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((item)=>(
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
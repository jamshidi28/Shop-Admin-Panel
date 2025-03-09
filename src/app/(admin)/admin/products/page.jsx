"use client"

import { useGetProducts } from "@/hooks/useProducts"
import ProductsTable from "./ProductsTable";
import Loading from "@/ui/Loading";

function page() {
    const { data, isLoading } = useGetProducts();
     console.log(data)
    const { products } = data || {};

    if(isLoading) return <Loading/>
    return (
        <div>
            <h1 className='mb-6 text-xl font-bold'> محصولات</h1>
            <ProductsTable products={products}/>
        </div>
    )
}

export default page

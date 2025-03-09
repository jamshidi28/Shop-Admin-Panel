import { productTHead } from "@/constants/tableProducts"
import Link from "next/link";

function ProductsTable({ products }) {
    return (
        <div className='shadow-sm overflow-auto my-6'>
            <table className='w-full border-collapse table-auto min-w-[800px] text-sm'>
                <thead>
                    <tr >
                        {
                            productTHead.map(item => {
                                return (
                                    <th className='whitespace-nowrap table__th' key={item.id}>{item.lable}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr className='' key={product._id}>
                                    <td className='table__td'>
                                        {index}
                                    </td>
                                    <td className='table__td'>
                                        {product.title}
                                    </td>
                                    <td className='table__td'>
                                        {product.category.title}
                                    </td>
                                    <td className='table__td'>
                                        {product.price}
                                    </td>
                                    <td className='table__td'>
                                        {product.discount}
                                    </td>
                                    <td className='table__td'>
                                        {product.offPrice}
                                    </td>
                                    <td className='table__td'>
                                        {product.countInStock}
                                    </td>
                                    <td className='table__td font-bold'>
                                        <Link href={`/admin/products/${product._id}`}>مشاهده جزئیات</Link>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable;

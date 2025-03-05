import { getCategories } from '@/services/categoryService';
import { getProducts } from '@/services/productService'
import React from 'react'
import CategorySidebar from './CategorySidebar';
import queryString from 'query-string';
import Link from 'next/link';
import { toLocalDataStringShort } from '@/utils/toLocalDate';
import AddToCart from './[slug]/AddToCart';

async function Product({ searchParams }) {
  // const { products } = await getProducts(queryString.stringify(searchParams));
  // const { categories } = await getCategories();
  // console.log(queryString.stringify(searchParams))

  const productsPromise = getProducts(queryString.stringify(searchParams));
  const categoriesPromise = getCategories();
  const [{ products }, { categories }] = await Promise.all([productsPromise, categoriesPromise])

  return (
    <div>
      <h1 className="text-xl mb-6 font-bold">صفحه محصولات</h1>
      <div className='grid grid-cols-4 '>
        <CategorySidebar categories={categories} />
        <div className="col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3 ">
          {
            products.map(product => {
              return (
                <div className="space-y-6 col-span-1 border rounded-xl shadow-md p-4"
                  key={product._id}>
                  <h2 className='font-bold text-xl mb-4' >{product.title}</h2>
                  <div className='mb-4 pb-2'>
                    <span>تاریخ ساخت :</span>
                    <span className='font-bold'>
                      {toLocalDataStringShort(product.createdAt)}
                    </span>
                  </div>
                  <Link className='text-primary-900  '
                  href={`products/${product.slug}`}>مشاهده محصول</Link>
                  <AddToCart product={product}/>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Product

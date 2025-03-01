"use client"
import CheckBox from '@/ui/CheckBox';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react'

function ProductsFilter({categories}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // console.log(searchParams.get("category").split(","))
    const [selectedCategories, setSelectedCategories] = useState(searchParams.get("category")?.split(",") || []);

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    );

    const categoryHandler = (e) => {
        // console.log(e.target.value)
        const value = e.target.value;
        if (selectedCategories.includes(value)) {
            const categories = selectedCategories.filter((c) => c !== value)
            setSelectedCategories(categories)
            router.push(pathname + "?" + createQueryString("category", categories))
        } else {
            setSelectedCategories([...selectedCategories, value]);
            router.push(pathname + "?" + createQueryString("category", [...selectedCategories, value]))
        }
    }
    return (
        <div>
            <p className='font-bold mb-6'>دسته بندی ها</p>
            <ul className='space-y-4'>
                {categories.map(category => {
                    return (
                        <CheckBox
                            lable={category.title}
                            value={category.englishTitle}
                            id={category._id}
                            key={category._id}
                            name="product-type"
                            onChange={categoryHandler}
                            checked={selectedCategories.includes(category.englishTitle)}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductsFilter

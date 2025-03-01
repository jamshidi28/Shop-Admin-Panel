"use client";

import RadioInput from "@/ui/RadioInput"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const sortOption = [
    {
        id: 1,
        value: "latest",
        label: "جدید ترین"
    },
    {
        id: 2,
        value: "earlist",
        label: "قدیمی ترین"
    },
    {
        id: 3,
        value: "popular",
        label: "محبوب ترین"
    },
];



function ProductsSort() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [sort, setSort] = useState("");

    const createQueryString = useCallback(
            (name, value) => {
                const params = new URLSearchParams(searchParams)
                params.set(name, value)
                return params.toString()
            },
            [searchParams]
        );

    const sortHandler = (e) => {
        const value =e.target.value;
        setSort(value);
        router.push(pathname + "?" + createQueryString("sort",value))
    }

    useEffect(() => {
        setSort(searchParams.get("sort") || "");
      }, [searchParams]);

      
    return (
        <div>
            <p className='font-bold mb-6'>مرتب سازی</p>
            {
                sortOption.map((item) => {
                    return (
                        <RadioInput
                            id={item.id}
                            key={item.id}
                            name="product-sort"
                            label={item.label}
                            value={item.value}
                            onChange={sortHandler}
                            checked={sort === item.value}

                        />)
                })
            }
        </div>
    )
}

export default ProductsSort;

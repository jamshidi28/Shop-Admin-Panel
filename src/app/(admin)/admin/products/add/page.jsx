"use client";

import { useGetCategories } from "@/hooks/useCategories";
import { useAddProduct } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import { TagsInput } from "react-tag-input-component";

const productsFormData = [
    {
        id: 1,
        label: "عنوان",
        name: "title",
    },
    {
        id: 2,
        label: "توضیحات",
        name: "description",
    },
    {
        id: 3,
        label: "اسلاگ",
        name: "slug",
    },
    {
        id: 4,
        label: "برند",
        name: "brand",
    },
    {
        id: 5,
        label: "قیمت",
        name: "price",
    },
    {
        id: 6,
        label: "تخفیف",
        name: "discount",
    },
    {
        id: 7,
        label: "قیمت روی تخفیف",
        name: "offPrice",
    },
    {
        id: 8,
        label: "موجودی",
        name: "countInStock",
    },
    {
        id: 9,
        label: "لینک عکس محصول",
        name: "imageLink",
    },
];

function page() {
    const { isLoading, mutateAsync } = useAddProduct();
    const { data } = useGetCategories();
    const { categories } = data || {};
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        slug: "",
        brand: "",
        price: "",
        offPrice: "",
        discount: "",
        countInStock: "",
        imageLink: "",
    });
    const [tags, setTags] = useState([])
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState([])
    // console.log(selectedCategory)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { message } = await mutateAsync({
                ...formData,
                tags,
                category: selectedCategory._id,
            });
            router.push("/admin/products");
            toast.success(message);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
    return (
        <div className="w-fuu max-w-sm">
            <h1 className='mb-6 text-xl font-bold'>  اضافه کردن محصولات</h1>
            <form className="space-y-4 mb-10" onSubmit={handleSubmit}>

                {
                    productsFormData.map((item) => {
                        return <TextField
                            key={item.id}
                            name={item.name}
                            label={item.label}
                            value={formData[item.name]}
                            onChange={handleChange}
                        />
                    })}
                <div>
                    <label htmlFor="tags">تگ محصولات</label>
                    <TagsInput
                        id="tags"
                        name="tags"
                        value={tags}
                        onChange={setTags}

                    />
                </div>
                <div >
                    <label htmlFor="type" className="mb-2 block">
                        دسته بندی
                    </label>
                    <Select
                        instanceId="type"
                        options={categories}
                        onChange={setSelectedCategory}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option._id}
                    />
                </div>


                <div>
                    {
                        isLoading ? (<Loading />
                        ) : (
                            <button className="w-full btn btn--primary mt-4">اضافه کردن محصول</button>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default page

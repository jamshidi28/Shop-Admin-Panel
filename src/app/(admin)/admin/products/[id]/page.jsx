"use client"

import { useParams } from "next/navigation"

function page() {
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            page products id
            
        </div>
    )
}

export default page

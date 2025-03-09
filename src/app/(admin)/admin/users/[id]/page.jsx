"use client"

import { useParams } from "next/navigation"

function page() {
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            pageeeee
            
        </div>
    )
}

export default page

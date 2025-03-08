import { toStringCookies } from "./toStringCookies";

export default async function middlewareAuth(req) {
    
    // you can not use axios
    const {data} = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/profile`, 
        {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: toStringCookies(req.cookies),
        },

        // --------------other way
        //     {
        //         cookie: `${req.cookies.get("accessToken")?.name}=${
        //             req.cookies.get("accessToken")?.value
        //         }; ${req.cookies.get("refreshToken")?.name}=${
        //             req.cookies.get("refreshToken")?.value
        //         }`
        // }

        // --------------------
    }
  ).then((res) => res.json());
    const {user} = data || {};
    return user ;
}
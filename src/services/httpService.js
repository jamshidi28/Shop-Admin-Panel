const { default: axios } = require("axios");

const app =axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL,
    withCredentials:true,
});


app.interceptors.request.use(res => res , 
    err => Promise.reject(err))

app.interceptors.response.use(
    (res) => res ,
    async (err) =>{
    // console.log(err);
    const originConfig = err.config;
    
    if(err.response.status === 401 && !originConfig._retry){
        originConfig._retry = true;
        try {
        const {data}=  await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/refresh-token`,{
            withCredentials:true})
            if(data) return app(originConfig)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    return Promise.reject(err)
})



const http ={
    get:app.get,
    post : app.post,
    delete : app.delete,
    put : app.put,
    patch : app.patch,
};

export default http;
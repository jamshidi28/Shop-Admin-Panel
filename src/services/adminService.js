import http from "./httpService";

export function getAllUsers() {
    return http.get("/admin/user/list", ).then(({ data }) => data.data)}


export function addProdcut(data) {
    return http.post("/admin/product/add", data).then(({ data }) => data.data)}
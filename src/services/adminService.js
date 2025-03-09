import http from "./httpService";

export function getAllUsers() {
    return http.get("/admin/user/list", ).then(({ data }) => data.data)}
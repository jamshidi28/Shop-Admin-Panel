import http from "./httpService";

export function creatPayment() {
    return http.post("/payment/create", ).then(({ data }) => data.data)}
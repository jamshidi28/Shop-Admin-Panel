import http from "./httpService";

export function getProducts(qs , cookies) {
    return http.get(`/product/list?${qs}`,{
      headers :{
      Cookie : cookies,
      }
      }).then(({data}) => data.data)
  }
export function getProductBySlug(slug) {
    return http.get(`/product/slug/${slug}`).then(({data}) => data.data)
  }
export function likePrduct(id) {
    return http.post(`/product/like/${id}`).then(({data}) => data.data)
  }
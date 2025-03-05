export function toLocalDataString (date){
    const options ={
        year: "numeric",
        month: "long",
        day: "numeric",
    }
   return new Date(date).toLocaleDateString("fa-IR",options)
}

export function toLocalDataStringShort (date){
    
    return new Date(date).toLocaleDateString("fa-IR")
 }
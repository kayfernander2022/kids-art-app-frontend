import { url } from "./url";

export async function indexLoader(){
  const response = await fetch(url)
  const data = await response.json()

  console.log("index loader:" , data) //test
  
    return data
    
}


//show loader
//showLoader => get a single art for Show route
export const showLoader = async ({params}) => {
  const response = await fetch(url + params.id + "/")
  const data = await response.json()
  return data
}
import url from "./url"
import { redirect } from "react-router-dom"


//Create Action
export async function createAction ({request}){
    // get form data
    const formData = await request.formData()

    // construct new art
    const newKidsArt = {
        title: formData.get("title"),
        description: formData.get("description"),
        image_url: formData.get("image_url")
    }

    // send request to backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newKidsArt)
    })

    // redirect back to index page
    return redirect("/")
}



//Update Action
export async function updateAction ({request, params}){
    // get form data
    const formData = await request.formData()

    // construct art
    const updatedKidsArt = {
        title: formData.get("title"),
        description: formData.get("description"),
        image_url: formData.get("image_url")
    }

    // request to update route in backend
    await fetch(url + params.id + "/", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedKidsArt)
    })

    // redirect back to index
    return redirect("/")
}



//deleteAction => delete art from form submissions to `/delete/:id`
export async function deleteAction({params}){
    // get art id
    const id = params.id

    // send request to backend
    await fetch(url + id + "/", {
        method: "delete",
    })

    // redirect 
    return redirect("/")
}
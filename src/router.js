import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import { indexLoader, showLoader} from "./loaders" //{} because we did not export
import { createAction, updateAction, deleteAction } from "./actions"
import Update from "./Pages/Update"
import CreateArt from "./Pages/CreateArt"


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route 
            path="" 
            element={<Index/>}
            loader={indexLoader}
            />
            <Route 
            path="kidsart/:id"
            element={<Show/>}
            loader={showLoader}
            />
            <Route 
            path="create" 
            element={<CreateArt/>}
            action={createAction}
            />
            <Route 
            path="update/:id" 
            element={<Update/>}
            action={updateAction} 
            loader={showLoader}
            />
            <Route path="delete/:id"action={deleteAction}/>
        </Route>
    </>
))

export default router
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./CRUD/HomePage"
import CreateUsers from "./CRUD/CreateUsers"
import Users from "./CRUD/Users"
import EditUsers from "./CRUD/EditUsers"

const App =()=>{
    return(
        <div>
            <BrowserRouter>
                <HomePage></HomePage>
                <Routes>
                    <Route path="/" element={<CreateUsers></CreateUsers>}></Route>
                    <Route path="/users" element={<Users></Users>}></Route>
                    <Route path="/edit/:id" element={<EditUsers></EditUsers>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
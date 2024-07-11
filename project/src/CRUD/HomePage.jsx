import { Link } from "react-router-dom"

const HomePage = ()=>{
    return(
        <div>
            <Link to="/">CREATE-USERS</Link>
            <Link to="/users">USERS</Link>
        </div>
    )
}
export default HomePage
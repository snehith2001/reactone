import style from "./Home.module.css"
import {Link} from "react-router-dom"

const HomePage = ()=>{
    return(
        <div>   
            <nav className={style.nav}>
                <Link to="/">CREATE-USERS</Link>
                <Link to="/users">USERS</Link>
            </nav>
        </div>
    )
}
export default HomePage
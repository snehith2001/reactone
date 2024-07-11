import { useEffect, useState } from "react"
import style from   "./Home.module.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Users=()=>{

    let [content,setContent]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/employees")
        .then((response)=>{
            setContent(response.data)
        })
        .catch((reject)=>{
            console.log('error');
        })
    },[])

    let del = (x)=>{
        axios.delete(`http://localhost:3000/employees/${x}`)
        window.location.assign("/users")
    }
    return(
        <div className={style.camry}>
            {content.map((x)=>{
                return(
                    <div>
                        <table>
                            <tr>
                                <td>NAME</td>
                                <td>{x.empName}</td>
                            </tr>
                            <tr>
                                <td>COMPANY</td>
                                <td>{x.empCompany}</td>
                            </tr>
                            <tr>
                                <td>SALARY</td>
                                <td>{x.empSalary}</td>
                            </tr>
                            <tr>
                                <td><button><Link to={`/edit/${x.id}`}>EDIT</Link></button></td>
                                <td><button onClick={()=>{del(x.id)}}>DELETE</button></td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default Users
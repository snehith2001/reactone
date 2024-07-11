import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Users = ()=>{
    let [data,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/employees")
        .then((res)=>{
            setData(res.data)
        })
        .catch(()=>{
            console.log("error");
        })
    },[])

    let del = (x)=>{
        axios.delete(`http://localhost:3000/employees/${x}`)
        window.location.assign("/users")
    }
    return(
        <div>
            {data.map((x)=>{
                return(
                    <div>
                        <table>
                            <tr>
                                <td>name</td>
                                <td>{x.empName}</td>
                            </tr>
                            <tr>
                                <td>company</td>
                                <td>{x.empCompany}</td>
                            </tr>
                            <tr>
                                <td>salary</td>
                                <td>{x.empSalary}</td>
                            </tr>
                            <tr>
                                <td><button><Link to={`/edit/${x.id}`}>EDIT</Link></button></td>
                                <td><button onClick={()=>{del(x.id)}}>delete</button></td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default Users
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditUsers = ()=>{
    let [name,setName] = useState("")
    let [company,setCompany] = useState("")
    let [salary,setSalary] = useState("")
    let navigate = useNavigate()
    let payload = {empName:name,empCompany:company,empSalary:salary}
    let obj = useParams()

    console.log(obj);

    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${obj.id}`)
        .then((res)=>{
            setName(res.data.empName)
            setCompany(res.data.empCompany)
            setSalary(res.data.empSalary)
        })
    },[])

    let submit=(e)=>{
        e.preventDefault()

        axios.put(`http://localhost:3000/employees/${obj.id}`,payload)
        .then(()=>{
            navigate("/users")
        })
        .catch(()=>{
            console.log("error");
        })
    }

    return(

        <div>
                            <form action="">
                <label htmlFor="">
                    name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </label><br />
                <label htmlFor="">
                    company : <input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
                </label><br />
                <label htmlFor="">
                    salary : <input type="number" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/>
                </label><br />
                <button onClick={submit}>UPDATE</button>
            </form>

        </div>
    )
}
export default EditUsers
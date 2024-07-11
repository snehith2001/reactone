import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateUsers = ()=>{
    let [name,setName] = useState("")
    let [company,setCompany] = useState("")
    let [salary,setSalary] = useState("")
    let navigate = useNavigate()
    let payload = {empName:name,empCompany:company,empSalary:salary}

    let submit = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:3000/employees",payload)
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
                <button onClick={submit}>SUBMIT</button>
            </form>
        </div>
    )
}
export default CreateUsers
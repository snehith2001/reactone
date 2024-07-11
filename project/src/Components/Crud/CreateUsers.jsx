import { useState } from "react"
import style from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const CreateUsers=()=>{
    // let [state,setState] = useState();
    let [name,setName] = useState("")
    let [company,setCompany] = useState("")
    let [salary,setSalary] = useState("")

    let navigate = useNavigate()

    let getNameData=(e)=>{
        setName(e.target.value)
    }
    
    let getCompanyData=(f)=>{
        setCompany(f.target.value)
    }

    let getSalaryData=(g)=>{
        setSalary(g.target.value)
    }
    
    let formHandle=()=>{
        console.log(name,company,salary);

        let payload = {
            empName:name,
            empCompany:company,
            empSalary:salary
        }

        axios.post("http://localhost:3000/employees",payload)
        .then(()=>{console.log("data posted");})
        .catch(()=>{console.log("error");})

        navigate("/users")
    }

    return(
        <div>
            {/* <h1>charger</h1> */}
            
            <header className={style.head}>
            <label htmlFor="" className={style.a}>NAME:</label><input className={style.ai} value={name} onChange={getNameData}></input> <br />
            <label htmlFor="" className={style.b}>SALARY:</label><input className={style.bi} value={company} onChange={getCompanyData}></input> <br />
            <label htmlFor="" className={style.c}>COMPANY:</label><input className={style.ci}  value={salary} onChange={getSalaryData}></input> <br />
            <button className="{style.btn}" onClick={formHandle} >SUBMIT</button>
            </header>
            
        </div>
    )
}
export default CreateUsers

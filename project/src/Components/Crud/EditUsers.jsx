import { useEffect } from "react"
import style from "./Home.module.css"
import axios from "axios"
import { useState } from "react"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditUsers=()=>{
    let [name,setName] = useState("")
    let [company,setCompany] = useState("")
    let [salary,setSalary] = useState("")
    let navigate = useNavigate()
    let obj = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${obj.id}`)
        .then((response)=>{
            setName(response.data.empName);
            setCompany(response.data.empCompany);
            setSalary(response.data.empSalary)
        })
        .catch(()=>{
            console.log("error man");
        })
    },[])

    let formHandle = ()=>{
            let payload = {
                empName:name,
                empCompany:company,
                empSalary:salary
            }
    
            axios.put(`http://localhost:3000/employees/${obj.id}`,payload)
            .then(()=>{console.log("data posted");})
            .catch(()=>{console.log("error");})
    
            navigate("/users")
    }
    return(
        <div>
            <header className={style.head}>
            <label htmlFor="" className={style.a}>NAME:</label><input className={style.ai} value={name} onChange={(e)=>{setName(e.target.value)}}></input> <br />
            <label htmlFor="" className={style.b}>SALARY:</label><input className={style.bi} value={salary} onChange={(e)=>{setName(e.target.value)}}></input> <br />
            <label htmlFor="" className={style.c}>COMPANY:</label><input className={style.ci} value={company} onChange={(e)=>{setName(e.target.value)}}></input> <br />
            <button className="{style.btn}" onClick={formHandle}>UPDATE</button>
            </header>
        </div>
    )
}
export default EditUsers
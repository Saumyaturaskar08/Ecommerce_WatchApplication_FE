import axios from 'axios'
import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom'


const Register = () => {
  let [data,setData]=useState({"_id":"","name":"","pwd":"","phno":""})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()
  let fun=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
      if(data._id!=""&&data.name!=""&&data.pwd!=""&&data.phno!="")
      {
axios.post("http://localhost:5001/register",data).then((res)=>{
  setMsg(res.data.msg)
 if(res.data.msg=="acc created")
 {
  navigate("/login")
 }
})
      }
      else{
          setMsg("fill all fields")
      }
  }
return (
  <div className='con'>
      <div className='form'>
          <div className='msg'>{msg}</div>
          <input type='text' placeholder='enter email' name="_id" onChange={fun} value={data._id}/>
          <input type='text' placeholder='enter name' name="name" onChange={fun} value={data.name}/>
          <input type='text' placeholder='enter phno' name="phno" onChange={fun} value={data.phno}/>
          <input type='password' placeholder='enter password' name="pwd" onChange={fun} value={data.pwd}/>
          <button onClick={add}>Register</button>


      </div>
  </div>
)
}

export default Register

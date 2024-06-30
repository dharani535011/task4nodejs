import axios from 'axios'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Registeration = () => {
  const navidate=useNavigate()
  const [values,setvalues]=useState({
    name:"",
    email:"",
    password:""
  })
  const handlechange=(e)=>{
   
      const {value,name}=e.target 
      setvalues((pre)=>({
        ...pre,[name]:value
      }))
   
 }
  const handlelogin=async(e)=>{
    e.preventDefault()
    await axios.post("https://nodesjstask4.onrender.com/user/create",{
    name:values.name,
    email:values.email,
    password:values.password
   }, {
    withCredentials: true  
  })
     setvalues({
      name:"",
      email:"",
      password:""
    })
    navidate("/")
  }
  return (
    <div className='w-100 d-flex justify-content-center align-items-center' id='login'>
    <form>
    <div class="mb-3">
  <label for="name" class="form-label">User Name</label>
  <input type="name" class="form-control" id="name" name='name' value={values.name} onChange={(e)=>handlechange(e)}/>
</div>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name='email' value={values.email} onChange={(e)=>handlechange(e)}/>
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1"  name='password' value={values.password} onChange={(e)=>handlechange(e)}/>
</div>
<button type="submit" class="btn btn-primary" onClick={handlelogin}>Submit</button>
</form>

  </div>
  )
}

export default Registeration
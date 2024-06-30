import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {
  const [mail,setmail]=useState("")
  const [popup,setpopup]=useState(true)
  const [values,setvalues]=useState({
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
    const rees=await axios.post("http://localhost:3500/user/login",{
    email:values.email,
    password:values.password
   } ,{
    withCredentials: true  
  })
     setvalues({
      email:"",
      password:""
    })
  }
  const handlepopup=()=>{
    setpopup(false)
  }
  const handleforget=async()=>{
    const rees=await axios.post("http://localhost:3500/user/forgetpassword",{
      email:mail
     } ,{
      withCredentials: true  
    })
    if(mail){
      alert("OTP send to your mail")
      setpopup(true)
    setmail("")
    }else{
      alert("Enter your mail")
    }
    
  }
  return (
    <>{
      popup?( <div className='w-100 d-flex justify-content-center align-items-center' id='login'>
        <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={values.email} onChange={(e)=>handlechange(e)} />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={values.password} onChange={(e)=>handlechange(e)}/>
    </div>
    <button type="submit" class="btn btn-primary"  onClick={handlelogin}>Submit</button>
    <h6 id='forget'><Link  class="text-decoration-none" onClick={handlepopup}>forget password</Link></h6>
  </form>
  
      </div>):(<div className='w-100 d-flex justify-content-center align-items-center' id='login'>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='mail' value={mail} onChange={(e)=>setmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">share your email to get otp to reset your password</div>
    <button type="submit" class="btn btn-primary mt-3"  onClick={handleforget}>Submit</button>
  </div>
    </div>)
    }
   
    
    </>
  )
}

export default Login
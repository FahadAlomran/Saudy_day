import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
function SignUp() {
    const [firestName , setFirestName]= React.useState("")
    const [email , setEmail]= React.useState<any>()

    const [ pass , setPass ] = React.useState<any>()
const navigate = useNavigate()

    const goto = ()=>{
if(firestName.length >=3 && pass.length >=3 &&email.includes('@')&&email.length>=4){
localStorage.setItem("firestName" ,firestName)
navigate("/saudiday")
}else{
    alert("Please enter correct information")
}
    }
  return (
    <>
    <Nav/>
    <div className='logIn-form'>
   <fieldset className='logIn-fieldset'>  
       تسجيل جديد  
<input placeholder='First Name' onChange={e =>{setFirestName(e.target.value)}} ></input>
<input placeholder='Email' onChange={e =>{setEmail(e.target.value)}} ></input>

<input placeholder='Password' type='password' onChange={e =>{setPass(e.target.value)}}></input>
<button type='submit' onClick={goto}>تسجيل</button>

</fieldset> 

    </div>
    </>
  )
}

export default SignUp
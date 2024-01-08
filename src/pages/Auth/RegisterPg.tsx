import { useState } from "react"
import {FaArrowLeftLong} from "react-icons/fa6"
import { Link } from "react-router-dom"

const RegisterPg = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullName] = useState('')
  const [number, setNumber] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [visible, setVisble] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [checked, setChecked] = useState(false)
  const [isRecapVerify, setIsRecapVerify] = useState(false)
  
  return (
     <div className="min-h-screen grid grid-cols-2 justify-between align-middle items-center">
            <div className="bg-abtimg w-full h-full bg-cover bg-center">
                <Link to="/">
                 <div className="py-2 px-4 shadow-lg flex flex-row justify-between rounded-lg w-28 mt-12 ml-6 align-middle bg-white cursor-pointer">
                    <FaArrowLeftLong size={24} />
                    <p className="text-bold">Home</p>
                </div>   
                </Link>
                
            </div> 
            <div>
                <h1 className="text-center text-3xl py-4">Register Page</h1>
              <div className="px-10 ">
                <form action="" className="w-full px-8 shadow-2xl rounded-2xl py-8">
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="">Full Name</label>
                        <input type="email" className="p-1 w-full rounded-lg border border-primary" />
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="">Email Address</label>
                        <input type="email" className="p-1 w-full rounded-lg border border-primary" />
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" className="p-1 w-full rounded-lg border border-primary" />
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="">Password</label>
                        <input type="password" className="p-1 w-full rounded-lg border border-primary" />
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" className="p-1 w-full rounded-lg border border-primary" />
                    </div>
                    <div className="flex flex-row justify-between align-middle items-center py-2">
                      <button className="bg-primary rounded-xl py-2 px-4 text-lg">Register</button>  
                      <p>
                        Already have an Account? 
                       <Link to="/login" className="text-primary">
                    Login
                    </Link> 
                    </p>
                    </div>
                    
                    
                </form>
            </div>  
            </div>
            
        </div>
  )
}

export default RegisterPg
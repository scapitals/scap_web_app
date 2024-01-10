import {FaArrowLeftLong} from "react-icons/fa6"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from 'react-toastify'
import Cookies from "js-cookie"
import axios from "axios"
import { useContext } from "react";

const LoginPg = () => {

    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isRecapVerify, setIsRecapVerify] = useState(false)
  const navigate = useNavigate()
  // const handleRecapChange = (value) => {
  //   setIsRecapVerify(true)
  // }

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    
    if(!email || !password) return;
    // if(!isRecapVerify){
    //     toast.error('Verify that you are not a bot', {
    //       position: "bottom-left"
    //     })
    //     return;
    // }
      setLoading(true)

      const formData = {email, password}

      await axios
        .post("https://specserver.vercel.app/api/user/login", formData)
        .then((res) => {
          Cookies.set("token", res.data.token, { expires: 7 });
          navigate("/user/home");
          window.location.reload()
          toast.success("Login Successfully", {position: "bottom-left"})
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message, {position: "bottom-left"})
          setLoading(false);
        }).finally(() => setLoading(false));
      
    }

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
                <h1 className="text-center text-3xl py-8">Login Page</h1>
              <div className="px-10 ">
                <form action="" className="w-full px-10 shadow-2xl rounded-2xl p-24" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="">Email Address</label>
                        <input type="email" className="p-2 w-full rounded-lg border border-primary" onChange={(e: any) => setEmail(e.target.value)}/>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="">Password</label>
                        <input type="password" className="p-2 w-full rounded-lg border border-primary" value={password} onChange={(e: any) => setPassword(e.target.value)}/>
                    </div>
                    <div>

                    </div>
                    <button className="bg-primary rounded-xl py-2 px-4 text-lg">Login</button>
                    <p>
                        Don't have an Account? 
                       <Link to="/register">
                    Register
                    </Link> 
                        
                    </p>
                    
                </form>
            </div>  
            </div>
            
        </div>
  )
}

export default LoginPg
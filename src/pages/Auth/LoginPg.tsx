import {FaArrowLeftLong} from "react-icons/fa6"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from 'react-toastify'
import Cookies from "js-cookie"
import axios from "axios"
import Asimg from "../../assets/undraw_login.svg";
// import {ThreeDots} from "react-loader-spinner"

const LoginPg = () => {

    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [isRecapVerify, setIsRecapVerify] = useState(false)
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
            <div className=" w-full h-full">
                <Link to="/">
                 <div className="py-2 px-4 shadow-lg flex flex-row justify-between rounded-lg w-28 mt-12 ml-6 align-middle bg-[#f1f1f1] dark:bg-[#1f2937] cursor-pointer">
                    <FaArrowLeftLong size={24} className="dark:fill-[#f1f1f1] fill-[#1f2937]" />
                    <p className="">Home</p>
                </div>   
                </Link>
             <img src={Asimg} alt="" className="w-full"/>   
            </div> 
            <div>
                <h1 className="text-center text-3xl py-8">Login Page</h1>
              <div className="px-10 ">
                <form action="" className="w-full px-10 shadow-2xl rounded-2xl p-24" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="">Email Address</label>
                        <input type="email" className="p-2 w-full rounded-lg border border-primary" onChange={(e: any) => setEmail(e.target.value)}/>
                    </div>
                    <div className="flex flex-col py-4 relative">
                        <label htmlFor="">Password</label>
                        <input type={visible ? "text" : "password"} className="p-2 w-full rounded-lg border border-primary" value={password} onChange={(e: any) => setPassword(e.target.value)}/>
                        <div className="absolute top-12 right-5 cursor-pointer">
                          {visible ? <AiOutlineEye size={25} color="green" onClick={() => setVisible(false)} /> : <AiOutlineEyeInvisible  color="green" size={25} onClick={() => setVisible(true)}/>}
                        </div>
                    </div>
                    <div>

                    </div>
                    <button className="bg-primary rounded-xl py-2 px-4 text-lg" disabled={loading ? true : false}>{loading ? "Logging..." : "Login"}</button>
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
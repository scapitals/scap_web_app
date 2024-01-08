import {FaArrowLeftLong} from "react-icons/fa6"
import { Link } from "react-router-dom"

const LoginPg = () => {

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
                <form action="" className="w-full px-10 shadow-2xl rounded-2xl p-24">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="">Email Address</label>
                        <input type="email" className="p-2 w-full rounded-lg border border-primary" />
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="">Password</label>
                        <input type="email" className="p-2 w-full rounded-lg border border-primary" />
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
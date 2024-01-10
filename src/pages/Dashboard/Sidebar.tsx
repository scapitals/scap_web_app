import {useState, useEffect} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
    FaTh,
    FaUserAlt,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import Cookies from 'js-cookie';
import { IoLogOutSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Sidebar = ({children}: any) => {
    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);

    const [logoutModal, setLogoutModal] = useState(false);

    const navigate = useNavigate()

    const logOutFunc = () => {
    try{  
      Cookies.remove("token");
      setLogoutModal(false);
      navigate("/");
      toast.info("Log Out Successfully", {position: "bottom-left"})
    }catch(err: any){
      toast.error(err.code, { position: "bottom-left" });
    }
  }

  useEffect(() => {
    let cookietoken = Cookies.get("token");

    if(!cookietoken){
      navigate("/login")
    }

  }, [])

    const menuItem=[
        {
            path:"/user/home",
            name:"Overview",
            icon:<FaTh/>
        },
        {
            path:"/user/wallet",
            name:"Wallet",
            icon:<FaUserAlt/>
        },
        // {
        //     path:"/user/refferals",
        //     name:"Refferals",
        //     icon:<FaRegChartBar/>
        // },
        
        {
            path:"/user/kyc",
            name:"KYC Verification",
            icon:<FaShoppingBag/>
        },
        {
            path:"/user/support",
            name:"Support",
            icon:<FaThList/>
        },
        {
            path:"/user/settings",
            name:"Settings",
            icon:<FaCommentAlt/>
        }
    ]
    return (
        <>
        <div className='flex flex-row'>
           <div className="sidebar bg-black h-screen w-56 py-4 text-white fixed">
               <div className="flex flex-row p-6">
                <Link to="/">
                    <h1 className="logo">Logo</h1>
                    </Link>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="flex flex-row gap-5 px-6 py-2 justify-start items-center">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <div className='flex gap-4 ps-5 cursor-pointer' onClick={() => setLogoutModal(true)}>   
                <IoLogOutSharp size={32} />
                <p>Logout</p>
               </div>
           </div>
           <main className='pl-56 w-full'>{children}</main>
        </div>
        {logoutModal && (<div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-80 rounded-xl h-40 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-8'>
                <p>Are you sure you want to Log Out?</p>
                <div className='flex justify-between items-center px-8 gap-4'>
                    <button className='bg-primary px-4 py-2 rounded-xl' onClick={logOutFunc}>Yes</button>
                    <button className='bg-red-500 px-4 py-2 rounded-xl' onClick={() => setLogoutModal(false)}>No</button>
                </div>
            </div>
        </div>)}
        </>
        
    );
};
export default Sidebar;
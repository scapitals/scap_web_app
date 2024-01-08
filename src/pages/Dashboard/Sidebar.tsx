import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";

const Sidebar = ({children}: any) => {
    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);
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
        {
            path:"/user/refferals",
            name:"Refferals",
            icon:<FaRegChartBar/>
        },
        {
            path:"/user/settings",
            name:"Settings",
            icon:<FaCommentAlt/>
        },
        {
            path:"/user/kyc",
            name:"KYC Verification",
            icon:<FaShoppingBag/>
        },
        {
            path:"/user/support",
            name:"Support",
            icon:<FaThList/>
        }
    ]
    return (
        <div className='flex flex-row'>
           <div className="sidebar bg-black h-screen w-56 py-4 text-white fixed">
               <div className="flex flex-row p-6">
                <Link to="/">
                    <h1 className="logo">Logo</h1>
                    </Link>
                   
                   {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/> */}
                   {/* </div> */}
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="flex flex-row gap-5 px-6 py-2 justify-start items-center" activeclassName="bg-primary text-black">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='pl-56 w-full'>{children}</main>
        </div>
    );
};
export default Sidebar
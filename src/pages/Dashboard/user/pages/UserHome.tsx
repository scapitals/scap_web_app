import { AreaChart, Card, Title } from "@tremor/react"
import { FaUserAlt } from "react-icons/fa"
import { FaUserXmark } from "react-icons/fa6"
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import { GiProfit } from "react-icons/gi";
import { AiOutlineGift } from "react-icons/ai";
import { BsPersonAdd } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import {IoMdCheckmarkCircleOutline} from "react-icons/io"

const UserHome = () => {
  const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const {data} = useContext(AuthContext);

let dataverify = data?.verified
  const verifiedeta = () => {
    if(dataverify === true){
    return (
      <div className="d-flex gap-2">
        <p>Verified</p>
        <IoMdCheckmarkCircleOutline size={25} color="yellow"/>
        </div>
    )
  }else{
    return (
      <div className="d-flex gap-2">
        <p>Unverified</p>
        <FaUserXmark size={25} color="red" />
      </div>
    );
  }
  }

const valueFormatter = function(number: any) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};
  return (
    <div className='container py-6'>
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 w-full justify-between align-middle">
        <div>
         <p className="text-start text-2xl">Welcome, {data?.fullname}</p>
      <div className="flex gap-3 justify-start items-center">
          
          {data?.profilePics === "" ? (
          <div className="mb-3 bg-white p-3" style={{borderRadius: "50%"}}>
           <FaUserAlt size={40} color="black"/> 
          </div>
          ): ( 
          <div className="mb-3 bg-white p-2" style={{borderRadius: "50%"}}>
           <img src={data?.profilePics} alt="image" style={{width: "60px", height: "60px", borderRadius: "50%"}}/>
          </div>
          )}
          <div>
            <p>Account Plan: {data?.accountype}</p>
            {verifiedeta()}
          </div>
        </div> 
        <div className="flex gap-2 justify-between items-center px-3">
            <div className="flex flex-col justify-center items-center">
              <RiRefund2Fill size={30} />
              <p>Fund Wallet</p>
              <Link to="/user/deposit">
                <button className="bg-primary px-4 py-2 rounded-xl">Proceed</button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BiMoneyWithdraw size={30} />
              <p>Withdraw</p>
              <Link to="/user/withdraw">
                <button className="bg-primary px-4 py-2 rounded-xl">Proceed</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-3 mx-auto mt-5">
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>Account Balance</h5> <FaWallet size={40} />
          </div>
          <h2>${data?.tAmount}.00</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="flex justify-between items-center">
            <h5>Total Profit</h5> <GiProfit size={40} />
          </div>
          <h2>${data?.tProfit}.00</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="flex justify-between items-center">
            <h5>Total Bonus</h5> <AiOutlineGift size={40} />
          </div>
          <h2>${data?.tBonus}.00</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937]"
        >
          <div className="flex justify-between items-center">
            <h5>TOTAL WITHDRAWAL</h5> <BiMoneyWithdraw size={40} />
          </div>
          <h2>${data?.twithd}.00</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="flex justify-between items-center">
            <h5>REFERRALS</h5> <BsPersonAdd size={40} />
          </div>
          <h2 className="text-center">{data?.tRefer}</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="flex justify-between items-center ">
            <h5>TOTAL DEPOSIT</h5> <RiRefund2Fill size={40} />
          </div>
          <h2>${data?.tDeposit}.00</h2>
        </div>
      </div>
        </div>
      </div>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 w-full justify-between align-middle">
        <div className="rounded-lg shadow p-4 flex flex-col">
          <h2>Account Balance</h2>
          <h2>${data?.tAmount}.00</h2>
          <div className="flex flex-row gap-4">
            <Link to="/user/deposit">
            <button className="bg-primary p-2 rounded text-white">Deposit</button>
            </Link>
            <button className="border border-primary p-2 rounded">Withdraw</button>
          </div>
        </div>
        <div className="rounded-lg shadow">
          <h2>Invite a Friend and get bonus</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
        <div className="rounded-lg shadow p-4 flex flex-col">
          <h2>Account Balance</h2>
          <p>$20.00</p>
          <div className="flex flex-row gap-4">
            <button className="bg-primary p-2 rounded text-white">Deposit</button>
            <button className="border border-primary p-2 rounded">Withdraw</button>
          </div>
        </div>
        <div className="rounded-lg shadow p-4 flex flex-col">
          <h2>Account Balance</h2>
          <p>$20.00</p>
          <div className="flex flex-row gap-4">
            <button className="bg-primary p-2 rounded text-white">Deposit</button>
            <button className="border border-primary p-2 rounded">Withdraw</button>
          </div>
        </div>
        <div className="rounded-lg shadow p-4 flex flex-col">
          <h2>Account Balance</h2>
          <p>$20.00</p>
          <div className="flex flex-row gap-4">
            <button className="bg-primary p-2 rounded text-white">Deposit</button>
            <button className="border border-primary p-2 rounded">Withdraw</button>
          </div>
        </div>
      </div>
      <div className="w-full py-8">
        <Card>
    <Title>Newsletter revenue over time (USD)</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      colors={["indigo", "cyan"]}
      valueFormatter={valueFormatter}
    />
  </Card>
      </div>
    </div>
  )
}

export default UserHome
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { GiProfit } from "react-icons/gi";
import { AiOutlineGift } from "react-icons/ai";
import { BsPersonAdd } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";

const UserWallet = () => {
  const {data} = useContext(AuthContext)

  return (
    <>
    <div className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 w-full justify-between align-middle">
        <div>
        <div className="">
          <div className="flex justify-between items-center p-2">
            <div>
              <h4>Account Balance</h4>
              <h2>${data?.tAmount}.00</h2>
            </div>
            <div>
              <h4>Total Profit</h4>
              <h2>${data?.tBalance}.00</h2>
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
        </div>
        <div className="flex flex-wrap gap-3 mx-auto mt-5">
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937]"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>Account Balance</h5> <FaWallet size={40} />
          </div>
          <h2>${data?.tAmount}.00</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937]"
        >
          <div className="flex justify-between items-center">
            <h5>Total Profit</h5> <GiProfit size={40} />
          </div>
          <h2>${data?.tProfit}.00</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937]"
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
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937]"
        >
          <div className="flex justify-between items-center">
            <h5>REFERRALS</h5> <BsPersonAdd size={40} />
          </div>
          <h2 className="text-center">{data?.tRefer}</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937]"
        >
          <div className="flex justify-between items-center ">
            <h5>TOTAL DEPOSIT</h5> <RiRefund2Fill size={40} />
          </div>
          <h2>${data?.tDeposit}.00</h2>
        </div>
      </div>
      </div>
      
    </div>
    <div>
        <h1 className="text-3xl">Personal Trading Chart</h1>
        <div className="w-full my-5 bg-[#f1f1f1] dark:bg-[#1f2937]" style={{ height: "500px" }}>
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_cd3c4&symbol=BINANCE%3ABTCUSD&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&studies=%5B%5D&theme=dark&style=9&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.account.deepmargins.com&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABTCUSD#%7B%22page-uri%22%3A%22www.account.deepmargins.com%2Foverview%22%7D"
            // frameborder="0"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
    
  )
}

export default UserWallet;
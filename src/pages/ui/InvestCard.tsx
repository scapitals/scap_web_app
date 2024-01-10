import {IoCheckmarkCircle} from "react-icons/io5";
import { Button } from ".";
import { Link } from "react-router-dom";

const InvestCard = () => {
  return (
    <div className="py-16 px-8 rounded-xl border border-primary bg-[#f1f1f1] dark:bg-[#1f2937]">
        <h2 className="text-3xl text-center">BRONZE PLAN</h2>
        <div className='flex flex-row gap-3'>
        <h1>$500 </h1>
        <p>minimum</p>
        </div>
        <p>/7days</p>

        <div className="flex flex-col justify-center align-middle">
            <div className="flex justify-between align-baseline">
                <p>Min Deposit</p>
                <p>$500</p>
            </div>
            <div className="flex justify-between align-baseline">
                <p>Max Deposit</p>
                <p>$3000</p>
            </div>
            <div className="flex justify-between align-baseline">
                <p>Return of Interest</p>
                <p>40%</p>
            </div>
            <div className="flex justify-between align-baseline">
                <p>Base Currency</p>
                <p>USD</p>
            </div>
            <div className="flex justify-between align-baseline">
                <p>Full IT Support</p>
                <IoCheckmarkCircle />
            </div>
            <div className="flex justify-between align-baseline">
                <p>Refferal Bonus</p>
                <IoCheckmarkCircle />
            </div>
            <div className="flex justify-between align-baseline">
                <p>Hedging Allowed</p>
                <IoCheckmarkCircle />
            </div>
        </div>
        <div className="mx-auto">
            <Link to="/login">
               <Button btntext="Get Started"/>  
            </Link>
        </div>
        
    </div>
  )
}

export default InvestCard
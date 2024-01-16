import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SpinnerLoad from '../../../components/SpinnerLoad'

const UserWithdraw = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Withdraw"
  }, [])
  return (
    <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
    <div className='container py-20'>
        <h2 className='text-center'>Withdraw from your account</h2>
        <p className='text-center'>Place a withdrawal request using any of the payment method below</p>
        <div className='flex justify-center items-center flex-col '>
            <div className='border border-primary rounded-2xl p-6 max-w-80 bg-[#f1f1f1] dark:bg-[#1f2937]'>
                <p className='text-center font-extrabold'>USDT</p>
                <h4>$1,000,000<span>Max</span></h4>
                <div>
                    <p>Minimum amount: $10,000</p>
                    <p>Charge Type: percentage</p>
                    <p>Charges Amount: 3%</p>
                    <p>Duration: Instantly</p>
                </div>
                <Link to='/user/withdraw-funds'>
                <button className='bg-primary px-4 py-2 rounded-xl'>Select this method</button>
                </Link>
            </div>
        </div>
    </div>
    )}
    </>
  )
}

export default UserWithdraw
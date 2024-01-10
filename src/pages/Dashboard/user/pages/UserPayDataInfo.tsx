// import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addressData } from "../../../../utils/data"
// import {CopyToClipboard} from "react-copy-to-clipboard"
// import { FaRegClipboard } from "react-icons/fa"

const UserPayDataInfo = () => {
    const navigate = useNavigate()
  const {wallet} = useParams()
  const {amount} = useParams()

  // const [copied, setCopied] = useState(false)

  const selectedAddress = addressData.find((item : any) => item.name === wallet)
  return (
    <div className="container">
        <div className="flex justify-center align-middle items-center">
            <div className="border border-primary rounded-xl">
                <div className=" ">
      <h3 className="text-center text-success">Make Payment</h3>
      <div className="flex justify-between items-center p-3">
        <div>
          <h4>
            {selectedAddress?.name}
          </h4>
        </div>
        <h2>${amount}</h2>
      </div>
      <div className="rounded shadow bg-dark d-flex flex-column align-items-center justify-content-center user-pay-form border border-success rounded p-3 mx-auto">
        <div
          style={{ height: "200px", width: "200px"}}
          className="rounded"
        >
          <img src={selectedAddress?.image} className="w-100" alt="" />
        </div>
        <p>Send ${amount} to the address below</p>
        <div className="d-flex w-75">
          <input type="text" name="" value={selectedAddress?.address} id="" className="w-100 rounded"/>
          {/* <CopyToClipboard text={selectedAddress?.address} onCopy={() => setCopied(true)}>
            <FaRegClipboard size={30} cursor="pointer" />
          </CopyToClipboard> */}
          {/* {copied ? (<span style={{color: 'green'}}>Copied</span>): null } */}
        </div>
        <p>Network Type: {selectedAddress?.unit}</p>
        {/* <Link to='proof'> */}
          <button className="btn btn-success" onClick={() => navigate('/user/payment/proof')}>
            Mark as Completed
          </button>
        {/* </Link> */}
        
      </div>
      
    </div>
            </div>
        </div>
    </div>
  )
}

export default UserPayDataInfo
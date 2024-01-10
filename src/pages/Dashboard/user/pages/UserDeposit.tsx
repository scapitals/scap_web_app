import { useState } from "react";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { addressData } from "../../../../utils/data";

const UserDeposit = () => {
    const navigate = useNavigate();

  const [amount, setAmount] = useState(0);
  const [select, setSelect] = useState("");
  // const [display, setDisplay] = useState(false);

  const SelectChange = (e : any) => {
    setSelect(e.target.value);
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    if (amount < 500) {
      toast.error("Amount is too low", {
        position: "bottom-left",
      });
      // alert('Amount is too low')
      return;
    } else if (select === "Select Payment Option") {
      toast.error("Please ", {
        position: "bottom-left",
      });
    }
    try {
      // alert(select)
      if (select === "Ethereum") {
        navigate(`/user/payment/Ethereum/${amount}`);
        // alert("eth");
      } else if (select === "Bitcoin") {
        navigate(`/user/payment/Bitcoin/${amount}`);
        // alert("Btc");
      } else if (select === "Litecoin") {
        navigate(`/user/payment/Litecoin/${amount}`);
        // alert("ltc");
      } else if (select === "USDT") {
        navigate(`/user/payment/USDT/${amount}`);
        // alert("usdt");
      } else {
        toast.error("Kindly Select a Payment Options", {
          position: "bottom-left",
        });
      }
    } catch (err : any) {
      toast.error(err.code, {position: "bottom-left"})
    }
  };
  return (
    <div className="container">
        <div>
            <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 border border-primary rounded"
        >
          <div>
            <label>Enter Amount</label> <br />
            <input
              type="number"
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
              name="amount"
              className="w-100 p-2 rounded"
            />
          </div>
          <select
            value={select}
            id="select"
            onChange={SelectChange}
            className="w-100 p-2 rounded"
          >
            {addressData.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <button className="btn btn-success" type="submit">
            Proceed to Payment
          </button>
        </form>
        </div>
    </div>
  )
}

export default UserDeposit
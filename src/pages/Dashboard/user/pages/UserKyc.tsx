import { Link } from "react-router-dom";
import KycAsset from "../../../../assets/kyc.jpg";

const UserKyc = () => {
  return (
    <div className="container py-8">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-1/2 gap-4 text-center bg-[#f1f1f1] dark:bg-[#1f2937] p-6 rounded-3xl">
          <img src={KycAsset} alt="" className="w-1/2 rounded-xl shadow" />
          <p>
            With tier verification you stand a chance to increase your daily
            withdrawal limit.
          </p>
          <p>
            We encourage you to upload a clear and standard version of your
            preferred document
          </p>
          <Link to="/user/kyc-data">
            <button className="p-2 rounded bg-primary">
              Click here for Verification
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserKyc;

import {useContext } from "react";
import { Link } from "react-router-dom";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
// import { Button, form, Modal } from "react-bootstrap";
import { useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
// import { BsCloudUpload } from "react-icons/bs";

const UserSettings = () => {
    const {data} = useContext(AuthContext);
  const [fullname, setFullname] = useState(data?.fullname);
  const [number, setNumber] = useState(data?.number);
  const [email, setEmail] = useState(data?.email);
  const [dob, setDob] = useState(data?.dob);
  const [profilePics] = useState(data?.profilePics);
  const [country, setCountry] = useState(data?.country);
  const [city, setCity] = useState(data?.city);
  const [postcode, setPostcode] = useState(data?.postcode);
  const [state, setState] = useState(data?.state);
  
  const [loading, setLoading] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);

  // const [newPassword, setNewPassword] = useState("");
  // const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // const [file, setFile] = useState("");
  // const [percent, setPercent] = useState(0);

  // const inputRef = useRef(null);

  // const uploadRef = () => {
  //   inputRef.current.click();
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // if (profilePics === "") {
    //   toast.info("Please Upload a profile Picture", {
    //     position: "bottom-left",
    //   });
    //   return;
    // }
    try {
      setLoading(true)
    const updatedata = {fullname, dob, number, country, city, postcode, state}
    const result = await axios.patch(`https://specserver.vercel.app/api/user/update/${data?._id}`, updatedata);
      console.log(result.data)
       toast.success("Updated Successfully", {position: "bottom-left"}) 
    } catch (err : any) {
      toast.error(err.code, {position: "bottom-left"})
      // console.log(err);
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
      {/* Upload Profile Picture */}
      {/* <Modal show={isUpload} onHide={() => setIsUpload(false)}>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <div className="verify-box" onClick={uploadRef}>
                <input
                  type="file"
                  name=""
                  style={{ display: "none" }}
                  accept="/image/*"
                  id=""
                  onChange={(e) => setFile(e.target.files[0])}
                  ref={inputRef}
                />
                <p>{percent} % done</p>
                <BsCloudUpload size={100} color="black" />
                <p className="text-center text-black">
                  Upload Your Document here
                </p>
              </div>
              <button style={{margin: "0px auto"}} className="btn btn-success" >Upload</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="dark" onClick={uploadFile}>
            Upload
          </button>
        </Modal.Footer>
      </Modal>
      Update Password
      <Modal show={isUpdatePassword} onHide={() => setIsUpdatePassword(false)}>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label>New Password</label>
              <form.Control
                type="password"
                placeholder="New Password"
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label>Re-Enter New Password</label>
              <form.Control
                type="email"
                placeholder="Re-Enter New Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                autoFocus
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="success" onClick={handleChangePassword}>
            Yes
          </button>
          <button variant="primary" onClick={() => setIsUpdatePassword(false)}>
            No
          </button>
        </Modal.Footer>
      </Modal> */}

      <div className="h-fit w-[75%] mx-auto p-3 rounded-2xl my-3 bg-primary mt-8">
        <div className="flex justify-between items-center py-2 flex-wrap">
          <div className="flex">
            <div>
              {data?.profilePics === "" ? (
                <BiUserCircle size={40} />
              ) : (
                <div>
                  <img
                    src={profilePics}
                    alt="image"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{fullname}</span>
              <span>{email}</span>
            </div>
            <div>
              <button
                className="bg-black py-2 px-4 rounded-xl text-white"
                onClick={() => setIsUpload(!isUpload)}
              >
                Upload Photo
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="bg-black py-2 px-4 rounded-xl text-white"
              onClick={() => setIsUpdatePassword(!isUpdatePassword)}
            >
              Update Password
            </button>
            <Link to="/user/kyc-verify">
              <button className="bg-black py-2 px-4 rounded-xl text-white">Verify Account</button>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded p-4 w-full">
          <div className="flex flex-row justify-between items-center px-3">
            <div className="flex flex-col">
              <label className="text-black">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={fullname}
                required
                onChange={(e : any) => setFullname(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                required
                value={email}
                onChange={(e : any) => setEmail(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-3">
            <div className="flex flex-col">
              <label className="text-black">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                name="number"
                required
                value={number}
                onChange={(e : any) => setNumber(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black">Date Of Birth</label>
              <input
                type="text"
                placeholder="Date of Birth"
                name="email"
                required
                value={dob}
                onChange={(e: any) => setDob(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
          </div>
          <h4 className="text-black mt-3 font-bold">Address</h4>
          <div className="flex flex-row justify-between items-center px-3">
            <div className="flex flex-col">
              <label className="text-black">Country</label>
              <input
                type="text"
                placeholder="Country"
                name="country"
                required
                value={country}
                onChange={(e : any) => setCountry(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black">City</label>
              <input
                type="text"
                placeholder="City"
                name="city"
                required
                value={city}
                onChange={(e: any) => setCity(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-3">
            <div className="flex flex-col">
              <label className="text-black">Post Code</label>
              <input
                type="text"
                placeholder="Postal Code"
                name="postCode"
                required
                value={postcode}
                onChange={(e: any) => setPostcode(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black">State</label>
              <input
                type="text"
                placeholder="State"
                name="state"
                required
                value={state}
                onChange={(e: any) => setState(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
          </div>

          <div className="pt-6 pb-3">
            <button className="py-2 px-4 bg-primary rounded-xl" type="submit">
              {loading ? <>Updating...</> : <>Update</>}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserSettings;

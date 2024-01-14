import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { Button } from "../../ui"


const HeroSection = () => {
  return (
    <div className="min-h-screen bg-main-hero bg-center bg-cover bg-opacity-15 ">
        <Navbar />
        <div className="container flex justify-center items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center items-center py-12">
                <h1 className="text-6xl text-center font-['Jost'] pt-10">
                    FULLY INVESTED IN BETTER OUTCOMES
                </h1>
                <p className="text-center text-xl">As a global investment firm, we foster diverse perspectives and embrace
                innovation to help our clients navigate the uncertainty of capital markets</p>
                <div>
                    <Link to="/login">
                        <Button btntext="Get Started" /> 
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
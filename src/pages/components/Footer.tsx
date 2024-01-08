import { FaEnvelope, FaFacebook, FaGithub, FaHome, FaLinkedin, FaPhone } from "react-icons/fa"
import { Button } from "../ui"

const Footer = () => {

  const uselinkItems = ["About Us", "Services", "Packages", "Stocks"]

  return (
    <>
     <div className="bg-subfooter bg-cover bg-center h-[500px] w-full"></div>
    <div className="bg-footer py-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 text-white justify-start">
        <div>
          <h2>Logo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid doloribus illum praesentium veniam id obcaecati. Expedita in voluptatum eaque. Totam ut quod facilis unde tempora? Ex quas, odit fuga culpa quos iusto eaque quis minima eius ipsam molestias? Minima!</p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <ul>
            {uselinkItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <div>
            <div className="flex flex-row gap-2 justify-start items-center py-2">
              <div>
                <FaHome size={23}/>
              </div>
              
              <p>Aberdeen Avenue, California, Santa Rosa, US</p>
            </div>
            <div className="flex flex-row gap-2 justify-start items-center py-2">
              <div>
                <FaEnvelope size={23} />
              </div>
              
              <p>support@spectrumcapitals.com</p>
            </div>
            <div className="flex flex-row gap-2 justify-start items-center py-2">
              <div>
               <FaPhone size={23}/> 
              </div>
              
              <p>+1 916 857 3164</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Subscribe Our Newletter to get updates</h4>
          <div>
            <input type="email" placeholder="Email Address" name="" id="" className="border border-primary p-2 rounded-xl"/>
            <Button btntext="Subscribe" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between align-middle items-center py-3">
         <p className="text-white">2005 @ spectrum capitals</p>
          <div className="flex flex-row gap-3">
            <FaFacebook color="white" size={28}/>
            <FaLinkedin color="white" size={28}/>
            <FaGithub color="white" size={28}/>
          </div>
      </div>
     
      </div>
      
    </div>
    </>
    
  )
}

export default Footer
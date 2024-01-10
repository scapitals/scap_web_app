import { Navbar } from '../../components'
import planserve from "../../../assets/about-hero.jpg";
import { Button, CltCard } from '../../ui';
import { clientest } from '../../../utils/data';
import AbuImg from "../../../assets/about-hero.jpg";

const Herosection = () => {
  return (
    <>
    <div className='h-[50vh] w-full bg-abtimg bg-no-repeat bg-cover bg-center'>
        <Navbar />
        <div className="container">
          <p >Planning Services</p>
        </div>
    </div>
    <div className=' bg-[#f1f1f1] dark:bg-[#1f2937]'>
        <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
            <div>
                <img src={planserve} alt="img" className='w-full rounded' />
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='text-lg md:text-3xl'>A PLAN THAT PUTS THE BEST FINANCIAL CHOICES IN YOUR HANDS</h2>
                <p>These days, it's more important than ever to have a plan. Our version of financial planning not only gives you the confidence to know you're ready for anything, but is also designed to help you reach all your goals in the days ahead. Our advisors will design a personalized financial plan with the right</p>
                <div className='flex flex-row gap-6'>
                    <Button btntext="Get Started" btnlink="login"/>
                    <Button btntext="Contact Us" btnlink="contact"/>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className='container'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
            {clientest.map(item => (
             <CltCard key={item.id} text={item.text} img={item.img}/>   
            ))}    
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center w-1/2 gap-6'>
                <p className='text-lg md:text-3xl'>OUR VERSION OF FINANCIAL PLANNING</p>
                <p className='text-center'>Some companies only focus on insurance, Others on investments. Our advisors look at your financial big picture and recommend the right insurance and investment strategies in one integrated financial plan, designed to help you live the life you've always wanted.</p>
        </div>  
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center py-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg md:text-3xl">Outstanding team</h3>
            <p>Passfolio Finance is a tightly knit group working together with management teams toward common goals. We have more than 70 investment professionals, including 24 partners with an average tenure at Passfolio Finance of more than a decade. This allows us to devote substantial time to the companies in which we invest.</p>
          </div>
          <div>
            <img src={AbuImg} alt="image" className="w-full rounded-lg" />
          </div>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center py-12">
          <div>
            <img src={AbuImg} alt="image" className="w-full rounded-lg" />
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='text-lg md:text-3xl'>Collaborative style</h3>
            <p>Our objective is to work with portfolio company leadership and create a backdrop in which companies can thrive. We encourage management teams to invest alongside us, and our forward-thinking approach and philosophy to leave companies better than when we found them also means that portfolio company employees often choose to invest alongside Passfolio Finance as well.</p>
          </div>
          
        </div> 
    </div>
    </>
    
  )
}

export default Herosection
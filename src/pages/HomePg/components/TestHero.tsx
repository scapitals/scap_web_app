import Slider from "react-slick";
import { Navbar } from "../../components";
import "./TestHero.css"

const TestHero = () => {
    const settings = {
        dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // arrows: false
    }
  return (
    <div className="h-screen">
        <Navbar />
        <Slider {...settings}>
            <div className="h-[75vh] relative bg-heroimgone bg-center bg-cover flex justify-center items-center align-middle w-full">
                <div className="w-1/2 flex justify-center align-middle absolute top-1/2 right-60">
                  <p className="text-center text-2xl" data-aos="zoom-in">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam similique rerum suscipit nam repellendus eveniet recusandae dolorum odio ad et?</p>   
                </div>
               
            </div>
            <div className="h-[75vh] bg-heroimgtwo bg-center bg-cover bg-opacity-80">
                <div className="w-1/2 flex justify-center align-middle absolute top-1/2 right-60">
                    <p className="text-center text-2xl" data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium dolor explicabo vitae! Accusantium excepturi iste, reiciendis enim pariatur nam.</p>
                </div>
                
            </div>
            <div className="h-[75vh] bg-heroimgthree bg-center bg-cover">
                <div className="w-1/2 flex justify-center align-middle absolute top-1/2 right-60">
                  <p className="text-center text-2xl" data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa impedit laboriosam consequuntur perferendis facere quasi veritatis dolorem quibusdam atque nostrum?</p>  
                </div>
                
            </div>
        </Slider>
    </div>
  )
}

export default TestHero
import Slider from "react-slick";
import "./TestHero.css"
import Navigation from "../../components/Navigation";

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
        <Navigation />
        <Slider {...settings}>
            <div className="h-[75vh] bg-heroimgone bg-center bg-opacity-50 bg-cover flex justify-center items-center align-middle w-full">
                <div className="flex justify-center items-center">
                <div className="md:w-1/2 w-full flex flex-col">
                    <p className="text-center text-2xl" data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium dolor explicabo vitae! Accusantium excepturi iste, reiciendis enim pariatur nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, natus modi iure voluptatum corporis neque, tempore aspernatur quisquam aut omnis inventore quia fuga alias assumenda sequi, est architecto ut ab. Sapiente, reprehenderit est quas facilis facere itaque necessitatibus molestias quae quis minima obcaecati, ut repellendus eum eaque aperiam nostrum animi.</p>
                </div>
              </div>
               
            </div>
            <div className="h-[75vh] bg-heroimgtwo bg-center bg-cover bg-opacity-80">
              <div className="flex justify-center items-center">
                <div className="md:w-1/2 w-full flex flex-col">
                    <p className="text-center text-2xl" data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium dolor explicabo vitae! Accusantium excepturi iste, reiciendis enim pariatur nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, natus modi iure voluptatum corporis neque, tempore aspernatur quisquam aut omnis inventore quia fuga alias assumenda sequi, est architecto ut ab. Sapiente, reprehenderit est quas facilis facere itaque necessitatibus molestias quae quis minima obcaecati, ut repellendus eum eaque aperiam nostrum animi.</p>
                </div>
              </div>
                
                
            </div>
            <div className="h-[75vh] bg-heroimgthree bg-center bg-cover">
                <div className="flex justify-center items-center">
                <div className="md:w-1/2 w-full flex flex-col">
                    <p className="text-center text-2xl" data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium dolor explicabo vitae! Accusantium excepturi iste, reiciendis enim pariatur nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, natus modi iure voluptatum corporis neque, tempore aspernatur quisquam aut omnis inventore quia fuga alias assumenda sequi, est architecto ut ab. Sapiente, reprehenderit est quas facilis facere itaque necessitatibus molestias quae quis minima obcaecati, ut repellendus eum eaque aperiam nostrum animi.</p>
                </div>
              </div>
                
            </div>
        </Slider>
    </div>
  )
}

export default TestHero
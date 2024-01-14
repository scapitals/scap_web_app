import AbuImg from "../../../assets/about-hero.jpg";
import ces from "../../../assets/ces.jpg";
import nwse from "../../../assets/nwse.png";
import { SusCard } from "../../ui";
import { sustainAbtDataOne, sustainAbtDataTwo } from "../../../utils/data";
import Navigation from "../../components/Navigation";

const Herosection = () => {
  return (
    <>
      <div className="h-[50vh] w-full bg-abtimg bg-no-repeat bg-cover bg-center">
        <Navigation />
        <div className="container">
          <p>About Us</p>
        </div>
      </div>
      <div className="container py-12">
        <p>
          Solidvestglobal.com is a global systematic investment. Our centralized
          research focuses on the development of advanced quantitative
          techniques for uncovering market opportunities and employs them within
          a disciplined framework that results in efficient exposures. With a
          robust infrastructure and talented investment professionals,
          Solidvestglobal.com offers clients the scale of a large asset
          management firm, with the benefits of a versatile investment platform
          – flexibility and customization. Our firm is able to offer
          institutional and retail investors the essential building blocks for
          today’s changing investment landscape.
        </p>
      </div>
      <div className="container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          <div>
            <h2>OUR PRINCIPLES AND AMBITIONS</h2>
            <p>
              WE APPROACH SUSTAINABILITY FROM THREE PERSPECTIVES: AN ASSET
              OWNER, AN ASSET MANAGER, AND AS A COMPANY IN OUR OWN RIGHT
            </p>
            <p>
              While our responsibilities and obligations in each of these three
              roles may differ, as we discuss below, our approach in all three
              is united by a common set of principles and ambitions, set out in
              the box at the bottom of the page.
            </p>
            <p>
              We serve as an asset owner on behalf of Prudential With-Profts
              policyholders, and our pensions and annuity customers. This means
              we make decisions about how to allocate money to different asset
              classes and which asset manager should manage our money.
            </p>
          </div>
          <div>
            <img src={AbuImg} alt="" className="w-full rounded-lg" />
          </div>
        </div>
        <img src={ces} alt="" className="w-full rounded-lg py-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center py-12">
          <div>
            <img src={nwse} alt="image" className="w-full rounded-lg"/>
          </div>
          <div>
            <p>
              Our priority is always to act in the best interests of our
              clients. No one will ever outwork or outhustle us for business. We
              conduct business with the highest level of honesty and integrity.
              We strive to generate superior returns in our chosen markets.
              Creativity is at the core of our investment approach. We work
              collaboratively, intelligently and judiciously. Our most important
              asset is our people. We strive to recruit and retain the best
              talent. We stress teamwork in everything we do. We value the
              opinion of every member of the firm and seek consensus across all
              investment decisions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          <div>
            <h4>OUR SUSTAINABILITY STRATEGY: UNDERPINNED BY CONSTANT EVOLUTION AND A LONG-TERM APPROACH</h4>
            <div>
              {sustainAbtDataOne.map(item => (
               <SusCard key={item.id} title={item.title} img={item.img} text={item.text}/> 
              ))}
            </div>
          </div>
          <div>
            <h4>OUR SUSTAINABILITY GOVERNANCE, RESOURCES AND PARTNERSHIPS</h4>
            <div>
              {sustainAbtDataTwo.map(item => (
               <SusCard key={item.id} title={item.title} text={item.text} img={item.img}/> 
              ))}
              
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center text-3xl font-700 py-6">HOW WE WORK</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center py-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-[500]">Outstanding team</h3>
            <p>Passfolio Finance is a tightly knit group working together with management teams toward common goals. We have more than 70 investment professionals, including 24 partners with an average tenure at Passfolio Finance of more than a decade. This allows us to devote substantial time to the companies in which we invest.</p>
          </div>
          <div>
            <img src={AbuImg} alt="image" className="w-full rounded-lg" />
          </div>
        </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center py-12">
          <div>
            <img src={AbuImg} alt="image" className="w-full rounded-lg" />
          </div>
          <div>
            <h3>Collaborative style</h3>
            <p>Our objective is to work with portfolio company leadership and create a backdrop in which companies can thrive. We encourage management teams to invest alongside us, and our forward-thinking approach and philosophy to leave companies better than when we found them also means that portfolio company employees often choose to invest alongside Passfolio Finance as well.</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Herosection;

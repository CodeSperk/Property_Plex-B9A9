import { Helmet } from "react-helmet-async";
import SecHeader from "../../components/SecHeader/SecHeader";
import CounterSec from "./counterSec/CounterSec";
import TestiSlider from "./TestiSlider/TestiSlider";
import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const clientData = useLoaderData();
  AOS.init();

  return (
    <div>
       <Helmet>
        <title>PropertyPlex | About</title>
      </Helmet>

      {/* Banner */}
      <section className="z-0 mt-0 pt-24 md:pt-[108px] max-w-[1440px] mx-auto">
         <div
        className="h-[250px] bg-[url('https://i.ibb.co/G5y5CFF/l-IZrwvbe-Ruuzq-Oo-WJUEn-Photoaday-CSD-1-of-1-5.jpg')] bg-cover bg-no-repeat bg-center text-white" >
        <div className="bg-black bg-opacity-30 z-10 h-full w-full">
          {/* banner  content */}
          <div className="max-w-7xl w-full h-full mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] flex justify-center items-center py-10 ">
           <h1 className="font-bold">About Us</h1>
          </div>
        </div>
      </div>
      </section>

      <div className="max-w-7xl w-full h-full mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px]">
        <div className="bg-[var(--bg-primary)] shadow-xl min-h-16 -mt-16 text-center px-6 md:px-32 lg:px-48 xl:px-60 space-y-3 py-6 md:py-10">
        <p className="text-[var(--clr-accent)]">Welcome to <span className="font-bold">PropertyPlex</span></p>
        <h4>We see changes as opportunity, not a threat and start with the belief that there is a better way.</h4>
        </div>
      </div>
   
      


      {/* main */}
      <main>
        {/* Success rate */}
        <section className="text-center max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px]">
          <SecHeader subTitle="Success Rate" title="Our Success Rate Unveiled">  </SecHeader>
          
          <CounterSec></CounterSec>
         
        </section>


        {/* testimonials section */}
        <section className="text-center max-w-7xl w-full h-full mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px]">
          <SecHeader subTitle="Our Best Reviews" title="Client Testimonials"></SecHeader>

       <div data-aos="fade-up">
        <TestiSlider clientData={clientData}></TestiSlider>
       </div>
        </section>


      </main>
      
    </div>
  );
};

export default About;
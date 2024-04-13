import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard/EstateCard";
import { Helmet} from 'react-helmet-async';
import HomeBanner from "./homeBanner/HomeBanner";
import SecHeader from "../../components/SecHeader/SecHeader";
import LeafletMap from "./Map/LeafletMap";
import Explore from "./ExoploreSection/Explore";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";


const Home = () => {
  const { speciality_estates } = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  let estateLength = 4;
  if(showAll){
    estateLength = speciality_estates.length;
  }


  AOS.init();


  return (
    <div>
        <Helmet>
          <title>PropertyPlex | Home  </title>
        </Helmet>
        {/* Banner Section */}
       <HomeBanner></HomeBanner>  
      
      {/* Estates Section */}
      <section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px]">
       <div className="text-center">
       <SecHeader title="Discover Your Dream Property" subTitle="Our Estates"></SecHeader>
       </div>
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:mt-12">

          {speciality_estates.slice(0, estateLength).map(estate => (
              <EstateCard key={estate.id} estate={estate}></EstateCard>
          ))}
        </div>

        {
          speciality_estates.length > 4 && 
          <button onClick={() => setShowAll(!showAll)}
          className="w-fit mx-auto px-10 py-2 mt-8 border-2 border-[var(--clr-accent)] text-[var(--clr-accent)] text-lg font-bold transform hover:scale-125 duration-500"
        >
          {showAll? "Show Less" : "Show All"}
        </button>
        }
        
      </section>

{/* Property Location Section */}
      <section>
          <div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] text-center mb-8 md:mb-12">
          <SecHeader title="Select Properties on the Map." subTitle="Property Map">
        </SecHeader>
          </div>
         <div data-aos="fade-up" >
         <LeafletMap></LeafletMap>
         </div>
      </section>

      {/* Exploring section */}
      <section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] text-center">
        <SecHeader title="Explore us in Just a Click" subTitle="Our Offerings">

        </SecHeader>
        <div data-aos="fade-up">
        <Explore></Explore>
        </div>
      </section>


    </div>
  );
};

export default Home;

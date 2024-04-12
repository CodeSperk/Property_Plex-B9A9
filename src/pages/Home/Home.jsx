import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard/EstateCard";
import { Helmet} from 'react-helmet-async';
import HomeBanner from "./homeBanner/HomeBanner";
import SecHeader from "../../components/SecHeader/SecHeader";
import LeafletMap from "./Map/LeafletMap";
import Explore from "./ExoploreSection/Explore";

const Home = () => {
  const { speciality_estates } = useLoaderData();

  return (
    <div className="">
        <Helmet>
          <title>PropertyPlex | Home  </title>
        </Helmet>

        {/* Banner Section */}
       <HomeBanner></HomeBanner>    
      
      {/* Estates Section */}
      <section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px]">
       
       <SecHeader title="Discover Your Dream Property" subTitle="Our Estates"></SecHeader>
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:mt-12">
          {speciality_estates.map((estate, index) => (
            <EstateCard key={estate.id} index={index} estate={estate}></EstateCard>
          ))}
        </div>
      </section>

{/* Property Location Section */}
      <section>
          <div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] text-center mb-8 md:mb-12">
          <SecHeader title="Select Properties on the Map." subTitle="Property Map">
        </SecHeader>
          </div>
          <LeafletMap></LeafletMap>
      </section>

      {/* Exploring section */}
      <section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] text-center">
        <SecHeader title="Explore us in Just a Click" subTitle="Our Offerings">

        </SecHeader>
        <Explore></Explore>
      </section>


    </div>
  );
};

export default Home;

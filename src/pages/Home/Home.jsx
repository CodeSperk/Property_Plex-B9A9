import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard/EstateCard";
import { Helmet} from 'react-helmet-async';
import HomeBanner from "./homeBanner/HomeBanner";
import SecHeader from "../../components/SecHeader/SecHeader";

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
    </div>
  );
};

export default Home;

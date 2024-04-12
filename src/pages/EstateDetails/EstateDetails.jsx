import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import SecHeader from "../../components/SecHeader/SecHeader";

const EstateDetails = () => {
  const {speciality_estates} = useLoaderData();
  const {id} = useParams();
  const parsedId = parseInt(id);

  const targetedEstate = speciality_estates.find(estate => parseInt(estate.id) === parsedId);

  return (
    <div className="pt-24 md:pt-[108px] max-w-[1440px] mx-auto">
      <Helmet>
        <title>PropertyPlex | Estate</title>
      </Helmet>


      {/* Banner Section */}
      
        <section className="mt-0">
          <Banner estate={targetedEstate}></Banner>
          <div>

          </div>
        </section>

{/* Description section */}
        <section className="max-w-7xl w-full h-full mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px]  lg:-mt-20">
          <div className="bg-[var(--bg-secondary)] p-4 rounded md:p-8">



          <div className="flex items-center justify-between gap-4">
          <h4 className="border-2 font-bold text-[var(--clr-accent)] hidden md:flex">{targetedEstate.segment_name}</h4>
          <SecHeader title="Description"></SecHeader>
          <button className="w-fit text-[var(--clr-accent)] border-2 border-[var(--clr-accent)] font-bold rounded-md hover:bg-[var(--clr-accent)] hover:text-white py-1 mb-4">
            Book Now
          </button>
          </div>

          <p className="text-justify"> 
            {targetedEstate.description}
          </p>
          </div>
        </section>
      
    </div>
  );
};

export default EstateDetails;
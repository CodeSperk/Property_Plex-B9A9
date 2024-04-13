import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import SecHeader from "../../components/SecHeader/SecHeader";
import AOS from 'aos';
import 'aos/dist/aos.css';

const EstateDetails = () => {
  const {speciality_estates} = useLoaderData();
  const {id} = useParams();
  const parsedId = parseInt(id);

  const targetedEstate = speciality_estates.find(estate => parseInt(estate.id) === parsedId);

  AOS.init();

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

{/* service section */}
        <section className="max-w-7xl w-full mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] flex flex-col md:flex-row gap-4 md:gap-6 min-h-96 md:mb-36">
          <div className="relative min-h-96 md:w-3/5 xl:w-1/2" data-aos="zoom-in">
              <img src={targetedEstate.image[1]} alt="" className="md:w-2/3 h-auto border-2 rounded border-white shadow-md"/>
              <div className="absolute -bottom-12 right-0 w-1/2 hidden md:flex">
                <img src={targetedEstate.image[2]} alt="" className="w-full h-full rounded border-2 border-white shadow-md"/>
              </div>
          </div>

          <div className="md:w-2/5 xl:w-1/2" data-aos="zoom-in">
            <div className="">
            <SecHeader title="Facilities"></SecHeader>
          <p className="mt-4">This property offers <span className="font-bold"> {targetedEstate.facilities[0]}, {targetedEstate.facilities[1]}, {targetedEstate.facilities[2]} </span>.
          Experience the convenience of parking lot, ensuring a seamless and enjoyable experience for all guests.
          </p>
            </div>
            <div className="space-y-6 mt-8">
          <h3>Providing Services Since 2015</h3>
            <p className="mt-6">Celebrating a legacy of excellence since 2015, our dedicated team has been delivering exceptional services with unwavering commitment and pride.</p>
          </div>
          </div>
        </section>
      
    </div>
  );
};

export default EstateDetails;
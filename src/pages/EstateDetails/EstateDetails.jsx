import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";

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
      
    </div>
  );
};

export default EstateDetails;
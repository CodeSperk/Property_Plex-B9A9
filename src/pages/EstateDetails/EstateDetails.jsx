import { useParams, useLoaderData } from "react-router-dom";

const EstateDetails = () => {
  const {speciality_estates} = useLoaderData();
  const {id} = useParams();
  const parsedId = parseInt(id);

  const targetedEstate = speciality_estates.find(estate => parseInt(estate.id) === parsedId);

  return (
    <div className="pt-24">
      News Details .....
    </div>
  );
};

export default EstateDetails;
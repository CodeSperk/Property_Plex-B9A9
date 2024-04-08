import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard/EstateCard";
const Home = () => {
  const { speciality_estates } = useLoaderData();
  console.log(speciality_estates);

  return (
    <div className="pt-36">
      This is home page....
      {/* Estates Section */}
      <section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speciality_estates.map((estate) => (
            <EstateCard key={estate.id} estate={estate}></EstateCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

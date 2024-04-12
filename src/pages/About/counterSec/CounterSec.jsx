import { useState } from "react";
import CountUp from "react-countup";
import { GrGroup, GrMap } from "react-icons/gr";
import { MdMapsHomeWork } from "react-icons/md";
import { RiBarChartGroupedLine } from "react-icons/ri";
import ScrollTrigger from "react-scroll-trigger";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CounterSec = () => {
  const [counterOn, setCounterOn] = useState(false);
  AOS.init();

  return (
    <div className="mt-8 md:mt-16 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-6">

      {/* card-1 */}
      <div className="space-y-3" data-aos="fade-up">
      <GrMap className="mx-auto text-5xl" />
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <p className="text-[var(--clr-accent)] text-2xl md:text-4xl font-bold">
          {counterOn && <CountUp start={0} end={120} duration={2} />} +{" "}
        </p>
      </ScrollTrigger>
      <div className="bg-[var(--clr-accent)] w-12 h-[2px] mx-auto"></div>
      <p>Location Covered</p>
    </div>

    {/* card-2 */}
      <div className="space-y-3" data-aos="fade-up">
      <MdMapsHomeWork className="mx-auto text-5xl" />
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <p className="text-[var(--clr-accent)] text-2xl md:text-4xl font-bold">
          {counterOn && <CountUp start={0} end={560} duration={2} />} +{" "}
        </p>
      </ScrollTrigger>
      <div className="bg-[var(--clr-accent)] w-12 h-[2px] mx-auto"></div>
      <p>Properties Sold</p>
    </div>
    
    {/* card-3 */}
      <div className="space-y-3" data-aos="fade-up">
      <GrGroup className="mx-auto text-5xl" />
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <p className="text-[var(--clr-accent)] text-2xl md:text-4xl font-bold">
          {counterOn && <CountUp start={0} end={46} duration={2} />} +{" "}
        </p>
      </ScrollTrigger>
      <div className="bg-[var(--clr-accent)] w-12 h-[2px] mx-auto"></div>
      <p>Expert Agents</p>
    </div>

    {/* Card-4 */}
      <div className="space-y-3" data-aos="fade-up">
      <RiBarChartGroupedLine className="mx-auto text-5xl" />
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <p className="text-[var(--clr-accent)] text-2xl md:text-4xl font-bold">
          {counterOn && <CountUp start={0} end={2500} duration={2} />} +{" "}
        </p>
      </ScrollTrigger>
      <div className="bg-[var(--clr-accent)] w-12 h-[2px] mx-auto"></div>
      <p>Properties Rented</p>
    </div>
    </div>
  );
};

export default CounterSec;

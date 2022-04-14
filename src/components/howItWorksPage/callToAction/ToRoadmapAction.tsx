import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CallToActionSvg from "./CallToActionSvg";

const ToRoadmapAction: React.FC = () => {
  return (
    <div className="w-full h-full justify-center pb-96">
      <div className="flex flex-col justify-start items-center">
        <span className="w-7 h-1 mt-36 bg-yellow-300" />
        <h3 className="mt-8">
          Our <span className="text-yellow-300">Roadmap</span>
        </h3>
        <p className="text-large-medium mt-3 w-[55%] mx-auto text-center">
          Roadmaps focus on providing a list of what your project will
          accomplish and what features your product will include
        </p>
        <div className="relative">
            <div className="w-full absolute top-0 left-0">
                <CallToActionSvg />
            </div>
          <button className="px-4 py-3 mt-11 bg-black rounded-full text-small-bold flex gap-x-2 duration-500 border-2 border-transparent hover:border-yellow-300">
            <span>Roadmap Document</span>
            <span className="animate-bounceX">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default ToRoadmapAction;

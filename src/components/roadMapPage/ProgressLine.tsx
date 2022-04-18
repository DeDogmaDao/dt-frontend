import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  activeSection: number;
}

const ProgressLine: React.FC<props> = ({ activeSection }) => {
  return (
    <div className="absolute top-0 left-[7%] lg:left-1/2 ml-[-8px] w-1 flex flex-col items-center gap-y-5 z-100 mt-[15vh]">
      <div className="text-3xl text-primary-500">
        <FontAwesomeIcon icon={faEthereum} />
      </div>
      <div className="w-1 h-[70vh] bg-neutral-400 overflow-hidden rounded-full relative">
        <div
          className="absolute left-0 w-full h-full bg-primary-500 duration-1000"
          style={{ top: -100 + (activeSection + 1) * 33 + 1 + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressLine;

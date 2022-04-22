import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EthereumSVG from '../svgs/ethereum.svg';
interface props {
  activeSection: number;
}

const ProgressLine: React.FC<props> = ({ activeSection }) => {
  return (
    <div className="absolute top-0 left-[5%] ssm:left-[7%] lg:left-1/2 ml-[-.5rem] w-1
     flex flex-col items-center gap-y-5 z-100 mt-[12vh]">
      <div className="text-3xl stroke-primary-500 aspect-square w-8">
        <EthereumSVG />
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

import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  descData: string;
}
const EachDesc: React.FC<props> = ({ descData }) => {
  return (
    <li className="flex gap-x-2 text-base px-16 py-8 rounded-full bg-neutral-600/30">
      <span className="mt-1">
        <FontAwesomeIcon icon={faCircleDot} />
      </span>
      <p className="text-extera-large-medium">{descData}</p>
    </li>
  );
};

export default EachDesc;

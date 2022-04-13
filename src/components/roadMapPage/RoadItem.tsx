import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  data: { title: string; desc: string };
}

const RoadItem: React.FC<props> = ({ data }) => {
  return (
    <li className="w-full flex justify-start items-start gap-2">
      <span className="text-xl">
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
      <p>{data.title}</p>
    </li>
  );
};

export default RoadItem;

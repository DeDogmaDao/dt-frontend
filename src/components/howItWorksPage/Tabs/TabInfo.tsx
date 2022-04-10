import { ReactElement } from "react";
import { activeIndexCardType } from "../../../types/allTypes";

interface props {
  name: string;
  titleOfHonor: string;
  desc: ReactElement<any, any>;
  index: number;
  activeIndexCard: activeIndexCardType;
  tabGroup: string;
}
const TabInfo: React.FC<props> = ({
  name,
  titleOfHonor,
  desc,
  index,
  activeIndexCard,
  tabGroup,
}) => {
  return (
    <>
      {activeIndexCard[tabGroup] === index && (
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-x-2">
            <span>{name}</span>
            <p>{titleOfHonor}</p>
          </div>
          <div>{desc}</div>
        </div>
      )}
    </>
  );
};

export default TabInfo;

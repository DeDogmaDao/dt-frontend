import { tabType } from "../../../types/allTypes";

interface props {
  data: tabType;
  activeGroup: boolean;
}
const TabData: React.FC<props> = ({ data, activeGroup }) => {
  return (
    <>
      {data.activeCard && activeGroup && (
        <div className="w-full h-full flex justify-center items-center">
          <img src={data.image} className="h-full" />
          <div className="w-1/2">{data.desc}</div>
        </div>
      )}
    </>
  );
};

export default TabData;

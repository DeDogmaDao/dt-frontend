import { tabType } from "../../../types/allTypes";

interface props {
  data: tabType;
  activeGroup: boolean;
}
const TabData: React.FC<props> = ({ data, activeGroup }) => {
  return (
    <>
      {data.activeCard && activeGroup && (
        <div className="w-full h-full flex justify-center items-start gap-9">
          <img src={data.image} className="h-full w-[225px]" />
          <div className="flex flex-col gap-y-8 w-[385px]">
            <h4 className="text-2xl">{data.name}</h4>
            <div className="w-full">{data.desc}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default TabData;

import { tabType } from "../../../types/allTypes";

interface props {
  data: tabType;
  activeGroup: boolean;
}
const TabData: React.FC<props> = ({ data, activeGroup }) => {
  return (
    <>
      {data.activeCard && activeGroup && (
        <div className="w-full h-full flex justify-center items-start gap-36">
          <div className="h-full w-[300px] relative">
            <img
              src={data.image}
              className="absolute top-0 left-0 h-full w-[225px] z-10 drop-shadow-[0px_10px_20px_rgba(255,255,255,0.5)]"
            />
            {data.image2 && (
              <img
                src={data.image2}
                className="absolute top-0 left-0 h-full w-[225px] translate-x-32 rotate-[30deg] scale-75 drop-shadow-[0px_10px_20px_rgba(255,255,255,0.5)]"
              />
            )}
            {data.image3 && (
              <img
                src={data.image3}
                className="absolute top-0 left-0 h-full w-[225px] -translate-x-32 rotate-[-30deg] scale-75 drop-shadow-[0px_10px_20px_rgba(255,255,255,0.5)]"
              />
            )}
            <div className="w-[300px] absolute -bottom-7 -left-10 h-[50%] bg-primary-700 rounded-tl-full rounded-tr-full z-20"></div>
          </div>
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

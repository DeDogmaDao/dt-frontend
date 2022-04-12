import Road from "./Road";
const colors = [
  "#f542e9",
  "#5c485a",
  "#1b7a29",
]
const RoadMapPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      {colors.map(color=>{
        return <Road color={color} />
      })}
    </div>
  );
};

export default RoadMapPage;

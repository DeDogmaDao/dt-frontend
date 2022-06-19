import { auctionDataType } from "../../../types/allTypes";

interface props {
  data:auctionDataType;
}
const About: React.FC<props> = ({data}) => {
  return <div className="w-full h-full flex flex-col justify-start items-start px-6 py-8 text-xl font-light">
    {data.about.map(item=>{
      return <p>{item}</p>
    })}

  </div>;
};
export default About;

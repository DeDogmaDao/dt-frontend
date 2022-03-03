import { gameCardData } from "../../store/allData";
import CardGame from "./CardGame";

const GameBoard: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-screen h-screen">
      <div className="w-1/3 h-full bg-green-900 flex justify-center items-start flex-wrap gap-3 relative">
        {gameCardData.map((data, index) => {
          return <CardGame data={data} index={index} />;
        })}
      </div>
      <div className="w-2/3 h-full bg-red-900"></div>
    </div>
  );
};

export default GameBoard;

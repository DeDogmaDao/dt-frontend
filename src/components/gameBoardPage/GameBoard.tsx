import { AnimateSharedLayout, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { gameCardData } from "../../store/allData";
import CardGame from "./CardGame";

const GameBoard: React.FC = () => {
  const [isStarted, setIsStarted] = useState<number | null>(null);
  return (
    <LayoutGroup>
      <div className="flex justify-between items-center w-screen h-[calc(900/1920*100vw)]"
      >
        <div className="w-1/3 h-full bg-green-900 flex justify-center items-start flex-wrap relative z-10">
          {gameCardData.map((data, index) => {
            return (
              <CardGame
                layoutID={"cardGame" + data.id}
                hiddenShow={true}
                data={data}
                index={index}
                isStarted={isStarted}
                setIsStarted={setIsStarted}
              />
            );
          })}
        </div>
        <div className="w-2/3 h-full bg-red-900 flex justify-center items-start relative z-10">
          <img
            src="/media/bg/game2.png"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="absolute left-[30%] top-[85%] w-full h-full">
            <div className="relative w-full h-full"
            style={{transformStyle:"preserve-3d", perspective:"500px",perspectiveOrigin:"center"}}>
              {gameCardData.map((data, index) => {
                return (
                  <CardGame
                    layoutID={"cardGame" + data.id}
                    hiddenShow={false}
                    data={data}
                    index={index}
                    isStarted={isStarted}
                    setIsStarted={setIsStarted}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
};

export default GameBoard;

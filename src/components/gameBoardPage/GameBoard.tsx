import { AnimateSharedLayout, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { gameCardData } from "../../store/allData";
import CardGame from "./CardGame";

const GameBoard: React.FC = () => {
  const spells = Array.from(Array(37).keys());
  const [turnNumber, setTurnNumber] = useState<number | null>(null);
  return (
    <LayoutGroup>
      <div className="flex justify-between items-center w-screen h-[calc(900/1920*100vw)]">
        <div className="w-1/3 h-full bg-green-900 flex justify-center items-start flex-wrap relative z-10">
          {gameCardData.map((data, index) => {
            return (
              <CardGame
                layoutID={"cardGame" + data.id}
                data={data}
                index={index}
                turnNumber={turnNumber}
                setTurnNumber={setTurnNumber}
                arrayLength={gameCardData.length}
              />
            );
          })}
          <div className="w-28 h-36 absolute bottom-40 left-1/2 -ml-14 bg-red-500/50"></div>
        </div>
        <div className="w-2/3 h-full bg-red-900 flex justify-center items-start relative z-10">
          <img
            src="/media/bg/game2.png"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="w-[202px] h-[318px] bg-blue-500/20 absolute top-[201px] right-[411px] z-100"></div>
          <div className="w-[325px] h-[318px] bg-red-500/20 absolute top-[201px] right-[349px] z-100">
            <div className="relative w-full h-full">
              {spells.map((spell) => {
                return (
                  <div
                    className="rounded-full bg-yellow-500 absolute"
                    style={{
                      right: 0 + spell * (62 / 37),
                      bottom: 0 + spell * (323 / 37),
                      width: 3,
                      height: 3,
                    }}
                  ></div>
                );
              })}
              {spells.map((spell) => {
                return (
                  <div
                    className="rounded-full bg-yellow-500 absolute"
                    style={{
                      right: 323 - spell * (65 / 37),
                      bottom: 0 + spell * (323 / 37),
                      width: 3,
                      height: 3,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="absolute left-[30%] top-[8%] w-full h-full">
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                perspective: "500px",
                perspectiveOrigin: "center",
              }}
            >
              {/* {gameCardData.map((data, index) => {
                return (
                  <CardGame
                    layoutID={"cardGame" + data.id}
                    data={data}
                    index={index}
                    turnNumber={turnNumber}
                    setTurnNumber={setTurnNumber}
                    arrayLength={gameCardData.length}
                  />
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
};

export default GameBoard;

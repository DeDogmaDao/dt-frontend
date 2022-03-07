import { AnimateSharedLayout, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { gameCardData } from "../../store/allData";
import CardGame from "./CardGame";
import DoorSpells from "./DoorSpells";

const spells: number[] = Array.from(Array(40).keys());
const topSpells: number[] = Array.from(Array(10).keys());
const bottomPosition = {
  top: 118.5,
  right: 429,
  width: 420,
  height: 202,
}
const bottomRightSpell = {
  bottom: 22.75,
  right: 4.4,
  width: 0.2,
  height: 0.2,
}
const bottomLeftSpell = {
  bottom: 22.75,
  right: 4.55,
  width: 0.2,
  height: 0.2,
}

const GameBoard: React.FC = () => {
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
            src="/media/bg/game1.png"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="w-[171px] h-[53px]  absolute top-[113px] right-[424px] z-100 bg-green-500/10">
            {topSpells.map((spell) => {
              return (
                <div
                  className="rounded-full bg-yellow-500 absolute"
                  style={{
                    right: 0 + spell * (70 / 10),
                    bottom: 0 + spell * (56 / 10),
                    width: 3,
                    height: 3,
                  }}
                ></div>
              );
            })}
            {topSpells.map((spell) => {
              return (
                <div
                  className="rounded-full bg-yellow-500 absolute"
                  style={{
                    right: 170 - spell * (69 / 10),
                    bottom: 0 + spell * (56 / 10),
                    width: 3,
                    height: 3,
                  }}
                ></div>
              );
            })}
          </div>
          <DoorSpells
            spells={spells}
            right={0}
            containerPosition={bottomPosition}
            spellPosition={bottomRightSpell}
          />
          <DoorSpells
            spells={spells}
            right={(418 / 1920) * 100}
            containerPosition={bottomPosition}
            spellPosition={bottomLeftSpell}
          />
          <div
            className="absolute z-100"
            style={{
              width: `${(420 / 1920) * 100}vw`,
              right: `${(429 / 1920) * 100}vw`,
              height: `${(202 / 900) * 100}vw`,
              top: `${(118 / 900) * 100}vw`,
            }}
          >
            <div className="relative w-full h-full">

              {spells.map((spell) => {
                return (
                  <div
                    className="rounded-full  absolute"
                    style={{
                      right: (415 / 1920) * 100 - spell * (4.1 / 37) + "vw",
                      bottom: 0 + spell * (21.1 / 37) + "vw",
                      width: 0.2 + "vw",
                      height: 0.2 + "vw",
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

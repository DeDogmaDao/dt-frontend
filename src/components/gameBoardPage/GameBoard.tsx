import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import { gameCardData } from "../../store/allData";
import CardGame from "./CardGame";
import DoorSpells from "./DoorSpells";
import {
  bottomSpells,
  topSpells,
  bottomPosition,
  topPosition,
  bottomLeftSpell,
  bottomRightSpell,
  topLeftSpell,
  topRightSpell,
} from "../../utils/game";
import { spellNumber } from "../../types/allTypes";

const GameBoard: React.FC = () => {
  const [turnNumber, setTurnNumber] = useState<number | null>(null);
  const [spellNumber, setSpellNumber] = useState<spellNumber>({ yellow: 0, blue: 0 });
  console.log(spellNumber);
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
                spellNumber={spellNumber}
                setSpellNumber={setSpellNumber}
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

          <DoorSpells
            spells={topSpells}
            right={0}
            containerPosition={topPosition}
            spellPosition={topRightSpell}
          />
          <DoorSpells
            spells={topSpells}
            right={(213 / 1920) * 100}
            containerPosition={topPosition}
            spellPosition={topLeftSpell}
          />
          <DoorSpells
            spells={bottomSpells}
            right={0}
            containerPosition={bottomPosition}
            spellPosition={bottomRightSpell}
          />
          <DoorSpells
            spells={bottomSpells}
            right={(419 / 1920) * 100}
            containerPosition={bottomPosition}
            spellPosition={bottomLeftSpell}
          />

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

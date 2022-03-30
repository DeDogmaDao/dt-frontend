import { LayoutGroup, motion } from "framer-motion";
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
import { gameCardType, spellNumber } from "../../types/allTypes";
import Calculation from "./Calculation";

import SpellCounter from "./SpellCounter";

const GameBoard: React.FC = () => {
  const [turnNumber, setTurnNumber] = useState<number | null>(null);
  const [spellNumber, setSpellNumber] = useState<spellNumber>({
    yellow: 0,
    blue: 0,
    yellowCardCount: 0,
    blueCardCount: 0,
  });
  const [currentCard, setCurrentCard] = useState<gameCardType | null>(null);

  const [transferNum, setTransferNum] = useState(false);

  return (
    <LayoutGroup>
      <div className="flex justify-between items-center w-screen h-[calc(900/1920*100vw)] relative">
        <img
          src="/media/game/main.png"
          className="absolute top-0 left-0 w-full h-full z-10"
        />
        <div className="absolute z-0  top-[10.4vw] left-[58.72vw] w-[16vw] h-[26vw] bg-red-500">
          <div className="relative w-full h-full">
            <img
              src="/media/game/door.png"
              className="absolute bottom-0 left-0 w-[8vw] h-full z-0"
            />
            <img
              src="/media/game/door.png"
              className="absolute bottom-0 right-0 w-[8vw] h-full z-0 scale-x-[-1]"
            />
            <div className="absolute top-[12.3vw] left-1/2 ml-[-1vw] w-[2vw] h-[2vw] bg-green-500 z-10">
              <div className="relative w-full h-full">
            <img
              src="/media/game/ring.png"
              className="absolute bottom-0 right-0 w-full h-full"
            />

              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full h-full flex justify-center items-start flex-wrap relative z-10"
          style={{
            transformStyle: "preserve-3d",
            perspective: "55vw",
            perspectiveOrigin: "66.66% 50%",
          }}
        >
          {gameCardData.map((data, index) => {
            return (
              <CardGame
                layoutID={"cardGame" + data.id}
                data={data}
                cardIndex={index}
                turnNumber={turnNumber}
                setTurnNumber={setTurnNumber}
                gameCardData={gameCardData}
                spellNumber={spellNumber}
                setSpellNumber={setSpellNumber}
                setCurrentCard={setCurrentCard}
                transferNum={transferNum}
                setTransferNum={setTransferNum}
              />
            );
          })}
          <Calculation
            currentCard={currentCard}
            firstCardNum={gameCardData[0].cardNum}
            transferNum={transferNum}
            setTransferNum={setTransferNum}
          />

          <DoorSpells
            spells={topSpells}
            right={0}
            containerPosition={topPosition}
            spellPosition={topRightSpell}
            spellNumber={spellNumber}
          />
          <DoorSpells
            spells={topSpells}
            right={(213 / 1920) * 100}
            containerPosition={topPosition}
            spellPosition={topLeftSpell}
            spellNumber={spellNumber}
          />
          <DoorSpells
            spells={bottomSpells}
            right={0}
            containerPosition={bottomPosition}
            spellPosition={bottomRightSpell}
            spellNumber={spellNumber}
          />
          <DoorSpells
            spells={bottomSpells}
            right={(419 / 1920) * 100}
            containerPosition={bottomPosition}
            spellPosition={bottomLeftSpell}
            spellNumber={spellNumber}
          />

          <SpellCounter spellNumber={spellNumber} spellGroup="yellow" />
          <SpellCounter spellNumber={spellNumber} spellGroup="blue" />
        </div>
      </div>
    </LayoutGroup>
  );
};

export default GameBoard;

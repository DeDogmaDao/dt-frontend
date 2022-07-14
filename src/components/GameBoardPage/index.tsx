import { LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
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
import Door from "./Door";
import Lightning from "./Lightning";

const GameBoardPage: React.FC = () => {
  const [turnNumber, setTurnNumber] = useState<number | null>(null);
  const [spellNumber, setSpellNumber] = useState<spellNumber>({
    yellow: 0,
    blue: 0,
    yellowCardCount: 0,
    blueCardCount: 0,
  });
  const [currentCard, setCurrentCard] = useState<gameCardType | null>(null);

  const [transferNum, setTransferNum] = useState(false);

  const [doorStage, setDoorStage] = useState(-1);

  // we added here a for loop to change the behavior of spell transfer on winner animation
  useEffect(() => {
    if (doorStage === 0) {
      for (let i = 1; i < 3; i++) {
        setTimeout(() => {
          setSpellNumber((prevState) => ({
            ...prevState,
            ["yellow"]: 50 + 10 * i,
            ["blue"]: 50 + 10 * i,
          }));
        }, 6000 + i * 100);
      }
    }
  }, [doorStage]);
  return (
    <LayoutGroup>
      <div className="flex justify-between items-center w-screen h-[calc(900/1920*100vw)] relative">
        <img
          src="/img/game/main.png"
          className="absolute top-0 left-0 w-full h-full z-10"
        />
        <Door spellNumber={spellNumber} doorStage={doorStage} />
        <Lightning doorStage={doorStage} />
        <div
          className="w-full h-full flex justify-center items-start flex-wrap relative z-10"
          style={{
            transformStyle: "preserve-3d",
            perspective: "60vw",
            perspectiveOrigin: "66.66% 50%",
          }}
        >
          {gameCardData.map((data, index) => {
            return (
              <CardGame
              key={data.total + data.spellGroup + data.spellValue.length}
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
                setDoorStage={setDoorStage}
                doorStage={doorStage}
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

          <SpellCounter
            spellNumber={spellNumber}
            spellGroup="yellow"
            doorStage={doorStage}
          />
          <SpellCounter
            spellNumber={spellNumber}
            spellGroup="blue"
            doorStage={doorStage}
          />
        </div>
      </div>
    </LayoutGroup>
  );
};

export default GameBoardPage;

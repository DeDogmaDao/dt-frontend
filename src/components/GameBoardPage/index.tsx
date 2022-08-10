import { LayoutGroup } from "framer-motion";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
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
  times,
} from "../../utils/game";
import { gameCardType, spellNumber } from "../../types/allTypes";
import Calculation from "./Calculation";

import SpellCounter from "./SpellCounter";
import Door from "./Door";
import Lightning from "./Lightning";
import Diamond from "./Diamond";
import EnchantCardGame from "./EnchantCardGame";
import MagnetAlert from "./MagnetAlert";

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
    if (doorStage === 2) {
      for (let i = 1; i < 5; i++) {
        setTimeout(() => {
          setSpellNumber((prevState) => ({
            ...prevState,
            ["yellow"]: prevState.yellow + 20,
            ["blue"]: prevState.blue + 20,
          }));
        }, times.winnerSpellBombTime + Math.pow(i, 2) * 200);
      }
    }
  }, [doorStage]);

  const videoSource = useMemo(() => {
    return gameCardData.find((card) => card.isWinner);
  }, [gameCardData]);

  return (
    <LayoutGroup>
      <div className="flex justify-between items-center w-screen h-[calc(900/1920*100vw)] relative">
        <img
          src="/img/game/main.png"
          className="absolute top-0 left-0 w-full h-full z-10"
        />
        <Diamond
          spellNumber={spellNumber}
          currentCard={currentCard}
          doorStage={doorStage}
          setDoorStage={setDoorStage}
        />
        {videoSource && (
          <Door
            spellNumber={spellNumber}
            doorStage={doorStage}
            currentCard={currentCard}
            setDoorStage={setDoorStage}
            videoSource={videoSource}
          />
        )}
        {doorStage !== 5 && (
          <Lightning
            doorStage={doorStage}
            setDoorStage={setDoorStage}
            currentCard={currentCard}
            spellNumber={spellNumber}
          />
        )}
        <div
          className="w-full h-full flex justify-center items-start flex-wrap relative z-10"
          style={{
            transformStyle: "preserve-3d",
            perspective: "60vw",
            perspectiveOrigin: "66.66% 50%",
          }}
        >
          <MagnetAlert />
          {gameCardData.map((data, index) => {
            if(data.type ==="enchant"){
              return (
                <EnchantCardGame
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
            }
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

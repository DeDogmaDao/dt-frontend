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
    yellowCardCount:0,
    blueCardCount:0
  });
  const [currentCard, setCurrentCard] = useState<gameCardType | null>(null);

  const [transferNum, setTransferNum] = useState(false);

  return (
    <LayoutGroup>
      <div className="flex justify-between items-center w-screen h-[calc(900/1920*100vw)] relative">
        <img
          src="/media/bg/game.jpg"
          className="absolute top-0 left-0 w-full h-full"
        />

        <div
          className="w-full h-full flex justify-center items-start flex-wrap relative z-10"
          style={{
            transformStyle: "preserve-3d",
            perspective: "55vw",
            perspectiveOrigin: "66.66% 50%",
          }}
        >
          {/* <motion.img
            style={{
              rotateX: "-78deg",
              rotateZ: "0deg",
              rotateY: "0deg",
              scaleY:3,
              scaleX:0.7,
              translateX:(997.44-71)/1920 * 100+"vw",
              translateY:"21.5vw",

            }}
            className="w-[5.15vw] object-contain absolute left-[13vw] top-[20vw]"
            src={"/media/team/member3.png"}
            loading="lazy"
          />
          <motion.img
            style={{
              rotateX: "-78deg",
              rotateZ: "0deg",
              rotateY: "0deg",
              scaleY:3,
              scaleX:0.7,
              translateX:"53.95vw",
              translateY:"21.5vw"

            }}
            className="w-[5.15vw] object-contain absolute left-[13vw] top-[20vw]"
            src={"/media/team/member3.png"}
            loading="lazy"
          /> */}
          <motion.div
            style={{
              rotateX: "0deg",
              rotateZ: "0deg",
              rotateY: "0deg",
              scaleX: 0.7,
              scaleY: 0.9,
            }}
            className="absolute left-[66.65vw] top-[16vw] h-96 w-px bg-green-400"
          ></motion.div>
          <motion.div
            style={{
              rotateX: "90deg",
              rotateZ: "0deg",
              rotateY: "0deg",
              scaleX: 0.7,
              scaleY: 0.9,
              translateX:"53.65vw",
              translateY:"9.4vw"
            }}
            className="absolute left-[13vw] top-[19vw] h-[30vw] w-px bg-purple-400"
          ></motion.div>
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
          <div className="w-[12vw] h-[17vw] absolute top-[15vw] left-[13.2vw] -ml-14 bg-red-500/50"></div>
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

          <div className="absolute left-[30%] top-[8%] w-full h-full">
            <div className="relative w-full h-full">
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

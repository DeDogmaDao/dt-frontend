import {
  bottomRightPosition,
  spellNumber,
  topRightPosition,
} from "../../types/allTypes";
import Spell from "./Spell";

interface props {
  spells: number[];
  containerPosition: topRightPosition;
  spellPosition: bottomRightPosition;
  right: number;
  spellNumber: spellNumber;
}
const DoorSpells: React.FC<props> = ({
  spells,
  containerPosition,
  spellPosition,
  right,
  spellNumber,
}) => {
  const containerStyles = {
    width: `${(containerPosition.width / 1920) * 100}vw`,
    right: `${(containerPosition.right / 1920) * 100}vw`,
    height: `${(containerPosition.height / 900) * 100}vw`,
    top: `${(containerPosition.top / 900) * 100}vw`,
  };

  const spellGroup = right === 0 ? "blue" : "yellow";
  const spellIndex = (spell: number) => {
    return spells.length > 20 ? spell + 1 : spell + 41;
  };

  const spellStyles = (spell: number, spellPosition: any, spells: number[]) => {
    return {
      right:
        right === 0
          ? right + spell * (spellPosition.right / spells.length) + "vw"
          : right - spell * (spellPosition.right / spells.length) + "vw",
      bottom: 0 + spell * (spellPosition.bottom / spells.length) + "vw",
      width: spellPosition.width + "vw",
      height: spellPosition.height + "vw",
    };
  };

  return (
    <div className="absolute z-100 " style={containerStyles}>
      <div className="relative w-full h-full">
        {spells.map((spell) => {
          return (
            <>
              <Spell
                spellIndex={spellIndex(spell)}
                spellGroup={spellGroup}
                spellNumber={spellNumber}
                showOrHidden={false}
                spellStyles={spellStyles(spell, spellPosition, spells)}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DoorSpells;

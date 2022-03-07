import { bottomRightPosition, spellNumber, topRightPosition } from "../../types/allTypes";
import DoorSpell from "./DoorSpell";

interface props {
  spells: number[];
  containerPosition: topRightPosition;
  spellPosition: bottomRightPosition;
  right: number;
  spellNumber:spellNumber;
}
const DoorSpells: React.FC<props> = ({
  spells,
  containerPosition,
  spellPosition,
  right,
  spellNumber
}) => {
  const containerStyles = {
    width: `${(containerPosition.width / 1920) * 100}vw`,
    right: `${(containerPosition.right / 1920) * 100}vw`,
    height: `${(containerPosition.height / 900) * 100}vw`,
    top: `${(containerPosition.top / 900) * 100}vw`,
  };

  return (
    <div className="absolute z-100 " style={containerStyles}>
      <div className="relative w-full h-full">
        {spells.map((spell) => {
          return (
            <DoorSpell spells={spells} spell={spell} spellPosition={spellPosition} right={right} spellNumber={spellNumber} />
          );
        })}
      </div>
    </div>
  );
};

export default DoorSpells;

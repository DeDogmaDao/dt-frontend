import { bottomRightPosition, topRightPosition } from "../../types/allTypes";

interface props {
  spells: number[];
  containerPosition: topRightPosition;
  spellPosition: bottomRightPosition;
  right: number;
}
const DoorSpells: React.FC<props> = ({
  spells,
  containerPosition,
  spellPosition,
  right,
}) => {
  const containerStyles = {
    width: `${(containerPosition.width / 1920) * 100}vw`,
    right: `${(containerPosition.right / 1920) * 100}vw`,
    height: `${(containerPosition.height / 900) * 100}vw`,
    top: `${(containerPosition.top / 900) * 100}vw`,
  };
  const spellStyles = (spell: number) => ({
    right:
      right === 0
        ? right + spell * (spellPosition.right / spells.length) + "vw"
        : right - spell * (spellPosition.right / spells.length) + "vw",
    bottom: 0 + spell * (spellPosition.bottom / spells.length) + "vw",
    width: spellPosition.width + "vw",
    height: spellPosition.height + "vw",
  });
  return (
    <div className="absolute z-100 bg-red-500/30" style={containerStyles}>
      <div className="relative w-full h-full">
        {spells.map((spell) => {
          return (
            <div
              className="rounded-full bg-yellow-500 absolute"
              style={spellStyles(spell)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default DoorSpells;

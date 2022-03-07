import { bottomRightPosition } from "../../types/allTypes";

interface props {
  spells: number[];
  spell: number;
  spellPosition: bottomRightPosition;
  right: number;
}
const DoorSpell: React.FC<props> = ({
  spells,
  spell,
  right,
  spellPosition,
}) => {
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
    <div
      className="rounded-full bg-white absolute"
      style={spellStyles(spell)}
    >
        <div className="w-full h-full rounded-full bg-yellow-500"></div>
        </div>
  );
};

export default DoorSpell;

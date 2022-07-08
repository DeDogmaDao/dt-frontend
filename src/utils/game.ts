export const bottomSpells: number[] = Array.from(Array(40).keys());
export const topSpells: number[] = Array.from(Array(10).keys());
export const bottomPosition = {
  top: 118.5,
  right: 428.5,
  width: 420,
  height: 202,
};
export const bottomRightSpell = {
  bottom: 22.75,
  right: 4.4,
  width: 0.2,
  height: 0.2,
};
export const bottomLeftSpell = {
  bottom: 22.75,
  right: 4.55,
  width: 0.2,
  height: 0.2,
};
export const topPosition = {
  top: 66.5,
  right: 530,
  width: 216,
  height: 31,
};
export const topRightSpell = {
  bottom: 3.65,
  right: 4.55,
  width: 0.2,
  height: 0.2,
};
export const topLeftSpell = {
  bottom: 3.65,
  right: 4.55,
  width: 0.2,
  height: 0.2,
};


export const communityNumStyles: React.CSSProperties = {
  left: "0.3vw",
  bottom: "0vw",
};
export const individualNumStyles: React.CSSProperties = {
  right: "0.5vw",
  bottom: "0vw",
};
export const styles = (column:number,cardIndex:number):React.CSSProperties=> ({
  left: 6.55 + (column % 3) * 6.7 + "vw",
  top: 4 + cardIndex / 50 + "vw",
});
export const spellStyles = (spellIndex: number) => {
  const column = (spellIndex % 3) + 1;
  return {
    right: 5 - column * 0.5 + "vw",
    bottom: -5 + Math.floor(spellIndex / 3) * 0.5 + "vw",
    width: 0.2 + "vw",
    height: 0.2 + "vw",
  };
};
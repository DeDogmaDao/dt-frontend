import { Transition } from "framer-motion";
import { CSSProperties } from "react";

export const bottomSpells: number[] = Array.from(Array(40).keys());
export const topSpells: number[] = Array.from(Array(10).keys());
export const diamondSpells: number[] = Array.from(Array(20).keys());
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
  left: "0.6vw",
  bottom: "0.55vw",
};
export const individualNumStyles: React.CSSProperties = {
  right: "0.6vw",
  bottom: "0.55vw",
};
export const styles = (column:number,cardIndex:number):React.CSSProperties=> ({
  left: 6.55 + (column % 3) * 6.7 + "vw",
  top: 4 + cardIndex / 50 + "vw",
});
export const spellStyles = (spellIndex: number):CSSProperties => {
if(spellIndex === 1){
  return {
    right: 2.8 + "vw",
    bottom: -7.725 + "vw",
    width: 0.25 + "vw",
    height: 0.15 + "vw",
    transform:"rotate(15deg) skew(30deg,0deg)",
  };
}
if(spellIndex === 2){
  return {
    right: 2.1 + "vw",
    bottom: -7.725  + "vw",
    width: 0.25 + "vw",
    height: 0.15 + "vw",
    transform:"rotate(-15deg) skew(-30deg,0deg)",
  };
}
return {
  right: 2.44 + "vw",
  bottom: -7.76  + "vw",
  width: 0.28 + "vw",
  height: 0.18 + "vw",
};
};

export const transitionSpell =(spellIndex:number):Transition=>({ duration: 5, type:"spring", stiffness:(spellIndex%3+1) * 200 *(Math.floor(Math.random()*4 + 7)/10), mass:10 * (Math.floor(Math.random()*4 + 7)/10), damping:40 * (Math.floor(Math.random()*4 + 7)/10), velocity:-10 })
export const colorSpell=(condition:boolean) => condition ? "yellow" : "#00FFFF";
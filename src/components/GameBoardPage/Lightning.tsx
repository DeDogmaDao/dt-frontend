import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { colorSpell, times } from "../../utils/game";
import { createLightning } from "../../utils/util";

interface props {
  doorStage: number;
  setDoorStage: Dispatch<SetStateAction<number>>;
  spellNumber: spellNumber;
  currentCard: gameCardType | null;
}
const Lightning: React.FC<props> = ({
  doorStage,
  setDoorStage,
  spellNumber,
  currentCard,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const spellDiff = spellNumber.blue - spellNumber.yellow;
    const spellColor =
      spellDiff !== 0
        ? colorSpell(spellDiff < 0)
        : colorSpell(currentCard?.spellGroup === "yellow");
    const aspectRatio = window.innerWidth / 1536;
    const canvasSize = 470 * aspectRatio;
    canvasRef.current!.width = canvasSize;
    canvasRef.current!.height = canvasSize;
    const ctx = canvasRef.current!.getContext("2d");
    const center = { x: canvasSize / 2, y: 0 };
    const minSegmentHeight = 5;
    const groundHeight = canvasSize - 0;
    const color = spellColor;
    const roughness = 2;
    const maxDifference = canvasSize / 5;
    ctx!.globalCompositeOperation = "lighter";

    ctx!.strokeStyle = color;
    ctx!.shadowColor = color;
    ctx!.fillStyle = color;

    ctx!.clearRect(0, 0, canvasSize, canvasSize);
    ctx!.fillStyle = spellColor;

    ctx!.globalAlpha = 1;

    const renderLightning = () => {
      ctx!.shadowBlur = 0;
      ctx!.globalCompositeOperation = "source-over";
      ctx!.clearRect(0, 0, canvasSize, canvasSize);
      ctx!.globalCompositeOperation = "lighter";
      ctx!.shadowBlur = 15;
      ctx!.lineWidth = 3;
      const Lightning = createLightning(
        groundHeight,
        center,
        canvasSize,
        maxDifference,
        minSegmentHeight,
        roughness
      );
      ctx!.beginPath();
      for (let i = 0; i < Lightning.length; i++) {
        ctx!.lineTo(Lightning[i].x, Lightning[i].y);
      }
      ctx!.stroke();
      // what da fuck?
      requestAnimationFrame(renderLightning);
    };

    if (doorStage === 3) {
      setTimeout(() => {
        renderLightning();
        setTimeout(() => {
          setDoorStage(4);
        }, times.door4StageTime);
      }, times.lightningDelayTime);
    }
  }, [doorStage]);
  return (
    <div className="absolute top-[5.8vw] left-[51.4vw] z-110 h-[96] ">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Lightning;

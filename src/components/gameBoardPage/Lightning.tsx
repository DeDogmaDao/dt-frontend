import { useEffect, useRef } from "react";

const Lightning: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const aspectRatio = window.innerWidth / 1536;
    const canvasSize = 470 * aspectRatio;
    canvasRef.current!.width = canvasSize;
    canvasRef.current!.height = canvasSize;
    const ctx = canvasRef.current!.getContext("2d");
    const center = { x: canvasSize / 2, y: 0 };
    const minSegmentHeight = 5;
    const groundHeight = canvasSize - 0;
    const color = "hsl(180,80%,80%)";
    const roughness = 2;
    const maxDifference = canvasSize / 5;
    ctx!.globalCompositeOperation = "lighter";

    ctx!.strokeStyle = color;
    ctx!.shadowColor = color;
    ctx!.fillStyle = color;

    ctx!.clearRect(0, 0, canvasSize, canvasSize);
    ctx!.fillStyle = "hsla(0, 0%, 10%, 0.2)";

    ctx!.globalAlpha = 1.0;
    const createLightning = () => {
      let segmentHeight = groundHeight - center.y;
      let lights: { x: number; y: number }[] = [];
      lights.push({ x: center.x, y: center.y });
      lights.push({
        x: Math.random() * (canvasSize - 100) + 50,
        y: groundHeight + (Math.random() - 0.9) * 50,
      });
      let currDiff = maxDifference;
      while (segmentHeight > minSegmentHeight) {
        let newSegments: { x: number; y: number }[] = [];
        for (let i = 0; i < lights.length - 1; i++) {
          const start = lights[i];
          const end = lights[i + 1];
          const midX = (start.x + end.x) / 2;
          const midY = (start.y + end.y) / 2;
          const newX = midX + (Math.random() * 2 - 1) * currDiff;
          newSegments.push(start, { x: newX, y: midY });
        }
        // @ts-ignore
        newSegments.push(lights.pop());
        lights = newSegments;
        currDiff = currDiff / roughness;
        segmentHeight = segmentHeight / 2;
      }
      return lights;
    };

    const renderLightning = () => {
      ctx!.shadowBlur = 0;
      ctx!.globalCompositeOperation = "source-over";
      ctx!.clearRect(0, 0, canvasSize, canvasSize);
      ctx!.globalCompositeOperation = "lighter";
      ctx!.shadowBlur = 15;
      const Lightning = createLightning();
      ctx!.beginPath();
      for (let i = 0; i < Lightning.length; i++) {
        ctx!.lineTo(Lightning[i].x, Lightning[i].y);
      }
      ctx!.stroke();
      // what da fuck?
      setTimeout(() => {
        requestAnimationFrame(renderLightning);
      }, 40);
    };
    renderLightning();
  }, []);
  return (
    <div className="absolute top-[5.8vw] left-[51.4vw] z-110 h-[96] ">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Lightning;

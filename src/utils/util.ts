import { createLightningType } from "../types/allTypes";

// shimmer effect for image placeholder
export const shimmer = (w: number, h: number): string => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string): string =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
// export const repeater = async (list:[]) {
//   for (item of list) {
//     console.log(item);
//     await delay(2000);
//   }
// }

export const topTransformWheel = (evt: any) => {
  evt.preventDefault();
  let direction = evt.detail < 0 || evt.wheelDelta > 0 ? 1 : -1;

  if (direction > 0) {
    window.scrollTo({
      top: window.scrollY - 30,
      left: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: window.scrollY + 30,
      left: 0,
      behavior: "smooth",
    });
  }
};

export const createLightning: createLightningType = (
  groundHeight,
  center,
  canvasSize,
  maxDifference,
  minSegmentHeight,
  roughness
) => {
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

export const cardPlaceDetector = (
  activeIndexCardWithGroup: number[],
  index: number
): number => {
  if (index === activeIndexCardWithGroup[0]) {
    return -1;
  }
  if (index === activeIndexCardWithGroup[2]) {
    return 1;
  }
  return 0;
};
export const cardPlaceDetectorUpper = (
  activeIndexCardWithGroup: number[],
  index: number
): number => {
  if (index === activeIndexCardWithGroup[0]) {
    return 0;
  }
  if (index === activeIndexCardWithGroup[2]) {
    return 2;
  }
  return 1;
};

export const cardIndexHandler = (index: number, quantity: number): number[] => {
  if(index === -1){
    index = quantity -1;
  }
  if (index === 0) {
    return [quantity - 1, index, index + 1];
  } else if (index === quantity - 1) {
    return [index - 1, index, 0];
  } else {
    return [index - 1, index, index + 1];
  }
};

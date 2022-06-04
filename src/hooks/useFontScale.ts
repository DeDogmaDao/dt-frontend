import { useLayoutEffect } from "react";

export const useFontScale = () => {
  useLayoutEffect(() => {
    const htmlTag: HTMLHtmlElement = document.querySelector("html")!;
    const fontSize: number = parseFloat(
      window.getComputedStyle(htmlTag).fontSize
    );
    const resizeHandlerFont = () => {
      if (window.innerWidth > 1535) {
        const windowWidth = window.innerWidth;
        const scaleFont = windowWidth / 1536;
        htmlTag!.style.fontSize = scaleFont * fontSize + "px";
      } else {
        htmlTag!.style.fontSize = fontSize + "px";
      }
    };
    resizeHandlerFont();
    window.addEventListener("resize", resizeHandlerFont);

    return () => {
      window.removeEventListener("resize", resizeHandlerFont);
    };
  }, []);
};

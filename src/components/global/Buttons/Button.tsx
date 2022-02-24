import { forwardRef } from "react";

interface props {
  customClass?: string;
  clicking?: () => void;
  content:string;
}
type refType = HTMLButtonElement;

const Button = forwardRef<refType, props>(
  ({ content, customClass, clicking }, ref) => {
    return (
      <button
        onClick={clicking}
        ref={ref}
        className={`w-32 h-8 text-blackPrime bg-primary-500 text-base ${customClass}`}
      >
          {content}
      </button>
    );
  }
);

export default Button;

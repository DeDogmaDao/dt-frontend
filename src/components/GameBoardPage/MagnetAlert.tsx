import { useEffect, useState } from "react";
import { gameCardType } from "../../types/allTypes";

interface props {
  currentCard: gameCardType | null;
}
const MagnetAlert: React.FC<props> = ({ currentCard }) => {
  const [on, setOn] = useState(0);

  useEffect(() => {
    if (currentCard?.type === "bandit") {
      setOn(4);
    } else if (on > 0) {
      setOn((prevState) => prevState - 1);
    }
  }, [currentCard]);
  return (
    <div
      className={`absolute top-[8vw] left-[30vw] h-[3vw] w-[7vw] text-[1.5vw] font-bold duration-1000
      rounded-sm  ring-4 ring-inset flex justify-center items-center ring-neutral-600 text-neutral-600 ${
        on > 0 && "!ring-red-500 !text-red-500 "
      }`}
    >
      <p className={`duration-1000 ${on > 2 && "animate-glowText"}`}>Magnet</p>
    </div>
  );
};

export default MagnetAlert;

import { useEffect, useState } from "react";
import { gameCardType } from "../../types/allTypes";

interface props {
  currentCard: gameCardType | null;
}
const MagnetAlert: React.FC<props> = ({ currentCard }) => {
  const [on, setOn] = useState(0);

  useEffect(() => {
    if (currentCard?.type === "bandit") {
      setOn(3);
    } else if (on > 0) {
      setOn((prevState) => prevState - 1);
    }
  }, [currentCard]);
  return (
    <div
      className="absolute top-[8vw] left-[30vw] h-[3vw] w-[7vw] text-[1.5vw] font-bold text-red-500 
        rounded-sm ring-red-500 ring-4 ring-inset flex justify-center items-center "
    >
      <p className="animate-glowText">Magnet</p>
    </div>
  );
};

export default MagnetAlert;

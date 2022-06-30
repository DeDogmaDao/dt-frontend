import { MouseEventHandler, useState } from "react";
import { useFreeze } from "../../../hooks/useFreeze";
import PopUp from "../../global/PopUp";

const MinReceipt :React.FC = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    useFreeze(isOpenModal);
    const modalBackdropClickHandler: MouseEventHandler = (e) => {
      const el = e.target as HTMLDivElement;
      e.stopPropagation();
      if (el.parentElement?.parentElement!.matches("#pop-up")) {
        setIsOpenModal(false);
      }
    };
    return (
        <PopUp
        isOpen={isOpenModal}
        id="pop-up"
        onBackdropClick={(e) => modalBackdropClickHandler(e)}
        >
            <div>
                
            </div>
        </PopUp>
    );
}

export default MinReceipt;
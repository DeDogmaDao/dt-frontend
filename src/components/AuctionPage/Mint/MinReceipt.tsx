import { MouseEventHandler, useEffect, useState } from "react";
import { useFreeze } from "../../../hooks/useFreeze";
import { popUpType, statusType } from "../../../types/allTypes";
import PopUp from "../../global/PopUp";

interface props {
  status: statusType;
}
const MinReceipt: React.FC<props> = ({ status }) => {
  const [modalType, setModalType] = useState<popUpType>("neutral");
  const [isOpenModal, setIsOpenModal] = useState(false);
  useFreeze(isOpenModal);
  const modalBackdropClickHandler: MouseEventHandler = (e) => {
    const el = e.target as HTMLDivElement;
    e.stopPropagation();
    if (el.parentElement?.parentElement!.matches("#pop-up")) {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    if (status.isError) {
      setModalType("failed");
      setIsOpenModal(true);
    } else if (status.isSuccess) {
      setModalType("succeeded");
      setIsOpenModal(true);
    } else {
      setModalType("neutral");
    }
  }, [status.isError, status.isLoading, status.isSuccess]);

  return (
    <PopUp
      isOpen={isOpenModal}
      id="pop-up"
      onBackdropClick={(e) => modalBackdropClickHandler(e)}
      type={modalType}
    >
      <div></div>
    </PopUp>
  );
};

export default MinReceipt;

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
      setModalType("successful");
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
      <div className="w-full h-full flex flex-col px-8 gap-y-6 pt-10">
        <div className="w-full flex justify-between">
          <span>Card name</span>
          <span>{"cardName"}</span>
        </div>
        <div className="w-full flex justify-between">
          <span>Amount paid</span>
          <span>{"6.687" + " ETH"}</span>
        </div>
        <div className="w-full flex justify-between">
          <span>Transaction ID</span>
          <span>{"jhkjh329874"}</span>
        </div>
        <div className="w-full flex justify-between">
          <span>Transaction time</span>
          <span>{"2022/4/1 15:46"}</span>
        </div>
      </div>
    </PopUp>
  );
};

export default MinReceipt;

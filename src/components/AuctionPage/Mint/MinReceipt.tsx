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
      <div className="w-full h-full flex flex-col px-8 gap-y-6 pt-10 text-base font-normal text-white/60">
        <div className="w-full flex justify-between text-base font-normal">
          <span>Card name</span>
          <span className="text-white">{"cardName"}</span>
        </div>
        <div className="w-full flex justify-between">
          <span>Amount paid</span>
          <span className="text-white">{"6.687" + " ETH"}</span>
        </div>
        <div className="w-full flex justify-between">
          <span>Transaction ID</span>
          <span className="text-white">{"jhkjh329874"}</span>
        </div>
        <div className="w-full flex justify-between">
          <span>Transaction time</span>
          <span className="text-white">{"2022/4/1 15:46"}</span>
        </div>
        <div className="w-full border-t-2 border-white/40 border-dashed" />
        <p className="text-center text-sm"> See more details of the transaction in Profile</p>
      </div>
    </PopUp>
  );
};

export default MinReceipt;

import Image from "next/image";
import { MouseEventHandler } from "react";
import { web3ModalHeaderImg } from "../../../store/img";
import { popUpType } from "../../../types/allTypes";
import Modal from "../Modal";
interface props {
  isOpen: boolean;
  id: string;
  onBackdropClick: MouseEventHandler<HTMLDivElement> | undefined;
  type:popUpType;
}
const colors={succeeded:"#2FFF69",failed:"#E31515",neutral:""}
const PopUp: React.FC<props> = ({ id, isOpen, onBackdropClick, children,type }) => {
  return (
    <Modal id={id} isOpen={isOpen} onBackdropClick={onBackdropClick}>
      <div className="relative w-full h-full flex justify-center items-center backdrop-blur-[.8125rem]">
        <div
          className="w-[30.8125rem] h-[30.1875rem] rounded-[1.25rem] bg-body-800
         overflow-hidden ring-2 ring-primary-500/30 flex flex-col justify-start shadow-[0_58px_33px_-42px_rgba(44,237,255,0.29)]"
        >
          <span className="w-full h-[6.3125rem] will-change-transform relative flex justify-center items-center">
            <h3 className="text-2xl font-bold absolute z-10">Connect Wallet</h3>
            <span className=" w-full h-full relative">
              <Image
                alt="modal header"
                src={web3ModalHeaderImg}
                layout={"fill"}
                quality={90}
                placeholder="blur"
              />
              <span className="w-full h-full absolute top-0 left-0 opacity-30" style={{backgroundColor:colors[type]}}  />
            </span>
          </span>
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
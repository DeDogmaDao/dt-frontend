import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent, MouseEventHandler, useEffect } from "react";
import ClientOnly from "../../../hoc/ClientOnly";
import Portal from "../Portal";
interface props {
  isOpen: boolean;
  id:string;
  onBackdropClick: MouseEventHandler<HTMLDivElement> | undefined;
}
const Modal: React.FC<props> = ({ isOpen,id, onBackdropClick, children }) => {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <ClientOnly>
      <Portal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="overflow-hidden fixed top-0 left-0 w-screen h-screen z-[15000] backdrop-blur-[.8125rem]"
              onClick={onBackdropClick}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </ClientOnly>
  );
};

export default Modal;

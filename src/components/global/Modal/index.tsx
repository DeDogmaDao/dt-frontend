import ClientOnly from "../../../hoc/ClientOnly";
import Portal from "../Portal";

const Modal:React.FC = () =>{

    return(
        <ClientOnly>
            <Portal id="connect-wallet-modal">
                
            </Portal>
        </ClientOnly>
    );
}

export default Modal;
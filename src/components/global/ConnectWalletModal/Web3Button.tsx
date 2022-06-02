import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { walletImgData } from "../../../store/img";

interface props {
    onclick:any;
    name:string;
    index:number;
}
const Web3Button:React.FC<props> =({onclick,name,index}) => {

  return (
      <button className="px-5 w-10/12 h-16 hover:bg-primary-500/10 py-1 text-white 
       duration-300 active:scale-95 flex justify-start items-center gap-x-7 rounded-[.625rem]"
       onClick={onclick}>
          <motion.span className="w-10 h-10 ml-14 will-change-transform">
            <span className="w-full h-full flex justify-center items-center">
              <Image
                alt="wallet"
                src={walletImgData[index]}
                layout={"intrinsic"}
                quality={100}
                placeholder="blur"
              />
            </span>
          </motion.span>
          <p className="text-[1.3125rem] font-semibold">{name}</p>
      </button>
  ) 
  
}

export default Web3Button;
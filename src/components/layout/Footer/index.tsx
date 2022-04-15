import Image from "next/image";
import { footerData } from "../../../store/allData";
import Social from "./Social";
const Footer: React.FC = () => {
  return (
    <>
      <footer className="h-full w-full flex flex-col justify-center items-center z-100 bg-neutral-900">
        <div className="-mt-14 mb-3"><Image src="/img/logo/treasure.png" width={284} height={94} /></div>
        <h3 className="mb-3" >NFT Game and Collection by <span className="text-yellow-300">DDD</span></h3>
        <span className="w-[30px] h-[6px] mb-16 bg-yellow-300" />
        <ul className="flex justify-center items-center gap-x-3 mb-36">
          {footerData.map((data) => {
            return <Social data={data} />;
          })}
        </ul>
        <p className="mb-40 text-large-light">&copy; COPYWRITES 2022 DDD. ALL RIGHTS RESERVED</p>
      </footer>
    </>
  );
};

export default Footer;

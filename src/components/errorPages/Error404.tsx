import Image from "next/image";
import Link from "next/link";
import { errorImgs } from "../../store/img";
import { ArrowRightSVG } from "../../store/svg";

const Error404: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center mb-20">
      <span className="w-[18rem] h-[10.9375rem] sm:w-[25rem] sm:h-[15.25rem] relative">
        <span className="w-full h-full">
          <Image
            alt="dedogmadao 404"
            src={errorImgs.error404}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
      <h1 className="text-6xl font-medium">404</h1>
      <p className="text-xl font-bold mt-4">Opps, Something went wrong!</p>
      <Link href={"/"}>
        <a className="bg-primary-500 hover:bg-primary-800 duration-300 flex justify-center items-center gap-x-3 px-5 py-2 mt-8 rounded-full text-xl font-medium text-black">
          Back to home
          <span className="fill-black w-4 h-4">
            <ArrowRightSVG />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Error404;

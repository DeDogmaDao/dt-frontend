import Image from "next/image";
import Link from "next/link";
import { errorImgs } from "../../store/img";
import { ReloadSVG } from "../../store/svg";

const Error500: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center mb-20">
      <span className="w-[18rem] h-[10.9375rem] sm:w-[25rem] sm:h-[15.25rem] relative">
        <span className="w-full h-full">
          <Image
            alt="dedogmadao 500"
            src={errorImgs.error500}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
      <h1 className="text-6xl font-medium mt-6">500</h1>
      <p className="text-2xl font-normal w-[18rem] sm:w-[28rem] mt-4 text-center">
        We’re working on fixing the problem. Please try again.
      </p>
      <Link href={"/"}>
        <a className="duration-300 flex justify-center items-center gap-x-3 px-5 py-2 mt-8 rounded-full text-xl font-medium text-primary-500">
          Back to home
          <span className="stroke-primary-500 fill-primary-500 w-6 h-6">
            <ReloadSVG />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Error500;

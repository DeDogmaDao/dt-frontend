import Image from "next/image";
import { useRouter } from "next/router";
import { errorImgs } from "../../store/img";
import { ReloadSVG } from "../../store/svg";

const Error500: React.FC = () => {
  const router = useRouter();
  const refreshHandler = () => {
    router.reload();
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center mb-32">
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
      <button
        onClick={refreshHandler}
        className="duration-300 flex justify-center items-center gap-x-3 px-5 py-2 mt-8 rounded-full text-xl font-medium group text-primary-500 hover:text-primary-200 cursor-pointer"
      >
        <span className="stroke-primary-500 fill-primary-500 group-hover:stroke-primary-200 group-hover:fill-primary-200 w-6 h-6 cursor-pointer duration-300">
          <ReloadSVG />
        </span>
        Refresh page
      </button>
    </div>
  );
};

export default Error500;

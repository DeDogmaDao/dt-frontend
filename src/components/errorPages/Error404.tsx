import Image from "next/image";
import { errorImgs } from "../../store/img";

const Error404: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <span className="w-[25rem] h-[15.25rem] relative">
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
      <button>Back to home</button>
    </div>
  );
};

export default Error404;

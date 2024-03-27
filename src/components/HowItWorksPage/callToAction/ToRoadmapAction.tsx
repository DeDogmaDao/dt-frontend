import Image from "next/image";
import Link from "next/link";
import CallToActionSvg from "./CallToActionSvg";
import { AngleRightSVG } from "../../../store/svg";
import { allBgImg } from "../../../store/img";

const ToRoadmapAction: React.FC = () => {
  return (
    <div className="w-full h-[30rem] sm:h-[40rem] md:h-[50rem] justify-center relative z-0">
      <div className="absolute top-0 left-0 w-full h-[7.5rem] bg-gradient-to-b from-bodymain to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[7.5rem] bg-gradient-to-t from-bodymain to-transparent z-[1]" />
      <span className="absolute w-full h-full sm:aspect-[1440/768]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image
            alt="dedogmadao background"
            src={allBgImg.sec4}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
      <div className="flex flex-col justify-start items-center z-10 absolute top-0 left-0 w-full h-full">
        <span className="w-[1.875rem] h-[.375rem] mt-12 md:mt-24 lg:mt-32 xl:mt-36 bg-primary-500" />
        <h2 className="mt-8 text-[1.25rem] ssm:text-[1.75rem] sm:text-[2.375rem] font-bold sm:font-bold">
          Our <span className="text-prbg-primary-500">Roadmap</span>
        </h2>
        <p className="text-large-medium font-light mt-3 w-[90%] md:w-[70%] lg:w-[55%] mx-auto text-center">
          Roadmaps focus on providing a list of what our project will accomplish
          and what features our product will include
        </p>
        <div className="relative w-full flex justify-center items-center">
          <div className="absolute top-[-20%] left-[-30%] ssm:left-[-5%] sm:left-[5%] md:left-[13%] lg:left-[20%] xl:left-[24%] scale-y-[65%] scale-x-[40%] sm:scale-[65%] lg:scale-[80%] xl:scale-100">
            <CallToActionSvg />
          </div>
          <Link href={"/roadmap"} scroll={false}>
            <button
              className="px-5 py-3 mt-11 bg-primary-500 hover:bg-primary-900/80 
            text-neutral-50 hover:text-neutral-50 rounded-full text-small-bold flex gap-x-2 
            duration-500 border-2 border-transparent hover:border-primary-500 stroke-black hover:stroke-white"
            >
              <span>Roadmap Document</span>
              <span className="animate-bounceX w-2 aspect-[10/17] mt-1">
                <AngleRightSVG fill="none" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToRoadmapAction;

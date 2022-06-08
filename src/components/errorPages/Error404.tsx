import Image from "next/image";

const Error404: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <span className="absolute h-full xl:w-full aspect-[1440/1017]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image
            alt="dedogmadao background"
            src={allBgImg.sec3}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
    </div>
  );
};

export default Error404;

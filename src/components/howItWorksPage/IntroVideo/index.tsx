import Image from "next/image";

const InteroVideo: React.FC = () => {
  return (
    <div className="w-full h-[50.875rem] flex justify-center items-center relative">
      <span className="w-full  absolute aspect-[1440/905]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image src={"/img/bg/sec2.png"} layout="fill" />
        </span>
      </span>
      <div className="aspect-video w-[58.125rem] rounded-[30px] z-10 mt-[-10%]">
        <video
          controls
          poster="/img/bg/Story.png"
          className="aspect-video w-[58.125rem] rounded-[30px] z-10 object-cover"
        >
          <source src={"/img/video/intro.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default InteroVideo;

import BackToTopSVG from "../../svgs/backtotop.svg";

const BackToTop: React.FC = () => {
  return (
    <button className="flex flex-col justify-center items-center ">
      <span className="z-[200] will-change-transform stroke-primary-500 w-[3.125rem] aspect-[5/6]">
        <BackToTopSVG />
      </span>
      <div className="text-sm font-normal">Back to Top</div>
    </button>
  );
};

export default BackToTop;

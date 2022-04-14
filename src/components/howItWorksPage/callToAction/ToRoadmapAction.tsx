const ToRoadmapAction: React.FC = () => {
  return (
    <div className="w-full h-full justify-center pb-96">
      <div className="flex flex-col justify-start items-center">
        <span className="w-7 h-1 mt-36 bg-yellow-300" />
        <h3 className="mt-8">
          Our <span className="text-yellow-300">Roadmap</span>
        </h3>
        <p className="text-large-medium mt-3 w-[55%] mx-auto text-center">
          Roadmaps focus on providing a list of what your project will
          accomplish and what features your product will include
        </p>
      </div>
    </div>
  );
};

export default ToRoadmapAction;

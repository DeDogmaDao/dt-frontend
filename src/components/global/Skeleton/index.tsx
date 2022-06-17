interface props {
  size: {
    width: number | string;
    height: number | string;
  };
  color?: string;
  classNames?: string;
}
const Skeleton: React.FC<props> = ({ size, classNames, color }) => {
  return (
    <div
      style={{ ...size, backgroundColor: color }}
      className={`bg-secondary-200 rounded-full animate-pulse ${
        " " + classNames
      }`}
    ></div>
  );
};

export default Skeleton;

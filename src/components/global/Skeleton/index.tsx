interface props {
  size: {
    width: number | string;
    height: number | string;
  };
  type: "circle" | "rectangle";
  color?: string;
  classNames?: string;
}
const Skeleton: React.FC<props> = ({ size, type, classNames, color }) => {
  return (
    <div
      style={{ ...size }}
      className={`bg-secondary-50 rounded-full ${" " + classNames}`}
    ></div>
  );
};

export default Skeleton;

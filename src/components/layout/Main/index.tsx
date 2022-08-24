
interface props {
  children:React.ReactNode;
}

const Main: React.FC<props> = (props) => {
  return <main className="w-full min-h-screen">{props.children}</main>;
};

export default Main;

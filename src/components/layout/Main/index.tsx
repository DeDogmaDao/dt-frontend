const Main: React.FC = (props) => {
  return (
      <main className="overflow-hidden w-full min-h-screen">
        {props.children}
        </main>
  );
};

export default Main;
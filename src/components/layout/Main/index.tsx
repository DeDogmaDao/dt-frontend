import { AnimatePresence } from "framer-motion";

const Main: React.FC = (props) => {
  return (
    <AnimatePresence>
      <main className="w-full min-h-screen">
        {props.children}
      </main>
    </AnimatePresence>
  );
};

export default Main;

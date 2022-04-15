import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
const Layout: React.FC = (props) => {
  const router = useRouter();
  const gameBoardCondition = router.asPath === "/gameboard";
  const underConstructionCondition = router.asPath === "/underconstruction";
  return (
    <div
      id="__layout"
      className="w-full h-full  flex flex-col justify-between items-start overflow-hidden relative"
    >
      {!gameBoardCondition && !underConstructionCondition && <Header />}
      <AnimatePresence exitBeforeEnter>
      <Main key={router.asPath} >{props.children}</Main>
      </AnimatePresence>
      {!gameBoardCondition && !underConstructionCondition && <Footer />}
    </div>
  );
};

export default Layout;

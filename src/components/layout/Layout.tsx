import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { useMemo } from "react";
const Layout: React.FC = (props) => {
  const router = useRouter();
  const gameBoardCondition = router.asPath === "/gameboard";
  const underConstructionCondition = router.asPath === "/underconstruction";
  const roadmapCondition = router.asPath === "/roadmap";

  const layoutCondition = useMemo(() => {
    return [
      !gameBoardCondition && !underConstructionCondition,
      !gameBoardCondition && !underConstructionCondition && !roadmapCondition,
    ];
  }, [router.asPath]);
  return (
    <div
      id="__layout"
      className="w-full h-full  flex flex-col justify-between items-start overflow-hidden relative"
    >
      {layoutCondition[0] && <Header />}
      <AnimatePresence exitBeforeEnter>
        <Main key={router.asPath}>{props.children}</Main>
        {layoutCondition[1] && <Footer />}
      </AnimatePresence>
    </div>
  );
};

export default Layout;

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useRouter } from "next/router";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useMemo } from "react";
import { usePathCondition } from "../../hooks/usePathCondition";

interface props {
  children:React.ReactNode;
}

const Layout: React.FC<props> = (props) => {
  const router = useRouter();

  // const gameBoardCondition = router.asPath === "/gameboard";
  // const underConstructionCondition = router.asPath === "/underconstruction";
  // const roadmapCondition = router.asPath === "/roadmap";

  // const layoutCondition = useMemo(() => {
  //   return [
  //     !gameBoardCondition && !underConstructionCondition,
  //     !gameBoardCondition && !underConstructionCondition && !roadmapCondition,
  //   ];
  // }, [router.pathname]);



  const exitCompleteHandler = () => {
    const urlHash = window.location.hash;
    if (urlHash) {
      setTimeout(() => {
        const section = document.querySelector(`${urlHash}`);
        section!.scrollIntoView();
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const layoutHeaderException = usePathCondition(["/gameboard","/underconstruction"]);
  const layoutFooterException = usePathCondition(["/gameboard","/underconstruction", "/roadmap"]);

  return (
    <LayoutGroup>
      <div
        id="__layout"
        className="w-full h-full  flex flex-col justify-between items-start overflow-hidden relative"
      >
        {!layoutHeaderException && <Header />}
        <AnimatePresence exitBeforeEnter onExitComplete={exitCompleteHandler}>
          <Main key={router.pathname}>{props.children}</Main>
          {!layoutFooterException && <Footer />}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};

export default Layout;

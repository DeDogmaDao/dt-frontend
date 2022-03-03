import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useRouter } from "next/router";
const Layout: React.FC = (props) => {
  const router = useRouter();
  const gameBoardCondition = router.asPath === "/gameboard";
  return (
    <div
      id="__layout"
      className="w-full h-full  flex flex-col justify-between items-start overflow-hidden"
    >
      {!gameBoardCondition && <Header />}
      <Main>{props.children}</Main>
      {!gameBoardCondition && <Footer />}
    </div>
  );
};

export default Layout;

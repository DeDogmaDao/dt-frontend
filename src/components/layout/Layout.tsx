import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout: React.FC = (props) => {
  return (
    <div id="__layout" className="w-full h-full  flex flex-col justify-between items-start overflow-hidden"
    >
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;

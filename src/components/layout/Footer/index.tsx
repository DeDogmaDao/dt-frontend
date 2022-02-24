import { footerData } from "../../../store/allData";
import Social from "./Social";
const Footer: React.FC = () => {
  return (
    <>
      <footer className="h-24 w-full flex justify-between items-center">
        <p className="ml-40">&copy;2022 Nepoleia. ALL RIGHTS RESERVED</p>
        <ul className="flex justify-center items-center gap-x-3 mr-40">
          {footerData.map((data) => {
            return <Social data={data} />;
          })}
        </ul>
      </footer>
    </>
  );
};

export default Footer;

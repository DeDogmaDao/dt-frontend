import { footerData } from "../../../store/allData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer: React.FC = () => {
  return (
    <>
      <footer className="h-24 w-full flex justify-between items-center">
        <p className="ml-40">&copy;2022 Nepoleia. ALL RIGHTS RESERVED</p>
        <ul className="flex justify-center items-center gap-x-3 mr-40">
          {footerData.map((data) => {
            return (
              <li className="text-xl hover:text-primary-400 hover:scale-125 duration-700">
                <a href={data.href} target="_blank">
                  <FontAwesomeIcon icon={data.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
};

export default Footer;

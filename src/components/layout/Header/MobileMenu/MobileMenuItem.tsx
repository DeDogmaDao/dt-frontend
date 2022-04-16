import Link from "next/link";
import { LinkType } from "../../../../types/allTypes";

interface props {
  link: LinkType;
}
const MobileMenuItem: React.FC<props> = ({ link }) => {
  return (
    <li>
      <Link href={link.ref}>
        <div>{link}</div>
      </Link>
    </li>
  );
};

export default MobileMenuItem;

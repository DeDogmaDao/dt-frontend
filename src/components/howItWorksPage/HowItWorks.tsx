import Carosel from "../global/Carosel";
import FAQ from "./FAQ";
import { teamData } from "../../store/allData";
import Card from "../global/Card";
import Tabs from "../global/Tabs";
import HeaderImg from "./HeaderImg";
import SecOne from "./SecOne";

const teamClone = [...teamData,...teamData,...teamData,...teamData,...teamData,]
const HowItWorks:React.FC = () => {


    return(
        <>
        <HeaderImg />

        <SecOne />
        <Carosel allData={teamClone} Item={Card} initialQuantity={100} />
        <Tabs />
        <FAQ />
        </>
    )
}


export default HowItWorks;
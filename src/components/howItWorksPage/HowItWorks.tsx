import Carosel from "../global/Carosel";
import FAQ from "./FAQ";
import { teamData } from "../../store/allData";
import Card from "../global/Card";
import Tabs from "../global/Tabs";
import HeaderImg from "./HeaderImg";

const teamClone = [...teamData,...teamData,...teamData,...teamData,...teamData,]
const HowItWorks:React.FC = () => {


    return(
        <>
        <HeaderImg />
        <Carosel allData={teamClone} Item={Card} initialQuantity={100} />
        <Tabs />
        <FAQ />
        </>
    )
}


export default HowItWorks;
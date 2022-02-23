import Carosel from "../global/Carosel";
import FAQ from "./FAQ";
import { teamData } from "../../store/allData";
import Card from "../global/Card";

const teamClone = [...teamData,...teamData,...teamData,...teamData,...teamData,]
const HowItWorks:React.FC = () => {


    return(
        <>
        <Carosel allData={teamClone} Item={Card} initialQuantity={100} />
        <FAQ />
        </>
    )
}


export default HowItWorks;
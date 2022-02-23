import Carosel from "../global/Carosel";
import FAQ from "./FAQ";
import { teamData } from "../../store/allData";
import Card from "../global/Card";
const HowItWorks:React.FC = () => {


    return(
        <>
        <Carosel allData={teamData} Item={Card} initialQuantity={5} />
        <FAQ />
        </>
    )
}


export default HowItWorks;
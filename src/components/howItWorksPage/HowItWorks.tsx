import Benefits from "./benefits/Benefits";
import ToRoadmapAction from "./callToAction/ToRoadmapAction";
import Tabs from "./Tabs";


const HowItWorks:React.FC = () => {


    return(
        <>
        
        {/* <HeaderImg />

        <SecOne />
        <Carosel allData={teamClone} Item={Card} initialQuantity={100} />
        <FAQ />
        <Tabs /> */}
        <Benefits />
        <Tabs />
        <ToRoadmapAction />
        </>
    )
}


export default HowItWorks;
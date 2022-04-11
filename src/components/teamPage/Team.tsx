import Image from "next/image";
import { teamDataLvl1, teamDataLvl2 } from "../../store/allData";
import Card from "../global/Card";

const Team:React.FC = () => {

    return(
        <div className="w-screen h-full relative">
            <div className="w-full h-full absolute top-0 left-0">
            <Image  src={'/media/team/team-bg.png'} width="1438" height="1128" layout="responsive" />
            </div>
            <div className="relative w-full h-full  flex flex-col justify-start items-center pt-44">
                <h3>
                Meet the Creators
                </h3>
                <div className="flex justify-center items-center w-full gap-x-8 mt-20">
                    {teamDataLvl1.map(member=>{
                        return <Card data={member} size={{width:200,height:260}} />
                    })}
                </div>
                <div className="flex justify-center items-center w-full gap-x-8 mt-8">
                    {teamDataLvl2.map(member=>{
                        return <Card data={member} size={{width:200,height:260}} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team;
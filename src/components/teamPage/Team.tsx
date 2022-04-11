import Image from "next/image";

const Team:React.FC = () => {

    return(
        <div className="w-full h-full relative">
            <Image className="" src={'/media/team/team-bg.png'} width="1438" height="1242" layout="responsive" />
            <div className="relative w-full h-full  flex flex-col justify-start items-center">
            </div>
        </div>
    )
}

export default Team;
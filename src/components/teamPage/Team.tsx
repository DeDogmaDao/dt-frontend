import Image from "next/image";

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
            </div>
        </div>
    )
}

export default Team;
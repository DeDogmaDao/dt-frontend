import Image from "next/image";

const Hero:React.FC = () => {

return (
    <div className="flex justify-center items-center relative w-screen h-[76.4vw] overflow-hidden hero-container">
        <div className="portal-and-flame-and-hero w-full h-full relative z-10">
            <span className="w-full h-full max-w-none"><Image src={'/img/art/portal.png'} layout="fill" /></span>
        </div>
        <span className="absolute w-full h-full z-0"><Image src={'/img/art/city.png'} layout="fill" /></span>
    </div>
);
}

export default Hero;
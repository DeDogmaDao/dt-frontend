import DiscordBtn from "../../global/Buttons/DiscordBtn";

const HeaderImg: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative -mt-16">
      <img className="" src="/media/bg/howitworksbg.jpg" />
      <div className="bg-black/30 w-full h-full absolute left-0 top-0" />
      <h2 className="absolute top-56 left-1/2 -ml-56">Nepoleia is sold out!</h2>
      <div className="absolute top-96 left-1/2 -ml-32"><DiscordBtn /> </div>
    </div>
  );
};

export default HeaderImg;

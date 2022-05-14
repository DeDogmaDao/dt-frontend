import Web3Button from "./Web3Button";

const Web3:React.FC = () => {

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-1/2 h-1/2 bg-red-200/50 flex justify-center items-center">
            <Web3Button />

            </div>
            <div className="w-1/2 h-1/2 bg-red-200/50"></div>
        </div>
    )
}

export default Web3;
import Skeleton from "../../global/Skeleton";

const MintSkeleton:React.FC = () => {

    return (
        <div className="flex flex-col">
            <Skeleton size={{height:24, width:260}} color="#2D302D" />
            <Skeleton size={{height:24, width:180}} color="#2D302D" />
            <Skeleton size={{height:24, width:140}} color="#2D302D" />
        </div>
    )
}


export default MintSkeleton;
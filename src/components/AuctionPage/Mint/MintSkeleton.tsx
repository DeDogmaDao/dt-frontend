import Skeleton from "../../global/Skeleton";

const MintSkeleton:React.FC = () => {

    return (
        <div className="flex flex-col w-full h-full gap-y-4 mt-9 ml-2">
            <Skeleton size={{height:24, width:310}} color="#2D302D" />
            <Skeleton size={{height:24, width:230}} color="#2D302D" />
            <Skeleton size={{height:24, width:180}} color="#2D302D" />
            <Skeleton size={{height:24, width:450}} color="#2D302D" classNames="mt-12 -ml-2" />
            <div className="flex justify-start items-center gap-x-4 h-12 mt-6 -ml-2">
            <Skeleton size={{height:48, width:176}} color="#2D302D" classNames=" rounded-xl " />
            <Skeleton size={{height:24, width:280}} color="#2D302D" classNames="" />
            </div>
        </div>
    )
}


export default MintSkeleton;
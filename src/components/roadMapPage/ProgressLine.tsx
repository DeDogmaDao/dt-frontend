const ProgressLine:React.FC = () => {
    return(
        <div className="absolute top-0 left-1/2 ml-[-8px] flex flex-col items-center gap-y-5 z-100 mt-20">
            <div className="w-4 h-5 bg-primary-500"></div>
            <div className="w-1 h-[500px] bg-neutral-400 overflow-hidden rounded-full relative">
                <div className="absolute left-0 w-full h-full bg-primary-500 duration-700" style={{top:-300}}></div>
            </div>
        </div>
    )
}


export default ProgressLine;
import {motion} from 'framer-motion';
interface props {
    tailwindClasses:string;

}

const CalcItem:React.FC<props> = ({children}) => {

return(
    <motion.div
    >
    <div className="w-full h-full relative flex justify-center items-center">
    {children}
    </div>
    </motion.div>
);
}


export default CalcItem;
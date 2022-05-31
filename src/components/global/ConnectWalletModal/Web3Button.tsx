interface props {
    onclick:any;
    name:string;
}
const Web3Button:React.FC<props> =({onclick,name}) => {

  return (
      <button className="px-5 py-1 rounded-full bg-green-300 text-black hover:text-white hover:bg-green-700 duration-300 active:scale-95"
       onClick={onclick}>
          {name}
      </button>
  ) 
  
}

export default Web3Button;
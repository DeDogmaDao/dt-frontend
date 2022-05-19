interface props {
    onclick:any;
}
const Web3Button:React.FC<props> =({onclick}) => {

  return (
      <button onClick={onclick}>
          connect to network
      </button>
  ) 
  
}

export default Web3Button;
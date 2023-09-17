import {React, useState} from 'react';
import "./Contracts.css";
import PinIcon from "./PinIcon.png";
import Map from "./Map"

const Contracts = ({thing, changer}) => {
  
  // Inputted Location State
  const [userLoc, setUserLoc] = useState("");
  const [day, setDay] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [hours, setHours] = useState("0");
  const [currency, setCurrency] = useState(0) // 0 for eth, 1 for solana
  
  const [bal, setBal] = useState("100")

  function updateLoc(e){
    e.preventDefault();
    setUserLoc(e.target.value);
  }
  function updateDay(e){
    setDay(e.target.value);
  }
  function updateMinutes(e){
    setMinutes(e.target.value);
  }
  function updateHours(e){
    setHours(e.target.value);
  }
  
  //HERE EHTAN AOHJAWOIJEIAW
  // HERHEOAHWRIW
  //AWOIHAWOIE
  function setEth(e){
    
  }
  // AHWEHAWE

  function setSol(e){
    setCurrency(1);
  }

  return (
    <div id="Contracts" style={{minWidth: "80vw", marginRight:"5vw"}}>
      {/*Main Question*/}
      <h1 id="MainQuestion">Where Are You Going?</h1>
      <div className="flex" >
        <div id="GetLocation" className="rounded-lg" style={{justifyContent:'center', marginLeft:'5vw', marginRight:'5vw'}}>
          <Map hourtime={hours} minutetime={minutes} array={thing} changee={changer}/>
        </div>
    
        {/*Right Half*/}
        <div id="RightHalfContainer"> 
          <div id="GetTime">
            <h1 id="AskTime">In How Long?</h1>

            <div id="TimeInput" className="flex">
              <input value={day} className="TimeSelect" onChange={updateDay}/>
              <h1 className="TimeText"> Days</h1>
              <input value={hours} className="TimeSelect" onChange={updateHours}/>
              <h1 className="TimeText"> Hours</h1>
              <input value={minutes} className="TimeSelect" onChange={updateMinutes}/>
              <h1 className="TimeText"> Minutes</h1>
            </div>
          </div>

          <div id="Money">
            <h1 id="MoneyHeader"> Enter Your Ethereum Address</h1>
            
            

            <div id="AskUser" className="flex">
              <h1>Public:</h1>
              <input className="InputCurrencyInfo"/>
            </div>
            <div id="AskPass" className="flex">
              <h1>Private:</h1>
              <input className="InputCurrencyInfo"/>
            </div>

            <div id="Currency" className="flex" style={{marginTop:'10px'}}>
              <h1 id="kevster">Current Bal: {bal} Eth</h1><button className={"ChooseCurrencyButton"+(currency?"":"Active")} onClick={setEth}>Sign Here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contracts
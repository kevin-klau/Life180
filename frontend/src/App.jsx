import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu"
import Base from "./components/Base"
import Hero from "./components/Hero";
import Friends from "./components/Friends";
import Contracts from "./components/Contracts";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createActor } from "./canisters";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  /*
  const agent = new HttpAgent({
    host: '127.0.0.1:4943',
    //identity: this.identity
  }); */
  //agent.fetchRootKey().then((res) => (console.log(res)));

  // const actor = createActor("bkyz2-fmaaa-aaaaa-qaaaq-cai", {host:"http://127.0.0.1:4943"});
  const actor = createActor("bkyz2-fmaaa-aaaaa-qaaaq-cai");

  return (
    <div>
      {loggedIn 
        ?
        <div>
          <Base/>
          <BrowserRouter>
            <Routes>
              <Route path="/" component={Hero} />
              <Route path="/friends" component={Friends} />
              <Route path="/contracts" component={Contracts} />
            </Routes>
          </BrowserRouter>
        </div>
        :
        <Menu 
          logged={loggedIn}
          setLoggedIn={setLoggedIn}
          actor={actor}
        />
      }    
    </div>
  );
}

export default App;

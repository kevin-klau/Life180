import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu"
import Base from "./components/Base"
import Hero from "./components/Hero";
import Friends from "./components/Friends";
import Contracts from "./components/Contracts";

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn 
        ?
        <div>
          <Base/>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact component={Hero} />
              <Route path="/friends" component={Friends} />
              <Route path="/contracts" component={Contracts} />
            </Routes>
          </BrowserRouter>
        </div>
        :
        <Menu 
          logged={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      }    
    </div>
  );
}

export default App;

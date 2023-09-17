import {useState} from "react";
import "./Base.css";
import Contracts from "./Contracts";
import Friends from "./Friends";
import NavBar from "../assets/navBar.svg"; // Import NavBar (assuming it's a component)
import FriendsImage from "../assets/friends.svg"; // Import Friends (assuming it's a component)
import { Link } from "react-router-dom"; // Import Link from React Router

const Base = ({loggedIn, setLoggedIn}) => {
  const [LocOrFriend, setLocOrFriend] = useState(true) // True is Loc, False is Friend

  const [ stuff, setStuff]= useState(
  [{
    prompt:"Jake Went To The Gym!",
    pass:"pass"
  }, {
    prompt:"Maria Failed Going To Class!",
    pass:"fail"
  }, {
    prompt:"Samuel Went To School!",
    pass:"pass"
  }, {
    prompt:"John Went To Work!",
    pass:"pass"
  },{
    prompt:"Manny Didn't Go Home!",
    pass:"fail"
  }])

  /*Changes Screen You're Viewing */
  const clickLoc = () => {
    setTimeout(function() {
      document.getElementById('Contracts').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }, 100);
  };

  const clickFriends = () => {
    setTimeout(function() {
      document.getElementById('FriendsContainer').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }, 100);
  };

  const appendData = () => {
    // Create a new item to append
    const newItem = {
      prompt: "You Failed >:((((((",
      pass: "fail",
    };

   
    // Update the state by creating a new array that includes the old data and the new item
    setStuff((prevStuff) => [newItem,...prevStuff]);

  };

  return (
    <div>
      <div id="TheContent">
        {/*Non-Navbar Content*/}
        <div id="ViewContent" className="flex">  
          <Contracts thing={stuff} changer={appendData}/>
          <Friends thing={stuff}/>
        </div>
        {/*Navbar Content*/}
        <div id="LocationOrFriend" className="flex">

            {/*Location*/}
            <button id="LocationIcon" className="flexbox" onClick={clickLoc}>
              <img id="LocationImage" src={NavBar} />
              <h1 id="locationText" className="text-bottom">Location</h1>
            </button>

            {/*Friends Content*/}
            <button id="FriendsIcon" className="flexbox" onClick={clickFriends}>
              <img id="FriendsImage" src={FriendsImage} />
              <h1 id="FriendsText" className="text-bottom">Friends</h1>
            </button>
          
        </div>        
      </div>
    </div>
  );
};

export default Base;

import React from "react";
import "./Base.css";
import NavBar from "../assets/navBar.svg"; // Import NavBar (assuming it's a component)
import Friends from "../assets/friends.svg"; // Import Friends (assuming it's a component)
import { Link } from "react-router-dom"; // Import Link from React Router

const Base = ({loggedIn, setLoggedIn}) => {
  return (
    <div className="relative p-64 pl-[30rem] pr-[30rem] pt-[18rem] pb-[18rem] border-8 border-solid border-tertiary bg-primary flex-row rounded-lg">
      <div className="relative bottom-0 left-0">

        <div className="mr-6 flex justify-center">
          <a href={"/navBar"}>
            <img src={NavBar} />
            <p className="text-bottom">Location</p>
          </a>
        </div>

        <div className="ml-6 flex justify-center">
          <a href={"/friends"}>
            <img src={Friends} />
            <p className="text-bottom">Friends</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Base;

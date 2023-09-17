import React, { useState } from "react";
import "./Menu.css";


const Menu = ({ loggedIn, setLoggedIn, actor }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col">
            <div className="mx-auto relative p-32 my-64 mt-32 m-64 text-3xl text-black bg-white rounded-md">
                <p className="font-bold">Life 180</p>
                <p className="">Turn Your Life Around</p>

                <div className="bg-secondary rounded-3xl p-1 m-3 px-32 mb-10"></div>

                <div className="ml-16">
                    <div className="flex flex-row mt-3">
                        <label htmlFor="name">Name:</label>
                        <input
                            className="form-field"
                            type="text"
                            id="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-row mt-3">
                        <label htmlFor="password">Password:</label>
                        <input
                            className="form-field"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-8">
                    <button className="form-button" 
                        onClick={async () => {
                            const verify = await actor.verifyUser(username, password)
                            verify
                            && 
                            setLoggedIn(true);
                        }}>
                        Submit
                    </button>

                    <button className="form-button" 
                        onClick={async () => { 
                            actor.createUser(username, password);
                            setLoggedIn(true);
                        }}>
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;

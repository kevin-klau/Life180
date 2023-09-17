import React from 'react'
import "./Friends.css"
import stock1 from './stock1.png'
import stock2 from './stock2.jpg'
import stock3 from './stock3.png'
import stock4 from './stock4.jpg'
import stock5 from './stock5.png'
import stock6 from './stock6.jpg'
import stock7 from './stock7.jpg'
import stock8 from './stock8.jpg'
import stock9 from './stock9.jpg'
import stock10 from './stock10.jpg'

function Notif({prompt, pass}){
    const stocknum = Math.floor(Math.random()*9+1);
    let img;
    if (stocknum==1){ img=stock1 }
    if (stocknum==2){ img=stock2 }
    if (stocknum==3){ img=stock3 }
    if (stocknum==4){ img=stock4 }
    if (stocknum==5){ img=stock5 }
    if (stocknum==6){ img=stock6 }
    if (stocknum==7){ img=stock7 }
    if (stocknum==8){ img=stock8 }
    if (stocknum==9){ img=stock9 }
    if (stocknum==10){ img=stock10 }

    return(
     <div id="FriendsDisplay" className={"flex " + pass}>     
      <div className="cropimg" >
        <img src={img}/>
      </div> 
      <div className="prompt"><h1>{prompt}</h1></div>
    </div>
    )
}

const Friends = ({thing}) => {
  return (
    <div id="FriendsContainer">
        <h1 id="FriendsTitle">Friends - September 17th, 2023</h1>
        <div id="NotifContainer">
        <ul>
          {thing.map(person => (
            <Notif prompt={person.prompt} pass={person.pass}></Notif>
          ))}
        </ul>
          
          {/*<Notif prompt="Jake Went To The Gym!" pass="pass"/>
          <Notif prompt="Maria Failed Going To Class!" pass="fail"/>
          <Notif prompt="Samuel Went To School!" pass="pass"/>
          <Notif prompt="John Went To Work!" pass="pass"/>
  <Notif prompt="Manny Didn't Go Home!" pass="fail"/>*/}
        </div>
    </div>
  )
}

export default Friends
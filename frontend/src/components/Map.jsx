import React, { useState, useEffect } from "react";
import axios from "axios";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import PinIcon from './PinIcon.png'

const mapContainerStyle = {
  width: "450px",
  height: "250px", // Adjust the height as needed
  flexshrink: "0",
};


const center = {
  lat: 0,
  lng: 0,
};


function Map( {hourtime, minutetime, array, changee} ) {

    function fail(){
        changee();
        setTimeout(function() {
            document.getElementById('FriendsContainer').scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            });
          }, 100);

  setStuff.append({
        prompt:"You Passed!!!! :DDDD",
        pass:"pass",
    })
}
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAroaOChMKPAl_xaQz-qwMnA1Q9yv3dhSY", // Replace with your Google Maps API key
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [targetLocation, setTargetLocation] = useState(null);
  const [addressInput, setAddressInput] = useState("");
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [destinationReached, setDestinationReached] = useState(null);

  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const destinationRadius = 1000; // Adjust the radius as needed (in meters)

  const startLocationTracking = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting user's location:", error);
      }
    );
  };

  useEffect(() => {
    startLocationTracking();
  }, []);

  const handleAddressInput = (event) => {
    setAddressInput(event.target.value);
  };

  const geocodeAddress = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          addressInput
        )}&key=AIzaSyAroaOChMKPAl_xaQz-qwMnA1Q9yv3dhSY` // Replace with your Google Maps API key
      );

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        setTargetLocation({ lat, lng });
      }
    } catch (error) {
      console.error("Error geocoding address:", error);
    }
  };

  const checkDestinationReached = () => {
    if (currentLocation && targetLocation) {
      const distance = calculateDistance(currentLocation, targetLocation);
      setDestinationReached(distance <= destinationRadius);
    }
  };

  useEffect(() => {
    checkDestinationReached();
  }, [currentLocation, targetLocation]);

  console.log(destinationReached);

  const calculateDistance = (start, end) => {
    // Haversine formula to calculate distance between two points
    const radlat1 = (Math.PI * start.lat) / 180;
    const radlat2 = (Math.PI * end.lat) / 180;
    const theta = start.lng - end.lng;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515 * 1609.344; // Convert to meters
    return dist;
  };

  const startTimer = () => {
    const totalMinutes = hourtime * 6 + minutetime;
    let secondsRemaining = totalMinutes * 60;

    const timerInterval = setInterval(() => {
      const minutes = Math.floor(secondsRemaining / 60);
      const seconds = secondsRemaining % 60;

      setTimerMinutes(minutes);
      setTimerSeconds(seconds);

      secondsRemaining--;

      if (secondsRemaining < 0) {
        clearInterval(timerInterval);
        checkDestinationReached();
      }
    }, 1000);
  };

  return (
    <div>
      {/* User input bar for the target address */}
      <div className="flex"style={{ backgroundColor: "white", padding: "10px", justifyContent:'center', marginBottom:'10px' }}>
      <img id="PinIcon" src={PinIcon}/>
        <input id="InputLocation" type="text" value={addressInput} onChange={handleAddressInput} />
        <button id="SetLocationButton" onClick={geocodeAddress}>SET</button>
      </div>

      {/* Display the map with markers for current and target locations */}
      {isLoaded && (
        <GoogleMap
          center={targetLocation || currentLocation || center}
          zoom={16}
          mapContainerStyle={mapContainerStyle}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {currentLocation && (
            <Marker
              position={currentLocation}
              icon={{
                url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png",
                scaledSize: new window.google.maps.Size(16, 16),
              }}
            />
          )}
          {targetLocation && (
            <Marker
              position={targetLocation}
              icon={{
                url: "https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309739_1280.png",
                scaledSize: new window.google.maps.Size(20, 35),
              }}
            />
          )}
        </GoogleMap>
      )}
      {/* Dropdown menus for hours and minutes */}
      <div>
        {/*<label>Select Hours:</label>
        <select
          value={selectedHours}
          onChange={(e) => setSelectedHours(parseInt(e.target.value))}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i}>
              {i} hours
            </option>
          ))}
        </select>*/}
          </div>
      <div>
        {/*<label>Select Minutes:</label>
        <select
          value={selectedMinutes}
          onChange={(e) => setSelectedMinutes(parseInt(e.target.value))}
        >
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={i}>
              {i} minutes
            </option>
          ))}
          </select>*/}
      </div>

      {/* Button to start the timer */}
      <div className="flex" style={{marginTop:'10px', marginLeft:'-10px', marginRight:'10px', alignItems:'center'}}>
        <button onClick={startTimer} id="SetLocationButton" style={{fontSize:'20px', width:"200px"}}>Start Timer</button>
        <p id="timertime">
          Time Remaining: {timerMinutes} min {timerSeconds} sec
        </p>
      </div>

      {/* Display result based on destination and timer */}
      {destinationReached !== null && (
        <div>
          {destinationReached ? (
            <p>You reached the destination in time!</p>
          ) : (
            <p>Time's up! You didn't reach the destination in time.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Map;
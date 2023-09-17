import { useState, useEffect } from "react";
import Home from "./home";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import key from "../secrets";

const mapContainerStyle = {
  width: "456px",
  height: "308px",
  margin: "auto",
};

const center = {
  lat: 378,
  lng: 217,
};

function Hero() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, []);

  return isLoaded ? (
    <>
      <Home />
      <GoogleMap
        center={center}
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
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/585px-Google_Maps_pin.svg.png", // Replace with the URL of the Google Maps red pin icon
              scaledSize: new window.google.maps.Size(20, 35), // Adjust the size as needed
            }}
          >
            <InfoWindow position={currentLocation}>
              <div>Your current location</div>
            </InfoWindow>
          </Marker>
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default Hero;

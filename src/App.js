import "./app.css";
import { useEffect, useState } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function App(props) {
  const [position, setposition] = useState({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setposition((_) => {
        return {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }
  }, []);
  return (
    <div className="App">
      <Map google={props.google} initialCenter={position} />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDKuWFzMBrW56RNuKx2LKSxRrmhozw-agY",
})(App);

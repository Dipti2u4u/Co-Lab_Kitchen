/*import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useNavigate } from "react-router-dom";
import useUserLocation from "./GetUserLocation"; 

const MapContainer = (props) => {
  const userLocation = useUserLocation(); 
  const navigate = useNavigate();

  const defaultCenter = { lat: 0, lng: 0 }; 

  const locations = [
    { id: 1, title: "Location A", lat: 20.250895, lng: 85.75691 },
    { id: 2, title: "Location B", lat: 20.260895, lng: 85.74691 },
    { id: 3, title: "Location C", lat: 20.261066, lng: 85.7364007 },
    { id: 4, title: "Location D", lat: 20.255895, lng: 85.76691 },
  ];

  return (
    <Map
      google={props.google}
      zoom={userLocation ? 15 : 12}
      style={{ width: "100%", height: "400px" }}
      initialCenter={userLocation || defaultCenter} 
      center={{
        lat: userLocation?.lat || defaultCenter.lat,
        lng: userLocation?.lng || defaultCenter.lng,
      }}
    >
      {locations.map((location) => (
        <Marker
          key={location.id}
          title={location.title}
          position={{ lat: location.lat, lng: location.lng }}
          icon={{
            url: require("../Components/images/dish_marker.png"),
            anchor: new props.google.maps.Point(32, 32),
            scaledSize: new props.google.maps.Size(60, 60),
          }}
          onClick={() => navigate(`/location/${location.id}`)}
        />
      ))}

      {userLocation && (
        <Marker
          title={"My Location"}
          position={{ lat: userLocation.lat, lng: userLocation.lng }}
          icon={{
            url: require("../Components/images/user_marker.png"),
            anchor: new props.google.maps.Point(32, 32),
            scaledSize: new props.google.maps.Size(60, 60),
          }}
        />
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);*/
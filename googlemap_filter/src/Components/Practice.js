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



/*import React, { useState, useEffect, useMemo } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useNavigate } from "react-router-dom";
import useUserLocation from "./GetUserLocation";

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const earthRadius = 6371; 

  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c; // Distance in kilometers
  return distance;
};

const MapContainer = (props) => {
  const userLocation = useUserLocation();
  const navigate = useNavigate();

  const defaultCenter = { lat: 0, lng: 0 };

  const dishLocations = useMemo(
    () => [
      { id: 1, title: "Location A", lat: 20.250895, lng: 85.75691 },
      { id: 2, title: "Location B", lat: 20.260895, lng: 85.74691 },
      { id: 3, title: "Location C", lat: 20.261066, lng: 85.7364007 },
      { id: 4, title: "Location D", lat: 20.255895, lng: 85.76691 },
    ],
    []
  );

  const [filteredLocations, setFilteredLocations] = useState([]);
  const [distanceRange, setDistanceRange] = useState(5); // Initial range set to 5km

  useEffect(() => {
    if (userLocation) {
      const filtered = dishLocations.filter((location) => {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          location.lat,
          location.lng
        );
        return distance <= distanceRange;
      });
      setFilteredLocations(filtered);
    }
  }, [userLocation, dishLocations, distanceRange]);

  const handleLocationClick = (locationId) => {
    navigate(`/location/${locationId}`);
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max={5}
        value={distanceRange}
        onChange={(e) => setDistanceRange(Number(e.target.value))}
      />
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
        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            title={location.title}
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: require("../Components/images/dish_marker.png"),
              anchor: new props.google.maps.Point(32, 32),
              scaledSize: new props.google.maps.Size(60, 60),
            }}
            onClick={() => handleLocationClick(location.id)}
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
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);*/
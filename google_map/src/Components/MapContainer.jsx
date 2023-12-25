import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useNavigate } from 'react-router-dom';

const MapContainer = (props) => {
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }

    const locations = [
      { id: 1, title: 'Location A', lat: 20.250895, lng: 85.756910 },
      { id: 2, title: 'Location B', lat: 20.260895, lng: 85.746910 },
    ];

    locations.forEach(location => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: props.google.map,
        title: location.title,
      });

      marker.addListener('click', () => {
        navigate(`/location/${location.id}`);
      });
    });
  }, [navigate, props.google.map]);

  return (
    <Map
      google={props.google}
      zoom={userLocation ? 15 : 12}
      style={{ width: '100%', height: '400px' }}
      initialCenter={{
        lat: 20.240895,
        lng: 85.746910,
      }}
      center={{
        lat: userLocation?.lat || 20.240895,
        lng: userLocation?.lng || 85.746910,
      }}
    >
      <Marker
        title={'Location A'}
        position={{ lat: 20.250895, lng: 85.756910 }}
        icon={{
          url: require("../Components/images/dish_marker.png"),
          anchor: new window.google.maps.Point(32, 32),
          scaledSize: new window.google.maps.Size(60, 60)
        }}
        onClick={() => navigate(`/location/1`)}
      />
      <Marker
        title={'Location B'}
        position={{ lat: 20.260895, lng: 85.746910 }}
        icon={{
          url: require("../Components/images/dish_marker.png"),
          anchor: new window.google.maps.Point(32, 32),
          scaledSize: new window.google.maps.Size(60, 60)
        }}
        onClick={() => navigate(`/location/2`)}
      />

      {userLocation && (
        <Marker
          title={'My Location'}
          position={{ lat: userLocation.lat, lng: userLocation.lng }}
          icon={{
            url: require("../Components/images/user_marker.png"),
            anchor: new window.google.maps.Point(32, 32),
            scaledSize: new window.google.maps.Size(60, 60)
          }}
        />
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);













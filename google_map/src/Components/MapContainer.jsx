import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const [userLocation, setUserLocation] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  useEffect(() => {
    if (navigator.permissions && navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          if (permissionStatus.state === 'granted') {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setUserLocation({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              },
              (error) => {
                console.error('Error getting user location:', error);
              }
            );
          } else if (permissionStatus.state === 'denied') {
            setPermissionDenied(true);
          } else {
            permissionStatus.onchange = () => {
              if (permissionStatus.state === 'granted') {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    setUserLocation({
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    });
                  },
                  (error) => {
                    console.error('Error getting user location:', error);
                  }
                );
              } else if (permissionStatus.state === 'denied') {
                setPermissionDenied(true);
              }
            };
          }
        })
        .catch((error) => console.error('Error checking geolocation permission:', error));
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  return (
    <div>
      {permissionDenied ? (
        <p>Location permission denied. Please enable it in your browser settings to view the map.</p>
      ) : (
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: userLocation ? userLocation.lat : 0, // Default latitude
            lng: userLocation ? userLocation.lng : 0, // Default longitude
          }}
        >
          {userLocation && (
            <Marker
              position={{
                lat: userLocation.lat,
                lng: userLocation.lng,
              }}
              title="Your Location"
            />
          )}
        </Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);



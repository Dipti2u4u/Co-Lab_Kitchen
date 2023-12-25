/*import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={18}
      style={{ width: '100%', height: '400px' }}
      initialCenter={{
        lat: 20.24186,
        lng: 85.74730,
      }}
    >
      <Marker
        position={{
          lat: 20.24186,
          lng: 85.74730,
        }}
        title={'My Location'} 
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);*/


/*import React, { useState, useEffect } from 'react';
const MapContainer = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          // Handle any errors here
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {userLocation ? (
        <p>
          Your current location is: {userLocation.latitude}, {userLocation.longitude}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MapContainer;*/




/*import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          // Handle any errors here
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <Map
      google={props.google}
      zoom={userLocation ? 18 : 12}
      style={{ width: '100%', height: '400px' }}
      initialCenter={{
        lat: 20.24186,
        lng: 85.7473,
      }}
    >
      {userLocation && (
        <Marker
          title={'My Location'}
          position={{ lat: userLocation.lat, lng: userLocation.lng }}
        />
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);*/




/*import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          // Handle any errors here
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

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
})(MapContainer);*/


/*import React, { useEffect, useState } from 'react';
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
          // Handle any errors here
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }

    // Hardcoded example locations
    const locations = [
      { id: 1, title: 'Location A', lat: 20.250895, lng: 85.756910 },
      { id: 2, title: 'Location B', lat: 20.260895, lng: 85.746910 },
      // Add more locations as needed
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
})(MapContainer);*/
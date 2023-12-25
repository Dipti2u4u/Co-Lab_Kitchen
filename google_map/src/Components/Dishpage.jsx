import React from 'react';
import { useParams } from 'react-router-dom';

const Dishpage = () => {
  const { id } = useParams();

  // Fetch data for the specific location based on the ID
  // Example: fetch data using id and display content

  return (
    <div>
      <h2>Location {id}</h2>
      {/* Display specific content related to the location */}
      <p>This is the content for location {id}.</p>
    </div>
  );
};

export default Dishpage;

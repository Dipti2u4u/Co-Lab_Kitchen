import React from 'react';
import { useParams } from 'react-router-dom';

const Dishpage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Location {id}</h2>
      <p>This is the content for location {id}.</p>
    </div>
  );
};

export default Dishpage;

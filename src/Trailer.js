import React from 'react';
import { Link, useParams, useNavigate  } from 'react-router-dom';

function Trailer() {
  const navigate  = useNavigate ();
  const { description, trailerLink } = useParams();

  const handleButtonClick = () => {
    navigate('/'); // Go back to the previous page
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Back</button>
      <h2>Movie Description:</h2>
      <p>{description}</p>
      <h2>Movie Trailer:</h2>
      <iframe
        width="640"
        height="360"
        src={trailerLink}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Trailer;
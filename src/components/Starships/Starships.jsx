import React, { useState } from 'react';
import { useEffect } from 'react';
import { getStarShips } from '../../services/api-calls';
import { Link } from 'react-router-dom';

const Starships = (props) => {
  const [starShips, setStarShips] = useState([])

  useEffect(() => {
    getStarShips()
    .then(starShips => setStarShips(starShips.results))

  }, [])
  return (     
    <>
    <div id="container">
      <div id="Div-AllStarShips">
      {starShips.map((starShip, idx) => 
        <Link id="Link-StarShips" state={{ starShip }}to={`/starShips/${idx}`}>
          <div class="Div-StarShips" id={`StarShip${idx}`}>{starShip.name}</div>
        </Link>
      )}
      </div>
    </div>
    </>
  );
}

export default Starships;
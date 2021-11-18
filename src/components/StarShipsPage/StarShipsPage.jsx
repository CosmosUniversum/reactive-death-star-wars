import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { getStarShipInfo } from '../../services/api-calls'

const StarShipsPage = (props) => {
  const [starShipDetails, setStarShipDetails] = useState([])
let location = useLocation()
  useEffect(() => {
    getStarShipInfo(location.state.starShip.url)
    .then(starShip => setStarShipDetails(starShip))   
  }, [])

  return (
    <body id="StarShipDetails-container">
      <div id="Div-StarShipDetails">
        <div class="Div-StarShip-name">{starShipDetails.name}</div>
        <div class="Div-StarShip-model">{starShipDetails.model}</div>
        <a id="return-link" href="/">Return</a>
      </div>
    </body>
  );
}

export default StarShipsPage
const baseUrl = "https://swapi.dev/"

export function getStarShips() {
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}

export function getStarShipInfo(apiUrl) {
  return fetch(apiUrl)
  .then(res => res.json())
}
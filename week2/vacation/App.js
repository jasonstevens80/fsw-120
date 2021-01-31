import React from 'react';
import './App.css';
import Spots from './Spots'
import spotsData from './spotsData'




function App() {
  const vacationSpots = spotsData.map(local =>
    <Spots key={local.id} place={local.place} price={local.price} timeToGo={local.timeToGo} />)

  return (
    <div>
      {vacationSpots}
    </div>
  );
}



export default App;
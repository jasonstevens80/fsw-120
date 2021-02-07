import React from 'react';
import './App.css';
import SuperHero from './SuperHero'
import HeroList from './HeroList.json'

class App extends React.Component {
   constructor() {
     super()
     this.state = {
       Heroes: HeroList
     }
   }
  render() {

    return (
      <div>
        
        {this.state.Heroes.map((player => {
         return <SuperHero  key={player.name} name={player.name} imageName={player.imageName} show={player.show} catchPhrase={player.catchPhrase}/>
         
        }))}

        
        {}

      </div>
    )
  }
}
export default App;

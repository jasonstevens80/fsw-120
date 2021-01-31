import React from "react"
import './App.css';
import Card from "./card"
function App() {
  return (
    <div>
     
        <Card cardColor = "red" height={200} width={200} title = "one" subtitle = "This is red" info = "Apples are Red" />
        <Card cardColor = "blue"  title = "two" subtitle = "This is blue" info ="the sky is blue" />
        <Card cardColor = "green" height={200} width={200} title = "three" subtitle = "This is green" info = "grass is green" />
        <Card cardColor = "purple" height={200} width={200} title = "four" subtitle = "This is purple"  info = "Barney is pruple"/>
        <Card cardColor = "yellow"  title = "five" subtitle = "This is yellow"  info = "the sun is yellow"/>
        <Card cardColor = "pink" height={200} width={200} title = "six" subtitle = "This is pink" info = "victoria secret is pink"/>
        <Card cardColor = "orange"  title = "seven" subtitle = "This is orange" info = "oranges are orange"/>
        <Card cardColor = "brown" height={200} width={200} title = "eight" subtitle = "This is brown" info = "dirt is brown" />
        <Card cardColor = "violet" height={200} width={200} title = "nine" subtitle = "This is violet" info = "eggplants are violet" />
        <Card cardColor = "olive" height={200} width={200} title = "ten" subtitle = "This is olive" info = "olives are olive"/>
    </div>
  );
}
export default App
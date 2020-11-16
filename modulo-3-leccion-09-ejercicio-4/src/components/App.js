import React from "react";
import "../stylesheets/App.css";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];

const first = users[0];
const second = users[1];
const third = users[2];

function App() {
  console.log(
    `1st: ${first.name} , ${first.time}. 2nd: ${second.name} , ${second.time} . 3rd: ${third.name} , ${third.time} . `
  );
  return <></>;
}

export default App;

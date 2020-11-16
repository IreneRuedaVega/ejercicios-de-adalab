import React from "react";
import "../stylesheets/App.css";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];

const { name: firstName } = users[0];
const { time: firstTime } = users[0];
const { name: secondName } = users[1];
const { time: secondTime } = users[1];
const { name: thirdName } = users[2];
const { time: thirdTime } = users[2];

function App() {
  console.log(
    `1st: ${firstName} , ${firstTime}. 2nd: ${secondName} , ${secondTime} . 3rd: ${thirdName} , ${thirdTime} . `
  );
  return <></>;
}

export default App;

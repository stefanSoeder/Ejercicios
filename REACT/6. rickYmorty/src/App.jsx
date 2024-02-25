import React from "react";
import "./App.css";

const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];

const App = () => {
  const [characterList, setCharacterList] = React.useState(charactersMock);
  return (
    <>
      {characterList.map((character) => (
        <div key={character.id}>
          <h2>id: {character.id}</h2>
          <h2>name: {character.name}</h2>
          <h2>status: {character.status}</h2>
        </div>
      ))}
    </>
  );
};

export default App;


import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm";
import "./App.css";
import { uid } from "uid";
import { useState } from "react";

function App() {
  const [colorCard, setColorCard] = useState(initialColors);

  const handleAddColor = (newColor) => {
    setColorCard([{ id: uid(), ...newColor }, ...colorCard]);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />

      {colorCard.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;

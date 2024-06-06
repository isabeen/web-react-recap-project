import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm";

function App() {
  const [colorCard, setColorCard] = useLocalStorageState("colorCard", {
    defaultValue: initialColors,
  });

  const handleAddColor = (newColor) => {
    setColorCard([{ id: uid(), ...newColor }, ...colorCard]);
  };

  const handleCopyColor = (hexValue) => {
    navigator.clipboard.writeText(hexValue);
  };

  const handleUpdateColor = (colorToUpdate) => {
    setColorCard(
      colorCard.map((color) => {
        if (color.id == colorToUpdate.id) return colorToUpdate;
        return color;
      })
    );
  };

  const handleDeleteColor = (cardToDeleteId) => {
    const updatedCards = colorCard.filter(
      (color) => color.id !== cardToDeleteId
    );
    setColorCard(updatedCards);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} buttonText={"ADD COLOR"} />

      {colorCard.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        colorCard.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onUpdate={handleUpdateColor}
            onCopy={handleCopyColor}
          />
        ))
      )}
    </>
  );
}

export default App;

import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm />

      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;

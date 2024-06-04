import "./ColorForm.css";
import { useState } from "react";

export default function ColorForm() {
  const [role, setRole] = useState("some color");
  const [hex, setHex] = useState("#FFFFFF");
  const [contrast, setContrast] = useState("#000000");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The color you entered was: ${role}`);
  };

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <label>
        Role
        <br />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hex
        <br />
        <input
          type="text"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
      </label>
      <br />
      <label>
        Contrast Text
        <br />
        <input
          type="text"
          value={contrast}
          onChange={(e) => setContrast(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="ADD COLOR" className="input-button" />
    </form>
  );
}

// <div className="color-form">
//   <p>Role</p>
//   <p>Hex</p>
//   <p>Contrast Text</p>
//   <button>ADD COLOR</button>
// </div>

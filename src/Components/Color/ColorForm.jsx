import "./ColorForm.css";
import ColorInput from "./ColorInput";

export default function ColorForm({
  initialColor = {
    role: "primary dark",
    hex: "#95B3D0",
    contrastText: "#ffffff",
  },
  onAddColor,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
  }

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialColor.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput type="text" id="hex" defaultValue={initialColor.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput
          type="text"
          id="contrastText"
          defaultValue={initialColor.contrastText}
        />
      </label>
      <br />
      <input type="submit" value="ADD COLOR" className="input-button" />
    </form>
  );
}

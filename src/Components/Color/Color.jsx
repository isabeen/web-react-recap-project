import "./Color.css";
import { useState } from "react";
import ColorForm from "./ColorForm";

export default function Color({ color, onDelete }) {
  const [deleteColor, setDeleteColor] = useState(false);
  const [isDeleteVisible, setDeleteVisible] = useState(true);
  const [editClicked, setEditClicked] = useState(false);

  const handleDeleteClick = () => {
    setDeleteVisible(false);
    return setDeleteColor(true);
  };

  const handleConfirmDelete = () => {
    onDelete(color.id);
  };

  const handleCancelClick = () => {
    return setDeleteVisible(true);
  };

  const handleEditClick = () => {
    setDeleteVisible(false);
    setDeleteColor(false);
    setEditClicked(true);
  };

  const handleCancelEdit = () => {
    setDeleteVisible(true);
    setEditClicked(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <div>
        {isDeleteVisible ? (
          <>
            <button onClick={handleDeleteClick}>DELETE</button>
            <button onClick={handleEditClick}>EDIT</button>
          </>
        ) : (
          deleteColor && (
            <div>
              <p className="color-card-headline">Really delete?</p>
              <button onClick={handleCancelClick}>CANCEL</button>
              <button onClick={handleConfirmDelete}>DELETE</button>
            </div>
          )
        )}
        {editClicked ? (
          <div>
            <ColorForm initialColor={color} onAddColor={color.id} />
            <button onClick={handleCancelEdit}>CANCEL</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

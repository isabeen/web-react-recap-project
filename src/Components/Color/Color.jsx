import "./Color.css";
import { useState } from "react";
import ColorForm from "./ColorForm";

export default function Color({ color, onDelete, onUpdate }) {
  const [deleteColor, setDeleteColor] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  const handleDeleteClick = () => {
    setDeleteColor(true);
  };

  const handleConfirmDelete = () => {
    onDelete(color.id);
  };

  const handleCancelClick = () => {
    setDeleteColor(false);
  };

  const handleEditClick = () => {
    setEditClicked(true);
  };

  const handleCancelEdit = () => {
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
      {editClicked ? (
        <>
          <ColorForm
            initialColor={color}
            onAddColor={onUpdate}
            buttonText={"UPDATE COLOR"}
            editClicked={editClicked}
            onEditColor={onUpdate}
            setEditClicked={setEditClicked}
          />
          <button onClick={handleCancelEdit}>CANCEL</button>
        </>
      ) : (
        <>
          {deleteColor ? (
            <div>
              <p className="color-card-headline">Really Delete?</p>
              <button onClick={handleCancelClick}>CANCEL</button>
              <button onClick={handleConfirmDelete}>DELETE</button>
            </div>
          ) : (
            <>
              <button onClick={handleDeleteClick}>DELETE</button>
              <button onClick={handleEditClick}>EDIT</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

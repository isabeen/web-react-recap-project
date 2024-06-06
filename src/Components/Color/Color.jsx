import "./Color.css";
import { useState, useEffect } from "react";
import ColorForm from "./ColorForm";

export default function Color({ color, onDelete, onUpdate, onCopy }) {
  const [deleteColor, setDeleteColor] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    if (startTimer) {
      const timer = setTimeout(() => {
        setCopyClicked(false);
        setStartTimer(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [startTimer, copyClicked]);

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

  const handleCopyClicked = () => {
    setCopyClicked(true);
    setStartTimer(true);
    onCopy(color.hex);
    console.log("Copying text!");
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
      <button onClick={handleCopyClicked}>
        {copyClicked ? "SUCCESSFULLY COPIED" : "COPY"}
      </button>
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

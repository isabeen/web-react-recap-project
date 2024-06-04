import "./Color.css";
import { useState, useEffect } from "react";

export default function Color({ color, onDelete }) {
  const [deleteColor, setDeleteColor] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isDeleteVisible, setDeleteVisible] = useState(true);

  useEffect(() => {
    if (confirmDelete) {
      onDelete(color.id);
    }
  }, [confirmDelete, onDelete, color.id]);

  const handleDeleteClick = () => {
    setDeleteVisible(false);
    return setDeleteColor(true);
  };

  const handleConfirmDelete = () => {
    onDelete(color);
    return setConfirmDelete(true);
  };

  const handleCancelClick = () => {
    return setDeleteVisible(true);
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
          <button onClick={handleDeleteClick}>DELETE</button>
        ) : (
          deleteColor && (
            <div>
              <p className="color-card-headline">Really delete?</p>
              <button onClick={handleCancelClick}>CANCEL</button>
              <button onClick={handleConfirmDelete}>DELETE</button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

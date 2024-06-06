import { useState } from "react";
import "./Theme.css";

export default function Theme({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={handleToggle}>
          {selectedOption} <span className="arrow">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li
                key={option}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button>ADD</button>
      <button>EDIT</button>
      <button>DELETE</button>
    </>
  );
}

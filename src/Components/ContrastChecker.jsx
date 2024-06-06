import "./ContrastChecker.css";
import { useState, useEffect } from "react";

export default function ContrastChecker({ hex, contrastText }) {
  const [contrastData, setContrastData] = useState("");

  useEffect(() => {
    async function postFetch() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ colors: [hex, contrastText] }),
        }
      );
      if (!response.ok) {
        const error = new Error("An error occurred while fetching the data.");
        error.info = await response.json();
        error.status = response.status;
        throw error;
      }
      const data = await response.json();
      setContrastData(data.overall);
    }
    postFetch();
  }, [hex, contrastText]);

  const textHighlight = () => {
    return contrastData === "Yup"
      ? "background-yup"
      : contrastData === "Kinda"
      ? "background-kinda"
      : contrastData === "Nope"
      ? "background-nope"
      : "";
  };

  return (
    <p className={textHighlight()}>Overall Contrast Score: {contrastData}</p>
  );
}

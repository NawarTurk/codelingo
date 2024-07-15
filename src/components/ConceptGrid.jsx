import React, { useState } from "react";
import Concept from "./Concept";
import "../styles.css";

export default function ConceptGrid({ concepts }) {
  const [difficulties, setDifficulties] = useState(["all"]);

  const handleCheckboxChange = ({ target: { value, checked } }) => {
    // This is an example of Nested destructuring
    //    Destructuring the event object to get the target element
    //    Then destructuring the target element to get the 'value' and 'checked' properties
    //    This is equivalent to:
    //    const value = event.target.value;
    //    const checked = event.target.checked;

    if (value === "all") {
      checked ? setDifficulties(["all"]) : setDifficulties([]);
    } else {
      setDifficulties((prev) =>
        checked
          ? [...prev.filter((difficulty) => difficulty !== "all"), value]
          : prev.filter((difficulty) => difficulty !== value)
      );
    }
  };

  const filteredConcepts = concepts.filter(
    (concept) =>
      difficulties.includes(concept.difficulty) || difficulties.includes("all")
  );

  return (
    <>
      <div className="checkbox-group">
        <label
          className={`checkbox-label ${
            difficulties.includes("all") ? "selected" : ""
          }`}
        >
          <input
            type="checkbox"
            value="all"
            checked={difficulties.includes("all")}
            onChange={handleCheckboxChange}
          />
          All
        </label>
        <label
          className={`checkbox-label ${
            difficulties.includes("easy") ? "selected" : ""
          }`}
        >
          <input
            type="checkbox"
            value="easy"
            checked={difficulties.includes("easy")}
            onChange={handleCheckboxChange}
          />
          Easy
        </label>
        <label
          className={`checkbox-label ${
            difficulties.includes("intermediate") ? "selected" : ""
          }`}
        >
          <input
            type="checkbox"
            value="intermediate"
            checked={difficulties.includes("intermediate")}
            onChange={handleCheckboxChange}
          />
          Intermediate
        </label>
        <label
          className={`checkbox-label ${
            difficulties.includes("advanced") ? "selected" : ""
          }`}
        >
          <input
            type="checkbox"
            value="advanced"
            checked={difficulties.includes("advanced")}
            onChange={handleCheckboxChange}
          />
          Advanced
        </label>
      </div>

      <div className="concept-grid">
        {filteredConcepts.map((concept) => (
          <Concept
            key={concept.id}
            title={concept.title}
            description={concept.description}
            example={concept.example}
            difficulty={concept.difficulty}
            quiz={concept.quiz}
          />
        ))}
      </div>
    </>
  );
}

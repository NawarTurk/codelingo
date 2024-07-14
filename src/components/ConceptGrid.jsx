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

    setDifficulties((prev) =>
      checked
        ? [...prev, value.toLowerCase()]
        : prev.filter((difficulty) => difficulty !== value.toLowerCase())
    );
  };

  const filteredConcepts = concepts.filter(
    (concept) =>
      difficulties.includes(concept.difficulty.toLowerCase()) ||
      difficulties.includes("all")
  );

  return (
    <>
      <label>
        <input
          type="checkbox"
          value="all"
          checked={difficulties.includes("all")}
          onChange={handleCheckboxChange}
        />
        All
      </label>
      <label>
        <input
          type="checkbox"
          value="easy"
          checked={difficulties.includes("easy")}
          onChange={handleCheckboxChange}
        />
        Easy
      </label>
      <label>
        <input
          type="checkbox"
          value="intermediate"
          checked={difficulties.includes("intermediate")}
          onChange={handleCheckboxChange}
        />
        Intermediate
      </label>
      <label>
        <input
          type="checkbox"
          value="advanced"
          checked={difficulties.includes("advanced")}
          onChange={handleCheckboxChange}
        />
        Advanced
      </label>

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

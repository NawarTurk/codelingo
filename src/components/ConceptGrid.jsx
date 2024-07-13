import React from "react";
import Concept from "./Concept";
import '../styles.css'

export default function ConceptGrid({ concepts }) {
  return (
    <div className="concept-grid">
      {concepts.map((concept) => (
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
  );
}

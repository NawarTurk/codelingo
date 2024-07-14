import React, { useState } from "react";
import "../styles.css";

export default function Concept({
  title,
  description,
  example,
  difficulty,
  quiz,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="concept">
      <div
        className="title-container"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="title">{title} </h3>
        <span className={`difficulty ${difficulty.toLowerCase()}`}>
          {difficulty}
        </span>
      </div>
      <div className={isExpanded ? "content-visible" : "content-hidden"}>
        <p>{description}</p>
        <div dangerouslySetInnerHTML={{ __html: example }} />
        <p>{quiz}</p>
      </div>
    </div>
  );
}

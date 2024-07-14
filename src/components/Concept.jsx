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
      <h3 onClick={(e) => setIsExpanded(!isExpanded)}>{title}</h3>

      <div className={isExpanded ? "content-visible" : "content-hidden"}>
        <p>{description}</p>
        <div dangerouslySetInnerHTML={{ __html: example }} />
        <p className={`difficulty ${difficulty.toLowerCase()}`}>{difficulty}</p>
        <p>{quiz}</p>
      </div>
    </div>
  );
}

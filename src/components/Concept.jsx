import React from 'react';
import '../styles.css';

export default function Concept({
  title,
  description,
  example,
  difficulty,
  quiz,
}) {
  return (
    <div className="concept">
      <h3>{title}</h3>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: example }} />
      <p className={`difficulty ${difficulty.toLowerCase()}`}>{difficulty}</p>
      <p>{quiz}</p>
    </div>
  );
}

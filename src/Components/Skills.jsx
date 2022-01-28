import React from "react";

export default function Skills({ skills }) {
  return (
    <ul>
      {skills.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

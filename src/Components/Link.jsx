import React from "react";

export default function Link({ link, icon }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={icon} alt={link} />
    </a>
  );
}

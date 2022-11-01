import React from 'react';
import "../Buttons/Button.scss";

export default function Button({title,styLe, logo}) {
  return (
    <button className={`butt ${styLe}`}>{title} {logo}</button>
  )
}

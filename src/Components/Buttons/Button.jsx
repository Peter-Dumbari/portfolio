import React from 'react';
import "../Buttons/Button.scss";

export default function Button({title,styLe}) {
  return (
    <button className={`butt ${styLe}`}>{title}</button>
  )
}

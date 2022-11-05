import React from 'react';
import "../Buttons/Button.scss";

export default function Button({title,styLe, logo, onclick}) {
  return (
    <button type='button' onClick={onclick} className={`butt ${styLe}`}>{title} {logo}</button>
  )
}

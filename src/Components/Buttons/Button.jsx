import React from 'react';
import "../Buttons/Button.scss";

export default function Button({title,
  styLe, 
  logo, 
  onclick, 
  datatarget, 
  datatoggle, 
  ariacontrol,
  handleSubmit, 
  type,
  disable}) {
  return (
    <button type={type} 
    onClick={handleSubmit} 
    className={`butt ${styLe}`} 
    data-bs-toggle={datatoggle}
    data-bs-target= {datatarget}
    aria-controls={ariacontrol}
    disabled={disable}
    >{title} {logo}
    
    </button>
  )
}

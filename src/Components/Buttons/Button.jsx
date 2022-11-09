import React from 'react';
import "../Buttons/Button.scss";

export default function Button({title,styLe, logo, onclick, datatarget, datatoggle, ariacontrol}) {
  return (
    <button type='button' 
    onClick={onclick} 
    className={`butt ${styLe}`} 
    data-bs-toggle={datatoggle}
    data-bs-target= {datatarget}
    aria-controls={ariacontrol}
    >{title} {logo}
    
    </button>
  )
}

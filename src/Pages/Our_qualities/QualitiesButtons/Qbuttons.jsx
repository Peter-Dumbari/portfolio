import React from 'react'
import "../QualitiesButtons/Qbuttons.scss"
import icon from  "../../../Images/icon.svg";

export default function Qbuttons({text}) {
  return (
    <button className='qbutton'><img className='qbutton_icon' src={icon} alt='#'/> {text}</button>
  )
}

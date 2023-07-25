import React from 'react'

function Darkmode(props) {

    function func(){
        props.toggle();
    }
  return (
    <div className='mt-2 modebtn'>
      <div className="form-check form-switch " >
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id='drkmd'>
    Dark Mode
  </label>
  <input
    className="form-check-input drkbtn"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
    onClick={func}
  />
  
</div>
    </div>
  )
}

export default Darkmode

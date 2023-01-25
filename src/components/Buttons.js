import React from "react"

const Buttons = (props) => {
    return( 
<div id='buttons'>
  <button className="ma3 br3 w-10 pa3 b--green bg-light-green" onClick={() => alert("Button 1 clicked")}>Button 1</button>
  <button className="ma3 ml4 br3 w-10 pa3 b--green bg-light-green" onClick={() => alert("Button 2 clicked")}>Button 2</button> 
  <button id='push' className="ma3 br3 w-10 pa3 b--green bg-light-green" onClick={() => alert("Button 3 clicked")}>Button 3</button>
</div>
    )}

export default Buttons
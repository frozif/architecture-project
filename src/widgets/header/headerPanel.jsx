import { useState } from "react";
import NavPanel from "../nav/navPanel";


function  HeaderPanel(){

return (
      <header className='header_section'>
<NavPanel></NavPanel>
<div className="header_panel">
  <div className="container">
    <div className="header_panel_main">
      <h2>Design beyond the ordinary</h2>
      <p>We shape thoughtful spaces where timeless aesthetics, everyday comfort, and modern functionality come together.</p>
    </div>
  </div>
</div>
  </header>
)
}


export default HeaderPanel
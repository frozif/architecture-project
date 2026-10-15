import { useState } from "react";



function NavPanel(){
const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)


return (
    <nav className='nav_panel'>
<div className="container">
  <div className="nav_panel_main">
<div className={`nav_panel_main_info ${burgerMenuOpen ? 'is-open' : ''}`}>
      <button 
            onClick={()=>{
    document.querySelector('.our_services')?.scrollIntoView({
      behavior: 'smooth'
    });
      }}
      type="button">ABOUT STUDIO</button>
      <button type="button">PRICES</button>
      <button 
      onClick={()=>{
    document.querySelector('.our_projects')?.scrollIntoView({
      behavior: 'smooth'
    });
      }}
      type="button"
      >PROJECTS</button>
      <button 
            onClick={()=>{
    document.querySelector('.Project_Request')?.scrollIntoView({
      behavior: 'smooth'
    });
      }}
      type="button">CONTACTS</button>
    </div>
    <div className="nav_panel_main_logo">
      <h1>FRZ COMPANY</h1>
    </div>
            <button
            onClick={()=>{
              setBurgerMenuOpen(prev=> !prev)
            }}
        type={`button`} 
  className={`burger ${burgerMenuOpen ? 'open' : ''}`}
  aria-label={burgerMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
  aria-expanded={burgerMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>
  </div>
</div>
</nav>
)
}


export default NavPanel
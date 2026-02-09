import React from 'react'
import "/src/CSS/Header.css";
function Header() {
  return (
      <header className='header-style'>
        <div className='header-logo-container'>
            <span className='logo-image'>logoTipo</span>
            <span className='logo-text'>loja Virtual</span>
        </div>
        <nav className='nav-menu'>
            <a href="#inicio" className='nav-link'>Home</a>
            <a href="#sobre" className='nav-link'>Sobre</a>
            <a href="#produtos" className='nav-link'>Produtos</a>
            <a href="#contato" className='nav-link'>Contato</a>
        </nav>
      </header>
  )
}

export default Header

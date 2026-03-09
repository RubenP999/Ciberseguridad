import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    // Estado para controlar el menú en móviles
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    
    // Cierra el menú al hacer clic en un enlace (útil en móviles)
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="main-nav">
          <div className="nav-container">
            <div className="logo">LSB <span>2026</span></div>
            
            {/* Ícono de Hamburguesa animado */}
            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
              <li><Link to="/importancia" onClick={closeMenu}>Importancia</Link></li>
              <li><Link to="/pilares" onClick={closeMenu}>Pilares CID</Link></li>
              <li><Link to="/taxonomia" onClick={closeMenu}>Taxonomía</Link></li>
              <li><Link to="/redes" onClick={closeMenu}>Redes & Trust</Link></li>
            </ul>
          </div>
        </nav>
    );
}
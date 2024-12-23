import {X} from 'lucide-react';
import {NavbarProps} from './types';
import logo from '../../assets/logo.svg';

import './Navbar.css';


const Navbar= ({isSidebarOpen, toggleSidebar}: NavbarProps) => {
    return(
        <nav className="navbar">
            <button className="hamburger" onClick={toggleSidebar}>
                {isSidebarOpen ? <X size={20} /> : (
                    <>
                        <span></span>
                        <span></span>
                        <span></span>
                    </>
                )}
            </button>
            <div className="logo">
                <img src={logo} alt="CodeAnt AI" />
                <span>CodeAnt AI</span>
            </div>
        </nav>
    )
}

export default Navbar;
import { useRef } from 'react';
import NavCss from './../Nav/Nav.module.css'
function Nav() {

    const menu = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle(NavCss.openmenu)
    }

    return (
        <div className="contain">
            <div className={NavCss.nav}>
                <div className={NavCss.logo}>
                    <a href="#">Mohamed</a>
                </div>

                <ul ref={menu}>
                    <li onClick={menuHandler}><a href="#">Home</a></li>
                    <li><a href="#About" onClick={menuHandler}>About</a></li>
                    <li><a href="#experience" onClick={menuHandler}>Experience</a></li>
                    <li><a href="#projects" onClick={menuHandler}>Projects</a></li>
                    <li><a href="#contact" onClick={menuHandler}>Contact</a></li>
                </ul>

                <i className='ri-menu-4-line' id={NavCss.bars} onClick={menuHandler}></i>
            </div>
        </div>
        
    );
}

export default Nav;
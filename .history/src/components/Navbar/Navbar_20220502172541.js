import { React, useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { navbarData } from '../../data/NavbarData';

import {
    Nav,
    NavbarContainer,
    NavLogo, NavIcon,
    MobileIcon, NavMenu,
    NavLinks, NavItem,
} from './NavbarStyles';

const Navbar = () => {

    const [show, setShow] = useState(false);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth';
        });
    }

    const closeMobileMenu = (id) => {
        scrollTo(id);
        setShow(false);
    }

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon src="./images/logo.svg" alt="" />
                    eSignify
                </NavLogo>
                <MobileIcon onClick={() => setShow(!show)}>
                    {show ? <FaTimes /> : <CgMenuRight />}
                </MobileIcon>
                <NavMenu show={show}>
                    {navbarData.map((el, index) => {
                        <NavItem key="index">
                            <NavLinks to="/" onClick={() => closeMobileMenu(el.to)}>
                                {el.text}
                            </NavLinks>
                        </NavItem>
                    })}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>

    </div>
  )
}

export default Navbar
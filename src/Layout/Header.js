import React, {useState, useContext} from 'react';
import {Collapse, Navbar, NavbarToggler, 
    NavbarBrand, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';

import { Link } from 'react-router-dom';

import { UserContext } from '../Context/UserContext';

const Header = () => {
    const context = useContext(UserContext);
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">
                     MyGithub App
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white">
                {
                    // if you are accessing object inside other object then you have to use ?. like context.user?.email when you once used it you not need to use again. This is modern js.
                    context.user?.email ? context.user.email : ""
                }
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar style={{flexDirection: "row-reverse"}}>
                <Nav className="ml-auto" navbar >
                    {
                        context.user ? 
                        (
                            <>          
                                <NavItem>
                                    <NavLink onClick={() => {context.setUser(null)}} className='text-white'>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </>
                        ) : (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/signin" className='text-white'>
                                        SignIn
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/signup" className='text-white'>
                                        SignUp
                                    </NavLink>
                                </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;
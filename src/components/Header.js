import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import teaLogo from '../app/assets/images/teaLogo.png';
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
            <img src={teaLogo} alt='tea logo' className='float-start' />
                <h1 className='mt-1'><strong>Tea Discoveries</strong></h1>
            </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} >
            <i className='fa fa-bars fa-lg'></i><button class="navbar-toggler ml-auto custom-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#nav3">
            {/* <span class="navbar-toggler-icon"></span> */}
        </button>
        </NavbarToggler>
            <Collapse className='navbar-collapse' isOpen={menuOpen} navbar >
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg'> 
                            <a> Home</a>
                            </i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-list fa-lg'>
                            <a> Directory</a>
                            </i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg'> 
                            <a> About</a>
                            </i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg'> 
                            <a> Contact</a>
                            </i>
                        </NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm/>
            </Collapse>
        </Navbar>
    );
};

export default Header;
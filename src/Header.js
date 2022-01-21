import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import pau from './pau.svg'

function Header() {
  return (
    <div>
      <Navbar bg="dark" className='mb-2 d-flex align-items-center gap-2'>
        <img
          src={pau}
          width="50"
          height="30"
          className="d-inline-block align-top ms-4"
          alt="Pau logo"
        />
        <h2 className='text-light'>Todo App</h2>
      </Navbar>
    </div>
  );
}

export default Header;

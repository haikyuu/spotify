import React from 'react'
import {
	Navbar,
	Nav,
	NavDropdown,
	MenuItem,
} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

const NavBarComponent = ({counter = 'counter'})=> (
	<Navbar  collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <FontAwesome name='rebel' size='lg'/>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav className="nav-filter">
        <NavDropdown eventKey={3} title='Filter' id='basic-nav-dropdown'>
          <MenuItem eventKey={3.1}>Album</MenuItem>
          <MenuItem eventKey={3.2}>Artist</MenuItem>
          <MenuItem eventKey={3.3}>Playlist</MenuItem>
          <MenuItem eventKey={3.3}>Track</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <li className="counter">{counter}</li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBarComponent
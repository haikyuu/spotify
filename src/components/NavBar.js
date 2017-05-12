import React from 'react'
import {
	Navbar,
	Nav,
	NavDropdown,
	MenuItem,
} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
const FILTER = {
  ALBUM: 'ALBUM',
  ARTIST: 'ARTIST',
  PLAYLIST: 'PLAYLIST',
  TRACK: 'TRACK',
}
const NavBarComponent = ({counter = 'Counter', onFilterSelect})=> (
	<Navbar  collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <FontAwesome name='rebel' size='lg'/>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav className="nav-filter">
        <NavDropdown eventKey={3} title='Filter' id='dropdown' onSelect={onFilterSelect}>
          <MenuItem eventKey={FILTER.ALBUM}>Album</MenuItem>
          <MenuItem eventKey={FILTER.ARTIST}>Artist</MenuItem>
          <MenuItem eventKey={FILTER.PLAYLIST}>Playlist</MenuItem>
          <MenuItem eventKey={FILTER.TRACK}>Track</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <Navbar.Brand>
          <li id="counter">{counter}</li>
        </Navbar.Brand>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBarComponent
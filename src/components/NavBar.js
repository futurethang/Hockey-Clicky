import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Hockey Clicky</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Click the pucks, just don't hit the same one twice!
          </Navbar.Text>
          <Navbar.Text pullRight>Score: 0 | Top Score: 0</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>

  )
}

export default NavBar;
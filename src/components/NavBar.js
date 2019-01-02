import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavBar = (props) => {
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
          <Navbar.Text pullRight>Score: {props.score} | Top Score: {props.topScore}</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>

  )
}

export default NavBar;
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const GameOverModal = (props) => {
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>One fine body...</Modal.Body>

        <Modal.Footer>
          <Button onClick={() => props.newGame()}>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default GameOverModal;
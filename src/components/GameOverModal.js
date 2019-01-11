import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const GameOverModal = (props) => {
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>GAME OVER</Modal.Title>
        </Modal.Header>

        <Modal.Body>


          Nice work you scored {props.score}
          <br />

          Try to beat your current top score of {props.topScore}



        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => props.newGame()}>Try again!</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default GameOverModal;
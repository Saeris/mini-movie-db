import { Component } from "preact"
import { CloseModal } from "./closeModal"
import { ModalContents } from "./modalContents"
import { ModalOverlay } from "./modalOverlay"
import { OpenModal } from "./openModal"

export class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  onOpen = () => {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true
      })
    }
  }

  onClose = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      })
    }
  }

  listenKeyboard = event => {
    if (event.key === "Escape" || event.keyCode === 27) {
      this.onClose()
    }
  }

  componentDidMount = () => {
    window.addEventListener("keydown", this.listenKeyboard.bind(this), true)
  }

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.listenKeyboard.bind(this), true)
  }

  onDialogClick = event => {
    event.stopPropagation()
  }

  render({ children }, { isOpen }) {
    return children[0]({
      isOpen,
      onOpen: this.onOpen,
      onClose: this.onClose,
      onDialogClick: this.onDialogClick,
      CloseModal: ({ children, ...props }) => (
        <CloseModal {...props} onClose={this.onClose}>
          {children}
        </CloseModal>
      ),
      ModalContents: ({ children, ...props }) => (
        <ModalContents {...props} onDialogClick={this.onDialogClick}>
          {children}
        </ModalContents>
      ),
      ModalOverlay: ({ children, ...props }) => (
        <ModalOverlay {...props} isOpen={isOpen} onClose={this.onClose}>
          {children}
        </ModalOverlay>
      ),
      OpenModal: ({ children, ...props }) => (
        <OpenModal {...props} onOpen={this.onOpen}>
          {children}
        </OpenModal>
      )
    })
  }
}

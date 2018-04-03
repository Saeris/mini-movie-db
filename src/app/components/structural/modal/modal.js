import { Component } from "preact"
import "./modal.scss"

export class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  onOpen = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen && true
    }))
  }

  onClose = () => {
    this.setState(({ isOpen }) => ({
      isOpen: isOpen && false
    }))
  }

  listenKeyboard = event => {
    if (event.key === `Escape` || event.keyCode === 27) {
      this.onClose()
    }
  }

  componentDidMount = () => {
    window.addEventListener(`keydown`, this.listenKeyboard.bind(this), true)
  }

  componentWillUnmount = () => {
    window.removeEventListener(`keydown`, this.listenKeyboard.bind(this), true)
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
      CloseModal: props => (
        <button type="button" onClick={this.onClose} {...props} />
      ),
      ModalContent: ({ className, ...props }) => (
        <section
          onClick={this.onDialogClick}
          {...props}
          className={`${className ? `${className} ` : ``}dialog`}
        />
      ),
      ModalOverlay: ({ className, ...props }) => (
        <aside
          onClick={this.onClose}
          {...props}
          className={`${className ? `${className} ` : ``}modal ${
            isOpen ? `open` : ``
          }`}
        />
      ),
      OpenModal: props => (
        <button type="button" onClick={this.onOpen} {...props} />
      )
    })
  }
}

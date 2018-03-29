import { Component } from "preact"

export class Modal extends Component {
  state = {
    isOpen: false
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
    return children[0](isOpen, this.onOpen, this.onClose, this.onDialogClick)
  }
}

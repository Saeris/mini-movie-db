export const CloseModal = ({ onClose, children, ...props }) => (
  <button {...props} onClick={onClose} type="button">
    {children}
  </button>
)

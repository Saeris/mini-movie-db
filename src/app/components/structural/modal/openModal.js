export const OpenModal = ({ onOpen, children, ...props }) => (
  <button {...props} onClick={onOpen} type="button">
    {children}
  </button>
)

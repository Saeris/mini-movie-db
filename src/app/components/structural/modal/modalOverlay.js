export const ModalOverlay = ({
  isOpen,
  onClose,
  children,
  className,
  ...props
}) => (
  <aside
    {...props}
    className={`${className ? `${className} ` : ``}modal ${
      isOpen ? `open` : ``
    }`}
    onClick={onClose}
  >
    {children}
  </aside>
)

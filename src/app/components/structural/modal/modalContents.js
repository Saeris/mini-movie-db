export const ModalContents = ({
  onDialogClick,
  className,
  children,
  ...props
}) => (
  <section
    {...props}
    className={`${className ? `${className} ` : ``}dialog`}
    onClick={onDialogClick}
  >
    {children}
  </section>
)

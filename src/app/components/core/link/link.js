export const Link = ({ children, external, ...props }) => (
  <a {...props} {...(external ? { target: `_blank`, rel: `noopener` } : {})}>
    {children}
  </a>
)

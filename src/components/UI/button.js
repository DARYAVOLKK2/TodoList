import './button.modules.css'

function Button(props) {
  const { children, disabled = false } = props
  return (
    <button {...props} className="button" disabled={disabled}>
      {children}
    </button>
  )
}

export default Button

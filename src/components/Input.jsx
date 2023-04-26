import React from "react"

function Input(props) {
  // Destructure props for easier access
  const {
    name,
    placeholder,
    autoFocus,
    type,
    className,
    id,
    label,
    icon,
    labelClass,
    register,
  } = props

  // Set the input type to "text" if not specified
  let inputType = type || "text"
  // Set the initial value (if label is present) for radio inputs only (sexe)
  const value = label && label

  // Prevent default paste behavior
  const handlePaste = (e) => {
    e.preventDefault()
  }

  // Define a function to handle input changes
  const handleChange = (e) => {
    console.log(e.target.value)
  }

  // Render the input element
  return (
    <>
      <input
        className={className || "container__input"}
        type={inputType}
        id={id}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={value}
        // Register the input with React Hook Form and handle input changes
        {...(register &&
          register(name, {
            onChange: handleChange,
            onPaste: handlePaste,
          }))}
      />
      {/* Render the label element */}
      <label className={labelClass ?? "container__label"} htmlFor={id}>
        {/* Render the label text (if icon is not present) */}
        {!icon && label}
        {/* Render the icon (if present) */}
        {icon && <i className={`fa-solid ${icon} container__icon`}></i>}
      </label>
    </>
  )
}
// Memoize the component to avoid unnecessary re-renders
export default React.memo(Input)

export default function Input({ value, onChange, onKeyDown, placeholder }) {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  )
}

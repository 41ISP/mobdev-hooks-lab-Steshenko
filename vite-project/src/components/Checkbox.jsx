export default function Checkbox({ id, checked, onChange, children }) {
  return (
    <div className="filter-chip">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>
        <span className="dot" />
        {children}
      </label>
    </div>
  )
}

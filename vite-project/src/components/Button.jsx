export default function Button({ children, onClick, variant = 'primary', type = 'button' }) {
  const className = variant === 'ghost' ? 'btn ghost' : 'btn'
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

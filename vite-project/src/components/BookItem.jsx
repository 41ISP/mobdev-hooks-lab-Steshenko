const COVER_PALETTE = ['#4f6b52', '#8a3a3a', '#5b4a7a', '#3a6b7a', '#7a5b3a']

const BookItem = ({ book, onToggleRead, onDelete }) => {
  const coverColor = COVER_PALETTE[book.id % COVER_PALETTE.length]
  const initial = book.title.charAt(0).toUpperCase()

  return (
    <div className="book-row">
      <div className="book-cover" style={{ background: coverColor }}>
        {initial}
      </div>
      <div className="book-info">
        <p className={`book-title ${book.read ? 'done' : ''}`}>{book.title}</p>
        <div className="book-author">{book.author}</div>
      </div>
      <div
        className={`read-check ${book.read ? 'checked' : ''}`}
        onClick={() => onToggleRead(book.id)}
      >
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(book.id)}
        title="Убрать с полки"
      >
        ✕
      </button>
    </div>
  )
}
export default BookItem;

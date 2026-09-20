import { useState } from 'react'
import ShelfScreen from './pages/ShelfScreen'
import './App.css'

export default function App() {
  const [books, setBooks] = useState([])
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)

  function handleAdd(title) {
    const newBook = {
      id: Date.now(),
      title,
      author: 'Неизвестный автор',
      read: false,
    }
    setBooks((prev) => [...prev, newBook])
  }

  function handleToggleRead(id) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    )
  }

  function handleDelete(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  function handleToggleFilter() {
    setShowOnlyUnread((prev) => !prev)
  }

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
      </div>

      <ShelfScreen
        books={books}
        showOnlyUnread={showOnlyUnread}
        onToggleFilter={handleToggleFilter}
        onAdd={handleAdd}
        onToggleRead={handleToggleRead}
        onDelete={handleDelete}
      />
    </div>
  )
}

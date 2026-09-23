import { useState } from 'react'
import Input from './Input'
import Button from './Button'

const BookForm = ({ onAdd }) => {
  const [draft, setDraft] = useState('')

  function handleAdd() {
    const title = draft.trim()
    if (title === '') return
    onAdd(title)
    setDraft('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="add-book-row">
      <Input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Название книги..."
      />
      <Button onClick={handleAdd}>Добавить на полку</Button>
    </div>
  )
}
export default BookForm;


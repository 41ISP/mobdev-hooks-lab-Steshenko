import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <div className="app">
  <div className="app-header">
    <div className="brand">
      <div className="brand-mark">S</div>
      <div className="brand-name">Shelf</div>
    </div>
  </div>
  <section className="screen active" id="screen-shelf">
    <p className="greeting">Добрый вечер</p>
    <div className="add-book-row">
      <input className="input" id="bookInput" placeholder="Название книги..." />
      <button className="btn" id="addBtn">
        Добавить на полку
      </button>
    </div>
    <div className="list-toolbar">
      <span className="toolbar-title">Книги</span>
      <div className="filter-chip">
        <input type="checkbox" id="filterCheckbox" />
        <label htmlFor="filterCheckbox">
          <span className="dot" />
          Только непрочитанные
        </label>
      </div>
    </div>
    <div className="book-list" id="bookList">
      <div className="book-row" data-id={1}>
        <div className="book-cover" style={{ background: "#4f6b52" }}>
          К
        </div>
        <div className="book-info">
          <p className="book-title done">Клара и Солнце</p>
          <div className="book-author">Кадзуо Исигуро</div>
        </div>
        <div className="read-check checked" data-role="toggle">
          <span className="check-circle">✓</span>
          <span className="read-label">Прочитано</span>
        </div>
        <button
          className="delete-btn"
          data-role="delete"
          title="Убрать с полки"
        >
          ✕
        </button>
      </div>
    </div>
  </section>
</div>
    </>
  )
}

export default App

import React from "react"
import quotes from "../data/quotes"

const Header = () => {
  return (
    <header>
      <div>Header</div>
      <aside>
        <blockquote>&quot;{quotes[0]}&quot;</blockquote>
      </aside>
    </header>
  )
}

export default Header

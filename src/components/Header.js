import React, { useState, useEffect } from "react"
import quotes from "../data/quotes"

const Header = () => {
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  const [quote, setQuote] = useState(getRandomQuote(quotes))

  useEffect(() => {
    const interval = setInterval(() => setQuote(getRandomQuote(quotes)), 15000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <header>
      <div>Header</div>
      <aside>
        <blockquote>&quot;{quote}&quot;</blockquote>
      </aside>
    </header>
  )
}

export default Header

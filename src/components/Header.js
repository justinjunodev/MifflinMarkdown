import React, { useState, useEffect } from "react"
import styled from "styled-components"
import quotes from "../data/quotes"

const Header = () => {
  // Grabs a rondom quote from quotes data.
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  // Set Initial State
  const [quote, setQuote] = useState(getRandomQuote(quotes))

  // Sets interval to call getRandomQuote every 15 secs. Then interval is cleared to prevent leaks.
  useEffect(() => {
    const interval = setInterval(() => setQuote(getRandomQuote(quotes)), 15000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <h1>Mifflin.md</h1>
      </HeaderLogo>
      <HeaderQuote>
        <p>Words from our Regional Sales Manager, Michael Scott:</p>
        <blockquote>&quot;{quote}&quot;</blockquote>
      </HeaderQuote>
    </HeaderWrapper>
  )
}

export default Header

// Component Styles
const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 3rem;
  height: 7.5rem;
  max-width: 1600px;
  margin: 0 auto;
  color: white;
`

const HeaderLogo = styled.div`
  align-self: center;
  h1 {
    text-transform: uppercase;
    margin: 0;
  }
`

const HeaderQuote = styled.aside`
  align-self: center;
  text-align: right;
  p {
    font-size: 0.75rem;
    font-family: var(--sans);
    line-height: 1;
    margin-bottom: 0.25rem;
    opacity: 0.75;
  }
  blockquote {
    margin: 0;
    line-height: 1.5;
    font-style: italic;
  }
`

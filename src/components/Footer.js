import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Mifflin.md</h2>
      <h3>A Markdown Company</h3>
      <p>All Rights Reserved &copy; {new Date().getFullYear()}</p>
    </FooterWrapper>
  )
}

export default Footer

// Component Styles
const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column;
  place-content: center;
  text-align: center;
  color: var(--light);
  height: 150px;
  h2,
  h3 {
    font-family: var(--sans);
    text-transform: uppercase;
    margin: 0;
  }
  p {
    margin: 0.5rem 0 0;
    font-size: 0.75rem;
    opacity: 0.75;
  }
`

import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Mifflin.md</h2>
      <h3>A Markdown Company</h3>
      <p>
        <small>
          All Rights Reserved &copy; {new Date().getFullYear()} — Made by{" "}
          <a href="https://twitter.com/justinjunodev">@JustinJunoDev</a>
        </small>
      </p>
    </FooterWrapper>
  )
}

export default Footer

// Component Styles
const FooterWrapper = styled.footer`
  height: 9rem;
  display: flex;
  flex-flow: column;
  place-content: center;
  text-align: center;
  color: white;
  h2,
  h3 {
    text-transform: uppercase;
    margin: 0;
  }
  p {
    opacity: 0.75;
    margin: 0.5rem 0 0;
    a {
      color: white;
      text-decoration: none;
    }
  }
`

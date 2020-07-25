import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
  --black: #172B4D;
  --blue: #0072FF;
  --blueAlt: #0052D4;
  --sans: 'PT Sans', sans-serif;
  --serif: 'PT Serif', serif; 
}

*, *:before, *:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
}

body {
  height: 100%;
  min-height: 100vh;
  padding: 0 3rem;
  margin: 0;
  font-size: 1rem;
  font-family: var(--serif);
  font-weight: 400;
  line-height: 1.5;
  background-color: var(--blue);
  background-image: linear-gradient(110deg, var(--blue) 25%, var(--blueAlt) 100%);
}

h1 {
  font-size: 1.9375rem;
  font-family: var(--sans);
  font-weight: 700;
  line-height: 3rem;
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.5625rem;
  font-family: var(--sans);
  font-weight: 700;
  line-height: 3rem;
  margin: 1.5rem 0;
}

h3, h4, h5, h6 {
  font-family: var(--sans);
  font-weight: 700;
  line-height: 1.5rem;
}

h3 {
  font-size: 1.25rem;
  margin-top: 1.5rem;
}

h4 {
  font-size: 1rem;
  margin: 1.5rem 0 0;
}

h5 {
  font-size: 1rem;
  margin: 0 0 1.5rem;
}

h6 {
  font-size: 1rem;
  margin: 0;
}

p, ul, ol, pre, table, blockquote {
  margin: 0 0 1.5rem;
}

ul ul, ol ol, ul ol, ol ul {
  margin: 0;
}

small {
  font-size: .75rem;
}

hr {
  border: 1px solid;
  margin: -1px 0;
}

a, b, i, strong, em, code {
  line-height: 0;
}

sub, sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}
`

export default GlobalStyle

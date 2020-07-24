import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
  --dark: #172B4D;
  --mid: #EBECF0;
  --light: #FAFBFC;
  --blue: #0072FF;
  --blueAlt: #0052D4;
  --warn: #FFAB00;
  --error: #FF5630;
  --sans: 'PT Sans', sans-serif;
  --serif: 'PT Serif', serif; 
}

*, *:before, *:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

body {
  height: 100%;
  min-height: 100vh;
  padding: 0 2rem;
  margin: 0;
  font-size: 1rem;
  font-family: var(--serif);
  line-height: 1.5;
  background-color: var(--blue);
  background-image: linear-gradient(110deg, var(--blue) 25%, var(--blueAlt) 100%);
}
`

export default GlobalStyle
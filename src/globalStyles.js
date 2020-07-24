import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

header,
footer {
  height: 75px;
}

main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: calc(100vh - 150px);
}

.editor {
  border: 1px solid lightgray;
  outline: none;
  width: 100%;
  height: calc(100% - 50px);
  resize: none;
}

.options {
  height: 50px;
  border: 1px solid lightgray;
}

.preview {
  border: 1px solid lightgray;
}
`

export default GlobalStyle

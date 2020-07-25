import React, { useState } from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import "github-markdown-css"

const Main = () => {
  // Set Initial State
  const [markdown, setMarkdown] = useState("# Hello, Markdown!")

  // Updates the state on textarea change.
  function handleChange(e) {
    setMarkdown(e.target.value)
  }

  // Resets/ clears current markdown state.
  function handleReset() {
    setMarkdown("")
  }

  // Generates new Blob and downloads markdown file.
  function handleDownload() {
    const source = document.createElement("a")
    const file = new Blob([markdown], { type: "text/plain" })
    source.href = URL.createObjectURL(file)
    source.download = "mifflin.md"
    source.click()
  }

  return (
    <MainWrapper>
      <MarkdownPreview source={markdown} className="markdown-body" />
      <MarkdownEditor>
        <textarea onChange={handleChange} value={markdown} />
        <ul>
          <button onClick={handleReset} type="button">
            Reset
          </button>
          <button onClick={handleDownload} type="button">
            Download
          </button>
        </ul>
      </MarkdownEditor>
    </MainWrapper>
  )
}

export default Main

// Component Styles
const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  > * {
    height: calc(100vh - 225px);
    min-height: 400px;
  }
`

const MarkdownEditor = styled.div``

const MarkdownPreview = styled(ReactMarkdown)`
  color: var(--dark);
  background: var(--light);
  overflow-y: scroll;
  padding: 2rem;
  font-family: var(--sans);
  a {
    color: var(--blue);
    :hover {
      color: var(--blueAlt);
      text-decoration: none;
    }
  }
`

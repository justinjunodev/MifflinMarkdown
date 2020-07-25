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
          <li>
            <button onClick={handleReset} type="button">
              Reset
            </button>
          </li>
          <li>
            <button onClick={handleDownload} type="button">
              Download
            </button>
          </li>
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

const MarkdownEditor = styled.div`
  height: calc(100vh - 225px);
  position: relative;
  textarea {
    height: 100%;
    width: 100%;
    padding: 2rem;
    resize: none;
    outline: none;
    background: none;
    border: 2px solid var(--light);
    font-family: var(--serif);
    color: var(--light);
  }
  ul {
    display: flex;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    margin: 0;
    list-style: none;
    li:first-of-type {
      margin-right: 1rem;
    }
    button {
      border: none;
      background: var(--light);
      font-family: var(--sans);
      color: var(--dark);
      padding: 0.5rem 2rem;
      cursor: pointer;
    }
  }
`

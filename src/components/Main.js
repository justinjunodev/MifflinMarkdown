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
    source.download = "MIFFLIN.md"
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
  grid-gap: 3rem;
  > * {
    height: calc(100vh - 16.5rem);
    min-height: 400px;
  }
`

const MarkdownPreview = styled(ReactMarkdown)`
  background: white;
  border-radius: 0.5rem;
  font-family: var(--sans);
  color: var(--black);
  padding: 1.5rem;
  overflow-y: scroll;
  a {
    color: var(--blue);
    :hover {
      color: var(--blueAlt);
      text-decoration: none;
    }
  }
`

const MarkdownEditor = styled.div`
  position: relative;
  textarea {
    border-radius: 0.5rem;
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    resize: none;
    outline: none;
    background: none;
    border: 3px solid rgba(255, 255, 255, 0.75);
    font-family: var(--serif);
    color: white;
    opacity: 0.75;
  }
  ul {
    display: flex;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    margin: 0;
    list-style: none;
    li:first-of-type {
      margin-right: 1rem;
    }
  }
  button {
    border: none;
    background: white;
    font-family: var(--sans);
    font-weight: 700;
    color: var(--black);
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    border-radius: 0.25rem;
    opacity: 0.75;
    :hover {
      opacity: 1;
    }
  }
`

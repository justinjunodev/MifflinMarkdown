import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'

const Main = () => {
    const [markdown, setMarkdown] = useState('# Hello, Markdown!')

    function handleChange(e) {
        setMarkdown(e.target.value)
    }

    return (
        <main>
            <div>
                <textarea className="editor" onChange={handleChange} value={markdown} />
            </div>
            <ReactMarkdown className="preview" source={markdown} />
        </main>
    )
}

export default Main

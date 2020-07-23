import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'

const Main = () => {
    const [markdown, setMarkdown] = useState('# Hello, Markdown!')

    function handleChange(e) {
        setMarkdown(e.target.value)
    }

    function handleDownload() {
        const source = document.createElement("a");
        const file = new Blob([markdown], { type: 'text/plain' });
        source.href = URL.createObjectURL(file);
        source.download = 'mifflin.md';
        source.click();
    }

    return (
        <main>
            <div>
                <div className="options">
                    <button onClick={handleDownload} type="button">Download</button>
                </div>
                <textarea className="editor" onChange={handleChange} value={markdown} />
            </div>
            <ReactMarkdown className="preview" source={markdown} />
        </main>
    )
}

export default Main

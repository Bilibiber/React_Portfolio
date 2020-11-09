import React, { useState, useEffect } from "react"
import Editor from "./Editor"
import useLocalStorage from "./useLocalStorage/useStorage"
import "./CodePen.css"

function RouterToCodePen() {
  const [html, setHtml] = useLocalStorage("html", "")
  const [javaScript, setJavaScript] = useLocalStorage("javaScript", "")
  const [css, setCss] = useLocalStorage("css", "")
  const [srcDoc, setSrcDoc] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javaScript}</script>
          <html>
        `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, javaScript])

  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Editor
          language="javascript"
          displayName="JavaScript"
          value={javaScript}
          onChange={setJavaScript}
        />
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
      </div>
      {/* by using sandbox it will not allow any attempts to change DOM  */}
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </>
  )
}

export default RouterToCodePen

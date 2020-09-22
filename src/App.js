import React, { useState, useEffect } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import HOC from './components/HOC';
import Message from './components/Message';
import Counter from './components/Counter';
import SuperHero from './components/SuperHero';
import ParentComponent from './components/parentComponent';
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';
import Form from './components/Form';
import LifeCycle from './components/LifeCycle';
import Editor from './CodePen/Editor';
import useLocalStorage from './CodePen/useLocalStorage/useStorage'

function App() {

  const [html, setHtml] = useLocalStorage('html','')
  const [javaScript, setJavaScript] = useLocalStorage('javaScript','')
  const [css, setCss] = useLocalStorage('css','')
  const [srcDoc, setSrcDoc] = useState('')


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
  },[html,css,javaScript])

  /* Src Doc to return all the code to the iframe */

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="javascript"
          displayName="JavaScript"
          value={javaScript}
          onChange={setJavaScript}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </div>
      {/* by using sandbox it will not allow any attempts to change DOM  */}
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%">
      </iframe>
    </>
  );
}
export default App;

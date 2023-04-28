import React, { useState } from 'react'
import TitleBar from './TitleBar'
import { Editor, EditorState } from 'draft-js'

function App() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  return (
    <main>
      <TitleBar text={editorState}/>

      <div className="m-1 editor">
        <Editor editorState={editorState} onChange={setEditorState}/>
      </div>
    </main>
  )
}

export default App

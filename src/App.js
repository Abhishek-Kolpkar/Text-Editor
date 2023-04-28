import React, { useEffect, useState } from 'react'
import TitleBar from './TitleBar'
import { Editor, EditorState, convertFromRaw } from 'draft-js'

function App() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  useEffect(() => {
    const savedContent = localStorage.getItem('content')
    if(savedContent !== null){
      const updateState = EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      setEditorState(updateState)
    }
    else{
      setEditorState(editorState)
    }
  })

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

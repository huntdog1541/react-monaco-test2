import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import MonacoEditor from 'react-monaco-editor'
import Output from './output'

class CodeEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      code: "// type your code ...\n",
      theme: "vs-light"
    };
  }

  editorDidMount = editor => {
    console.log("editorDidMount", editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  };

  render() {
    const { code, theme } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: false
    };
    return (
      <div>
        <div>
          <MonacoEditor
            height="400"
            language="javascript"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
            theme={theme}
          />
        </div>
      </div>
    );
  }
}

const App = () => (
  <div>
    <div>
      <h2>Monaco Editor Sample</h2>
      <CodeEditor />
    </div>
    <div className="output-container">
      <Output />
    </div>
  </div>
);

render(<App />, document.getElementById('root'));

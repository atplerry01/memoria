

import { ContentState, EditorState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import renderHTML from 'react-render-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Test extends Component {

  constructor(props) {
    super(props);
    const html = '<p>-- -- <br><strong>Lunes Test</strong>  |  Sales Executive<br>+1 (888) 888-8888</p><img src="https://s3.amazonaws.com/exceedbot-webchat/monday.gif" alt="undefined" style="float:left;height: auto;width: auto"/><p></p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  

//   onEditorStateChange: Function = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

  render() {
    const tett = renderHTML("<a class='github' href='https://github.com'><b>GitHub</b></a>");

    const { editorState } = this.state;
    return (
    
    <div className="rdw-storybook-root">
        
      <span>HTML Content: <pre>{'<p>Hey this <strong>editor</strong> rocks 😀</p>'}</pre></span>
        {renderHTML("<p>Hey this <strong>editor</strong> rocks 😀</p>")}
      <Editor
        editorState={editorState}
        toolbarClassName="rdw-storybook-toolbar"
        wrapperClassName="rdw-storybook-wrapper"
        editorClassName="rdw-storybook-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    </div>);
  }
}

export default Test;
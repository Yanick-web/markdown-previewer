import Header from './Header.js';
const Editor = (props)=>{
  return(
    <div className={props.classes[0]}>
      <Header name="Editor" onClick={props.onClick} icon={props.classes[1]} />
      <textarea id="editor" type="text" onChange={props.handleChange} value={props.message}></textarea>
    </div>
  );
};

export default Editor;
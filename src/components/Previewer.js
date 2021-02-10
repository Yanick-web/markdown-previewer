import Header from './Header.js';

const marked = require('marked');
marked.setOptions({
    breaks: true,
    gfm: true
});
const Previewer = (props)=>{
  let text = marked(props.message);
  return (
    <div className={props.classes[0]} >
      <Header name="Previewer" onClick={props.onClick} icon={props.classes[1]} />
      <div  id="previewer" dangerouslySetInnerHTML={{__html: text}}/>
    </div>
  );
};

export default Previewer;
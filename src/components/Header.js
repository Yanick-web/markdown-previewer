const Header = (props)=>{
  return (
    <div id="header">
      <h3>(<i className="fa fa-fire"></i>) {props.name}</h3>
      <h3 id="right" onClick={props.onClick}><a href="#"><i className={props.icon} ></i></a></h3>
    </div>
  );
};

export default Header;
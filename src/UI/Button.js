import Classes from './BUtton.module.css';
const Button=(props)=>{
    return(
        <button className={Classes.button} type={props.type||"submit"} onClick={props.onClick}>{props.name}</button> )
}
export default Button;
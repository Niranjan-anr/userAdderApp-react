
import Classes from './Card.module.css'
const Card=(props)=>{
    return (
        <div className={`${props.className} ${Classes.Card}`}>
               {props.children}
        </div>
    )
}
export default Card;
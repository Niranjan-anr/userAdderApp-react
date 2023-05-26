import Class from  './ErrorMessageBox.module.css'
import Card from './Card';
import Button from './Button';
const ErrorMessagBox=(props)=>{
        return( <div className={Class.backdrop} onClick={props.onClicked}>
            <Card className={Class.modal}>
                <header className={Class.header}>
                    <h2>{props.title}</h2>
                </header>
                <p className={Class.content}>
                    {props.description}
                </p>
                <footer className={Class.actions}>
                   <Button name='okay' type='submit' onClick={props.onClicked}/>
                </footer>
            
            </Card>
            </div>
        )
}
export default ErrorMessagBox;
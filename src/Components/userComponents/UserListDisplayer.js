import Card from '../../UI/Card'
import Class from './UserListDisplay.module.css'
const UserListDisplay=(props)=>{
    return (
        <Card className={Class.users}>
        <ul>
                {props.users.map((user)=>{
                   return <li> {user.name} {user.age} years</li>
                })}
        </ul>
        </Card>
    )
}
export default UserListDisplay;
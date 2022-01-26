import { useDispatch } from 'react-redux';
import  addNewUser  from '../action';

function AddUser() {


    const dispatch = useDispatch();

    const formHandler = (event) => {        
        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addNewUser(data.passport.value, data.name.value, data.age.value));
    };

    return (
        <form onSubmit={formHandler}>
            <div>
                <input type="text" name="passport" defaultValue="passss"></input>
            </div>
            <div>
                <input type="text" name="name" defaultValue="Nastja"></input>
            </div>
            <div>
                <input type="text" name="age" defaultValue="26"></input>
            </div>
            <div>
                <button type="submit">add user</button>
            </div>
        </form>
    )
}


export default AddUser;
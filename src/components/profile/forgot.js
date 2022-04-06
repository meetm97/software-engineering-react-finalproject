import {useState} from "react";
import * as service from "../../services/auth-service";
import {useNavigate} from "react-router-dom";

const Forgot = () => {
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();
    const submit = () =>
        service.register(newUser)
            .then(() => navigate('/home'))
            .catch(e => alert(e));
    return (
        <div>
            <h1>Forgot Password</h1>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setNewUser({...newUser, email: e.target.value})}
                   placeholder="email" type="email"/>
            <button onClick={submit}
                    className="btn btn-primary mb-5">Submit
            </button>
        </div>
    );
}
export default Forgot;
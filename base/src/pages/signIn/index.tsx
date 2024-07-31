import './styles.css';
import Logo from "../../assets/logo.svg";

function SignIn(){
    return(
        <div className='container container-sign-in'>
            <div className='sign-in'>
                <img src={Logo} alt="logo" />

            </div>
        </div>
    )
}

export default SignIn;
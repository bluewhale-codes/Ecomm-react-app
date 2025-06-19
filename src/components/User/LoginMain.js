import React ,{useRef ,useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from "./loginSignup.module.css";

import { useNavigate,useLocation } from 'react-router-dom'; 
import { useDispatch,useSelector } from 'react-redux'
import  {login}  from "../../actions/userActions"
const LoginMain = () => {
// const {registerError} = useSelector(state => state.user)
     const {loading,isAuthenticated2,error} = useSelector(state => state.loginStatus)
     const dispatch = useDispatch();
      const navigate = useNavigate();
    useEffect(() => {
  if (isAuthenticated2) {
    navigate('/account'); // redirect on successful login
  }
}, [isAuthenticated2, navigate]);

    

  
    
    
    
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
    const loginSubmit =  (e) =>{
        e.preventDefault();
        dispatch(login(loginEmail,loginPassword));
    }
    
  return (
      <>
        
        {loading?( <div className={styles.loadercontainer}>
          <div className={styles.loader}></div>
        </div>):
        (


           <div className={styles.logincontainer}>
          <div className={styles.loginsignupBox}>
              
              
               
               
                
               <form className={styles.loninForm} onSubmit={loginSubmit}>
                      <h3>Hey ,Enter your detail to get sign in to your account </h3>
                      <div className={styles.loginEmail}>
                        
                        <input type='email' placeholder='Enter Email' required  value={loginEmail} onChange={(e)=> setLoginEmail(e.target.value) } />
                      </div>
                      <div className={styles.loginPassword}>
                        <input type='password' placeholder='password'  required value={loginPassword} onChange={(e)=> setLoginPassword(e.target.value) } />
                      </div>
                      
                      <Link to='/password/forgot'>Forget Password?</Link>
                      
                      <input  type='submit' value='Login' className={styles.loginBtn}/>
                      <button type="button" className={styles.googleSignUpBtn}>
  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Icon" />
  Sign Up with Google
</button>
{error && (
  <div className={styles.customalert}>
    <p>{error}</p> 
  </div>
)}


               </form>
    
              
          </div>
       </div>
        
        )}
        </>
  )
}

export default LoginMain

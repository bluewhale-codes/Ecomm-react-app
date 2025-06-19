import React ,{useRef ,useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from "./loginSignup.module.css";

import { useNavigate,useLocation } from 'react-router-dom'; 
import { useDispatch,useSelector } from 'react-redux'
import  {register}  from "../../actions/userActions"
const Register = () => {
    const { loading, isRegistered, error } = useSelector((state) => state.registerStatus || {});

    const dispatch = useDispatch();
   
  
    
    const [fullName, setfullName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [phone, setphone] = useState("");

        
    
    

    const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(register(fullName,email,password,phone));
  };

  useEffect(() => {
    if (isRegistered) {
      alert("Registration successful!");
       // redirect to login or account page
    }
  }, [isRegistered]);

    

  
   
     
    
    
    
    
    
  return (
      <>
      <div className={styles.registerContainer}>

      
   <div className={styles.formcontainer}>
    <h2 className={styles.registerHeading}>Create Account</h2>
    <form  onSubmit={registerSubmit}> 
      <div className={styles.fromgroup}>
        <label className={styles.registerlabel}  for="fullName">Full Name</label>
        <input className={styles.registerInput} type="text" id="fullName" name="fullName" value={fullName}   onChange={(e)=> setfullName(e.target.value) }  required />
      </div>

      <div className={styles.fromgroup}>
        <label className={styles.registerlabel} for="email">Email</label>
        <input className={styles.registerInput} type="email" id="email" name="email" value={email}   onChange={(e)=> setemail(e.target.value) }  required />
      </div>

      <div className={styles.fromgroup}>
        <label className={styles.registerlabel} for="password">Password</label>
        <input className={styles.registerInput} type="password" id="password" value={password}  onChange={(e)=> setpassword(e.target.value) }  name="password" required />
      </div>

      <div className={styles.fromgroup}>
        <label className={styles.registerlabel} for="phone">Phone</label>
        <input className={styles.registerInput} type="tel" id="phone"   onChange={(e)=> setphone(e.target.value) }  value={phone} name="phone" required />
      </div>

      <button type="submit" className={styles.submitbtn}>Sign Up</button>
    </form>

    <div className={styles.divider}>OR</div>

    <button className={styles.googlebtn} >
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
     <a href='http:localhost:5000/auth/google'>Sign Up with google</a>
    </button>
  </div>
</div>
   
        </>
  )
}

export default Register

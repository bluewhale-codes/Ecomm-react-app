import React ,{useRef ,useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./loginSignup.css";

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
   <div class="form-container">
    <h2>Create Account</h2>
    <form  onSubmit={registerSubmit}> 
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" value={fullName}   onChange={(e)=> setfullName(e.target.value) }  required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" value={email}   onChange={(e)=> setemail(e.target.value) }  required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" value={password}  onChange={(e)=> setpassword(e.target.value) }  name="password" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone"   onChange={(e)=> setphone(e.target.value) }  value={phone} name="phone" required />
      </div>

      <button type="submit" class="submit-btn">Sign Up</button>
    </form>

    <div class="divider">OR</div>

    <button class="google-btn" >
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
     <a href='http:localhost:5000/auth/google'>Sign Up with google</a>
    </button>
  </div>

   
        </>
  )
}

export default Register

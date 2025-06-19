import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'; 
import styles from './Navbar.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
         <div className={styles.navbar}>
            <div>
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="#">Contact</Link>
            <Link to="#">About</Link>
            </div>
            <div className={styles.searchBar}>
            <form className={styles.searchBox}>
                    <input type="text" placeholder='Search a product ...'/>
                    <button type='submit'>Search</button>
            </form>
            
            </div>
            </div>

    </>
  )
}

export default Header

import './App.css';
import { useState                                                              } from 'react';
import Header from './components/layout/Header'
import LoginMain from "./components/User/LoginMain"
import Register from './components/User/Register';
import ProductForm from './components/Product/ProductForm'
import { Home } from './components/layout/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Profile } from './components/User/Profile';
import { AllProducts } from './components/Product/AllProducts';
import { ListProduct } from './components/Product/ListProduct';
import {Contract,BrowserProvider,parseEther,formatEther} from "ethers"
import abi from './ProductManagerABI.json'

const contractAddress = "0x35273e115f3251ab3350040eba85397e6d511b33"
function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null); 

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);

      const productContract = new Contract(contractAddress, abi, signer);
      setContract(productContract);
    }
  };

  return (
       <Router>
        <Header account={account} connectWallet={connectWallet}/>
        
         <Routes>
     
            <Route exact path='/' element ={<Home/>}/>
            <Route exact path='/login' element ={<LoginMain/>}/>
            <Route exact path='/register' element ={<Register/>}/>
            <Route exact path='/product' element ={<ListProduct contract={contract}/>}/>
            <Route exact path='/profile' element ={<Profile/>}/>
            <Route exact path='/allproducts' element ={<AllProducts contract={contract}/>}/>
            
         </Routes>
       </Router>
  );
}

export default App;

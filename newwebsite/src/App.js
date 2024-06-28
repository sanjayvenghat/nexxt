 import './index.css' 
 import Header from './Header' 
 import 'bootstrap/dist/css/bootstrap.min.css'; 
import Slider from './Slider'; 
import Item from './Item';
import Tealeaves from './Tealeaves';
 export default function App() {
  return (
    <div className="main"> 
    <Header/>   
    <Slider/>  
    <Tealeaves/>   
    <Item/> 
   
   
    
    

      
    </div>
  )
}
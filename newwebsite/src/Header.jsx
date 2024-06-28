import { useState,useEffect } from "react" 
import { FaBars } from "react-icons/fa"; 


const Header = () => { 
    const [isMobile, setIsMobile] = useState(false)
    let[shows,setshow]=useState(false)
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth > 720) {
      setIsMobile(true) 
    
  } else {
      setIsMobile(false)
  }
}
useEffect(()=>{ 
  if(window.innerWidth>720)
    setIsMobile(true)

},[])

useEffect(() => {
  window.addEventListener("resize", handleResize)
})  
function show()
{
    setIsMobile(!isMobile) 
    
}

  return (
    <div className="header flex justify-between items-center">  
    <h1 className="text-xl font-bold text-black mx-5">BREW TEA CO</h1>   
   {  isMobile && <div className="vacshow flex justify-between items-center"> 
    
    <p className="suscb bg-yellow-500  mx-2 rounded hover:bg-yellow-200">suscribe</p> 
     <p className="mx-5">Shop</p>
     <p className="mx-5">Gift shop</p> 
    <p className="mx-5">Brew coins</p> 
    <p className="mx-5">About</p>  
    </div> }
    { isMobile && <div className="vacshow flex justify-between items-center"> 
    <input type="search text rounded" placeholder="search"></input> 
    <h2 className="logo text-black font-bold mx-5 h-10 w-10">B</h2>  
    <p className="mx-2">Login</p> 
    <div className="cart  flex font-black font-bold justify-center items- me-5"> 
    
    <p className="cart">C</p>
    </div>
    

    </div> }
    <FaBars className="shower text-2xl" onClick={()=>show()} />

    </div>
  )
}

export default Header
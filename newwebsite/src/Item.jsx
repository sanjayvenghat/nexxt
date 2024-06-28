import cosmatic from './cosmatic.webp'
import { CiStar } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
const Item = () => { 
    function left()
    {
let cart=document.querySelector(".itemcart")  
cart.scrollBy({left:-cart.offsetWidth,behavior:"smooth"})

    } 
    function right()
    { 
        let cart=document.querySelector(".itemcart")  
cart.scrollBy({left:+cart.offsetWidth,behavior:"smooth"})

    }
  return ( 
    <div> 
    <div className='itemcart'>  
    <div className='iteim'><img src={cosmatic}></img> 
    <div className='cos'>Cosmatics</div> 
    <div className='star flex justify-evenly items-center'> 
    <p className='texer'>rating</p>  
    <CiStar /> 
    <CiStar />
    <CiStar />
    <CiStar />
    </div>
   </div> 
    <div className='iteim'><img src={cosmatic}></img>
    <div className='cos'>Cosmatics</div>
    <div className='star flex justify-evenly items-center'> 
    <p className='texer'>rating</p>  
    <CiStar /> 
    <CiStar />
    <CiStar />
    <CiStar />
    </div></div>
    <div className='iteim'><img src={cosmatic}></img>
    <div className='cos'>Cosmatics</div><div className='star flex justify-evenly items-center'> 
    <p className='texer'>rating</p>  
    <CiStar /> 
    <CiStar />
    <CiStar />
    <CiStar />
    </div></div>
    <div className='iteim'><img src={cosmatic}></img>
    <div className='cos'>Cosmatics</div><div className='star flex justify-evenly items-center'> 
    <p className='texer'>rating</p>  
    <CiStar /> 
    <CiStar />
    <CiStar />
    <CiStar />
    </div></div> 
    <div className='iteim'><img src={cosmatic}></img>
    <div className='cos'>Cosmatics</div><div className='star flex justify-evenly items-center'> 
    <p className='texer'>rating</p>  
    <CiStar /> 
    <CiStar />
    <CiStar />
    <CiStar />
    </div></div>
    <div className='iteim'><img src={cosmatic}></img>
    <div className='cos'>Cosmatics</div><div className='star flex justify-evenly items-center'> 
    <p className='texer'>rating</p>  
    <CiStar /> 
    <CiStar />
    <CiStar />
    <CiStar />
    </div></div>
    <div className='iteim'><img src={cosmatic}></img>
    <div className='cos'>Cosmatics</div><div className='star flex justify-evenly items-center'> 
    <p className='texer'>rating</p>  
    <CiStar /> 
    <CiStar />
    <CiStar />
    <CiStar />
    </div></div> 

    </div>  
    <div>
    </div> 
    <div className='icon feeder flex'> 
    <div className='back mx-2'><FaChevronRight  className="left" onClick={()=>left()}/></div> 
    <div className='back mx-2'><FaChevronRight className="right" onClick={()=>right()}/></div> 
    </div>
    
    </div>
    
  )
}

export default Item
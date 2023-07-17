import React, { useState } from 'react';
import './App.css';
import logo from './images/logo.svg'
import menu from './images/icon-menu.svg'
import close from './images/icon-close.svg'
import  {ReactComponent as Carticon} from './images/icon-cart.svg'
import avater from './images/image-avatar.png'
import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import Display from './Display';
import Cart from './Cart';





function App() {
  const[itemNo, setItemNo] = useState(0);
  const[displayCart,setDisplayCart] = useState(false)
  const[showMenu,setShowmenu] = useState(true)
  const price = 125
  const sum = (quantity)=>price*quantity
  const[cart, setCart] =useState({Added:false,empty:true})
  const minusBtn =()=>{
    setItemNo(prev=>prev=== 0? 0: prev-1)
    if(itemNo===0){
      setCart({...cart,Added:false})
    };
    return cart;
    
  }

  
  return (
    <div className='App'>
        <nav>
          <div className='container nav-container'>
              <div className='nav-left'>
                {/* <div></div> */}
                <img src={menu} alt='menu' onClick={()=>setShowmenu(true)}/>
                <img src={logo} alt='logo'/>
                <ul className={showMenu?'showmenu menu':'menu'}>
                  <img src={close} alt='close' onClick={()=>setShowmenu(false)}/>
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
                {displayCart&&<Cart sum ={sum} price={price} itemNo={itemNo} cart={cart} setCart={setCart}/>}
              </div> 
              <div className='nav-right'>
                <div>
                    {cart.Added && itemNo!==0 && !cart.empty?<div className='cart-item'>{itemNo}</div>:''}
                    <Carticon onClick={()=>setDisplayCart(prev=>!prev)}/>
                </div>
                <img src={avater} alt='avatar'/>
              </div>
          </div>
        </nav>
        <section>
          <div className={showMenu?'container product-container overlay':'container product-container'}>
              <Display />
              <div className='text-side'>
                <h3>sneaker company</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis</p>
                <div>
                  <h1>${price}</h1>
                  <p style={{textDecoration:'line-through',fontWeight:'bolder',opacity:'0.4'}}>$250.00</p>
                </div>
                <div className='button-container'>
                  <button>
                    <img src={minus}  onClick={minusBtn}  alt='minus-icon'/>
                    <h2>{itemNo}</h2>
                    <img src={plus} onClick={()=>setItemNo(prev=> prev+1)} alt='plus-icon'/>
                  </button>
                  <button onClick={()=>setCart({...cart, empty: false ,Added:true})}>
                    <div className='carticon'><Carticon/></div>
                    Add to cart
                  </button>
                </div>
              </div>
          </div>
        </section>
    </div>
  );
}

export default App;

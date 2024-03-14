import React from 'react';
import { Link } from 'react-router-dom';
import {ImSearch} from 'react-icons/im';
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";


const Headers = () => {
  function humbergur(){
    document.getElementById('menuList').style.cssText = 'display:flex;flex-direction:column;position:absolute;top:4rem;background-color:#3223238a;width:90%;left:4px;padding:1rem 0;border-radius:5px;';
    
  }
// window.addEventListener('click',()=> {
//   document.getElementById('menuList').style.cssText = 'flex-direction:row';
// })
  return (
    <nav>
      <div className="nav">

        <img src="https://cdn.geekwire.com/wp-content/uploads/2014/07/Netflix_Logo_Print_FourColorCMYK.png" alt="" />
        <div id='menuList'>
          <Link to="/">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recentlyadded">Recently Added</Link>
          <Link to="/mylist">My List</Link>
        </div>
        <ImSearch className='searchIcon'onClick={()=>{document.getElementById('inputParent').classList.toggle('show')}}/>
        
        <LuMenu className='menuIcon' onClick={humbergur}/>
      </div>
      {/* <div className="inputParent" id='inputParent'>
          <input type="text" placeholder='movies, Tv shows, Web series' className=''/><button><ImSearch /></button>
        </div> */}
    </nav>
  )
}

export default Headers
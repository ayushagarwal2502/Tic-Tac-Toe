import React, { useRef, useState } from 'react';
import './frontpage.css';
import setBodyColor from '../setBodyColor.js';
import image1 from './images/circle.png';
import image2 from './images/cross.png';


let data=["","","","","","","","",""];

const Frontpage = () => {
 // const navigate=useNavigate();
  const[count,setCount]=useState(0);
  const titleRef=useRef(null);
  setBodyColor({color: "#1e453e"});

      
  const box=(e,index)=>{
    
     if(count%2===0 ){
      e.target.innerHTML=`<img src='${image1}'>`
      data[index]='o';
      setCount(count+1);
      console.log(data)
    }
    else{
      e.target.innerHTML=`<img src='${image2}'>`
      data[index]='x';
      setCount(count+1)
      console.log(data)
    }
    checkwin();
  }
  const checkwin=()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      won(data[0]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      console.log(data)
      won(data[3]);
      
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      won(data[6]);
      console.log(data)
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      won(data[1]);
      console.log(data)
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      won(data[0]);
      console.log(data)
    }
   else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
    won(data[2]);
      console.log(data)
    } 
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      won(data[0]);
      console.log(data)
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      won(data[2]);
      console.log(data)
    }

  }
  const won=(winner)=>{
    // setClick(true);
    console.log(winner)
    if(winner==="x"){
       titleRef.current.innerHTML=`Congratulations : <img src='${image2}' > win`
    }
    else{
      titleRef.current.innerHTML=`Congratulations : <img src='${image1}'  > win`
    }
  }
  const restartButton=()=>{
      window.location.reload();
  }

  return (
    <div className='page'>
        <div id="title">
        <h1 ref={titleRef}>Tic Tac Toe</h1>
    </div>
    <div id="board">
        <div class="square" id="square0" onClick={(e)=>box(e,0)}></div>
        <div class="square" id="square1" onClick={(e)=>box(e,1)}></div>
        <div class="square" id="square2" onClick={(e)=>box(e,2)}></div>
        <div class="square" id="square3" onClick={(e)=>box(e,3)}></div>
        <div class="square" id="square4" onClick={(e)=>box(e,4)}></div>
        <div class="square" id="square5" onClick={(e)=>box(e,5)}></div>
        <div class="square" id="square6" onClick={(e)=>box(e,6)}></div>
        <div class="square" id="square7" onClick={(e)=>box(e,7)}></div>
        <div class="square" id="square8" onClick={(e)=>box(e,8)}></div>
    </div>  
    <div id="endGame">
        <input type="button" value="Restart" id="restartButton" onClick={restartButton} />
    </div>
    </div>
  )
}

export default Frontpage

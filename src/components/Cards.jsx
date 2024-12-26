import React from 'react'
import cardimg1 from '../assets/Cards/image.png'
import cardimg2 from '../assets/Cards/image copy.png'
import cardimg3 from '../assets/Cards/image copy 2.png'
import cardimg4 from '../assets/Cards/image copy 3.png'
import cardimg5 from '../assets/Cards/image copy 4.png'
import cardimg6 from '../assets/Cards/image copy 5.png'
import cardimg7 from '../assets/Cards/image copy 6.png'
import { useNavigate } from 'react-router-dom';
function Cards() {
  const navi = useNavigate();
  const nav = (path)=>{
    navi(path);
    window.scrollTo(0.0);
  }
  return (
    <div className="card-con">
        <div className='cards'>
    <div className="card" onClick={()=>{nav('/Starterkit')}}>
        <img src={cardimg1} alt="" />
        <div className='card-bot'><b>STARTER KITS</b></div>

    </div>
    <div className="card" onClick={()=>{nav('/Juul')}}>
    <img src={cardimg2} alt="" />
    <div className="card-bot"><b>JUUL & ZIIP</b></div>
    </div>
    <div className="card" onClick={()=>{nav('/Saltnic')}}>
    <img src={cardimg3} alt="" />
        <div className="card-bot"><b>SALT NIC</b></div>
    </div>
    <div className="card" onClick={()=>{nav('/Regular')}}>
    <img src={cardimg4} alt="" />
    <div className="card-bot"><b>REGULAR E-JUICE</b></div>
    </div>
    <div className="card" onClick={()=>{nav('/Disposable')}}>
    <img src={cardimg5} alt="" />
    <div className="card-bot"><b>DISPOSABLE VAPE</b></div>
    </div>
    <div className="card" onClick={()=>{nav('/Coils')}}>
    <img src={cardimg6} alt="" />
    <div className="card-bot"><b>COILS & PODS</b></div>
    </div>
    <div className="card" onClick={()=>{nav('/Iqos')}}>
    <img src={cardimg7} alt="" />
   <div className="card-bot"> <b>IQOS & HEETS</b></div>
    </div>
    </div>
    </div>
  )
}

export default Cards
import React,{useState} from 'react'
import "./Slider.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Slider = () => {
    const [CurrentSlide,setCurrentSlide]=  useState(0)
    const  data =[
        "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/226172/pexels-photo-226172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


    ];
    
    const prevSlide=()=>{
        setCurrentSlide(CurrentSlide===0 ? 2:(prev)=>prev-1);
    }
    const nextSlide=()=>{
        setCurrentSlide(CurrentSlide===2 ? 0:(prev)=>prev+1);
    }


  return (
    <div>
      <div className='slider'>
        <div className='sec' style={{transform:`translate(-${CurrentSlide*100}vw)`}}>
            <img src={data[0]} alt=""/>
            <img src={data[1]} alt=""/>
            <img src={data[2]} alt=""/>
        </div>
        <div className='ico'>
            <div className='ic' onClick={prevSlide}>
                <ArrowBackIcon/>
            </div>
            <div className='ic' onClick={nextSlide}>
                <ArrowForwardIcon/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Slider

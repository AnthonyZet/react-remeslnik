import React from 'react'
import Bounce from 'react-reveal/Bounce';
import './Featured.scss'

import House1 from '../../assets/fasady-obklady/1.jpg'
import House2 from '../../assets/fasady-obklady/7.jpg'
import House3 from '../../assets/fasady-obklady/3.jpg'
import House4 from '../../assets/fasady-obklady/17.jpg'
import House5 from '../../assets/fasady-obklady/5.jpg'

import House6 from '../../assets/fasady-obklady/6.jpg'
import House7 from '../../assets/fasady-obklady/7.jpg'
import House8 from '../../assets/fasady-obklady/8.jpg'
import House9 from '../../assets/fasady-obklady/9.jpg'
import House10 from '../../assets/fasady-obklady/10.jpg'



const Featured = () => {
  return (
    <div className='featured' id='featured'>
    
     <div className='container'>
     
          <h1>Nejlepší reklama je dobře odvedená práce</h1>
          <h2>Fasády</h2>
              <Bounce>
              <div className="coverLeft">
                  <div className="bigImg item-1"> <img  src={House1} alt='' /></div>
                  <div className="smallImg item-2"> <img  src={House2} alt='' /></div>
                  <div className="smallImg item-3"> <img  src={House3} alt='' /></div>
                  <div className="smallImg item-4"> <img  src={House4} alt='' /></div>
                  <div className="smallImg item-5"> <img  src={House5} alt='' /></div>
               </div> 

              </Bounce>
              <Bounce>
              <h2 className='highlight-margin'>Obklady</h2>
                 <div className="coverRight">
                  <div className="smallImg item-3"> <img  src={House7} alt='' /></div>
                  <div className="smallImg item-2 "> <img  src={House8} alt='' /></div>
                  <div className="bigImg item-1"> <img  src={House6} alt='' /></div>
                  <div className="smallImg item-4"> <img  src={House9} alt='' /></div>
                  <div className="smallImg item-5"> <img  src={House10} alt='' /></div>
               </div>  
              </Bounce>
                       
     </div>

    
    </div>
  )
}

export default Featured
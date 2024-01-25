  import React from 'react'
  import "./Section.css"

  
  const Section = () => {
    return (
      <div className='section'>
               
               <div><h4 className='skill'>Skills</h4></div>


           <div className='info'>

                     <div className='img'>
                            <img src='./images/pasha.png'width={250} height={250}  alt='images' className='image'/>
                     </div>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>

                     <div className='content'>
                          <div className='mee name'>
                            <h3>java script</h3>
                           </div>  
                          <div className='mee'>React Developer</div>
                          <div className='mee'>javascript</div>
                          <div className='mee'>c++</div>
                          <div className='mee' >Data Structure & algorithm</div>
                          <div className='mee'>Express.js & Monogdb</div>

                     </div>
                  

           </div>
      </div>
    )
  }
  
  export default Section;
  
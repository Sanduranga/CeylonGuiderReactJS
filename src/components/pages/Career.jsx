import React, {useState} from 'react'
import './Career.css'

export default function Career() {

    const [drop1, setDrop1] = useState(true)
    const dropdown1 = () => {
         if(drop1==false) {
             document.getElementById('dropdwn1').className = "closehidden";
             setDrop1(true)
         }
         else{
             document.getElementById('dropdwn1').className = "hidden"
             setDrop1(false)
         }
    }
    
    const [drop2, setDrop2] = useState(false)
    const dropdown2 = () => {
        if(drop2==false) {
            document.getElementById('dropdwn2').className = "closehidden";
            setDrop2(true)
        }
        else{
            document.getElementById('dropdwn2').className = "hidden"
            setDrop2(false)
        }
    }

  return (
    <div>
        <div className="bannerImg">
       
        </div>
       <div className="jobs">
           <h1>Open Positions</h1>
           <div className="notice">
               <div onClick={dropdown1}>
                   <h2>Acccccccc</h2>
                   <p className="cdate">
                       Closing Date:
                       <span>06/06/2023</span>
                   </p>
               </div>
               
               <div id="dropdwn1" className="hidden">
                   {/* <img src ='./images/traineecom.jpg' alt="job1_add"/> */}
                   
                   <a href=''><button className='applybtn'>Apply Now</button></a>
               </div>  
           </div>
   
           <div className="notice">
               <div onClick={dropdown2}>
                   <h2>Abbbbbbbb</h2>
                   <p className="cdate">
                       Closing Date:
                       <span>06/06/2023</span>
                   </p>
               </div>
               
               <div id="dropdwn2" className="hidden">
                   {/* <img src="images/traineecom.jpg" alt="job1_add"/> */}
                   
                   <a href=''><button className='applybtn'>Apply Now</button></a>
               </div>  
           </div>
       </div>
    </div>
  )
}

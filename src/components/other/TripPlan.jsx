import React from 'react'


export default function TripPlan(props) {
  return (
    <div style={{display: 'flex',flexDirection:'column',alignItems:'center',marginLeft:'10px'}}>
        <p>Hi <strong>Mr. {props.Name}</strong>. We will arrange your <strong>{props.VehicleType}</strong> and contact you soon.
        Thank you!
        </p>
        <a href='/plan_your_trip'><button style={{marginTop: '20px'}}>Resubmit</button></a>
        {console.log(props.finalData)}
    </div>
  )
}
export function Vehicles(props2) {

  return ( <div style={{display: 'flex',flexDirection:'column',alignItems:'center',marginLeft:'10px'}}>There is no {props2.Vehicle} at this moment. Please select available another vehicle. 
    <div><a href='/plan_your_trip'><button style={{marginTop: '20px'}}>Resubmit</button></a></div>
    </div>)

}

